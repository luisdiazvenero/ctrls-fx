(function () {
  let pinged = false;
  let nav = document.querySelector('.nav');
  let stickyScrollPoint = document.querySelector('.hero-image').offsetHeight;
  console.log(stickyScrollPoint);

  let coords = nav.getBoundingClientRect();
  console.log(coords);

  function pingToTop() {
    if(pinged) return;

    nav.classList.add('pinned');
    pinged = true;
  }

  function unPingFromTop() {
    console.log(pinged);
    if(!pinged) return;

    nav.classList.remove('pinned');
    pinged = false;
  }

  window.addEventListener('scroll', function(ev) {
    let coords =nav.getBoundingClientRect();

    if(window.scrollY <= stickyScrollPoint) return unPingFromTop();
    if(coords.top <= 0) return pingToTop();

    unPingFromTop();
  })

}) ();
