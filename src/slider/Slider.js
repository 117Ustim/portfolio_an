import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import foto1 from '../img/slider/01.jpg';
import foto2 from '../img/slider/05.jpg';
import foto3 from '../img/slider/03.jpg';
import foto4 from '../img/slider/04.jpg';
import foto5 from '../img/sec/01.jpg';
import foto6 from '../img/sec/02.jpg';
import foto7 from '../img/sec/03.jpg';
import foto8 from '../img/sec/04.jpg';

export default function Slider() {
  return (
    <div className='slider'>
      <div className='slider__text _container'>random photo</div>
      <div className='slider__swiper'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3.5}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true}}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <div class='uk-slider-container'>
            <ul class='uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid'>
              <SwiperSlide>
                <img src={foto1} alt='' width='auto' height='350px' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={foto2} alt='' width='auto' height='350px' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={foto3} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={foto4} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={foto5} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={foto6} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={foto7} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={foto8} alt='' />
              </SwiperSlide>
            </ul>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
