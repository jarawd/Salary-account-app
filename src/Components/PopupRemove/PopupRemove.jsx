import React, { useContext } from 'react';
import './PopupRemove.css';
import { EmployeeContext } from '../../Services/EmployeeContext';

export default function PopupRemove() {
  const { removeRegister, hideRemovePopup } = useContext(EmployeeContext);

  return (
    <div className="popup-remove__shadow">
      <div className="popup-remove__container">
        <p className="popup-remove__message">
          ¿Seguro que deseas eliminar este registro?
        </p>
        <div className="popup-remove__btn-container">
          <button
            className="popup-remove__btn"
            onClick={removeRegister}
          >
            Sí
          </button>
          <button
            className="popup-remove__btn"
            onClick={hideRemovePopup}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
