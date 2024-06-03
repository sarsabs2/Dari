import {useTranslations} from 'next-intl';

function Hireme() {
  const t = useTranslations('CV');
  return (
    <section className="py-10 px-3 text-white" id="hireme">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-cyan-600">{t('Hire_Title')}</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">{t('Hire_Intro')}</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">{t('Hire_header')}</h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            {t('Hire_Para')}
          </p>
          <button
            className="bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2 mt-10"
            type="button"
          >
            {t('Btn_Call')}
          </button>
        </div>
        <img
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
          src="/assets/images/hireMe.png"
        />
      </div>
    </section>
  );
}

export default Hireme;
