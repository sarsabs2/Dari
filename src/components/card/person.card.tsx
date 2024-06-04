'use client';
import clsx from 'clsx';
// cloudinary Import for Person Ads
import {CldImage} from 'next-cloudinary';
// I18n import
import {useTranslations} from 'next-intl';
// UI  import
import {
  ToolTipsWebsite,
  ToolTipsContact,
  ShareButton
} from '@/components/button/toolTips.button';

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
      phone: '29583452 ',
      state: true
    },
    {
      id: 2,
      name: 'fake name ',
      src: 'employer/xh5mjxqpjfwxsuwrryju',
      job: 'نجار ',
      phone: '29557512 ',
      state: false
    },
    {
      id: 3,
      name: 'نصر لحول ',
      src: 'employer/nc99oelzvg2gmo3zifqd',
      job: ' دهان',
      phone: '29557212 ',
      state: true
    },
    {
      id: 4,
      name: '  الفتحي ولد العيدي',
      src: 'employer/nfwqbo4pexvhctdy2aut',
      job: 'حداد',
      phone: '29557213  ',
      state: false
    }
  ];

  return (
      <div className="bg-white m-auto w-full max-w-7xl justify-center items-center pb-10 mb-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
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
                <ShareButton state={section.state} />
              </li>
              <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                <ToolTipsWebsite
                  state={section.state}
                  title={t('title')}
                  viewDetaile={t('viewDetaile')}
                />
              </li>
            </ul>
          </div>
        ))}
      </div>
  );
}
