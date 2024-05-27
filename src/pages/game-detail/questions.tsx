import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import PhotoIcon from '@mui/icons-material/Photo';


export default function questions() {

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      answer: data.get("answer"),
    });
  };

  return (
    <CacheProvider value={cacheRtl}>
      <Container className="!flex max-sm:flex-col justify-center items-center gap-6 py-6 p-2" component="main">
        <div className="flex justify-center items-center sm:max-w-[50%] max-sm:w-full">
          <div className="rounded-xl aspect-square h-[350px] w-full bg-gray-200 text-white flex justify-center items-center"><PhotoIcon/></div>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 items-center">
          <div className="flex flex-col items-center gap-2">
            <Typography
              variant="h2"
              className="font-bold !text-4xl"
            >
              سوال ۱
            </Typography>
            <Typography
              variant="subtitle1"
              className="text-lg max-sm:text-base text-gray-800 text-justify"
            >
              پایتخت کدام کشور پاریس است؟
            </Typography>
          </div>
          <Box component="form" className="w-full" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="answer"
                  label="پاسخ را وارد کنید"
                  name="answer"
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
              ثبت
            </Button>
          </Box>
        </div>
      </Container>
    </CacheProvider>
  )
}
