import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {itemArray: [], value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.createPanel();
    event.preventDefault();
  }

  createPanel() {
    const item = this.state.itemArray;
     item.unshift(
        <span className="panel">{this.state.value}</span>
     )
     this.setState({itemArray: item})
  }

  delete(item){
    const newState = this.state.itemArray.slice();
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({itemArray: newState})
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="New item..." value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="" />
        </form>

        <div>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        {this.state.itemArray.map((item, index) => {
           return <div className="colorPanels" key={index}>
           <input className="check" type="checkbox" />
           {item}
           <button className="delete" onClick={this.delete.bind(this, item)}>X</button>
           </div>
         })}
         </ReactCSSTransitionGroup>
        </div>

      </div>
    );
  }
}

ReactDOM.render(
  <ToDoList />,
  document.getElementById('todo')
);
