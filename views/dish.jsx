import React, { Component } from 'react'

class dish extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dish: {}
        }
        
    }

    componentWillMount() {
        fetch()
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default dish
