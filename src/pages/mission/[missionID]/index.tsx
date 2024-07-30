import { Container, Typography, Button, Alert } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import axios from "axios";
import { options } from '@/config/api';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleGame } from "@/features/ganjinehSlice";
import { RootState } from "@/app/store";
import { jalaliDate } from "@/components/ActiveGames";
import Image from "next/image";
import ErrorMessage from "@/components/ErrorMessage";


export default function gameDetail() {

  const params = useParams<{ missionID: string }>();
  const id = params?.missionID;
  
  const [errorMessage, setErrorMessage] = useState('');


  const singleGame = useSelector((state: RootState) => state.ganjinehStreet.singleGame);


  const dispatch = useDispatch();

  const fetchSingleGame = async () => {
    try {
      if (id) {
        const { data } = await axios.get(`http://localhost/api/missions/${id}`, options);

        console.log(data);
        dispatch(setSingleGame(data));
      }

    } catch (error: any) {
      if (error.response.status == 400) {
        setErrorMessage("چنین ماموریتی وجود ندارد.")
      }
      else if (error.response.status == 401) {
        setErrorMessage("برای مشاهده ماموریت ها ثبت نام یا ورود کنید.")
      }
      else if (error.response.status == 500) {
        setErrorMessage("در حال حاضر سرور به مشکل خورده است، بعدا امتحان کنید.")
      } else {
        setErrorMessage("لطفا بعدا امتحان کنید.")
      }
    }
  }

  useEffect(() => {
    fetchSingleGame()
  }, [id])

  const startSingleGame = async () => {
    try {
      if (id && !errorMessage) {
        const response = await axios.get(`http://localhost/api/missions/start/${id}`, options);
  
        console.log(response);
      }
    } catch (error: any) {
      if (error.response.status == 400) {
        return
      }
      else if (error.response.status == 500) {
        setErrorMessage("در حال حاضر سرور به مشکل خورده است، بعدا امتحان کنید.")
      } else {
        setErrorMessage("لطفا بعدا امتحان کنید.")
      }
    }
  }


  return (
    <>
      {!errorMessage && 
        <Container className="flex items-stretch max-sm:flex-col-reverse sm:gap-10 mt-6 mb-12 sm:max-h-[500px] w-full">
          <div className="flex flex-col justify-center flex-1 gap-6">
            <Typography
              variant="h1"
              className="font-bold text-5xl max-md:text-3xl"
            >
              {singleGame.name ? singleGame.name : "--"}
            </Typography>
            <div className="max-w-[756px] w-full">
              <Typography
                variant="subtitle1"
                className="text-xl max-sm:text-base text-gray-500 text-justify"
              >
                {singleGame.description ? singleGame.description : "--"}
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="subtitle2" className="flex gap-1 text-xl">
                <FormatListNumberedRtlIcon className="py-[2px] !text-3xl" />
                <span className="text-[#000000de]">تعداد مراحل: </span>{singleGame.levelCount ? new Number(singleGame.levelCount).toLocaleString('fa-ir') : "--"}
              </Typography>
              <div className="flex items-center gap-1">
                <AccessTimeOutlinedIcon className="py-[2px] !text-3xl" />
                <div className="flex flex-col">
                  <Typography variant="subtitle2" className="text-xl">
                    <span className="text-[#000000de]">زمان شروع: </span>{singleGame.startsAt ? jalaliDate(singleGame.startsAt) : "--"}
                  </Typography>
                  <Typography variant="subtitle2" className="text-xl">
                    <span className="text-[#000000de]">زمان پایان: </span>{singleGame.endsAt ? jalaliDate(singleGame.endsAt) : "--"}
                  </Typography>
                </div>
              </div>
              <Typography variant="subtitle2" className="flex gap-1 text-xl">
                <PlaceOutlinedIcon className="py-[2px] !text-3xl" />
                <span className="text-[#000000de]">مکان: </span>{singleGame.location ? singleGame.location : "--"}
              </Typography>
              <Typography variant="subtitle2" className="flex gap-1 text-xl">
                <EmojiEventsOutlinedIcon className="py-[2px] !text-3xl" />
                <span className="text-[#000000de]">جایزه: </span>{singleGame.prize ? new Number(singleGame.prize).toLocaleString('fa-ir') : "--"} تومان
              </Typography>
              <Link onClick={startSingleGame} className="my-3" href={`/mission/${id}/levels`}>
                <Button className="main-bg-color main-bg-hover w-full" variant="contained">
                  مشاهده مراحل
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center sm:w-1/2 mb-6">
            {!singleGame.thumbnail && <div className="rounded-xl w-full h-[350px] bg-gray-200 text-white flex justify-center items-center"><PhotoIcon/></div>}
            {singleGame.thumbnail && <Image src={singleGame.thumbnail} width={350} height={350} className="rounded-xl object-cover h-[350px]" alt={singleGame.name} />}
          </div>
        </Container>
      }
      {errorMessage &&
        <ErrorMessage message={errorMessage} />
      }
    </>
  )
}
