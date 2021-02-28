import "./IntroVideo.css"
function IntroVideo(props){
    return (
        <video id="IntroVideo" type="video/mp4" autoPlay muted playsInline 
        onEnded={(e)=>{
                e.target.play();
                localStorage.setItem("returned","true")
                props.setReturned(true)
            }}>
            <source src="./welcome-home.mp4" type="video/mp4"></source>
            html5 video not supported
        </video>
    )
}

export default IntroVideo