import React from 'react';

function Hero() {
  const social_media = [
    'logo-instagram',
    'logo-facebook',
    'logo-linkedin',
    'logo-twitter'
  ];
  return (
    <section
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
      id="home"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          alt="/assets/images/hero.png"
          className="md:w-11/12 h-full object-cover"
          src="/assets/images/hero.png"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>John Alex</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8" type="submit">
            Contact Me
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
