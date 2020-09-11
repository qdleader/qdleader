```
 <div class="middle-box">
	<img class='player-needle' src="./player-needle.png" alt="">
	<div :class="{'pic-box':true,'pic-box-move':isPlay}">
		<img src="./img-test.jpg" alt="" class="album-pic">
		<div></div>
	</div>
</div>
```

```
// 音频播放开始
.middle-box {
        // overflow: hidden;
        position: relative;
        transform: scale(0.7);
        margin-top: -1rem;
}

.player-needle {
    width: 18%;
    position: absolute;
    top: -1rem;
    left: 45%;
    z-index: 20;
}

.pic-box {
    position: relative;
    width: 70%;
    height: 0;
    left: 0;
    top:0;
    z-index: 9;
    padding-bottom: 70%;
    border-radius: 50%;
    border: 10px solid rgba(255,255,255,0.2);
    margin: 0 auto;
    margin-top: 9%;
    text-align: center;
    // transition:5s linear 1s normal none infinite rotate;
        // animation: circling 20s linear infinite;
}
.pic-box-move {
    position: relative;
    width: 70%;
    height: 0;
    left: 0;
    top:0;
    z-index: 9;
    padding-bottom: 70%;
    border-radius: 50%;
    border: 10px solid rgba(255,255,255,0.2);
    margin: 0 auto;
    margin-top: 9%;
    text-align: center;
    // transition:5s linear 1s normal none infinite rotate;
    animation: circling 20s linear infinite;
}
.pic-box .album-pic {
    width: 75%;
    height: auto;
    max-height: 250px;
    border-radius: 50%;
    margin-top: 15%;
}

.pic-box div {
    position: absolute;
    width: 105%;
    height: 105%;
    border-radius: 50%;
    overflow: hidden;
    top: -3px;
    left: -3px;
    background: url(./coverall.png) no-repeat;
    background-position: -5px -7px;
    background-size: 102%;
    z-index: 10;
}
@keyframes rotate {
    from {transform:rotate(0deg)}
    to{transform:rotate(360deg)}
}
@-webkit-keyframes rotate{
    from { -webkit-transform:rotate(0deg) }
    to { -webkit-transform:rotate(360deg) }
}

@keyframes circling {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}
```