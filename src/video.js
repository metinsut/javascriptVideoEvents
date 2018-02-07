import React, {Component} from 'react';

class Video extends Component {

    videoVolume = 10;
    vidoeDuration = null;
    videoTime = 0;

    play = () => {
        this.refs.video.play()
    };
    pause = () => {
        this.refs.video.pause()
    };
    mute = () => {
        if (this.refs.video.muted === false) {
            this.refs.video.muted = true;
            this.forceUpdate();
        }
        else {
            this.refs.video.muted = false;
            this.forceUpdate();
        }
    };


    onchange = (e) => {
        this.videoVolume = e.target.value;
        this.refs.video.volume = e.target.value / 10;
        this.forceUpdate();
    };

    onchangeTime = (e) => {
        this.videoTime = e.target.value;
        this.refs.video.currentTime = e.target.value;

    };

    componentDidMount() {

        this.refs.video.onloadeddata = () => {
            this.vidoeDuration = this.refs.video.duration;
            this.videoTime = this.refs.video.currentTime;
            this.forceUpdate();
        };

        this.refs.video.ontimeupdate = () => {
            this.videoTime = this.refs.video.currentTime;
            this.forceUpdate();
        };

        this.refs.video.onvolumechange = () => {
            this.videoVolume = (this.refs.video.volume * 10).toFixed(0);
            this.forceUpdate();
        };

        this.forceUpdate();

    }

    componentWillUnmount() {
        this.refs.video.onloadeddata = () => {
        };
        this.refs.video.ontimeupdate = () => {
        };
        this.refs.video.onvolumechange = () => {
        };
    }


    render() {
        return (
            <main>
                <div className="videoContentBlock">

                    <div className="videoBlock">
                        <video
                            id="video"
                            controls
                            // autoPlay
                            ref="video"
                            width="720"
                            height="auto"
                            poster="http://via.placeholder.com/720x400"
                        >
                            <source src="http://mailingtest01.gulenayva.com/videos/video.mp4" type="video/mp4"/>
                        </video>
                    </div>

                    <div className="settingsBlock">
                        <div className="buttonBlock">
                            <div className="button" onClick={this.play}>PLAY</div>
                            <div className="button" onClick={this.pause}>PAUSE</div>
                            <div className="button" onClick={this.mute}>MUTE</div>
                        </div>
                        <div className="volumeBLock">
                            <div className="volume">
                                <p>VOLUME: {this.videoVolume}</p>
                            </div>
                            <div className="inputBlock">
                                <input
                                    className="range"
                                    type="range"
                                    min="0"
                                    max="10"
                                    value={this.videoVolume}
                                    onChange={this.onchange}
                                />
                            </div>
                        </div>
                        <div className="timeBLock">
                            <p>TOTAL-TIME: {this.vidoeDuration}</p>
                        </div>
                        <div className="timeBLock">
                            <p>CURRENT-TIME: {this.videoTime}</p>
                            <div className="inputBlock">
                                <input
                                    className="range"
                                    type="range"
                                    min="0"
                                    max={this.vidoeDuration}
                                    value={this.videoTime}
                                    onChange={this.onchangeTime}
                                />
                            </div>
                        </div>

                    </div>


                </div>
            </main>
        );
    }
}

export default Video;
