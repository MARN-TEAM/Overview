import React from 'react'
import Navbar from './Navbar.jsx'
import Structure from './Structure.jsx'


class App extends React.Component{
   constructor(props){
       super(props)
       this.state={
       }
   }
 


    render(){
        return(
            <div>
            <Navbar/>
            <Structure/>
            </div>
        )
    }
}

export default App;