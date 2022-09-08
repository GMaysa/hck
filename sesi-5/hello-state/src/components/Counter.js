import React from "react"

class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () =>{
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return(
            <>
                <h3>{this.state.counter}</h3>
                <br/>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        )
    }
}

export default Counter