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