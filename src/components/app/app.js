import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/searcn-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employee-list/employee-list';
import EmployeesAddFrom from '../employees-add-form/employees-add-form';
import nextId from 'react-id-generator';

import './app.css';

// всё происходит здесь, полный вид страницы формируется здесь из методов и данных app.js которые выносятся через {}
// и из компонентов и их методов которые импортируются и передаются в this.state через this.props в компонентах с классами

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Jack',
          salary: 1000,
          increase: false,
          like: true,
          id: nextId(),
        },
        {
          name: 'John',
          salary: 2000,
          increase: false,
          like: false,
          id: nextId(),
        },
        {
          name: 'Jercy',
          salary: 3000,
          increase: true,
          like: false,
          id: nextId(),
        },
      ],
      term: '', //  переменная для поиска по data которая меняется и экспортируется из search-panel.js
      filter: 'all', // переменная фильтрации по data, экспортируется из компонента app-filter.js
    };
  }

  deleteItem = (id) => {
    // удаляет объект из data, принимает id и ищет по нему
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    // добавление сотрудника в data из employees-add-form.js
    let newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: nextId(),
    };

    this.setState(({ data }) => {
      // формирует новый массив из старого и присваивает его старому массиву
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    // срабатывание события cookie{increase}, star{like} на элементе из employee-list.js, который формируется из employees-list-item.js
    this.setState(({ data }) => ({
      data: data.map((item) => {
        // присваиваем старому массиву - новый с изменённым {increase: true/false} или {like: true/false}
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    // поиск по отображаемому списку, срабатывает синхронно с filterPost
    if (term.length === 0) {
      // если поисковая строка пуста, отображаются все данные
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1; // возвращает элемент при совпадении символа и регистра
    });
  };

  onUpdateSearch = (term) => {
    // обновляем term в data для searchEmp
    this.setState({ term }); // сокращаем запись объекта {term: term}
  };

  filterPost = (items, filter) => {
    // фильтруем список по props.filter из базы
    switch (filter) {
      case 'like': // приходит как filter из app-filter через onFilterSelect
        return items.filter((item) => item.like);
      case 'moreThen1000': // приходит как filter из app-filter через onFilterSelect
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter }); // добавляем в props приходящий filter для чтения filterPost
  };

  onChangeSalary = (name, salary) => {
    // обновление у объекта с name его salary, значение из employees-list-item.js
    this.setState((state) => ({
      data: state.data.map((item) => {
        if (item.name === name) {
          // если совпадают имена, присваиваем новый salary
          return { ...item, salary };
        }
        return item; // в итоге обновляем старый массив новым
      }),
    }));
  };

  render() {
    const { data, term, filter } = this.state; // присваивание в this.state для сокращения записи ниже в return
    const employeesAll = this.state.data.length; // значение общего кол-ва объектов в массиве
    const employeesOnIncrease = this.state.data.filter(
      (item) => item.increase
    ).length; // значение равное кол-ву объектов в массиве с {increase: true}
    const visibleData = this.filterPost(this.searchEmp(data, term), filter); // всегда показываются только отфильтрованные данные

    return (
      // далее формируется врестка, здесь мы указываем какие компоненты react будут отображаться
      <div className="app">
        <AppInfo // в каждом компоненте, как аттрибут указываем через ключ и интерполяцию какие методы из app.js будем экспортировать как props в указанные компоненты
          employeesAll={employeesAll}
          employeesOnIncrease={employeesOnIncrease}
        />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onChangeSalary={this.onChangeSalary}
        />
        <EmployeesAddFrom onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
