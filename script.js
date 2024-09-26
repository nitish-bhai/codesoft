
gsap.to("#container10 h1",{
    transform:"translate(-180%)",
    scrollTrigger:{
        trigger:"#container10",
        scroller:"body",
        markers:false,
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true

    }
   

})