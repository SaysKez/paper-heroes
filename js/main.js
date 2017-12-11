
/*

$(function() {
    $("html, body").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 30);
        event.preventDefault();
    });
});


var scroller = {};
scroller.e = document.getElementById("b");

if (scroller.e.addEventListener) {
    scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
    scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
} else scroller.e.attachEvent("onmousewheel", MouseWheelHandler);

function MouseWheelHandler(e) {

    // cross-browser wheel delta
    var e = window.event || e;
    var delta = - 20 * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));

    var pst = $('#b').scrollLeft() + delta;

    if (pst < 0) {
        pst = 0;
    } else if (pst > $('.img_holder').width()) {
        pst = $('.img_holder').width();
    }

    $('#b').scrollLeft(pst);

    return false;
}



						// init controller
						var controller = new ScrollMagic.Controller({vertical: false});

						// build tween
						var tween = TweenMax.to("#target", 0.5, {backgroundColor: "green", width: "+=400"});

						// build scene
						var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500})
										.setTween(tween)
										.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);
*/


//scrollmagic
    //init controller
    var controller = new ScrollMagic.Controller({vertical: false});
    
    //animation.
  var blockTween = new TweenMax.from('#super', 0.3, {opacity: 0});

    //scene
  var containerScene = new ScrollMagic.Scene({
      triggerElement: "#super",
      reverse: false,
    })
    .setTween(blockTween)
    .addIndicators()
    .addTo(controller);

/*
//circle
    var cicleAnimate = new TweenMax.from('#circle', 0.3, {opacity: 0});

    var circle = new ScrollMagic.Scene({
      triggerElement: "#circle",
      reverse: false,
    })
    .setTween(cicleAnimate)
    .addIndicators()
    .addTo(controller);

    */

    var agent = new TimelineMax({repeat: -1, yoyo:true, repeatDelay:0.2});
    agent.to('#agent-arm', 1, {rotation:-3, transformOrigin: "0% 50%", ease:"Back.easeIn"}, 0);
    /*
    var agentHair = new TweenMax.to('#agent-hair', 0.5, {repeat:-1, yoyo:true, rotation:3, scaleY:0.97, scaleX:0.97, transformOrigin: "100% 70%"}, 0);
*/


var overlay = new ScrollMagic.Controller({vertical: false});

//animation.
var force = new TimelineMax();
force.to('#force-l', 1, {transformOrigin: "50% 50%", scale:100,}, 0.2)
.to('#force-r', 1, {transformOrigin: "50% 50%", scale:100}, 0.2)
.fromTo('.overlay', 1, {scale:0, transformOrigin:"50% 50%", ease:"Back.easeIn", borderRadius:"100%"}, {display:"block", borderRadius:"0", scale:1});


//scene
var overlayTrigger = new ScrollMagic.Scene({
  triggerElement: "#force",
  reverse: false,
})
.setTween(force)
.addIndicators()
.addTo(overlay);


var vanishOverlay = new TimelineMax();
vanishOverlay.to('.overlay', 1, {scale:0, transformOrigin:"50% 50%", ease:"Back.easeIn", borderRadius:"100%"})
.to('.overlay', 0.1, {display:"none"});

/*
$("#close-overlay").click(function(){
    close.play();
  },function(){
    close.reverse();
  })
  */

  /*
  $("#close-overlay").on("click", function() {
    tl = TweenMax;
    tl.to('.overlay', 1, {scale:0, transformOrigin:"50% 50%", ease:"Back.easeIn", borderRadius:"100%"})
  });
  */
  

  
  var tl = new TimelineMax({paused:true});
  tl.to('.overlay', 1, {scale:0, transformOrigin:"50% 50%", ease:"Back.easeIn", borderRadius:"100%"});
  
  $('#close-overlay').on('click', function(event) {
      force.reverse();
  });

  
  /* LASER */
  /*
  var laserBlast = new TimelineMax({paused:true});
  laserBlast.fromTo('#laser-blast', 0.5, {opacity:0, scale:0.5, transformOrigin:"0% 100%", ease:"Bounce.easeOut"}, {opacity:1, scale:1, ease:"Bounce.easeOut"},0)
  .to('.background', 0.1, {backgroundColor:"#000", ease:"Back.easeIn"},0.1);

  $('#laser-button').on('click', function(event) {
    laserBlast.play();
});
*/