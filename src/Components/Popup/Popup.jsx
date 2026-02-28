import React, { useContext } from 'react';
import './Popup.css';
import { EmployeeContext } from '../../Services/EmployeeContext';

export default function Popup({ message }) {
  const { handlePopup } = useContext(EmployeeContext);

  return (
    <div className="popup-shadow">
      <div className="popup">
        <p className="popup__message">{message}</p>
        <button
          className="popup__btn"
          onClick={() => {
            handlePopup({ isOpen: false, message: '' });
          }}
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
