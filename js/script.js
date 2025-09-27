let mob_nav = document.querySelector('.mob-nav');

let tl = gsap.timeline();

tl.to('.mob-nav',{
    x:0,
    duration:0.5
})

tl.from('.mob-nav > ul > li',{
    y:10,
    opacity:0,
    stagger:0.2,
    duration:0.5,
})

tl.pause();


document.querySelector('.open').addEventListener('click',(e)=>{
    tl.play();
    e.target.classList.remove("open");
  e.target.classList.add("close");
})

document.querySelector('.close').addEventListener('click',(e)=>{
    tl.reverse();
   e.target.classList.add("open");
  e.target.classList.remove("close");
})



gsap.registerPlugin(ScrollTrigger);

// Animate each card image individually
gsap.utils.toArray(".featured-card").forEach(card => {
  let imgBox = card.querySelector(".image-wrap");

  gsap.fromTo(imgBox,
    { height: "0%" },
    {
      height: "100%",
      ease: "power4.out",
      duration:1.2,
      scrollTrigger: {
        trigger: imgBox,
        start: "top 30%",   // when the image enters viewport
        end: "top 0%",     // animation finishes halfway into view
               // scroll-linked animation
          // set true for debugging
      }
    }
  );
});





let graden_image = gsap.timeline({
  scrollTrigger:{
    trigger:".garden",
    start:"50% 50%",
    end:"50% 20%",
    // markers: true, 
    pin:true,
    scrub:2.8
  }
});

graden_image.to('.garden > .box',{
    height:"0%",
    duration:4,
},"none")

graden_image.to('.garden > .box > p',{
    opacity:0,
    duration:2,
},"none")
