import * as React from 'react';
import { Container, Typography, Avatar, Box, Grid, TextField, CssBaseline, Button } from '@mui/material';
import Link from 'next/link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';



export default function SignUp() {

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const styles = () => ({
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "yellow !important"
    }
  });

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
            ثبت نام
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
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
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone-number"
                  label="شماره موبایل"
                  name="phone-number"
                  autoComplete="tel"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="main-bg-color main-bg-hover"
              sx={{ mt: 3, mb: 2, fontSize: 16}}
            >
              ثبت نام
            </Button>
            <Grid container>
              <Grid item>
                <Link className="underline main-text-color hover:no-underline" href="/sign-in">
                  قبلا ثبت نام کردی؟ ورود
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </CacheProvider>
  );
}