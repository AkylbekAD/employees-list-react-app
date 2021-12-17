import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: '',
    };
  }

  onChangeSalary = (e) => {
    const salaryChange = e.target.value.slice(0, -1);
    this.setState({ salary: salaryChange });
    this.props.onChangeSalary(this.props.name, salaryChange);
  };

  render() {
    const { name, salary, onDelete, onToggleProp, increase, like } = this.props; // не изменяемые получаяемые props

    let ClassName = 'list-group-item d-flex justify-content-between';

    if (increase) {
      ClassName += ' increase';
    }

    if (like) {
      ClassName += ' like';
    }

    return (
      <li className={ClassName}>
        <span
          className="list-group-item-label"
          data-toggle="like"
          onClick={onToggleProp}
        >
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          value={salary + '$'}
          onChange={this.onChangeSalary}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            data-toggle="increase"
            onClick={onToggleProp}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}
export default EmployeesListItem;
