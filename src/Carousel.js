import {useState} from 'react'
import './Carousel.css'
function Carousel(params) {
    const [picindex, setPicindex] = useState(0);
    const [start, setStart] = useState(0);
    const [end,setEnd] = useState(0);
    const PHOTO_COUNT=4
    function nextPic(e){
        setPicindex((picindex+1)%PHOTO_COUNT)
    }
    return (
        <img id='carousel' src={`./p${picindex}.jpg`} alt="inside a room" 
        onClick={nextPic}
        onTouchStart={(e)=>{setStart(e.targetTouches[0].clientX)}} 
        onTouchMove={(e)=>{setEnd(e.targetTouches[0].clientX)}}
        onTouchEnd={(e)=>{if(end-start>75) nextPic(e)}}></img>
    )
}

export default Carousel