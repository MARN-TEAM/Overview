import React from 'react'
import Rating from './Rating.jsx'
import Infos from './Infos.jsx'
import Colors from './colors.jsx'
import Size from './Size.jsx'
import Quantity from './Quantity.jsx'
import AddToBag from './AddToBag.jsx'
import Favorite from './Favorite.jsx'
import ImageGal from './ImageGal.jsx'
import axios from 'axios'
import {token} from '../../config.js'

class Structure extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
     images:[],
     colors:[],
     nums:[]
    }
  }
  componentDidMount(){
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001', {
        headers:{
            Authorization: token
        }
    }) 
.then((res)=>{
    this.setState({
        data:[res.data]
    })
   
})
axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles', {
  headers:{
      Authorization: token
  }
}) 
.then((res)=>{
this.setState({
  images:res.data.results[0].photos
})
})
axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles', {
  headers:{
      Authorization: token
  }
}) 
.then((res)=>{
this.setState({
 colors:res.data.results
})
console.log(this.state.colors)
         axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles', {
  headers:{
      Authorization: token
  }
}) 
.then((res)=>{
this.setState({
 nums:res.data.results[0].skus
})
})
}

)}
    render() {
        return (
            <div >
<div className="row">
  <div className="col-8"> 
<ImageGal images={this.state.images}/>
  </div>
  <div   className="col-4" >
      <Rating/>
      <Infos data={this.state.data} />
      <Colors/>
    <div className="row position-size-and-quantity" ><Size/><Quantity/></div> 
    <div className="row position-addtobag-and-favorite"> <AddToBag/><Favorite/></div>
  </div>
</div>
            </div>
        )
}}

export default Structure ;