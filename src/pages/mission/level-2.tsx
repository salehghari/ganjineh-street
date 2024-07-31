import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import router from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Confetti from 'react-confetti'
import { useEffect, useState } from 'react';
import Image from 'next/image';




export default function Questions() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [isWinner, setIsWinner] = useState(false);


  function detectSize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    detectSize()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [width, height])

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const handleUserAnswer = (event: React.FormEvent) => {
    event.preventDefault();
    setIsWinner(true);
  };


  return (
    <>
      <CacheProvider value={cacheRtl}>
        <Container className="!flex max-sm:flex-col justify-center items-center relative gap-6 py-6 p-2" component="main">
          {!isWinner && <div className="flex flex-col w-full lg:w-1/2 items-center">
            <ArrowBackIcon onClick={() => router.back()} className="absolute top-3 right-6 !text-3xl cursor-pointer hover:bg-slate-200 rounded-md"/>
            <div className="flex flex-col items-center gap-2">
              <Typography
                variant="h2"
                className="font-bold !text-4xl"
              >
                سوال ۲
              </Typography>
              <Typography
                variant="subtitle1"
                className="!text-lg max-sm:text-base text-gray-800 text-justify"
              >
                تعداد درختان در ورودی پارک چند تاست؟
              </Typography>
            </div>
            <Box component="form" className="w-full" onSubmit={handleUserAnswer} noValidate sx={{ mt: 3 }}>
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
          </div>}
          {isWinner && 
            <>
              <Confetti style={{position: "fixed"}} width={width} height={height} recycle={false} />
              <div className="relative flex flex-col items-center gap-2 p-8 shadow-[0_2px_16px_rgba(4,10,31,.04)] rounded-3xl">
                <Image src={"/trophy.svg"} alt='Trophy' width={144} height={144}/>
                <Typography variant='h4' className="!text-5xl max-sm:!text-4xl">
                  گنجینه‌استریت
                </Typography>
                <Typography variant='subtitle1' className="text-base text-gray-500">
                  شما پازل را حل کردید. عالی بود!
                </Typography>
                <div className="flex flex-col gap-2 w-full mt-3">
                  <div className="flex justify-between">
                    <Typography variant='subtitle1' className="text-base">
                      نام:
                    </Typography>
                    <Typography variant='subtitle1' className="text-base">
                      علیرضا محمدی
                    </Typography>
                  </div>
                  <div className="flex justify-between">
                    <Typography variant='subtitle1' className="text-base">
                      بازی:
                    </Typography>
                    <Typography variant='subtitle1' className="text-base">
                      ماموریت پارک درخشان
                    </Typography>
                  </div>
                  <div className="flex items-center justify-between">
                    <Typography variant='subtitle1' className="text-base">
                      تاریخ و مکان:
                    </Typography>
                    <div className="flex flex-col">
                      <Typography variant='subtitle1' className="text-base">
                        ۵ مرداد ۱۴۰۳
                      </Typography>
                      <Typography variant='subtitle1' className="text-base">
                        پارک درخشان
                      </Typography>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Typography variant='subtitle1' className="text-base">
                      زمان:
                    </Typography>
                    <Typography variant='subtitle1' className="text-base">
                      ساعت ۱۶:۰۱
                    </Typography>
                  </div>
                </div>
              </div>
            </>
          }
        </Container>
      </CacheProvider>
    </>
  )
}