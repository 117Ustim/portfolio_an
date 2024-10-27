import fotoHeader from '../img/foto-header.jpg';
import Navig from './nav/navig';

export default function Header() {
  

  return (
    <div className='header'>
      <div className='header__row'>
        <div className='_container'>
          <Navig />
          <div className='header__title'>
           <div className="header__title-moving">
            <h1>Vitalii Antonenko</h1>
           </div>
              
           
            
          </div>
          <div className='header__img'>
            <img src={fotoHeader} alt='' />
          </div>
          <div className='header__text'>
            <p>moments of your life</p>
          </div>
        </div>
      </div>
    </div>
  );
}
