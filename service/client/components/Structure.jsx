import React from 'react'
import Rating from './Rating.jsx'
import Infos from './Infos.jsx'
import Colors from './colors.jsx'
import Size from './Size.jsx'
import Quantity from './Quantity.jsx'
import AddToBag from './AddToBag.jsx'
import Favorite from './Favorite.jsx'

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
    <div className="row position-size-and-quantity" ><Size/><Quantity/></div> 
    <div className="row position-addtobag-and-favorite"> <AddToBag/><Favorite/></div>
  </div>
</div>
            </div>
        )
}}

export default Structure ;