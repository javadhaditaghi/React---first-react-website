import "./video.css"


const VideoContainer = () => {
    return (
        <div className="container my-5 pt-3 position-relative">
            <div className="video-wrapper d-flex justify-content-center">
                <video width="70%" poster="../../../src/assets/videoPoster.webp" >
                    <source src="path/to/your/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <img src="../../../src/assets/videoPlayer.png"></img>
            </div>


        </div>
    )


}

export default VideoContainer