import ErrorMessage from "@/components/ErrorMessage";
import { options } from "@/config/api";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveGames, setActiveGamesLoading } from "@/features/ganjinehSlice";
import { RootState } from "@/app/store";
import { Container, Typography, Divider, Button } from "@mui/material";
import Link from 'next/link';
import moment from 'moment-jalaali';
import 'moment/locale/fa';
import jMoment from 'moment-jalaali';
import Image from 'next/image';
import PhotoIcon from '@mui/icons-material/Photo';
import axios from "axios";
import { ChangeEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";

type Level = {
  Number: number;
  Question: string;
  Answer: string;
  Hint: string;
  HintTimer: number;
  Image: string;
  Location: string;
  Online: boolean;
  Lnt: number;
  Lat: number;
};

type Game = {
  Name: string;
  Duration: number;
  Thumbnail: string;
  StartsAt: number;
  EndsAt: number;
  Description: string;
  LevelCount: number;
  Location: string;
  Prize: string;
  Levels: Level[];
};

moment.loadPersian({usePersianDigits: true});

export const jalaliDate = (unixDate: number) => (
  jMoment(unixDate * 1000)
.locale('fa')
.format('dddd jD jMMMM [ساعت] HH:mm')
)

export default function AdminPage() {
  const activeGames = useSelector((state: RootState) => state.ganjinehStreet.activeGames);
  const activeGamesLoading = useSelector((state: RootState) => state.ganjinehStreet.loading.activeGames);

  const [role, setRole] = useState("");

  const dispatch = useDispatch();

  const router = useRouter()

  const handleJwt = async () => {
    const response = await axios.get('/api/jwt', options);

    setRole(response.data.role);
  };

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
    handleJwt()
    fetchActiveGames()
  }, [])

  const deleteActiveGame = async (id: any) => {
    try {
      const { data } = await axios.delete(`/api/missions/${id}`, options);
      router.reload();

    } catch (error: any) {
      console.log(error);
    }
  }
  
  const [newGame, setNewGame] = useState<Game>({
    Name: "",
    Duration: 0,
    Thumbnail: "",
    StartsAt: 0,
    EndsAt: 0,
    Description: "",
    LevelCount: 1,
    Location: "",
    Prize: "",
    Levels: [
      {
        Number: 1,
        Question: "",
        Answer: "",
        Hint: "",
        HintTimer: 0,
        Image: "",
        Location: "",
        Online: false,
        Lnt: 0,
        Lat: 0,
      },
    ],
  });

  useEffect(() => {
    const updatedLevels = Array.from({ length: newGame.LevelCount }, (_, i) => ({
      Number: i + 1,
      Question: "",
      Answer: "",
      Hint: "",
      HintTimer: 0,
      Image: "",
      Location: "",
      Online: false,
      Lnt: 0,
      Lat: 0,
    }));

    setNewGame((prev) => ({ ...prev, Levels: updatedLevels }));
  }, [newGame.LevelCount]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof Game
  ) => {
    setNewGame((prevState) => ({
      ...prevState,
      [key]: e.target.type === "number" ? Number(e.target.value) : e.target.value,
    }));
    console.log(newGame);
  };

  const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setNewGame((prev) => ({ ...prev, Thumbnail: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLevelChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    key: keyof Level
  ) => {
    const updatedLevels = [...newGame.Levels];
    updatedLevels[index] = {
      ...updatedLevels[index],
      [key]: e.target.type === "number" ? Number(e.target.value) : e.target.value,
    };
    setNewGame((prevState) => ({ ...prevState, Levels: updatedLevels }));
  };

  const handleLevelImageChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          const updatedLevels = [...newGame.Levels];
          updatedLevels[index] = { ...updatedLevels[index], Image: reader.result as string };
          setNewGame((prev) => ({ ...prev, Levels: updatedLevels }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addNewGame = async () => {
    const { data } = await axios.post(`/api/missions`, newGame, options);
    router.reload();
  }

  return (
    <div className="flex flex-col justify-center items-center mt-auto">
      {role === "admin" && <>
        <h1 className="text-3xl">اضافه کردن بازی جدید</h1>
        {Object.keys(newGame).map((key) => {
          if (key === "Levels" || key === "LevelCount" || key === "Thumbnail") return null;
          return (
            <div key={key}>
              <label>{key}:</label>
              <input
                type={typeof newGame[key as keyof Game] === "number" ? "number" : "text"}
                value={newGame[key as keyof Game] as string | number}
                onChange={(e) => handleInputChange(e, key as keyof Game)}
              />
            </div>
          );
        })}
        <label>Thumbnail:</label>
          <input type="file" accept="image/*" onChange={handleThumbnailChange} />
          {newGame.Thumbnail && (
            <div>
              <img
                src={newGame.Thumbnail}
                alt="Thumbnail Preview"
                style={{ width: 100, height: 100, objectFit: "cover" }}
              />
            </div>
          )}
        <div>
          <label>Level Count:</label>
          <input
            type="number"
            min={1}
            max={10}
            value={newGame.LevelCount}
            onChange={(e) => handleInputChange(e, "LevelCount")}
          />
        </div>
        <h2>Levels</h2>
        {newGame.Levels.map((level, index) => (
          <div key={index}>
            <h3>Level {level.Number}</h3>
            {Object.keys(level).map((key) =>
              key !== "Number" && key !== "Image" ? (
                <div key={key}>
                  <label>{key}:</label>
                  <input
                    type={typeof level[key as keyof Level] === "number" ? "number" : "text"}
                    value={level[key as keyof Level] as string | number}
                    onChange={(e) => handleLevelChange(e, index, key as keyof Level)}
                  />
                </div>
              ) : null
            )}
            <div>
              <label>Level Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleLevelImageChange(e, index)}
              />
              {level.Image && (
                <div>
                  <img
                    src={level.Image}
                    alt={`Level ${level.Number} Preview`}
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        <Button className="py-2 px-3 main-bg-color main-bg-hover rounded" variant="contained" onClick={addNewGame}>اضافه کردن</Button>
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
                <Button className="text-red-600 w-full z-10" onClick={() => deleteActiveGame(game.id)}>حذف</Button>
              </div>
            ))}
          </div>
        </div>}
      </>}
      {role !== "admin" &&
        <ErrorMessage message={"شما دسترسی به این صفحه ندارید!"} />
      }
    </div>
  )
}
