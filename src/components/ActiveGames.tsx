import { Container, Typography, Divider, Button } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';
import Link from 'next/link';
import axios from "axios";
import { options } from '@/config/api';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveGames, setActiveGamesLoading, setCanFetchGames } from "@/features/ganjinehSlice";
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
  const canFetchGames = useSelector((state: RootState) => state.ganjinehStreet.canFetchGames);
  const activeGamesLoading = useSelector((state: RootState) => state.ganjinehStreet.loading.activeGames);

  const dispatch = useDispatch();

  const fetchActiveGames = async () => {
    try {
      const { data } = await axios.get('/api/missions', options);

      dispatch(setActiveGames(data));

      dispatch(setActiveGamesLoading(false));

    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(canFetchGames) {
      fetchActiveGames()
    }
    dispatch(setCanFetchGames(false))
  }, [])



  return (
    <Container id="active-games" className="flex flex-col items-center gap-6 py-8 max-sm:px-0 relative">
      <Image className="absolute top-8 -left-4 rotate-90 -z-10" src="/doted.svg" alt="doted" width="267" height="117" />
      <Image className="absolute bottom-0 -right-4 -z-10" src="/doted.svg" alt="doted2" width="178" height="78" />
      {activeGamesLoading && <div className="loader"></div>}
      {!activeGamesLoading && <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid items-center justify-center grid-cols-1 gap-4 sm:grid-cols-2 w-full">
          {activeGames.map((game) => (
            <div key={game.id} className="transition-shadow shadow-[0_2px_16px_rgba(4,10,31,.06)] hover:shadow-[0_2px_16px_rgba(4,10,31,.12)] rounded-[20px] backdrop-blur-sm">
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
      </div>}
    </Container>
  )
}
