


const VideoContainer = () => {
    return (
        <div className="container d-flex justify-content-center my-5 pt-3">
            <video width="70%" controls poster="../../../src/assets/videoPoster.webp" >
                <source src="path/to/your/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )


}

export default VideoContainer