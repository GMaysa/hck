import React from "react"
import PropTypes from 'prop-types'
// props dan data flow

class HeroName extends React.Component {
    render() {
        return (
            <>
                <h3>Hero Name</h3>
                <p>{this.props.name}</p>
                <hr/>
            </>
        )
    }
}

// propTypes digunakan untuk memvalidasi berbagai tipe data
HeroName.propTypes = {
    name: PropTypes.string
}

class Hero extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "Gatot Kaca"
        }
    }

    render() {
        return(
            <>
                <p>Step One</p>
                <HeroName name="Hercules"/>
                <p>Step Two</p>
                <HeroName name={this.state.name}/>
            </>
        )
    }
}

export default Hero