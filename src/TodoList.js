import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react'

class TodoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus();
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <Input
                            focus
                            placeholder="Add a task here..."
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <Button type="submit" content='Add' primary />
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;
