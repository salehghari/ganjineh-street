import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';
import router from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Confetti from 'react-confetti'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { jalaliDate } from "@/components/ActiveGames";



interface Props {
  fullName: string,
  game: string,
  location: string
}

export default function WinnerPage(props: Props) {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)


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



  return (
    <>
      <Container className="!flex relative max-sm:flex-col justify-center items-center gap-6 py-6 p-2" component="main">
        <Confetti style={{position: "fixed"}} width={width} height={height} recycle={false} />
        <ArrowBackIcon onClick={() => router.back()} className="absolute top-3 right-6 !text-3xl cursor-pointer hover:bg-slate-200 rounded-md"/>
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
                {props.fullName}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Typography variant='subtitle1' className="text-base">
                بازی:
              </Typography>
              <Typography variant='subtitle1' className="text-base">
                {props.game}
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography variant='subtitle1' className="text-base">
                مکان:
              </Typography>
              <Typography variant='subtitle1' className="text-base">
                {props.location}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Typography variant='subtitle1' className="text-base">
                زمان:
              </Typography>
              <Typography variant='subtitle1' className="text-base">
                {jalaliDate(new Date().getTime() / 1000)}
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}