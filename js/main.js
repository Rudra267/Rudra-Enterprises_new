function card_scroll(){
     const track = document.getElementById('sliderTrack');
    const cards = document.querySelectorAll('.card');
    const cardCount = cards.length;

    let index = 0;
    const visibleCards = 3; // how many visible at a time
    const cardWidth = cards[0].offsetWidth + 20; // width + margin

    function moveSlider() {
      index++;
      if (index > cardCount - visibleCards) {
        index = 0; // reset
      }
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    setInterval(moveSlider, 3000); // change every 3s
}

card_scroll();