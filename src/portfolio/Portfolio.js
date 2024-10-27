import Navig from './../header/nav/navig';
import Swipe from './../swiper/Swiper';
import Slider from '../slider/Slider';
import { slides, slides1, slides2 } from './Slides';

export default function Portfolio() {
  return (
    <div className='portfolio '>
      <div className='portfolio__row'>
        <div className='portfolio__header'>
          <Navig />

          <div className='portfolio__title'>
            <h1 className='fade-in-text'>portfolio</h1>
            <div className='portfolio__title-kolo'>
              <span className='slide-in-kolo'></span>
            </div>
          </div>
          <div className='portgolio__title-anim'>
            <span className='slide-in-letter'>moments of your life</span>
          </div>
        </div>

        <div className='portfolio__slider'>
         
          {/* <div className="portfolio__slider-slider"> */}
          <Swipe
            title='wedding'
            slides={slides.map((s) => (
              <img src={s} />
            ))}
          />
          <Swipe
            title='children'
            slides={slides1.map((s) => (
              <img src={s} />
            ))}
          />
          <Swipe
            title='reportage'
            slides={slides2.map((s) => (
              <img src={s} />
            ))}
          />

          {/* </div> */}
        </div>
      </div>
      <div className='portfolio__slider-footer'>
        <Slider />
      </div>
    </div>
  );
}
