import React from 'react'

class Infos extends React.Component {
    constructor(props){
        super(props)
        this.state={
            category:"",
            name:"",
            price:""
        }
    }
    render() {
        return (
            <div>
                <h6 className="category-font row infos-position " >C A T E G O R Y</h6>
                <h5  className="category-font row infos-position " >Product Name</h5>
                <h6  className="category-font row infos-position " >50$</h6>
            </div>
        )
    }
}
export default Infos ;