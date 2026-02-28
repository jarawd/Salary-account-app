const ls = localStorage;

const defaultData = {
  employees: [],
};

export function initLocalStorage() {
  if (!ls.getItem('employee')) {
    ls.setItem('employee', JSON.stringify(defaultData));
  }
}

export function getData() {
  const data = ls.getItem('employee')
    ? JSON.parse(ls.getItem('employee'))
    : defaultData;
  return data;
}

export function saveEmployee(employee) {
  const data = getData();
  data.employees.unshift(employee);
  ls.setItem('employee', JSON.stringify(data));
}

export function saveDeposit(employee, deposit) {
  const data = getData();
  const found = data.employees.find((item) => item.number === employee.number);
  found ? found.deposits.unshift(deposit) : '';
  ls.setItem('employee', JSON.stringify(data));
}
