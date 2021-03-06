import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return{
            backgroundColor: '#f1f1f1',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none '
        }
    }


    render() {
        const {id,title } = this.props.todo;
        return (
            <div style = { this.getStyle() }>
                <p>
                    <input type="checkbox"onChange={this.props.markComplete.bind(this,id)} />{' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    } 
}

TodoItem.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '7px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
