import { Container, Typography } from "@mui/material";
import Image from 'next/image';
import AnimatedBox from "./AnimatedBox";
import Link from 'next/link';

export default function HowToPlay() {
  return (
    <Container id="how-to-play" className="flex flex-col items-center gap-6 py-16 p-2">
      <AnimatedBox className="flex flex-col items-center gap-6 mb-2 relative" startTrigger="top 80%" endTrigger="bottom 80%">
        <Typography
          variant="h2"
          className="font-bold text-6xl max-sm:text-4xl"
        >
          شیوه بازی
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-lg max-sm:text-base text-gray-500 text-justify"
        >
          آماده‌ی یک ماجراجویی هیجان‌انگیز هستی؟
        </Typography>
      </AnimatedBox>
      
      <AnimatedBox className="flex max-sm:flex-col gap-6 max-w-[464px] w-full shadow-[0_2px_16px_rgba(4,10,31,.04)] px-12 py-8 max-sm:px-4 max-sm:py-6 rounded-[32px]" startTrigger="top 80%" endTrigger="bottom 80%">
        <Image className="rounded-lg max-sm:mx-auto" src="/1.png" alt="first step image" width="132" height="132" />
        <div className="mr-3">
          <Typography
            variant="h4"
            className="text-lg mb-1"
          >
            قدم اول:
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-base text-gray-500"
          >
            خودتو برای یه چالش جذاب آماده کن!
          </Typography>
        </div>
        <Image className="w-auto h-auto max-sm:hidden absolute top-1/2 -right-20" src="/arrow.svg" alt="arrow" width="48" height="175" />
      </AnimatedBox>
      
      <AnimatedBox className="flex flex-row-reverse max-sm:flex-col gap-6 max-w-[464px] w-full shadow-[0_2px_16px_rgba(4,10,31,.04)] px-12 py-8 max-sm:px-4 max-sm:py-6 rounded-[32px]" startTrigger="top 70%" endTrigger="bottom 80%">
        <Image className="rounded-lg max-sm:mx-auto" src="/2.png" alt="2nd step image" width="132" height="132" />
        <div className="mr-3">
          <Typography
            variant="h4"
            className="text-lg mb-1"
          >
            قدم دوم:
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-base text-gray-500"
          >
            به صفحه‌ی&nbsp;
            <span>
              <Link target="_blank" className="ig-link" href="https://www.instagram.com/ganjinehstreet">
              اینستاگرام ما
              </Link>
            </span>
            &nbsp;سر بزن و منتظر اعلام بازی باش.
          </Typography>
        </div>
        <Image className="w-auto h-auto max-sm:hidden absolute top-1/2 -left-20 rotate-y-180" src="/arrow.svg" alt="arrow" width="48" height="175" />
      </AnimatedBox>

      <AnimatedBox className="flex max-sm:flex-col gap-6 max-w-[464px] w-full shadow-[0_2px_16px_rgba(4,10,31,.04)] px-12 py-8 max-sm:px-4 max-sm:py-6 rounded-[32px]" startTrigger="top 70%" endTrigger="bottom 80%">
        <Image className="rounded-lg max-sm:mx-auto" src="/3.png" alt="3rd step image" width="132" height="132" />
        <div className="mr-3">
          <Typography
            variant="h4"
            className="text-lg mb-1"
          >
            قدم سوم:
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-base text-gray-500"
          >
            وارد صفحه‌ی ماموریت سایت مون شو و مرحله به مرحله، با حل معماها، خودت رو به جایزه نزدیک‌تر کن!
          </Typography>
        </div>
        <Image className="w-auto h-auto max-sm:hidden absolute top-1/2 -right-20" src="/arrow.svg" alt="arrow" width="48" height="175" />
      </AnimatedBox>

      <AnimatedBox className="flex flex-row-reverse max-sm:flex-col gap-6 max-w-[464px] w-full shadow-[0_2px_16px_rgba(4,10,31,.04)] px-12 py-8 max-sm:px-4 max-sm:py-6 rounded-[32px]" startTrigger="top 70%" endTrigger="bottom 80%">
        <Image className="rounded-lg max-sm:mx-auto" src="/4.png" alt="4th step image" width="132" height="132" />
        <div className="mr-3">
          <Typography
            variant="h4"
            className="text-lg mb-1"
          >
            قدم چهارم:
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-base text-gray-500"
          >
            با سرعت نور مراحل رو پشت سر بذار و اولین نفری باش که جایزه رو تصاحب می‌کنه!
          </Typography>
        </div>
        <Image className="w-auto h-auto max-sm:hidden absolute top-1/2 -left-20 rotate-y-180" src="/arrow.svg" alt="arrow" width="48" height="175" />
      </AnimatedBox>

      <AnimatedBox className="flex max-sm:flex-col gap-6 max-w-[464px] w-full shadow-[0_2px_16px_rgba(4,10,31,.04)] px-12 py-8 max-sm:px-4 max-sm:py-6 rounded-[32px]" startTrigger="top 70%" endTrigger="bottom 80%">
        <Image className="rounded-lg max-sm:mx-auto" src="/5.png" alt="5th step image" width="132" height="132" />
        <div className="mr-3">
          <Typography
            variant="h4"
            className="text-lg mb-1"
          >
            قدم پنچم:
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-base text-gray-500"
          >
            تو مرحله‌ی آخر، شماره‌تو وارد کن و منتظر تماس ما برای دریافت جایزه ات باش!
          </Typography>
        </div>
      </AnimatedBox>
    </Container>
  )
}
