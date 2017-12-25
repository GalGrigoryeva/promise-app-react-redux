import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addTodo} from "./redux/actions";

export class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {todoText: ''};
  }

  render() {
    return (
      <form id="addToDoForm" onSubmit={this.onSubmit}>
        <div className="form-group">
          <div className="col-lg-12">
            <div className="input-group">
              <input type="text"
                     className="form-control"
                     placeholder="Add you promise"
                     aria-label="Search for..."
                     onChange={this.inputOnChange}
                     value={this.state.todoText}/>
              <span className="input-group-btn">
                <button className="btn btn-secondary add" type="submit">Add</button>
              </span>
            </div>
            <small className="form-text text-muted">Your promise will be added to the list below</small>
          </div>
        </div>
      </form>
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
    const todoText = this.state.todoText;
    if (todoText.length > 1) {
      this.props.addTodo(todoText); // Второй способ
      // this.props.dispatch(addTodo(todoText)); // Первый способ
      this.setState({todoText: ""});
    }
  };

  inputOnChange = (event) => {
    this.setState({todoText: event.target.value});
  }
}

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch) => { // Получает store.dispatch и возвращает обертку над ним и кладет в пропсы
  return {
    addTodo: (todoText) => {
      dispatch(addTodo(todoText));
    }
  };
};

export const ConnectedAddTodoForm = connect(mapStateToProps, mapDispatchToProps)(AddTodoForm); // Второй способ
// export const ConnectedAddTodoForm = connect(mapStateToProps)(AddTodoForm); // Первый способ