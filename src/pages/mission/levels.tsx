import { Container, Typography } from '@mui/material';
import router from 'next/router';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


export default function Levels() {

  let linkBtnParentClassName = 'w-[90px] h-[82px] bg-transparent mt-10 rounded-[50%]';
  let linkBtnClassName = 'w-16 h-[52px] select-none absolute left-[calc(50%-32px)] top-[calc(50%-30px)] flex justify-center items-center rounded-[50%] text-white text-2xl';
  let completed = ' bg-[#ffc700] shadow-[0_8px_0_0_rgb(230,159,0)]'
  let current = ' main-bg-color main-bg-hover shadow-[0_8px_0_0_rgb(48,143,90)] active:shadow-[0_6px_0_0_rgb(48,143,90)] active:translate-y-[2px]'
  let locked = ' main-bg-color shadow-[0_8px_0_0_rgb(48,143,90)]'

  let currentParent = ' border-[15px] border-[#29754b] cursor-pointer'
  let lockedParent = ' opacity-50'


  return (
    <>
      <Container className="flex flex-col items-center my-3" component="main">
        <div className="flex flex-col justify-between px-8 py-4 main-bg-color rounded-xl">
          <Typography className="text-white text-xl" variant='h3'>
            ماموریت پارک درخشان
          </Typography>
          <p onClick={() => router.push(`/mission/test-game`)} className="text-gray-100 text-sm mt-2 cursor-pointer">
            بازگشت به ماموریت
            <ArrowBackIcon />
          </p>
        </div>
        <div className="relative">
          <div className="relative left-10">
            <Image className="absolute w-20 h-20 -left-[140px] top-0 -z-10 rotate-6" src="/map.png" alt="map" width={124} height={124} />
            <div className={linkBtnParentClassName}>
              <div
                className={`${linkBtnClassName} ${completed}`}
              >
                1
              </div>
            </div>
          </div>
          <div className="relative -left-10">
            <Image className="absolute w-20 h-20 left-[140px] top-0 -z-10 rotate-6" src="/key.png" alt="key" width={124} height={124} />
            <div className={`${linkBtnParentClassName} ${currentParent}`} onClick={() => router.push("/mission/level-2")}>
              <div
                className={`${linkBtnClassName} ${current}`}
              >
                2
              </div>
            </div>
          </div>
          <div className="relative left-10">
            <Image className="absolute w-20 h-20 -left-[140px] top-0 -z-10 rotate-6" src="/money.png" alt="money" width={124} height={124} />
            <div className={`${linkBtnParentClassName} ${lockedParent}`}>
              <div
                className={`${linkBtnClassName} ${locked}`}
              >
                <LockOutlinedIcon className="text-white z-20" />
              </div>
            </div>
          </div>
          <div className="relative -left-10">
            <Image className="absolute w-20 h-20 left-[140px] top-0 -z-10 rotate-6" src="/treasure-chest.png" alt="chest" width={124} height={124} />
            <div className={`${linkBtnParentClassName} ${lockedParent}`}>
              <div
                className={`${linkBtnClassName} ${locked}`}
              >
                <LockOutlinedIcon className="text-white z-20" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}