import React from 'react'
import Rating from './Rating.jsx'
import Infos from './Infos.jsx'
import Colors from './colors.jsx'
import Size from './Size.jsx'
import Quantity from './Quantity.jsx'

class Structure extends React.Component {
    render() {
        return (
            <div>
<div className="row">
  <div className="col-8"> 

  </div>
  <div className="col-4">
      <Rating/>
      <Infos/>
      <Colors/>
      <Size/>  <Quantity/>
    
  </div>
</div>
            </div>
        )
}}

export default Structure ;