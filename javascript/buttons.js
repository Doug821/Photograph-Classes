function mediaControl() {
    let button1 = document.querySelector('.button1');

    button1.addEventListener('click', () => {
        let video1 = document.querySelector('.videoItem1');
        let buttonItem1Play = document.querySelector('.play1');
        let buttonItem1Pause = document.querySelector('.pause1');

        if (video1.paused) {
            buttonItem1Play.style.opacity = 0;
            buttonItem1Pause.style.opacity = 1;
            video1.play();
        } else {
            buttonItem1Pause.style.opacity = 0;
            buttonItem1Play.style.opacity = 1;
            video1.pause();
        }
    })

    let button2 = document.querySelector('.button2')
    button2.addEventListener('click', () => {
        let buttonItem2Play = document.querySelector('.play2');
        let buttonItem2Pause = document.querySelector('.pause2');
        let video2 = document.querySelector('.videoItem2')

        if (video2.paused) {
            buttonItem2Play.style.opacity = 0;
            buttonItem2Pause.style.opacity = 1;
            video2.play();
        } else {
            buttonItem2Pause.style.opacity = 0;
            buttonItem2Play.style.opacity = 1;
            video2.pause();
        }
    })
}

mediaControl();