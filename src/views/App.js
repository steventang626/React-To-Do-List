import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";
import "./css/App.css";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items :       [],
      currentItem : {text: "", key: "", status: true},
    };
  }

  inputElement = React.createRef();

  handleInput = (e) => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now(), status: true};
    this.setState({
      currentItem,
    })
  };

  addItem = (e) => {
    // Prevent default reloading
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items :       items,
        currentItem : { text: "", key: "" },
      })
    }
  };

  changeItemStatus = (key) => {
    const changedItems = this.state.items;
    const length = changedItems.length;
    for(let i = 0; i < length; i++) {
      if(changedItems[i].key === key) {
        changedItems[i].status = !changedItems[i].status;
        break;
      }
    }
    this.setState({
      items : changedItems,
    })
  };

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} changeItemStatus={this.changeItemStatus}/>
      </div>
    );
  }
}

export default App;
