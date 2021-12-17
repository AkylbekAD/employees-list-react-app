import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onSubmit = (e) => {
    // обработчик в форме принимающий this.props и вызывающий функцию из app.js
    e.preventDefault();
    if (this.state.name === '' || this.state.salary === '') {
      return;
    }
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      //сбрасываем input в форме
      name: '',
      salary: '',
    });
  };

  onPutIn = (e) => {
    // controlled target.value
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          {' '}
          {/* вызываем обработчик в форме а не на кнопке */}
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onPutIn}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onPutIn}
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddFrom;
