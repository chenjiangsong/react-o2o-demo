import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        const props = this.props
        return (
             <p>{props.title + 1}</p>
        )
    }
}

export default Header