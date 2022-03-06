(async function cam() {
    const constraints = {
        video: {
            width: {
                min: 1280,
                ideal: 1920,
                max: 2560,
            },
            height: {
                min: 720,
                ideal: 1080,
                max: 1440,
            },
        },
    }
    var video = document.querySelector('#video');
    const videoStream = await navigator.mediaDevices.getUserMedia(constraints)
    video.srcObject = videoStream;
    video.play();

    var windowTopBar = document.createElement('div')
    windowTopBar.style.width = "100%"
    windowTopBar.style.position = "absolute"
    windowTopBar.style.top = windowTopBar.style.left = 0
    windowTopBar.style.webkitAppRegion = "drag"
    document.body.appendChild(windowTopBar)
})()
