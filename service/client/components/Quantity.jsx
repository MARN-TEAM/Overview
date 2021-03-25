import React from 'react'

class Quantity extends React.Component {
    constructor(props){
        super(props)
this.state={
}
    }
    render() {
        return (
            <div className="position-quantity">
       <select  > 
 {this.props.quantity.map((element,i)=>
 <option key={i}>{element.quantity}</option>
 )} </select>

            </div>
        )
    }
}


export default Quantity ; 