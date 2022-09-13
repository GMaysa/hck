import React from "react";

export default class Display extends React.Component {
    Panggil(){
        fetch('https://api.currencyfreaks.com/latest?apikey=0a46e26af87c47c69f1835dd45495b89')
        .then(response => response.json()
        .then(data))
        return data
    }
    
    constructor() {
        super()
        this.state = {
            
        }
    }
}