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
            <div>
                <button className="button-add-bag"> ADD TO BAG +</button>
            </div>
        )
    }
}


export default AddToBag ; 