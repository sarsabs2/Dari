import {useKeenSlider} from 'keen-slider/react';
import {useTranslations} from 'next-intl';

export default function Project() {
  const t = useTranslations('CV');

  const projects = [
    {
      img: '/assets/images/project-1.png',
      name: 'Movie App',
      github_link: 'https://github.com/Sridhar-C-25',
      live_link: 'https://myreactflix.netlify.app'
    },
    {
      img: '/assets/images/project-2.jpg',
      name: 'Job search Web App',
      github_link: 'https://github.com/Sridhar-C-25/jobsearchapp',
      live_link: 'https://myjobsearch.netlify.app'
    },
    {
      img: '/assets/images/project-3.jpg',
      name: 'Highking',
      github_link: 'https://github.com/Sridhar-C-25/highking',
      live_link: 'https://highking01.netlify.app'
    },
    {
      img: '/assets/images/project-4.jpg',
      name: 'React Nav',
      github_link:
        'https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown',
      live_link: 'https://reacttailwindnavbar.netlify.app'
    },
    {
      img: '/assets/images/project-5.png',
      name: 'Vue Country',
      github_link: 'https://github.com/Sridhar-C-25',
      live_link: 'https://vuecountry05.netlify.app'
    }
  ];
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      breakpoints: {
        '(min-width: 400px)': {
          slides: {perView: 2, spacing: 5}
        },
        '(min-width: 1000px)': {
          slides: {perView: 3, spacing: 10}
        }
      }
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      }
    ]
  );

  return (
    <section className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-cyan-600">{t('Project_Title')}</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">{t('Project_')}</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <div ref={sliderRef} className="keen-slider">
            {projects.map((project_info, i) => (
              <div key={i} className="keen-slider__slide">
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img alt="" className="rounded-lg" src={project_info.img} />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      href={project_info.github_link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                    <a
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      href={project_info.live_link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:block hidden">
          <img alt="" src="/assets/images/project_person1.png" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl m-auto pt-4">
        <div>
          <img
            alt="Gallery "
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688025668.png"
          />
        </div>
        <div>
          <img
            alt="Gallery "
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688029344.png"
          />
        </div>
        <div>
          <img
            alt="Gallery "
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688029370.png"
          />
        </div>
        <div>
          <img
            alt="Gallery"
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688029384.png"
          />
        </div>
      </div>
    </section>
  );
}
