import { Container, Typography } from "@mui/material";
import AnimatedBox from "./AnimatedBox";

export default function About() {
  return (
		<AnimatedBox id="about-us" startTrigger="top 80%" endTrigger="bottom 80%">
			<Container className="max-w-[736px] w-full flex flex-col shadow-[0_2px_16px_rgba(4,10,31,.04)] px-16 py-8 max-sm:px-3 max-sm:py-4 rounded-[32px] items-center gap-6 mb-16">
				<Typography
					variant="h2"
					className="font-bold text-5xl max-sm:text-3xl"
				>
					درباره گنجینه‌استریت
				</Typography>
				<Typography
					variant="subtitle1"
					className="text-lg max-sm:text-base text-gray-500 text-justify"
				>
					ما گنجینه استریت هستیم، یک تیم از عاشقان ماجراجویی که به دنبال ایجاد تجربه‌های فراموش‌ناپذیر برای همه‌ی علاقهمندان به معما و جستجوی گنجینه هستیم. ماموریت ما اینه که شما رو به دنیای ماجراجویی و هیجان وارد کنیم و لحظاتی فراموش‌ناپذیر براتون فراهم کنیم.
				</Typography>
			</Container>
		</AnimatedBox>
  )
}
