import { Container, Typography } from "@mui/material";
import AnimatedBox from "./AnimatedBox";

export default function About() {
  return (
    <Container id="about-us" className="flex flex-col items-center gap-6 py-8">
      <AnimatedBox className="flex flex-col items-center gap-6 mb-2" startTrigger="top 80%" endTrigger="bottom 80%">
				<Typography
					variant="h2"
					className="font-bold text-6xl max-sm:text-4xl text-center"
				>
					درباره گنجینه‌استریت
				</Typography>
				<Typography
					variant="subtitle1"
					className="text-lg max-sm:text-base text-gray-500 text-justify mx-52 max-lg:mx-12 max-sm:mx-0"
				>
					ما گنجینه استریت هستیم، یک تیم از عاشقان ماجراجویی که به دنبال ایجاد تجربه‌های فراموش‌ناپذیر برای همه‌ی علاقهمندان به معما و جستجوی گنجینه هستیم. ماموریت ما اینه که شما رو به دنیای ماجراجویی و هیجان وارد کنیم و لحظاتی فراموش‌ناپذیر براتون فراهم کنیم.
				</Typography>
			</AnimatedBox>
		</Container>
  )
}
