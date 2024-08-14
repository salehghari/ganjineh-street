import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ThemeProvider, Typography, createTheme } from "@mui/material";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import axios from 'axios';
import { StrictMode, useEffect, useState } from 'react';
import { options } from "@/config/api";
import { useDispatch } from 'react-redux';
import { setFirstName, setIsSignedIn, setLastName, setPhoneNumber } from '@/features/ganjinehSlice';
import { useParams } from "next/navigation";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  const params = useParams<{ missionID: string, levelID: string }>();
  const levelId = params?.levelID;

  const [loading, setLoading] = useState(true);
  const [canRequestJwt, setCanRequestJwt] = useState(true);
  
  const DispatchWrapper = () => {
    const dispatch = useDispatch();

    const handleJwt = async () => {
      try {
        const response = await axios.get('/api/jwt', options);

        dispatch(
          setFirstName(response.data.firstName)
        )
        dispatch(
          setLastName(response.data.lastName)
        )
        dispatch(
          setPhoneNumber(response.data.phoneNumber)
        )

        dispatch(
          setIsSignedIn(true)
        )
      } catch (error: any) {
        dispatch(
          setIsSignedIn(false)
        )
      }
    };

    useEffect(() => {
      if(canRequestJwt) {
        handleJwt()

        const githubRepoLink = 'https://github.com/salehghari/ganjineh-street';
        console.log('Here Is My GitHub Repository: ', githubRepoLink); 
  
        setLoading(false)
      }
      setCanRequestJwt(false)
    }, []);

    return <Component {...pageProps} />;
  };

  const theme = createTheme({
    typography: {
      "fontFamily": `"iransans", sans-serif`,
    },
  });

  const getPageTitle = (path: string): string => {
    switch (path) {
      case '/':
        return 'خانه | گنجینه استریت';
      case '/contact-us':
        return 'تماس با ما | گنجینه استریت';
      case '/sign-up':
        return 'ثبت نام | گنجینه استریت';
      case '/sign-in':
        return 'ورود به حساب | گنجینه استریت';  
      case `/mission/[missionID]`:
        return ' جزئیات ماموریت | گنجینه استریت';
      case `/mission/[missionID]/levels`:
        return ' مراحل | گنجینه استریت';
      case `/mission/[missionID]/levels/[levelID]`:
        return ` مرحله ${levelId ? levelId : ""} | گنجینه استریت`;
      default:
        return 'گنجینه استریت';
    }
  };
  const pageTitle = getPageTitle(pathname);


  return (
    <Provider store={store}>
      <StrictMode>
        <ThemeProvider theme={theme}>
          <Head>
            <title>{pageTitle}</title>
            <link rel="icon" href="/favicon.png" type="image/png" />
            <link rel="apple-touch-icon" href="/favicon.png" />
          </Head>
          <div className={`App flex flex-col min-h-screen ${loading ? "hidden" : ""}`}>

            <Navbar />

            <DispatchWrapper />

            <div className="flex justify-center text-center w-full mt-auto">
              <Typography variant="subtitle1" className="text-gray-600 my-4 text-sm">
                1403 - کلیه حقوق این وبسایت به <Link className="main-text-color" href="https://ganjinehstreet.ir/"><span className="font-semibold">گنجینه‌استریت</span></Link> تعلق دارد.
              </Typography>
            </div>
          </div>
        </ThemeProvider>
      </StrictMode>
    </Provider>
  );
}
