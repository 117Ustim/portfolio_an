import { Virtual,Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import 'swiper/css/virtual';


export default function Swipe(props) {
 

  return (
    <div className='portfolio__slider  '>
      <div className='portfolio__slider-title'>{props.title}</div>
      <div className='portfolio__slider-slider'>
        
        <Swiper
          modules={[Virtual,Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3.5}
          virtual
          breakpoints
          autoHeight
           navigation 
          
          
          //  ={{
          //        nextEl: '.swiper-button-next',
          //        prevEl: '.swiper-button-prev',
          //     }}
          //  pagination={{ clickable: true }}
          >
          {props.slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              {slideContent}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
