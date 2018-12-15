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
        <p class="panel">{this.state.value}</p>
     )
     this.setState({itemArray: item})
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

        <div id="panelDiv">
        {this.state.itemArray.map((item, index) => {
           return <div className="colorPanels" key={index}>{item}</div>
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
