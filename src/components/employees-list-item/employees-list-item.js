import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: false,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({
      // дестркутурируем аргумент callback`a сразу доставая increase
      increase: !increase, // записываем новое присваивание в () чтобы не прописывать return
    }));
  };

  onRise = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    const { name, salary, onDelete } = this.props; // не изменяемые получаяемые props
    const { increase, like } = this.state; // динамические props

    let ClassName = 'list-group-item d-flex justify-content-between';

    if (increase) {
      ClassName += ' increase';
    }

    if (like) {
      ClassName += ' like';
    }

    return (
      <li className={ClassName}>
        <span className="list-group-item-label" onClick={this.onRise}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + '$'}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={this.onIncrease}
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
