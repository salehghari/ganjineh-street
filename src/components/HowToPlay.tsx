import { Container, Typography } from "@mui/material";
import AnimatedBox from "./AnimatedBox";

export default function HowToPlay() {
  return (
    <AnimatedBox id="how-to-play" startTrigger="top 80%" endTrigger="bottom 80%">
      <Container className="max-w-[736px] w-full flex flex-col shadow-[0_2px_16px_rgba(4,10,31,.04)] px-16 py-8 max-sm:px-3 max-sm:py-4 rounded-[32px] items-center gap-6 mb-16">
        <Typography
          variant="h2"
          className="font-bold text-5xl max-sm:text-3xl"
        >
          چگونه بازی کنیم؟
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-lg max-sm:text-base text-gray-500 text-justify"
        >
          بازی گنجینه استریت خیلی معمایی و هیجان‌انگیزه! کافیه به سایت ما بری و ماموریتی که ما براتون در نظر گرفتیم رو ببینی. بعد از اون، باید به لوکیشن مشخصی که ما براتون اعلام کردیم برید و سعی کنید معمای موجود در اونجا رو حل کنید. هر کی زودتر به جواب میرسه، جایزه رو میبره!
        </Typography>
      </Container>
    </AnimatedBox>
  )
}
