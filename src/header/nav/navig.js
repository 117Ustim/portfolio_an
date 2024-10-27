import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Modal from "../modal/Modal.jsx";

export default function Navig() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onHome = () => {
    navigate(`/`);
  };
  const onPortfolio = () => {
    navigate(`/portfolio`);
  };


return (  
<div className="header__nav">
    <div className="header__nav-nav">
      <ul>
        <li onClick={onHome}><p>home</p></li>
        <li onClick={onPortfolio}><p>portfolio</p></li>
        <li className="contact" onClick={openModal}><p>contacts</p></li>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        
      </ul>
    </div>
  </div>
  
);
}