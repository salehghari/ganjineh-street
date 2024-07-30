import { Container, Typography, Divider, Button } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';
import Link from 'next/link';
import axios from "axios";
import { options } from '@/config/api';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveGames } from "@/features/ganjinehSlice";
import { RootState } from "@/app/store";
import moment from 'moment-jalaali';
import 'moment/locale/fa';
import jMoment from 'moment-jalaali';
import Image from 'next/image';


moment.loadPersian({usePersianDigits: true});

export const jalaliDate = (unixDate: number) => (
  jMoment(unixDate * 1000)
.locale('fa')
.format('dddd jD jMMMM [ساعت] HH:mm')
)

export default function ActiveGames() {

  const activeGames = useSelector((state: RootState) => state.ganjinehStreet.activeGames);

  const dispatch = useDispatch();

  const fetchActiveGames = async () => {
    try {
      const { data } = await axios.get('http://localhost/api/missions', options);

      console.log(data);
      dispatch(setActiveGames(data));

    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchActiveGames()
  }, [])


  return (
    <Container id="active-games" className="flex flex-col items-center gap-6 py-8 max-sm:px-0 relative">
      <Image className="absolute top-8 -left-4 rotate-90 -z-10" src="/doted.svg" alt="doted" width="267" height="117" />
      <Image className="absolute bottom-0 -right-4 -z-10" src="/doted.svg" alt="doted2" width="178" height="78" />
      <div className="flex items-center max-sm:flex-col justify-center gap-4 w-full">
        {activeGames.map((game) => (
          <div key={game.id} className="transition-shadow shadow-[0_2px_16px_rgba(4,10,31,.06)] hover:shadow-[0_2px_16px_rgba(4,10,31,.12)] w-[30%] max-sm:w-5/6 rounded-[20px] backdrop-blur-sm">
            <Link href={`/mission/${game.id}`}>
              <Button className="w-full h-full hover:bg-inherit block p-0 rounded-[20px] text-inherit">
                <div className="p-3 pb-0 flex gap-2 flex-col items-center">
                  {!game.thumbnail && <div className="rounded-xl w-full h-48 bg-gray-200 text-white flex justify-center items-center"><PhotoIcon/></div>}
                  {game.thumbnail && <Image src={game.thumbnail} width={192} height={192} className="rounded-xl object-cover h-[192px]" alt={game.name} />}
                  <Typography variant="h4" className="text-xl">
                    {game.name}
                  </Typography>
                </div>
                <Divider className="my-3" />
                <div className="p-3 pt-0 flex flex-col mb-1">
                  <Typography variant="subtitle2" className="text-gray-500 text-base max-sm:text-sm">
                    <span className="text-[#000000de]">زمان شروع: </span>{jalaliDate(game.startsAt) ? jalaliDate(game.startsAt) : "--"}
                  </Typography>
                  <Typography variant="subtitle2" className="text-gray-500 text-base max-sm:text-sm">
                    <span className="text-[#000000de]">زمان پایان: </span>{jalaliDate(game.endsAt) ? jalaliDate(game.endsAt) : "--"}
                  </Typography>
                  <Typography variant="subtitle2" className="text-gray-500 text-base max-sm:text-sm">
                    <span className="text-[#000000de]">مکان: </span>{game.location ? game.location : "--"}
                  </Typography>
                </div>
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  )
}
