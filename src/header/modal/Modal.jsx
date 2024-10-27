import iconFacebook from'../../img/modal/facebook.svg';
import iconInstagram from'../../img/modal/instagram.svg';
import ReactModal from 'react-modal';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
   
    // <div className="modal">
<ReactModal className="modal" isOpen={isOpen}
  parentSelector={() => document.querySelector('#modal')}
 >
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-content-block">
 <div className="modal-content-line-top"></div>
        <p>(067)348-65-30</p>
        <div className="modal-content-block-icon">
          <img src={iconFacebook} alt="Facebook" />
          <img src={iconInstagram} alt="Instagram" />
        </div>
        <div className="modal-content-line-button"></div>
        </div>
       
      </div>
     </ReactModal>
    // </div>
  );
};

export default Modal;