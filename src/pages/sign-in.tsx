import * as React from 'react';
import { Container, Typography, Avatar, Box, Grid, TextField, CssBaseline, Button } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import Link from 'next/link';



export default function SignIn() {

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      phoneNumber: data.get("phone-number"),
    });
  };

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
          <Box component="form" className="w-full" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone-number"
                  label="شماره موبایل"
                  name="phone-number"
                  autoComplete="tel"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              className="main-bg-color main-bg-hover"
              variant="contained"
              sx={{ mt: 3, mb: 2, fontSize: 16 }}
            >
              ورود
            </Button>
            <Grid container>
              <Grid item>
                <Link className="underline main-text-color hover:no-underline" href="/sign-up">
                  حساب کاربری نداری؟ ثبت نام
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </CacheProvider>
  );
}