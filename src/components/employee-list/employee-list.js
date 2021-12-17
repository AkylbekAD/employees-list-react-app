import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employee-list.css';

// в const EmployeesList передаем методы и данные которые должны быть экспортированы далее в employees-list-ltem

const EmployeesList = ({ data, onDelete, onToggleProp, onChangeSalary }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem // при формировании верстки в app.js будут применены все методы ниже, которые берут данные из employees-list-ltem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)} // id для метода удаления из data app.js
        onToggleProp={
          (e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle')) // получаем prop для события по data-attribute
        }
        onChangeSalary={onChangeSalary}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>; // список для верстки с классом для стилизации
};

export default EmployeesList;
