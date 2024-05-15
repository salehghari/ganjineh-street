import { Button, Container, Typography, Divider } from "@mui/material";
import ActiveGames from "@/components/ActiveGames";
import HowToPlay from "@/components/HowToPlay";
import About from "@/components/About";


export default function Home() {
  return (
    <div className="mt-20 px-4">
      <Container id="home" className="flex flex-col items-center gap-6">
        <Typography
          variant="h2"
          className="font-bold text-8xl max-sm:text-5xl"
        >
          گنجینه‌استریت
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-xl max-sm:text-base text-gray-500 text-justify mx-52 max-lg:mx-12 max-sm:mx-0"
        >
          گنجینه استریت: جایی که یه عالمه رمز و راز و جایزه منتظر توئه! حالا شما کارآگاه خودتون هستین! خب، ما اینجا داریم درباره‌ی گنجینه استریت حرف می‌زنیم، جایی که برای اولین بار تو ایران، همه‌ی ما می‌تونیم به دنبال ماجراجویی بگردیم و معما حل کنیم و تازه! شاید حتی یکم پول هم به جیب بزنیم! پس بیاین ببینیم چطوری می‌تونیم بازی رو شروع کنیم و جوایز بزرگ رو بدست بیاریم!
        </Typography>
      </Container>
      <Divider className="my-16" />
      <ActiveGames />
      <Divider className="my-8" />
      <HowToPlay />
      <About />
    </div>
  );
}
