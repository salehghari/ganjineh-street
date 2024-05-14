import { Button, Container, Typography, Divider } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import ActiveGames from "@/components/ActiveGames";
import HowToPlay from "@/components/HowToPlay";
import About from "@/components/About";


export default function Home() {
  return (
    <div className="mt-20 px-4">
      <Container id="home" className="flex flex-col items-center gap-6">
        <Typography
          variant="h2"
          className="font-bold text-5xl"
        >
          گنجینه‌استریت
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-lg max-sm:text-base text-gray-500 text-justify mx-52 max-lg:mx-12 max-sm:mx-0"
        >
          گنجینه استریت: جایی که یه عالمه رمز و راز و جایزه منتظر توئه! حالا شما کارآگاه خودتون هستین! خب، ما اینجا داریم درباره‌ی گنجینه استریت حرف می‌زنیم، جایی که برای اولین بار تو ایران، همه‌ی ما می‌تونیم به دنبال ماجراجویی بگردیم و معما حل کنیم و تازه! شاید حتی یکم پول هم به جیب بزنیم! پس بیاین ببینیم چطوری می‌تونیم بازی رو شروع کنیم و جوایز بزرگ رو بدست بیاریم!
        </Typography>
        <div className="flex justify-center max-sm:flex-col w-full gap-4 mt-6">
          <Button className="text-base px-12 py-2 bg-[#111827] hover:bg-[#161f33]" variant="contained" startIcon={<AccountCircleIcon className="-mr-2 ml-2" />}>ثبت نام</Button>
          <Button className="text-base px-12 py-2 text-[#111827] border-[#111827] hover:border-[#161f33]" variant="outlined" startIcon={<LoginIcon className="-mr-2 ml-2" />}>ورود</Button>
        </div>
      </Container>
      <Divider className="my-16" />
      <ActiveGames />
      <Divider className="my-8" />
      <HowToPlay />
      <About />
    </div>
  );
}
