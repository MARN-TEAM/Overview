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
     selectedIndex:0,
     organised:[],
     selectedSize:0
    }
    this.changeSelectedIndex=this.changeSelectedIndex.bind(this)
    this.changeSelectedsize=this.changeSelectedsize.bind(this)
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
  console.log("results",res.data.results)
for (var i=0;i<res.data.results.length;i++){
  var element = {color:res.data.results[i].name,photos:res.data.results[i].photos}
  var xq = []
  for (var key in res.data.results[i].skus){
    xq.push(res.data.results[i].skus[key])
      }
      element.sizexquantity=xq 
      
      storage.push(element)
      
}



  
this.setState({
  
 organised:storage
})
console.log(this.state.organised,'eee')


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
 name:[res.data.results]
})

}

)
}
changeSelectedIndex(i){
  this.setState({
    selectedIndex:i
  })
}
changeSelectedsize(i){
  this.setState({
    selectedSize:i
  })
}
    render() {
        return (
            <div >
<div className="row">
  <div className="col-8 image-pos "> 
<ImageGal organised={this.state.organised} selectedIndex={this.state.selectedIndex}/>
  </div>
  <div   className="col-4 info-pos " >
      <Rating/>
      <Infos data={this.state.data}/>
      <Colors changeSelected={this.changeSelectedIndex} organised={this.state.organised} images={this.state.images} />
    <div className="row position-size-and-quantity" ><Size organised={this.state.organised} selectedIndex={this.state.selectedIndex} selectedSize={this.changeSelectedsize} /><Quantity organised={this.state.organised} selectedIndex={this.state.selectedIndex} selectedSize={this.state.selectedSize}/></div> 
    <div className="row position-addtobag-and-favorite"> <AddToBag/><Favorite/></div>
  </div>
</div>
            </div>
        )
}}

export default Structure ;


