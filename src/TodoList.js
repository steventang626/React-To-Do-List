import React, { Component } from 'react';
import { Input, Button, Header, Icon } from 'semantic-ui-react'

class TodoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus();
    }
    render() {
        return (
            <div className="todoListMain">
                <p/>
                <Header as='h3' icon textAlign='center' className="iconHeader">
                    <Icon name='sticky note outline' circular />
                    <Header.Content>Yuhan's To-Do List</Header.Content>
                </Header>
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <Input
                            focus
                            placeholder="Add a new task..."
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
