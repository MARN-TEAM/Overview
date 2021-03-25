import React from 'react'

class Quantity extends React.Component {
    constructor(props){
        super(props)
this.state={
quantity:[]

}
    }
    render() {
        return (
            <div className="position-quantity">
      <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  1
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item" type="button">1</button>
  </div>
</div>
            </div>
        )
    }
}


export default Quantity ; 