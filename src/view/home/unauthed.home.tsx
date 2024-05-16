'use client';
// next import 
import Image from 'next/image';
import Link from 'next/link';
// i18n import
import {useTranslations} from 'next-intl';
// Ui import for swiper
import { Navigation ,Pagination} from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
// layouts 
import PageLayout from '@/components/PageLayout';
import Swiper from '@/lib/swiper';
// type 
interface dataIterface{
  id:number,
  title:string,
  src:string,
  front:string,
  back:string,
  alt:string
}
export default function Index() {
  const t = useTranslations('Index');
const data:Array<dataIterface>=[
  {
    id:1,
    title:t('title1'),
    src:"/asset/home/1.svg",
    front:t('front1'),
    back:t("back1"),
    alt:"alt"
  },
  {
    id:2,
    title:t('title2'),
    src:"/asset/home/2.svg",
    front:t('front2'),
    back:t('back2'),
    alt:"alt"
  },
  {
    id:3,
    title:t('title3'),
    src:"/asset/home/3.svg",
    front:t('front3'),
    back:t('back3'),
    alt:"alt"
  }
]
  return (
    <PageLayout>
      
        <Swiper   className="mySwiper"
        modules={[Pagination, Navigation]}
        navigation
        pagination={{
          type: 'progressbar',
        }} >
      {data.map((section)=>(
   <SwiperSlide key={section.id}>
   <div className="containers">
 <div className="card">
<div  className="front">
<div className="relative h-screen overflow-hidden w-screen  bg-cyan-500  shadow-lg ">
<svg
className="absolute bottom-0 left-0 mb-8"
fill="none"
style={{ transform: "scale(1.5)", opacity: "0.1" }}
viewBox="0 0 375 283"
>
<rect
fill="white"
height={152}
rx={8}
transform="rotate(-45 159.52 175)"
width={152}
x="159.52"
y={175}
/>
<rect
fill="white"
height={152}
rx={8}
transform="rotate(-45 0 107.48)"
width={152}
y="107.48"
/>
</svg>
<div className="relative pt-10 px-10 flex items-center flex-col  justify-center">
<div
className="absolute w-48 h-48 bottom-0 left-0 -mb-24 "
style={{
 background: "radial-gradient(black, transparent 60%)",
 transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
 opacity: "0.2"
}}
 />
<h1 className='text-2xl font-semibold capitalize m-3'>{section.title}</h1>

<Image
alt={section.alt}
className="h-[600px] max-w-md"
height={1000}
src={section.src}
width={1000}
/>
</div>
<div className="relative  text-white px-6 pb-6 mt-6">
<span className=" text-xl p-3 text-start">
  {section.front}
  </span>
</div>
</div>
</div>
<div className="back">
<div className="area h-screen">
			<ul className="circles">
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
			</ul>
      <p className='text-xl leading-10 font-medium m-3 p-3 text-center'>  {section.back}
</p>
		</div>
 
  </div>
</div>
</div>

   </SwiperSlide>
      )

      )}
  <Link href="/">
 <button className=" h-12 fixed bottom-0 z-10 right-0  flex justify-end px-6 text-lg py-2.5 rounded bg-blue-500/70 text-white font-semibold "
    type="button">Get Started</button>
      </Link>
      </Swiper>
 
  </PageLayout>
  );
}
