import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Container, ThemeProvider, Typography, createTheme } from "@mui/material";
import Navbar from "@/components/Navbar";


export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      "fontFamily": `"Vazir", sans-serif`,
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">

        <Navbar />

        <Component {...pageProps} />

        <Container className="flex justify-center mb-2">
          <Typography variant="subtitle1" className="text-gray-600">
            گنجینه‌استریت. تمامی حقوق محفوظ است. 2024 ©
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
}
