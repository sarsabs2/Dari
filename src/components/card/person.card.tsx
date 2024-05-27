'use client';
import clsx from 'clsx';
import {useKeenSlider} from 'keen-slider/react';
// next Import
import Link from 'next/link';
// cloudinary Import for Person Ads
import {CldImage} from 'next-cloudinary';
// I18n import
import {useTranslations} from 'next-intl';
// component import
import ShareButton from '@/components/button/share.button';
import ToolTipsWebsite from '@/components/button/tollTips.website';
import ToolTipsContact from '@/components/button/toolTips.contact';

// User Types
interface dataIterface {
  id: number;
  name: string;
  src: string;
  job: string;
  phone: string;
  state: boolean;
}
export default function PersonCard() {
  // initialion i18n
  const t = useTranslations('Empolyer');
  const data: Array<dataIterface> = [
    {
      id: 1,
      name: 'بلقاسم جاب الله',
      src: 'employer/moczii26ipuv4bfjae4q',
      job: ' بناء',
      phone: '29 583 452 ',
      state: true
    },
    {
      id: 2,
      name: 'fake name ',
      src: 'employer/xh5mjxqpjfwxsuwrryju',
      job: 'نجار ',
      phone: '29 557 512 ',
      state: false
    },
    {
      id: 3,
      name: 'نصر لحول ',
      src: 'employer/nc99oelzvg2gmo3zifqd',
      job: ' دهان',
      phone: '29 557 212 ',
      state: true
    },
    {
      id: 4,
      name: '  الفتحي ولد العيدي',
      src: 'employer/nfwqbo4pexvhctdy2aut',
      job: 'حداد',
      phone: '29 557 213  ',
      state: false
    }
  ];
  // slide for ads initailize
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'free',
    rtl: false,
    slides: {perView: 'auto'}
  });

  // const [ref] = useKeenSlider<HTMLDivElement>();
  const AdsSlider: Array<string> = [
    'AdsPerson/lvf6zta9dufosiwvldkc',
    'AdsPerson/xu06vnqkv8oaq9g3tfmd',
    'AdsPerson/vihosry0gq0whlpaqy5i',
    'AdsPerson/lvf6zta9dufosiwvldkc',
    'AdsPerson/xu06vnqkv8oaq9g3tfmd',
    'AdsPerson/vihosry0gq0whlpaqy5i',
    'AdsPerson/lvf6zta9dufosiwvldkc',
    'AdsPerson/xu06vnqkv8oaq9g3tfmd',
    'AdsPerson/vihosry0gq0whlpaqy5i'
  ];
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
          <div className=" mx-auto flex items-center justify-center m-auto">
            <div
              ref={sliderRef}
              className="keen-slider"
              style={{maxWidth: 600}}
            >
              <div className=" mx-auto flex space-x-5  items-center justify-center px-4">
                {AdsSlider.map((section) => (
                  <div key={Math.random()} className="keen-slider__slide">
                    <div
                      className="relative inline-block "
                      style={{maxWidth: 80, minWidth: 120}}
                    >
                      <Link href="/ads">
                        <CldImage
                          alt="section"
                          className="w-32 h-28 rounded-full border-2 border-blue-600 p-0.5"
                          height="600"
                          sizes="100vw"
                          src={section}
                          width="960"
                        />
                      </Link>
                      <span className="h-3 w-3 rounded-full border border-white bg-green-500 block absolute top-1 right-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {data.map((section) => (
          <div
            key={section.id}
            className="w-full m-auto my-4 max-w-[300px] col-span-4 lg:col-span-1 p-8 rounded-xl text-gray-800  overflow-hidden group 
 hover:shadow-2xl hover:shadow-sky-500/50 motion-safe:transition-all motion-safe:duration-700"
          >
            <figure
              className={clsx(
                "relative w-40 h-40 m-0  mx-auto rounded-full outline outline-offset-4  before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:-z-[1] group-hover:before:scale-[2.5] motion-safe:before:transition-all motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center ",
                {
                  'outline-sky-500 group-hover:outline-sky-400 before:bg-sky-500':
                    section.state === true,
                  'outline-red-500 group-hover:outline-red-400 before:bg-red-500':
                    section.state === false
                }
              )}
            >
              <CldImage
                alt="employer job"
                className="rounded-full block w-[200px] h-[160px] bg-sky-500 object-cover z-10 relative"
                height="600"
                sizes="100vw"
                src={section.src}
                width="960"
              />
            </figure>
            <header className="motion-safe:translate-y-4 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
              <h3
                className={clsx(
                  'font-semibold text-2xl text-center mt-6 group-hover:text-gray-50  relative',
                  {
                    'text-sky-500': section.state === true,
                    'text-red-500': section.state === false
                  }
                )}
              >
                {section.name}
              </h3>
              <p className="text-center group-hover:text-gray-50  relative">
                {section.job}
              </p>
            </header>

            <ul
              className={clsx('flex justify-center space-x-4 mt-16 relative', {
                'text-sky-500': section.state === true,
                'text-red-500': section.state === false
              })}
            >
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                <ToolTipsContact
                  call={t('callT')}
                  phone={section.phone}
                  state={section.state}
                />
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
