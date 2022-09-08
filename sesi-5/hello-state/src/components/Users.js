import React from 'react'

class Users extends React.Component {
    // pendefinisian state
    constructor() {
        super()
        this.state = {
            username: "mamang"
        }
    }

    setUsername = () => {
        this.setState({
            username: 'userNGG'
        })
    }

    render() {
        return (
            <>
                <div>
                    <h1>Belajar State</h1>
                    <hr/>
                </div>
                <div className='row'>
                    <div className='col'>
                        {/* read state dalam render */}
                        Lihat Perubahan set Data &gt; Username : {this.state.username}
                    </div>
                    <button onClick={this.setUsername}>Set Username</button>
                </div>
            </>
        )
    }
}

export default Users