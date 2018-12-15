import React from 'react';
import ReactDOM from 'react-dom';

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
     item.push(
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
        {this.state.itemArray.map((item, index) => {
           return <div className="colorPanels" key={index}>{item} <button className="delete" onClick={this.delete.bind(this, item)}>X</button> </div>
         })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ToDoList />,
  document.getElementById('todo')
);
