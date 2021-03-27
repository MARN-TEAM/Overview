import React from 'react'

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            search:""
        }
this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            search:e.target.value
        })
    }
 
    render() {
        return (
            <div >
                <nav className="navbar navbar-light bg-light justify-content-between " >
                <a className="navbar-brand logo-colorrrr" style={{color:"white"}}>Logo</a>
                <form className="form-inline">
                   <input onChange={this.props.handleChange} className="input-styling"  ></input>
                   <button className="fa fa-search" style={{backgroundColor:"transparent" , color:"white" , border:"none"}}></button>


                  
                </form>
                </nav>
          </div> 
        )
    }
}

export default  Navbar ;