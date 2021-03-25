import React from 'react';

class Colors extends React.Component {
    
    render() {
        return (
            <div className="styling-pos"  >
                {this.props.name.map((e,i)=>
                <div key={i}>
                 <h6> Style :{e}</h6>
                 <div className="circle"></div>
                </div>
                )}
               
            </div>
        )
    }
}

export default Colors ;