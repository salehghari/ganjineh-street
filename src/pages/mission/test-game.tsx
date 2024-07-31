import { Container, Typography, Button, Alert } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Link from 'next/link';
import Image from "next/image";


export default function GameDetail() {

  return (
    <>
      <Container className="flex items-stretch max-sm:flex-col-reverse sm:gap-10 mt-6 mb-12 sm:max-h-[500px] w-full">
        <div className="flex flex-col justify-center flex-1 gap-6">
          <Typography
            variant="h1"
            className="font-bold text-5xl max-md:text-3xl"
          >
            ماموریت پارک درخشان
          </Typography>
          <div className="max-w-[756px] w-full">
            <Typography
              variant="subtitle1"
              className="text-xl max-sm:text-base text-gray-500 text-justify"
            >
              
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography variant="subtitle2" className="flex gap-1 text-xl">
              <FormatListNumberedRtlIcon className="py-[2px] !text-3xl" />
              <span className="text-[#000000de]">تعداد مراحل: </span> ۴
            </Typography>
            <div className="flex items-center gap-1">
              <AccessTimeOutlinedIcon className="py-[2px] !text-3xl" />
              <div className="flex flex-col">
                <Typography variant="subtitle2" className="text-xl">
                  <span className="text-[#000000de]">زمان شروع: </span> جمعه ۵ مرداد ساعت ۱۶:۰۰
                </Typography>
                <Typography variant="subtitle2" className="text-xl">
                  <span className="text-[#000000de]">زمان پایان: </span> شنبه ۶ مرداد ساعت ۱۸:۰۰
                </Typography>
              </div>
            </div>
            <Typography variant="subtitle2" className="flex gap-1 text-xl">
              <PlaceOutlinedIcon className="py-[2px] !text-3xl" />
              <span className="text-[#000000de]">مکان: </span> پارک درخشان
            </Typography>
            <Typography variant="subtitle2" className="flex gap-1 text-xl">
              <EmojiEventsOutlinedIcon className="py-[2px] !text-3xl" />
              <span className="text-[#000000de]">جایزه: </span> ۱,۰۰۰,۰۰۰ تومان
            </Typography>
            <Typography variant="subtitle2" className="flex gap-1 text-xl">
              <EmojiEventsOutlinedIcon className="py-[2px] !text-3xl" />
              <span className="text-[#000000de]">تعداد شرکت‌کنندگان: </span> ۶۹ نفر
            </Typography>
            <Link className="my-3" href="/mission/levels">
              <Button className="main-bg-color main-bg-hover w-full" variant="contained">
                مشاهده مراحل
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center sm:w-1/2 mb-6">
          <div className="rounded-xl w-full h-[350px] bg-gray-200 text-white flex justify-center items-center"><PhotoIcon/></div>
          {/* <Image src="" width={350} height={350} className="rounded-xl object-cover h-[350px]" alt="ماموریت پارک درخشان" /> */}
        </div>
      </Container>
    </>
  )
}