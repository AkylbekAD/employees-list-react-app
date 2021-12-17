import './app-info.css';

const AppInfo = ({ employeesAll, employeesOnIncrease }) => {
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании Мечта</h1>
      <h2>Общее число сотрудников: {employeesAll} </h2>
      <h2>Премию получат: {employeesOnIncrease}</h2>
    </div>
  );
};

export default AppInfo;
