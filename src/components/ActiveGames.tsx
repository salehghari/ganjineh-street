import { Container, Typography, Divider } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';
import AnimatedBox from "./AnimatedBox";

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
      <AnimatedBox className="flex max-sm:flex-col justify-center gap-4 w-full" startTrigger="top 70%" endTrigger="bottom 80%">
        <div className="p-3 w-[30%] max-sm:w-full border rounded-[20px] border-gray-200">
          <div className="flex gap-2 flex-col items-center">
            <div className="rounded-xl w-full h-48 bg-gray-200 text-white flex justify-center items-center"><PhotoIcon/></div>
            <Typography variant="h4" className="text-xl">
              بازی 3
            </Typography>
          </div>
          <Divider className="my-3" />
          <div className="flex flex-col mb-1">
            <Typography variant="subtitle2" className="text-gray-500 text-base">
              <span className="text-[#000000de]">زمان: </span>6:00 بعد از ظهر
            </Typography>
            <Typography variant="subtitle2" className="text-gray-500 text-base">
              <span className="text-[#000000de]">مکان: </span>استادیوم
            </Typography>
          </div>
        </div>
        <div className="p-3 w-[30%] max-sm:w-full border rounded-[20px] border-gray-200">
          <div className="flex gap-2 flex-col items-center">
            <div className="rounded-xl w-full h-48 bg-gray-200 text-white flex justify-center items-center"><PhotoIcon/></div>
            <Typography variant="h4" className="text-xl">
              بازی 2
            </Typography>
          </div>
          <Divider className="my-3" />
          <div className="flex flex-col mb-1">
            <Typography variant="subtitle2" className="text-gray-500 text-base">
            <span className="text-[#000000de]">زمان: </span>4:00 بعد از ظهر
            </Typography>
            <Typography variant="subtitle2" className="text-gray-500 text-base">
            <span className="text-[#000000de]">مکان: </span>آرکید 
            </Typography>
          </div>
        </div>
        <div className="p-3 w-[30%] max-sm:w-full border rounded-[20px] border-gray-200">
          <div className="flex gap-2 flex-col items-center">
            <div className="rounded-xl w-full h-48 bg-gray-200 text-white flex justify-center items-center"><PhotoIcon/></div>
            <Typography variant="h4" className="text-xl">
              ماشین بازی
            </Typography>
          </div>
          <Divider className="my-3" />
          <div className="flex flex-col mb-1">
            <Typography variant="subtitle2" className="text-gray-500 text-base">
              <span className="text-[#000000de]">زمان: </span>2:00 بعد از ظهر
            </Typography>
            <Typography variant="subtitle2" className="text-gray-500 text-base">
            <span className="text-[#000000de]">مکان: </span>کازینو
            </Typography>
          </div>
        </div>
      </AnimatedBox>
    </Container>
  )
}
