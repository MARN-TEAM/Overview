import React from 'react'

class Size extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
    render() {
  console.log("yy",this.props.size)
        return (

         
          <div className="size-position">
            <select  >
 {this.props.size.map((element,i)=>
   <option key={i}>{element.size}</option>
 )}
  </select>

     
          </div>
        )
    }
}

export default Size ;