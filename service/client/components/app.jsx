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
            <h6 className="mes-mes" >SITE-WIDE ANNOUCEMENT MESSAGE - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT</h6>
            <Structure/>
            </div>
        )
    }
}

export default App;