import * as React from 'react';
import { Container, Typography, Avatar, Box, Grid, TextField, CssBaseline, Button, Alert } from '@mui/material';
import Link from 'next/link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import axios from 'axios';
import { options } from '@/config/api';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'



export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationCodeSent, setIsVerificationCodeSent] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter()


  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const styles = () => ({
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "yellow !important"
    }
  });

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost/api/sign-up?pre=true', {
        firstName,
        lastName,
        phoneNumber,
      }, options);
  
      setIsVerificationCodeSent(true);
      setErrorMessage("");
      
    } catch (error: any) {
      if (error.response.status == 400) {
        setErrorMessage("اسم یا شماره تلفن را به درستی وارد کنید.")
      }
      else if (error.response.status == 409) {
        setErrorMessage("با این شماره قبلا ثبت نام کردی، برای ورود روی لینک زیر ضربه بزنید.")
      }
      else if (error.response.status == 500) {
        setErrorMessage("در حال حاضر سرور به مشکل خورده است، بعدا امتحان کنید.")
      } else {
        setErrorMessage("لطفا بعدا امتحان کنید.")
      }
    }
  };

  const handleVerifyCode = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost/api/sign-up', {
        firstName,
        lastName,
        phoneNumber,
        verificationCode
      });      
  
      // Handle successful verification
      router.push("/")
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
      <Container  component="main" maxWidth="xs">
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ثبت نام در گنجینه‌ استریت
          </Typography>
          {!isVerificationCodeSent && 
            <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    fullWidth
                    id="firstName"
                    label="نام"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="نام خانوادگی"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phoneNumber"
                    label="شماره موبایل"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    autoComplete="tel"
                  />
                </Grid>
              </Grid>
              {errorMessage && 
                <Alert className="!mt-2 !-mb-2 flex items-center" severity="error">{errorMessage}</Alert>
              }
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="main-bg-color main-bg-hover"
                sx={{ mt: 3, mb: 2, fontSize: 16}}
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="main-bg-color main-bg-hover"
                sx={{ mt: 3, mb: 2, fontSize: 16}}
              >
                ثبت نام
              </Button>
            </Box>
          }
          <Grid container>
            <Grid item>
              <Link className="underline main-text-color hover:no-underline" href="/sign-in">
                قبلا ثبت نام کردی؟ ورود
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </CacheProvider>
  );
}