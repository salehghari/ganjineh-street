import { Typography, Divider, Button } from "@mui/material";
import Image from "next/image"
import ActiveGames from "@/components/ActiveGames";
import HowToPlay from "@/components/HowToPlay";
import About from "@/components/About";
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import { useRouter } from 'next/router';



export default function Home() {
  const router = useRouter();

  return (
    <>
      <div>
        <div id="home" className="flex flex-col items-center px-4 border-b-2 pb-8">
          <div className="flex max-md:flex-col gap-8">
            <div className="flex flex-col w-3/5 max-md:w-full justify-center items-center gap-8 pt-20 mb-16">
              <Typography
                variant="h2"
                className="text-header font-[aviny] font-semibold text-9xl max-lg:text-7xl max-sm:text-6xl"
              >
                گنجینه‌استریت
              </Typography>
              <Typography
                variant="subtitle1"
                className="text-xl max-sm:text-lg text-gray-600 text-justify"
              >
                گنجینه استریت جاییه که یه عالمه رمز و راز و جایزه منتظر توئه! حالا شما کارآگاه خودتون هستین! خب، ما اینجا داریم درباره‌ی گنجینه استریت حرف می‌زنیم، جایی که برای اولین بار تو ایران، همه‌ی ما می‌تونیم به دنبال ماجراجویی بگردیم و معما حل کنیم و تازه! شاید حتی یکم پول هم به جیب بزنیم! پس بیاین ببینیم چطوری می‌تونیم بازی رو شروع کنیم و جوایز بزرگ رو بدست بیاریم!
              </Typography>
            </div>
            <div className="flex w-2/5 max-md:hidden">
              <Image className="object-contain w-full opacity-75" src="/ganjineh-map.svg" alt="Ganjineh map" width={350} height={350} />
            </div>
          </div>
          <Button 
            className="py-2 px-3 rounded-lg main-bg-color main-bg-hover -mt-3"
            onClick={() => router.push("/#active-games")}
            variant="contained"
            endIcon={<SportsEsportsRoundedIcon className="-ml-2 mr-2" />}
          >
            بازی های فعال
          </Button>
        </div>
        <HowToPlay />
        <Divider className="my-8" />
        <ActiveGames />
        <Divider className="my-8" />
        <About />
      </div>
    </>
  );
}
