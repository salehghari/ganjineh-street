import { Container, Typography, Divider, Button } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';
import AnimatedBox from "./AnimatedBox";
import Link from 'next/link';

export default function ActiveGames() {
  return (
    <Container id="active-games" className="flex flex-col items-center gap-6 py-8">
      <AnimatedBox className="flex flex-col items-center gap-6 mb-2" startTrigger="top 80%" endTrigger="bottom 80%">
        <Typography
          variant="h2"
          className="font-bold text-6xl max-sm:text-4xl"
        >
          بازی‌های فعال
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-lg max-sm:text-base text-gray-500 text-justify"
        >
          این بازی‌ها را اکنون اجرا کنید و جوایز شگفت‌انگیز ببرید!
        </Typography>
      </AnimatedBox>
      <div className="flex items-center max-sm:flex-col justify-center gap-4 w-full">
        <AnimatedBox className="transition-shadow shadow-[0_2px_16px_rgba(4,10,31,.06)] hover:shadow-[0_2px_16px_rgba(4,10,31,.12)] w-[30%] max-sm:w-5/6 rounded-[20px]" startTrigger="top 80%" endTrigger="bottom 80%">
          <Link href="/game-detail">
            <Button className="w-full h-full hover:bg-inherit block p-0 rounded-[20px] text-inherit">
              <div className="p-3 pb-0 flex gap-2 flex-col items-center">
                <div className="rounded-xl w-full h-48 bg-gray-200 text-white flex justify-center items-center"><PhotoIcon/></div>
                <Typography variant="h4" className="text-xl">
                  بازی 3
                </Typography>
              </div>
              <Divider className="my-3" />
              <div className="p-3 pt-0 flex flex-col mb-1">
                <Typography variant="subtitle2" className="text-gray-500 text-base">
                  <span className="text-[#000000de]">زمان: </span>6:00 بعد از ظهر
                </Typography>
                <Typography variant="subtitle2" className="text-gray-500 text-base">
                  <span className="text-[#000000de]">مکان: </span>استادیوم
                </Typography>
              </div>
            </Button>
          </Link>
        </AnimatedBox>
        <AnimatedBox className="transition-shadow shadow-[0_2px_16px_rgba(4,10,31,.06)] hover:shadow-[0_2px_16px_rgba(4,10,31,.12)] w-[30%] max-sm:w-5/6 rounded-[20px]" startTrigger="top 80%" endTrigger="bottom 80%">
          <Link href="/game-detail">
            <Button className="w-full h-full hover:bg-inherit block p-0 rounded-[20px] text-inherit">
              <div className="p-3 pb-0 flex gap-2 flex-col items-center">
                <div className="rounded-xl w-full h-48 bg-gray-200 text-white flex justify-center items-center"><PhotoIcon/></div>
                <Typography variant="h4" className="text-xl">
                  بازی 2
                </Typography>
              </div>
              <Divider className="my-3" />
              <div className="p-3 pt-0 flex flex-col mb-1">
                <Typography variant="subtitle2" className="text-gray-500 text-base">
                  <span className="text-[#000000de]">زمان: </span>4:00 بعد از ظهر
                </Typography>
                <Typography variant="subtitle2" className="text-gray-500 text-base">
                  <span className="text-[#000000de]">مکان: </span>آرکید 
                </Typography>
              </div>
            </Button>
          </Link>
        </AnimatedBox>
        <AnimatedBox className="transition-shadow shadow-[0_2px_16px_rgba(4,10,31,.06)] hover:shadow-[0_2px_16px_rgba(4,10,31,.12)] w-[30%] max-sm:w-5/6 rounded-[20px]" startTrigger="top 80%" endTrigger="bottom 80%">
          <Link href="game-detail">
            <Button className="w-full h-full hover:bg-inherit block p-0 rounded-[20px] text-inherit">
              <div className="p-3 pb-0 flex gap-2 flex-col items-center">
                <div className="rounded-xl w-full h-48 bg-gray-200 text-white flex justify-center items-center"><PhotoIcon/></div>
                <Typography variant="h4" className="text-xl">
                  ماشین بازی
                </Typography>
              </div>
              <Divider className="my-3" />
              <div className="p-3 pt-0 flex flex-col mb-1">
                <Typography variant="subtitle2" className="text-gray-500 text-base">
                  <span className="text-[#000000de]">زمان: </span>2:00 بعد از ظهر
                </Typography>
                <Typography variant="subtitle2" className="text-gray-500 text-base">
                <span className="text-[#000000de]">مکان: </span>کازینو
                </Typography>
              </div>
            </Button>
          </Link>
        </AnimatedBox>
      </div>
    </Container>
  )
}
