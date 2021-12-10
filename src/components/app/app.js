import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/searcn-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employee-list/employee-list';
import EmployeesAddFrom from '../employees-add-form/employees-add-form';

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList />
      <EmployeesAddFrom />
    </div>
  );
}

export default App;
