import React from 'react'

class Size extends React.Component {
  constructor(props){
    super(props)
    this.state={
      size:[]
    }
  }
    render() {
        return (
          <div className="size-position">
  <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   SIZE
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item" type="button"> Action </button>
  </div>
</div>
          </div>
        )
    }
}

export default Size ;