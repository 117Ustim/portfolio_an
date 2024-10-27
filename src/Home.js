import Header from './header/Header';
import Main from './main/Main';
import Slider from './slider/Slider';
import Footer from './footer/Footer';

export default function Home() {
  return (
    <div className='Home'>
      <Header />
      <Main />
      <Slider />
      <Footer />
    </div>
  );
}
