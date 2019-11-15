import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
    super (props)

    this.initialState = {
        name : "",
        job : ""
    }
    this.state = this.initialState
}

handleChange = event => {
    const {name, value} = event.target

    this.setState ({
        [name] : value
    })

    console.log(this.state)
}

submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
    console.log(this.state)
}
    render() {
        const {name, job} = this.state
        return (
            <form>
                <label>name</label>
                <input type="text" name="name" value={name} onChange={this.handleChange} />
                <label>job</label>
                <input type="text" name="job" value={job} onChange={this.handleChange} />
                <input type="button" value="submit" onClick={this.submitForm} />
            </form>
        )
    }
}
