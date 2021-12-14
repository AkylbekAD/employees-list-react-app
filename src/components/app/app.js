import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/searcn-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employee-list/employee-list';
import EmployeesAddFrom from '../employees-add-form/employees-add-form';
import nextId from 'react-id-generator';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Jack', salary: 1000, increase: false, id: nextId() },
        { name: 'John', salary: 2000, increase: false, id: nextId() },
        { name: 'Jercy', salary: 3000, increase: true, id: nextId() },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    // добавление сотрудника в data из employees-add-form
    let newItem = {
      name,
      salary,
      increase: false,
      id: nextId(),
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />{' '}
        {/* данные и метод которые передаем из app.js  */}
        <EmployeesAddFrom onAdd={this.addItem} />{' '}
        {/* обработчик onAdd из employees-add-form для вызова метода в app.js  */}
      </div>
    );
  }
}

export default App;
