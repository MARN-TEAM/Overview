import React from 'react';

class Colors extends React.Component {
    constructor(props){
        super(props)
        this.state={
            index:0
        }
    }
  
   handleClick(i){
        this.setState({index:i})
this.props.changeSelected(i)
    }


    render() {
 console.log(this.props.organised,"orggg")
        if (this.props.organised.length>0){
            return (

                <div className="styling-pos"> 
         
        
                 <div>Style : {this.props.organised[this.state.index].color}</div>
                
                     <div className="circle-pos-pos">
                     <div className="row">
                     <div className="circle" onClick={()=>this.handleClick(0)}></div>
                     <div className="circle2"onClick={()=>this.handleClick(1)}></div>
                     <div className="circle3"onClick={()=>this.handleClick(2)}></div>
                     <div className="circle4"onClick={()=>this.handleClick(3)} ></div>
                     </div>
                     <div className="row">
                     <div className="circle5"onClick={()=>this.handleClick(4)} ></div>
                     <div className="circle6"onClick={()=>this.handleClick(5)} ></div>
                     </div>
                     </div>
         
                    </div>

            )
        }else{
            return <div></div>
        }}
        
        }

export default Colors ;