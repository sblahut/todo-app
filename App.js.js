import React from 'react'
import ToDoItem from './ToDoItem'
import todoData from './todoData'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todo.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todo: updatedTodos
            }
        })     
    }
    
    render() {
    const ToDoItems = this.state.todo.map(item => <ToDoItem 
    key={item.id} 
    item={item} 
    handleChange={this.handleChange}/>)
    return (
        
        <div className="todo-list">
            {ToDoItems}
        </div>
    )
}
}

export default App