'use client';
import Image from 'next/image';
// I18n import
import {useTranslations} from 'next-intl';
// component import
import {Navigation, Pagination} from 'swiper/modules';
import {SwiperSlide} from 'swiper/react';
import ShareButton from '@/components/button/share.button';
import ToolTipsWebsite from '@/components/button/tollTips.website';
import ToolTipsContact from '@/components/button/toolTips.contact';
// Ui import for swiper
import Swiper from '@/lib/swiper';
// User Types
interface dataIterface {
  id: number;
  name: string;
  src: string;
  job: string;
  phone: string;
}
export default function PersonCard() {
  // initialion i18n
  const t = useTranslations('Empolyer');
  const data: Array<dataIterface> = [
    {
      id: 1,
      name: 'بلقاسم غرس الله',
      src: '/fakedb/1.jpg',
      job: ' بناء',
      phone: '29 583 452 '
    },
    {
      id: 2,
      name: 'عصام الشوالي ',
      src: '/fakedb/2.jpg',
      job: 'نجار ',
      phone: '29 557 512 '
    },
    {
      id: 3,
      name: '  كريم بنزيما',
      src: '/fakedb/3.jpg',
      job: ' دهان',
      phone: '29 557 212 '
    },
    {
      id: 4,
      name: '  الفتحي ولد العيدي',
      src: '/fakedb/1.jpg',
      job: 'حداد',
      phone: '29 557 213  '
    }
  ];
  const AdsSlider: Array<string> = ['/ads/1.jpg', '/ads/2.jpg', '/ads/3.jpg'];
  return (
    <div>
      <div className="bg-white m-auto w-full max-w-7xl justify-center items-center pb-10 mb-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="bg-white sticky inset-0 h-48 w-full  z-10 col-span-4">
          <div className=" flex justify-center ">
            <h4 className="animate-textAds bg-gradient-to-r from-cyan-500 via-red-500 to-blue-500 bg-clip-text text-transparent text-center text-2xl p-3 font-black">
              Best Deal Today
            </h4>
            <strong className="p-3 text-2xl"> 🔥🔥</strong>
          </div>

          <Swiper
            autoplay={{delay: 3000, disableOnInteraction: true}}
            className="mySwiper"
            modules={[Pagination, Navigation]}
            navigation
            pagination={{
              type: 'progressbar'
            }}
          >
            {AdsSlider.map((section) => (
              <SwiperSlide key={Math.random()}>
                <Image
                  alt="ads"
                  className="h-32 p-3 w-60 m-auto pb-8"
                  height={1000}
                  quality={100}
                  src={section}
                  width={1000}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {data.map((section) => (
          <div
            key={section.id}
            className="w-full m-auto my-4 max-w-[300px] col-span-4 lg:col-span-1 p-8 rounded-xl text-gray-800  overflow-hidden group 
 hover:shadow-2xl hover:shadow-sky-500/50 motion-safe:transition-all motion-safe:duration-700"
          >
            <figure
              className="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4 outline-sky-500 
    before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-sky-500 before:-z-[1]
    group-hover:before:scale-[2.5] motion-safe:before:transition-all 
    motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-sky-400"
            >
              <Image
                alt="emolyer job"
                className="rounded-full block w-[200px] h-[160px] bg-sky-500 object-cover z-10 relative"
                height={500}
                quality={80}
                src={section.src}
                width={500}
              />
            </figure>
            <header className="motion-safe:translate-y-4 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
              <h3 className="font-semibold text-2xl text-center text-sky-500 mt-6 group-hover:text-gray-50  relative">
                {section.name}
              </h3>
              <p className="text-center group-hover:text-gray-50  relative">
                {section.job}
              </p>
            </header>

            <ul
              className="flex justify-center space-x-4 mt-16 text-sky-500
relative"
            >
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <ToolTipsContact call={t('callT')} phone={section.phone} />
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <ShareButton />
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                <ToolTipsWebsite
                  title={t('title')}
                  viewDetaile={t('viewDetaile')}
                />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
