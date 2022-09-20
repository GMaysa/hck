import React from "react"

export default class Statefull extends React.Component{
    constructor(){
        super()
        this.state = {
            username: 'user01'
        }
    }

    render() {
        return(
            <h1>hi Aku <span>{this.state.username}</span></h1>
        )
    }
}