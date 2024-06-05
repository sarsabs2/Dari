// cloudinary Import for Person Ads
import {CldImage} from 'next-cloudinary';
// next I18
import {useTranslations} from 'next-intl';

function About() {
  const t = useTranslations('CV');

  const info = [
    {text: t('About_Experience'), count: '04'},
    {text: t('About_Project'), count: '24'},
    {text: t('About_Rejected'), count: '06'}
  ];
  return (
    <section className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">{t('About_Title')}</h3>
        <p className="text-gray-400 my-3 text-lg">{t('About_Intro')}</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-start text-xl font-medium leading-7 w-11/12 mx-auto">
                {t(' About_Para')}
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{' '}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a download href="/assets/Code_a_program.pdf">
                <button
                  className="bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2"
                  name="cv"
                  type="submit"
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div
              className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm
             after:content-[''] after:w-full after:left-0 after:top-0 
             after:rounded-xl after:rotate-12 after:h-full after:absolute 
             after:bg-cyan-600 after:-z-10 "
            >
              <CldImage
                alt="employer job"
                className="w-full object-cover bg-cyan-600 rounded-xl"
                height="1000"
                quality={100}
                src="cv/do33q0qnyz8osaczukxv"
                width="1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
