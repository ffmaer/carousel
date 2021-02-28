import {useState} from 'react'
import Carousel from './Carousel'

function LandingPage(){
    const [entered, setEntered] = useState(false);
        if(!entered){
        return (
            <>
                <div>Welcome!</div>
                <button onClick={(e)=>{setEntered(true)}}>Enter</button>
                <button onClick={(e)=>{localStorage.removeItem("returned");window.location.reload("/")}}>假如人生只如初见</button>
            </>
        )
    }else{
        return (
            <Carousel/>
        )
    }
  
}

export default LandingPage