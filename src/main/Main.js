import foto1 from '../img/sec/01.jpg';
import foto2 from '../img/sec/02.jpg';
import foto3 from '../img/sec/03.jpg';
import foto4 from '../img/sec/04.jpg';

export default function Main() {
return (
<div className='main'>
<div className="_container">
  <div className="main__row">
    <div className="main__row-left">
     
      <img src={foto1} alt="" />
      <img src={foto2} alt="" />
      </div>
     
   
    <div className="main__row-right">
   <div className="main__row-right-foto">
<img src={foto3} alt="" />
<img src={foto4} alt="" />

   </div>
  <div className="main__row-right-text">
  <p>I take happy, elegant and candid wedding photos that capture your day beautifully so you can remember it exactly how it happened...</p>
  </div>
    
     
    </div>
    
  </div>
</div>


 </div>
);
}