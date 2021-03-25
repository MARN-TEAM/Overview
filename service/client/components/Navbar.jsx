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
                <a className="navbar-brand">Logo</a>
                <form className="form-inline">
                    <input onChange={this.handleChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </nav>
          </div> 
        )
    }
}

export default  Navbar ;