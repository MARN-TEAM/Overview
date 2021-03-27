import React from 'react'

class ImageGal extends React.Component {
constructor(props){
  super(props)
  this.state={
  image:[]


  }



}
render() {
  if (this.props.organised.length>0){
    var images = this.props.organised[this.props.selectedIndex].photos
        return (
            <div>
              <h6 className="mes-mes" >SITE-WIDE ANNOUCEMENT MESSAGE - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT</h6>
 <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
  <div className="carousel-inner">
    {images.map((element,index)=>
     <div className={(index == 0)?"carousel-item active" : "carousel-item"} key={index}>
     <img src={element.url} className="d-block w-100" padding='100%' height="500vh" />
   </div>
    )}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
            </div>
        )
    }else{
return <div> </div>

    }
  
  }
}
export default ImageGal ;