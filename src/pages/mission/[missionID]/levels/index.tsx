import { Container, Typography } from '@mui/material';
import router from 'next/router';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { options } from '@/config/api';
import { Fragment, useEffect, useState } from 'react';
import ErrorMessage from '@/components/ErrorMessage';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { setLevelsLoading, setSingleGame } from '@/features/ganjinehSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import SuccessMessage from '@/components/SuccessMessage';



export default function Levels() {

  const params = useParams<{ missionID: string }>();
  const id = params?.missionID;

  const dispatch = useDispatch();


  const [currentLevel, setCurrentLevel] = useState('');
  const [isGameFinished, setIsGameFinished] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const singleGame = useSelector((state: RootState) => state.ganjinehStreet.singleGame);
  const levelsLoading = useSelector((state: RootState) => state.ganjinehStreet.loading.levels);


  const images = [
    '/map.png',
    '/key.png',
    '/money.png',
    '/treasure-chest.png',
    '/money-bag.png',
    '/treasure-chest2.png',
    '/map3.png',
    '/treasure-chest3.png',
    '/map2.png',
    '/island.png',
  ];


  const startSingleGame = async () => {
    try {
      if (id) {
        const response = await axios.get(`/api/missions/start/${id}`, options);
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

  useEffect(() => {
    startSingleGame()
  }, [])

  const fetchGameData = async () => {
    try {
      if (id) {
        const { data } = await axios.get(`/api/games/${id}`, options);

        setCurrentLevel(data.currentLevel)
        if (data.status == "finished") {
          setIsGameFinished("شما این ماموریت رو با موفقیت پشت سر گذاشتید!")
        } else {
          setIsGameFinished("")
        }
      }

    } catch (error: any) {
      if (error.response.status == 400 || error.response.status == 404) {
        setErrorMessage("چنین ماموریتی وجود ندارد.")
      }
      else if (error.response.status == 401) {
        setErrorMessage("برای مشاهده مراحل ثبت نام یا ورود کنید.")
      }
      else if (error.response.status == 500) {
        setErrorMessage("در حال حاضر سرور به مشکل خورده است، بعدا امتحان کنید.")
      } else {
        setErrorMessage("لطفا بعدا امتحان کنید.")
      }
    }
  }

  const fetchSingleGame = async () => {
    try {
      if (id) {
        const { data } = await axios.get(`/api/missions/${id}`, options);

        dispatch(setSingleGame(data));
      }

    } catch (error: any) {
      if (error.response.status == 400 || error.response.status == 404) {
        setErrorMessage("چنین ماموریتی وجود ندارد.")
      }
      else if (error.response.status == 401) {
        setErrorMessage("برای مشاهده مراحل ثبت نام یا ورود کنید.")
      }
      else if (error.response.status == 500) {
        setErrorMessage("در حال حاضر سرور به مشکل خورده است، بعدا امتحان کنید.")
      } else {
        setErrorMessage("لطفا بعدا امتحان کنید.")
      }
    }
  }


  useEffect(() => {
    fetchGameData();
    fetchSingleGame();
    dispatch(setLevelsLoading(false));
  }, [id])


  return (
    <>
      {levelsLoading && <div className="loader mt-auto mr-[calc((100vw/2)-18px)]"></div>}
      {!errorMessage && !levelsLoading && !isGameFinished && 
        <Container className="flex flex-col items-center my-3" component="main">
          <div className="flex flex-col justify-between px-8 py-4 main-bg-color rounded-xl">
            <Typography className="text-white text-xl" variant='h3'>
              {singleGame.name ? singleGame.name : "--"}
            </Typography>
            <p onClick={() => router.push(`/mission/${id}`)} className="text-gray-100 text-sm mt-2 cursor-pointer">
              بازگشت به ماموریت
              <ArrowBackIcon />
            </p>
          </div>
          <div className="relative">
            {Array.from({ length: parseInt(singleGame.levelCount) }, (_, index: number) => {
              let linkBtnParentClassName = 'w-[90px] h-[82px] bg-transparent mt-10 rounded-[50%]';
              let linkBtnClassName = 'w-16 h-[52px] select-none absolute left-[calc(50%-32px)] top-[calc(50%-30px)] flex justify-center items-center rounded-[50%] text-white text-2xl';
              let canStartTheLevel = false;
              let isLocked = false;
              
              if (parseInt(currentLevel) > index + 1) {
                // completed
                linkBtnClassName += ' bg-[#ffc700] shadow-[0_8px_0_0_rgb(230,159,0)] text-shadow';
              } else if (parseInt(currentLevel) === index + 1) {
                // current level
                linkBtnParentClassName += ' border-[15px] border-[#29754b] cursor-pointer';
                linkBtnClassName += ' main-bg-color main-bg-hover shadow-[0_8px_0_0_rgb(48,143,90)] active:shadow-[0_6px_0_0_rgb(48,143,90)] active:translate-y-[2px] text-shadow';
                canStartTheLevel = true;
              } else {
                // locked
                linkBtnParentClassName += ' opacity-50';
                linkBtnClassName += ' main-bg-color shadow-[0_8px_0_0_rgb(48,143,90)] text-shadow';
                isLocked = true;
              }
              return (
                <Fragment key={index}>
                  {((index + 1) % 2 == 0) && // even
                    <div className="relative -left-10">
                      <Image className="absolute w-20 h-20 left-[140px] top-0 -z-10 rotate-6" src={images[index]} alt={`Random Image ${index + 1}`} width={124} height={124} />
                      <div className={linkBtnParentClassName} onClick={() => canStartTheLevel && router.push(`/mission/${id}/levels/${index + 1}`)}>
                        <div
                          className={linkBtnClassName}
                        >
                          {isLocked && <LockOutlinedIcon className="text-white z-20" />}
                          {!isLocked && index + 1}
                        </div>
                      </div>
                    </div>
                  }
                  {((index + 1) % 2 != 0) && // odd
                    <div className="relative left-10">
                      <Image className="absolute w-20 h-20 -left-[140px] top-0 -z-10 -rotate-6" src={images[index]} alt={`Random Image ${index + 1}`} width={124} height={124} />
                      <div className={linkBtnParentClassName} onClick={() => canStartTheLevel && router.push(`/mission/${id}/levels/${index + 1}`)}>
                        <div
                          className={linkBtnClassName}
                        >
                          {isLocked && <LockOutlinedIcon className="text-white z-20" />}
                          {!isLocked && index + 1}
                        </div>
                      </div>
                    </div>
                  }
                </Fragment>
              )
            })}
          </div>
        </Container>
      }
      {errorMessage &&
        <ErrorMessage message={errorMessage} />
      }
      {isGameFinished &&
        <SuccessMessage message={isGameFinished} />
      }
    </>
  )
}
