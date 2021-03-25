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
     name:[],
     color:[],
     sizexquantity:[]
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
 name:[res.data.results[0].name]
})

         axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles', {
  headers:{
      Authorization: token
  }
}) 
.then((res)=>{
  var storage=[]
  console.log("zaza",res.data.results)
for (var i=0;i<res.data.results.length;i++){
  var element = {color:res.data.results[i].name}
  var xq = []
  for (var key in res.data.results[i].skus){
    xq.push(res.data.results[i].skus[key])
      }
      element.sizexquantity=xq
      storage.push(element)
}


  
this.setState({
  
  sizexquantity: storage[0].sizexquantity
})
})
}

)
axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles', {
  headers:{
      Authorization: token
  }
}) 
.then((res)=>{
this.setState({
 name:[res.data.results[0].name]
})

         axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles', {
  headers:{
      Authorization: token
  }
}) 
.then((res)=>{
this.setState({
  color: [res.data.results]
})
console.log(this.state.color)
})
}

)
}
    render() {
        return (
            <div >
<div className="row">
  <div className="col-8"> 
<ImageGal images={this.state.images}/>
  </div>
  <div   className="col-4" >
      <Rating/>
      <Infos data={this.state.data}/>
      <Colors name={this.state.name}/>
    <div className="row position-size-and-quantity" ><Size size={this.state.sizexquantity}/><Quantity quantity={this.state.sizexquantity}/></div> 
    <div className="row position-addtobag-and-favorite"> <AddToBag/><Favorite/></div>
  </div>
</div>
            </div>
        )
}}

export default Structure ;