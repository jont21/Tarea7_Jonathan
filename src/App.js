import React, { Component } from 'react';
import Task from './components/task';
import Title from './components/title';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: "",
            tasks: []
        }
    }

    handleTaskChange = (event) => {
        this.setState({
            newTask: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newTasks = this.state.tasks;
        newTasks.push(this.state.newTask)
        this.setState({
            newTask: "",
            tasks: newTasks
        })
    }
    render() {
        return (
            <div className = "container" >
            <Title/>
            <form onSubmit = { this.handleSubmit }>
            <input value = { this.state.newTask }
            onChange = { this.handleTaskChange }
            type = "text"
            className = "new-task"/>
            </form> 
             { this.state.newTask.map(Task => <Task/>)} 
             </div>
        );
    }
}
export default App;