//DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

    let tl1 = new TimelineMax();

    tl1
        .fromTo('.nav-wrapper', 2, { width: '0%', opacity: 0 }, {
            width: '100%', opacity: 1, ease: Expo.easeInOut
        })

        .fromTo('.background', 1,
            { opacity: 0 },
            {
                opacity: 1, ease: Power3.easeInOut
            }, '-=1')

        .fromTo('.logo', 0.7,
            { y: 50, opacity: 0, },
            {
                y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')

        .fromTo('.nav-menu', 0.7,
            { y: 50, opacity: 0, },
            {
                y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')

        .fromTo('.item-1', 0.7,
            { y: 50, opacity: 0, },
            {
                y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')

        .fromTo('.item-2', 0.7,
            { y: 50, opacity: 0, },
            {
                y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')

        .fromTo('.item-3', 0.7,
            { y: 50, opacity: 0, },
            {
                y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')

        .fromTo('.item-4', 0.7,
            { x: -50, opacity: 0, },
            {
                x: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')

        .fromTo('.item-5', 0.7,
            { y: 50, opacity: 0, },
            {
                y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')
})