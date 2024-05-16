import { Container, Typography } from "@mui/material";
import Image from 'next/image';
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function contactUs() {
  return (
    <Container className="flex items-stretch max-sm:flex-col-reverse sm:gap-10 -mt-12 mb-12 sm:max-h-[500px] w-full">
      <div className="flex flex-col justify-center flex-1 gap-6">
        <Typography
          variant="h2"
          className="font-bold text-4xl max-md:text-3xl text-justify"
        >
          آیا سوالی دارید یا می‌خواهید با ما در ارتباط باشید؟
        </Typography>
        <div className="max-w-[756px] w-full">
          <Typography
            variant="subtitle1"
            className="text-2xl max-sm:text-xl text-gray-800 text-justify mb-2"
          >
            ما همیشه در دسترس شما هستیم!

          </Typography>
          <Typography
            variant="subtitle2"
            className="text-xl max-sm:text-base text-gray-500 text-justify"
          >
            اگر می‌خواهید کسب‌وکارتان دیده شود یا دنبال حمایت مالی و ساختن ماموریت هستید، از طریق دایرکت پیج با ما تماس بگیرید. همچنین می‌توانید از طریق ایمیل با ما در ارتباط باشید:
          </Typography>
        </div>
        <div className="flex flex-col gap-1">
          <Link target="_blank" className="hover:underline flex gap-1 font-semibold" href="https://www.instagram.com/ganjinehstreet">
            <InstagramIcon />
            ganjinehstreet
          </Link>
          <Link className="hover:underline flex gap-1 font-semibold" href="mailto:ganjinehstreet@gmail.com">
            <EmailOutlinedIcon />
            ganjinehstreet@gmail.com
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center sm:w-1/2">
        <Image className="object-contain" src="/contact-us.png" alt="contact us image" width="500" height="500" />
      </div>
    </Container>
  )
}
