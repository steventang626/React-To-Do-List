import React, { Component } from "react"
import { Checkbox, Label } from "semantic-ui-react"
// onClick={() => this.props.changeItemStatus(item.key)}
class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show : true,
    };
  }

  createTasks = (item) => (
    item.status &&
    <li key={item.key}>
      <Checkbox label={item.text} onClick={() => this.props.changeItemStatus(item.key)}/>
    </li>
  );
  createTasksDone = (item) => (
    !item.status &&
    <li key={item.key}>
      <Checkbox label={<label><s>&nbsp;{item.text}&nbsp;</s></label>} defaultChecked onClick={() => this.props.changeItemStatus(item.key)}/>
    </li>
  );
  hideAndShow = (e) => {
    e.preventDefault();
    this.setState({
      show : !this.state.show
    })
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    const listItemsDone = todoEntries.map(this.createTasksDone);
    let hasDone = false;
    const length = listItemsDone.length;
    for(let i = 0; i < length; i++) {
      if(listItemsDone[i] !== false) {
        hasDone = true;
        break;
      }
    }
    return (
      <div>
        <div>
          <ul className="theList">{listItems}</ul>
        </div>
        {
          hasDone &&
          <div>
            <div>
              {
                this.state.show &&
                <Label onClick={this.hideAndShow}>
                                  Hide Finished Tasks
                </Label>
              }
              {
                !this.state.show &&
                <Label onClick={this.hideAndShow} color="blue">
                                  Show Finished Tasks
                </Label>
              }
            </div>
            {
              this.state.show &&
              <ul className="theList">{listItemsDone}</ul>
            }
          </div>
        }
      </div>
    )
  }
}

export default TodoItems
