import {FC,ReactNode} from 'react';
import  { Swiper } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SwiperProps {
  children: ReactNode;
  navigation:boolean,
  className?:string,
  autoplay?:{delay:number,
    disableOnInteraction:boolean
  },
  pagination: any;
  modules?:any;
  // Add other Swiper configuration options here
}

function CSwiper({ children, navigation = true, ...SwiperProps }: SwiperProps) {
  return (
    <Swiper {...SwiperProps}>
      {children}
    </Swiper>
  );
}


export default CSwiper;