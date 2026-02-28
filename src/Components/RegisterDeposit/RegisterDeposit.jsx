import React, { useState, useContext } from 'react';
import { EmployeeContext } from '../../Services/EmployeeContext';
import './RegisterDeposit.css';
import { getWeek } from 'date-fns';

//Obtener fecha de hoy
const date = new Date();
const localDate =
  date.getFullYear() +
  '-' +
  String(date.getMonth() + 1).padStart(2, '0') +
  '-' +
  String(date.getDate()).padStart(2, '0');

export default function Deposit() {
  const { employees, makeDeposit, handlePopup } = useContext(EmployeeContext);

  const [formValues, setFormValues] = useState({
    number: '',
    name: '',
    quantity: '',
    date: localDate,
    week: getWeek(date),
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValues((prev) => {
      let updatedValues = {
        ...prev,
        [name]: value,
      };

      if (name === 'number') {
        const found = employees.find((item) => item.number === value);
        updatedValues.name = found ? found.name : '';
      }

      return updatedValues;
    });
  }

  function handleDeposit(e) {
    e.preventDefault();
    const found = employees.find((item) => item.number === formValues.number);
    if (found) {
      const values = {
        id: `${formValues.number}-${crypto.randomUUID()}`,
        amount: formValues.quantity,
        date: formValues.date,
        week: formValues.week,
      };
      makeDeposit(found, values); //Enviar los datos al padre (App)
      setFormValues({
        number: '',
        name: '',
        quantity: '',
      });
      return;
    }
    handlePopup({
      isOpen: true,
      message: `El número de empleado "${formValues.number}" no está registrado.`,
    });
  }

  return (
    <div className="register-deposit__container">
      <form
        className="register-deposit__form"
        onSubmit={handleDeposit}
      >
        <label className="register-deposit__form__label">
          Número de empleado:
        </label>
        <input
          name="number"
          value={formValues.number}
          className="register-deposit__form__input"
          type="number"
          min="1"
          required
          onChange={handleChange}
        />
        <label className="register-deposit__form__label">Nombre:</label>
        <input
          name="name"
          value={formValues.name}
          className="register-deposit__form__input"
          type="text"
          readOnly
        />
        <label className="register-deposit__form__label">Cantidad:</label>
        <input
          name="quantity"
          value={formValues.quantity}
          className="register-deposit__form__input"
          type="number"
          min="1"
          required
          onChange={handleChange}
        />
        <button
          className="register-deposit__form__btn"
          type="submit"
        >
          Depositar
        </button>
      </form>
    </div>
  );
}
