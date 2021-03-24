import React from 'react'
import Rating from './Rating.jsx'
import Infos from './Infos.jsx'
import Colors from './colors.jsx'

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
  </div>
</div>
            </div>
        )
}}

export default Structure ;