import * as React from 'react';
import { Container, Typography, Avatar, Box, Grid, TextField, CssBaseline, Button, Alert } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import Link from 'next/link';
import axios from 'axios';
import { options } from '@/config/api';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName, setPhoneNumber } from '@/features/ganjinehSlice';


export default function SignIn() {
  const [phoneNumber, setPhoneNumberInput] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationCodeSent, setIsVerificationCodeSent] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const router = useRouter()


  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (timer !== null && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer && prevTimer > 0) {
            return prevTimer - 1;
          } else {
            clearInterval(countdown);
            return null;
          }
        });
      }, 1000);
    }
  
    return () => clearInterval(countdown);
  }, [timer]);


  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!timer) {
      try {
        const response = await axios.post('/api/sign-in?pre=true', {
          phoneNumber
        }, options);
  
        setIsVerificationCodeSent(true);
        setTimer(120);
        setErrorMessage("");
  
      } catch (error: any) {
        if (error.response.status == 400) {
          setErrorMessage("شماره تلفن را به درستی وارد کنید.")
        }
        else if (error.response.status == 404) {
          setErrorMessage("شماره تلفن اشتباه است، اول ثبت نام کنید.")
        }
        else if (error.response.status == 500) {
          setErrorMessage("در حال حاضر سرور به مشکل خورده است، بعدا امتحان کنید.")
        } else {
          setErrorMessage("لطفا بعدا امتحان کنید.")
        }
      }
    }
  };

  const handleVerifyCode = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/sign-in', {
        phoneNumber,
        verificationCode
      });


      dispatch(
        setFirstName(response.data.firstName)
      )
      dispatch(
        setLastName(response.data.lastName)
      )
      dispatch(
        setPhoneNumber(response.data.phoneNumber)
      )
      router.push("/");
      setErrorMessage("");
        
    } catch (error: any) {
      if (error.response.status == 400) {
        setErrorMessage("کد وارد شده اشتباه است.")
      }
      else if (error.response.status == 500) {
        setErrorMessage("در حال حاضر سرور به مشکل خورده است، بعدا امتحان کنید.")
      } else {
        setErrorMessage("لطفا بعدا امتحان کنید.")
      }
    }
  }

  return (
    <CacheProvider value={cacheRtl}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar className="main-bg-color" sx={{ m: 1 }}>
            <LoginRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ورود به گنجینه استریت
          </Typography>
          {!isVerificationCodeSent && 
            <Box component="form" className="w-full" noValidate onSubmit={handleSignIn} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone-number"
                    label="شماره موبایل"
                    name="phone-number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumberInput(e.target.value)}
                    autoComplete="tel"
                    autoFocus
                  />
                </Grid>
              </Grid>
              {errorMessage && 
                <Alert className="!mt-2 !-mb-2 flex items-center" severity="error">{errorMessage}</Alert>
              }
              <Button
                type="submit"
                fullWidth
                className="main-bg-color main-bg-hover"
                variant="contained"
                sx={{ mt: 3, mb: 2, fontSize: 16 }}
              >
                ارسال کد
              </Button>
            </Box>
          }
          {isVerificationCodeSent && 
            <Box component="form" className="w-full" onSubmit={handleVerifyCode} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item className="w-full" xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="verificationCode"
                    label="کد یکبار مصرف"
                    name="verificationCode"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    autoFocus
                  />
                </Grid>
              </Grid>
              {errorMessage && 
                <Alert className="!mt-2 !-mb-2 flex items-center" severity="error">{errorMessage}</Alert>
              }
              <p className={`my-3 ${timer ? "text-gray-500" : "main-text-color cursor-pointer"}`} onClick={handleSignIn}>
                ارسال مجدد
                &nbsp;
                {timer !== null && timer !== 0 && (
                  <>
                    {(new Number('0').toLocaleString('fa-ir') + new Number(Math.floor(timer / 60)).toLocaleString('fa-ir')).slice(-2)}
                    :
                    {(new Number('0').toLocaleString('fa-ir') + new Number((timer % 60)).toLocaleString('fa-ir')).slice(-2)}
                  </>
                )}
              </p>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="main-bg-color main-bg-hover"
                sx={{ mb: 2, fontSize: 16}}
              >
                ورود
              </Button>
            </Box>
          }
          <Grid container>
            <Grid item>
              <Link className="main-text-color main-text-hover" href="/sign-up">
                حساب کاربری نداری؟ ثبت نام
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </CacheProvider>
  );
}