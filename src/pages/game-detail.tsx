import { Container, Typography } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';


export default function gameDetail() {
  return (
    <Container className="flex items-stretch max-sm:flex-col-reverse sm:gap-10 mb-12 sm:max-h-[500px] w-full">
      <div className="flex flex-col justify-center flex-1 gap-6">
        <Typography
          variant="h1"
          className="font-bold text-5xl max-md:text-3xl text-justify"
        >
          سفر به الدورادو
        </Typography>
        <div className="max-w-[756px] w-full">
          <Typography
            variant="subtitle1"
            className="text-xl max-sm:text-base text-gray-500 text-justify"
          >
            شما در حال شروع سفری به شهر افسانه‌ای الدورادو هستید. افسانه می‌گوید که این شهر کاملا از طلا ساخته شده است و در عمق جنگل آمازون پنهان شده است. بسیاری تلاش کرده‌اند اما هیچ‌کس موفق نشده است. آیا شما اولین نفر خواهید بود؟
          </Typography>
        </div>
        <div className="flex flex-col gap-1">
          <Typography variant="subtitle2" className="text-xl">
            <AccessTimeOutlinedIcon className="py-[2px]" />
            <span className="text-[#000000de]">زمان: </span>4:00 بعد از ظهر
          </Typography>
          <Typography variant="subtitle2" className="text-xl">
            <PlaceOutlinedIcon className="py-[2px]" />
            <span className="text-[#000000de]">مکان: </span>آرکید 
          </Typography>
        </div>
      </div>
      <div className="flex justify-center items-center sm:w-1/2">
        <div className="rounded-xl w-full aspect-square h-[350px] bg-gray-200 text-white flex justify-center items-center"><PhotoIcon/></div>
      </div>
    </Container>
  )
}
