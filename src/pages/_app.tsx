import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container, ThemeProvider, Typography, createTheme } from "@mui/material";
import Navbar from "@/components/Navbar";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  const theme = createTheme({
    typography: {
      "fontFamily": `"Vazir", sans-serif`,
    }
  });

  const getPageTitle = (path: string): string => {
    switch (path) {
      case '/':
        return 'خانه | گنجینه استریت';
      case '/contact-us':
        return 'تماس با ما | گنجینه استریت';
      default:
        return 'گنجینه استریت';
    }
  };
  const pageTitle = getPageTitle(pathname);


  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <div className="App h-screen">

        <Navbar />

        <Component {...pageProps} />

        <Container className="flex justify-center my-2 text-center">
          <Typography variant="subtitle1" className="text-gray-600">
            1403 - کلیه حقوق این وبسایت به <span className="font-semibold">گنجینه‌استریت</span> تعلق دارد.
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
}
