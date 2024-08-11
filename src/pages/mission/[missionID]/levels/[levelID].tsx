import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleLevelLoading, setSingleLevel } from '@/features/ganjinehSlice';
import axios from 'axios';
import { options } from '@/config/api';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { RootState } from '@/app/store';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ErrorMessage from '@/components/ErrorMessage';
import Image from 'next/image';
import WinnerPage from '@/components/WinnerPage';
import SuccessMessage from '@/components/SuccessMessage';



export default function Questions() {
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState('');
  const [answerErrorMessage, setAnswerErrorMessage] = useState('');
  const [isWinner, setIsWinner] = useState(false);
  const [currentLevel, setCurrentLevel] = useState('');
  const [isLevelDone, setIsLevelDone] = useState('');



  const params = useParams<{ missionID: string, levelID: string }>();
  const missionId = params?.missionID;
  const levelId = params?.levelID;

  const [answer, setAnswer] = useState('');

  const singleLevel = useSelector((state: RootState) => state.ganjinehStreet.singleLevel);
  const singleLevelLoading = useSelector((state: RootState) => state.ganjinehStreet.loading.singleLevel);




  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const dispatch = useDispatch();

  const fetchGameData = async () => {
    if (missionId) {
      try {
        const { data } = await axios.get(`/api/games/${missionId}`, options);

        setCurrentLevel(data.currentLevel)
      } catch (error: any) {

      }
    }
  }

  const fetchSingleLevel = async () => {
    try {
      if (missionId && levelId) { 
        if(levelId < currentLevel) {
          setIsLevelDone("شما این مرحله رو با موفقیت پشت سر گذاشتید!")
        } else {
          const { data } = await axios.get(`/api/missions/${missionId}/${levelId}`, options);

          dispatch(
            setSingleLevel(data)
          );
        }
      }

    } catch (error: any) {
      if (error.response.status == 400) {
        setErrorMessage("چنین مرحله ای وجود ندارد. همچنین از ترتیب شروع مراحل اطمینان حاصل کنید.")
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
    fetchSingleLevel()
    fetchGameData()
    dispatch(setSingleLevelLoading(false));
  }, [missionId, levelId, currentLevel])

  const handleUserAnswer = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/missions/${missionId}/${levelId}`, {
        answer,
      }, options);

      setAnswerErrorMessage("")

      setIsWinner(true)
      
    } catch (error: any) {
      if (error.response.status == 400) {
        setAnswerErrorMessage("جواب اشتباهه!")
      }
      else if (error.response.status == 500) {
        setAnswerErrorMessage("در حال حاضر سرور به مشکل خورده است، بعدا امتحان کنید.")
      } else {
        setAnswerErrorMessage("لطفا بعدا امتحان کنید.")
      }
    }
  };


  return (
    <>
      {singleLevelLoading && <div className="loader mt-auto mr-[calc((100vw/2)-18px)]"></div>}
      {!isWinner && !isLevelDone && !errorMessage && !singleLevelLoading &&
        <CacheProvider value={cacheRtl}>
          <Container className="!flex max-sm:flex-col justify-center items-center relative gap-6 py-6 p-2" component="main">
            <div className="flex flex-col w-full lg:w-1/2 items-center">
              <ArrowBackIcon onClick={() => router.back()} className="absolute top-3 right-6 !text-3xl cursor-pointer hover:bg-slate-200 rounded-md"/>
              <div className="flex flex-col items-center gap-2">
                <Typography
                  variant="h2"
                  className="font-bold !text-4xl"
                >
                  سوال {singleLevel.number ? new Number(singleLevel.number).toLocaleString('fa-ir') : "--"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="!text-lg max-sm:text-base text-gray-800 text-justify"
                >
                  {singleLevel.question ? singleLevel.question : "--"}
                </Typography>
              </div>
              <Box component="form" className="w-full" onSubmit={handleUserAnswer} noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="answer"
                      label="پاسخ را وارد کنید"
                      name="answer"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  className="main-bg-color main-bg-hover"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, fontSize: 16 }}
                >
                  ثبت
                </Button>
              </Box>
              {answerErrorMessage && 
                <ErrorMessage message={answerErrorMessage} />
              }
            </div>
            <div className="flex justify-center items-center sm:max-w-[50%] max-sm:w-full">
              {singleLevel.image && <Image src={singleLevel.image} width={350} height={350} className="rounded-xl object-cover h-[350px]" alt={singleLevel.question} />}
            </div>
          </Container>
        </CacheProvider>
      }
      {isLevelDone && <SuccessMessage message={isLevelDone} />}
      {isWinner && <WinnerPage />}
      {errorMessage &&
        <ErrorMessage message={errorMessage} />
      }
    </>
  )
}
