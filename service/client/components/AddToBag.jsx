import React from 'react'

class AddToBag extends React.Component {
    constructor(props){
        super(props)
        this.state={
outfit:[]
        }

    }
    render() {
        return (
            <div class="buy-button-container btn-positi">
            <a class="buy-button" id="explosion">Add to bag</a>
            <canvas id="exploding-canvas" class="party-explosion" width="200" height="200"> </canvas>
        </div>
        )
    }
}


export default AddToBag ; 