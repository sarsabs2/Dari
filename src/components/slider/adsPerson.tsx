import {useKeenSlider} from 'keen-slider/react';
// next Import
import Link from 'next/link';
import {CldImage} from 'next-cloudinary';
// const [ref] = useKeenSlider<HTMLDivElement>();

export function AdsPerson() {
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
  // slide for ads initailize
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'free',
    rtl: false,
    slides: {perView: 'auto'}
  });
  return (
    <div className="bg-white sticky inset-0 h-48 w-full  z-10 col-span-4">
      <div className=" flex justify-center py-3">
        <h4 className="animate-textAds bg-text text-5xl uppercase  select-none  bg-clip-text text-transparent text-center font-black">
          Best Deal Today
        </h4>
        <strong className="p-3 text-2xl"> 🔥🔥</strong>
      </div>
      <div className=" mx-auto flex items-center justify-center">
        <div ref={sliderRef} className="keen-slider" style={{maxWidth: 600}}>
          <div className=" mx-auto flex space-x-5  items-center justify-center px-4">
            {AdsSlider.map((section) => (
              <div key={Math.random()} className="keen-slider__slide">
                <div
                  className="relative inline-block "
                  style={{maxWidth: 80, minWidth: 60}}
                >
                  <Link href="/ads">
                    <CldImage
                      alt="section"
                      className="w-24 h-14 rounded-full border-2 border-blue-600 p-0.5"
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
  );
}
