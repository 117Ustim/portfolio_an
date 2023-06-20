import icon1 from '../img/footer_icon/facebook.svg';
import icon2 from '../img/footer_icon/instagram.svg';
import icon3 from '../img/footer_icon/free-icon-paper.svg';

export default function Footer() {
return (
<div className='footer'>
<div className='footer__icon'>
         <div className='footer__icon-block'>
          <a href='#' target="_blank">
           <img  src={icon1} href='#' alt='facebook' /> 
          </a>
          <a href='#' target="_blank"> 
          <img src={icon2}  alt='instagram' />
          </a>
          <a href='#' target="_blank"> 
           <img src={icon3} href='' alt='paper' />
           </a>
         </div>
       </div> 
 </div>
);
}