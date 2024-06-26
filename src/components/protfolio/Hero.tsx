// cloudinary Import for Person Ads
import {CldImage} from 'next-cloudinary';
// next I18
import {useTranslations} from 'next-intl';
// React Imports
import {useState, useEffect} from 'react';

function Hero() {
  const [Job, setJobs] = useState('Fullstack Developer');
  // initialion i18n
  const t = useTranslations('CV');
  const social_media: Array<string> = [
    'bi bi-instagram',
    'bi bi-facebook',
    'bi bi-whatsapp',
    'logo-bi bi-telephone',
    'bi bi-suit-heart-fill'
  ];

  function textLoad() {
    setTimeout(() => {
      setJobs('Freelancer');
    }, 0);
    setTimeout(() => {
      setJobs('Blogger');
    }, 4000);
    setTimeout(() => {
      setJobs('YouTuber');
    }, 8000);
    setTimeout(() => {
      setJobs('Fullstack Developer');
    }, 12000);
  }

  useEffect(() => {
    textLoad();
    setInterval(textLoad, 12000);
  }, []);
  return (
    <section className=" flex py-10 md:flex-row flex-col items-center justify-between max-w-7xl m-auto lg:space-x-10">
      <div className=" flex items-center justify-center lg:w-1/2 lg:h-[650px] h-full max-w-lg mx-4">
        <CldImage
          alt="employer job"
          className="w-full object-cover"
          height="1000"
          quality={100}
          src="cv/do33q0qnyz8osaczukxv"
          width="1000"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              {t('Hero_Hi')}
              <br />
            </span>
            {t('Hero_Name')}
            <span> Jenna Harc</span>
          </h1>
          <div className="containert">
            <h4 className="text sec-text text-lg font-bold text-cyan-600">
              {Job}
            </h4>
          </div>
          <a download href="/assets/ads/1.jpg">
            <button
              className="mt-8 bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2"
              name="cv"
              type="submit"
            >
              {t('Hero_Btn')}
            </button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <i className={icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
