import React, { Component } from 'react'

class Rating extends React.Component {
    render() {
        return (
            <div className="position-star-rating">
        <div   className="star-rating" >
      <div className="star-rating__wrap">
        <input className="star-rating__input" id="star-rating-5" type="radio" name="rating" value="5"/>
        <label className="star-rating__ico fa fa-star-o fa-lg" title="5 out of 5 stars"></label>
        <input className="star-rating__input" id="star-rating-4" type="radio" name="rating" value="4"/>
        <label className="star-rating__ico fa fa-star-o fa-lg"  title="4 out of 5 stars"></label>
        <input className="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3"/>
        <label className="star-rating__ico fa fa-star-o fa-lg"  title="3 out of 5 stars"></label>
        <input className="star-rating__input" id="star-rating-2" type="radio" name="rating" value="2"/>
        <label className="star-rating__ico fa fa-star-o fa-lg"  title="2 out of 5 stars"></label>
        <input className="star-rating__input" id="star-rating-1" type="radio" name="rating" value="1"/>
        <label className="star-rating__ico fa fa-star-o fa-lg"  title="1 out of 5 stars"></label>
        
      </div>
      
    </div>
    <h6 className="rating-sent-pos" >Read all reviews</h6>
            </div>
        )
    }
}

export default Rating ;