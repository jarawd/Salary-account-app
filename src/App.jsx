import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { EmployeeContext } from './Services/EmployeeContext';
import Registered from './Pages/Registered/Registered';
import DepositSummary from './Pages/DepositSummary/DepositSummary';
import Header from './Components/Header/Header';
import Popup from './Components/Popup/Popup';
import PopupRemove from './Components/PopupRemove/PopupRemove';
import {
  initLocalStorage,
  getData,
  saveEmployee,
  saveDeposit,
} from './Services/LocalStorage';

function App() {
  const [employees, setEmployees] = useState([]);
  const [depositsHistory, setDepositsHistory] = useState([]);
  const [popup, setPopup] = useState({ isOpen: false, message: '' });
  const [removePopup, setRemovePopup] = useState(false);
  const [idToRemove, setIdToRemove] = useState('');

  useEffect(() => {
    initLocalStorage();
    setEmployees(getData().employees);
  }, []);

  //Guardar un nuevo registro
  function saveNewEmployee(employee) {
    saveEmployee(employee);
    setEmployees(getData().employees);
  }

  // Funcion para remover elemento registrado del localStorage
  function removeFromLocalStorage(id) {
    const data = getData();
    const filtered = data.employees.filter((item) => item.id !== id);
    data.employees = filtered;
    localStorage.setItem('employee', JSON.stringify(data));
  }

  // Mostrar popup de confirmacion + actualizar estado con ID de registro a eliminar
  function showRemovePopup(id) {
    setRemovePopup(true);
    setIdToRemove(id);
  }

  // Cerrar popup de confirmacion
  function hideRemovePopup() {
    setRemovePopup(false);
  }

  //Remover de la vista + remover del local storage
  function removeRegister() {
    setEmployees((prev) =>
      prev.filter((item) => {
        return item.id !== idToRemove;
      }),
    );
    removeFromLocalStorage(idToRemove);
    setRemovePopup(false);
  }

  //Realizar un deposito al empleado
  function makeDeposit(employee, deposit) {
    saveDeposit(employee, deposit);
    setEmployees(getData().employees);
  }

  // Funcion para mostrar Popup
  function handlePopup(popupState) {
    setPopup({ isOpen: popupState.isOpen, message: popupState.message });
  }

  //Funcion para guardar los depósitos del empleado
  function employeeDeposits(id) {
    const found = employees.find((item) => item.id === id);
    setDepositsHistory(found.deposits);
  }

  //variables compartidas por medio del contexto EmployeeContext
  const contextVariables = {
    employees,
    depositsHistory,
    popup,
    removeRegister,
    showRemovePopup,
    hideRemovePopup,
    saveNewEmployee,
    makeDeposit,
    employeeDeposits,
    handlePopup,
  };

  return (
    <EmployeeContext.Provider value={contextVariables}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/registered"
          element={<Registered />}
        />
        <Route
          path="/deposits-summary"
          element={<DepositSummary />}
        />
      </Routes>
      {popup.isOpen && <Popup message={popup.message} />}
      {removePopup && <PopupRemove />}
    </EmployeeContext.Provider>
  );
}

export default App;
