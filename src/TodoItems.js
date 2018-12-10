import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'
// onClick={() => this.props.changeItemStatus(item.key)}
class TodoItems extends Component {
    createTasks = item => {
        return (
            item.status &&
            <li key={item.key}>
                <Checkbox label={item.text} onClick={() => this.props.changeItemStatus(item.key)}/>
            </li>
        )
    };
    createTasksDone = item => {
        return (
            !item.status &&
            <li key={item.key}>
                <Checkbox label={<label><s>{item.text}</s></label>} defaultChecked onClick={() => this.props.changeItemStatus(item.key)}/>
            </li>
        )
    };
    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);
        const listItemsDone = todoEntries.map(this.createTasksDone);
        let hasDone = false;
        const length = listItemsDone.length;
        for (let i = 0; i < length; i++) {
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
                        <div>Finished Tasks</div>
                        <ul className="theList">{listItemsDone}</ul>
                    </div>
                }
            </div>
        )
    }
}

export default TodoItems
