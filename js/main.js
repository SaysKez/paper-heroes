
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

/*
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
    */

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
  /*offset:30*/
})
/*
.on("end", function (e) {
    if (e.scrollDirection == "FORWARD") {
      force.play();
    }
  })
  */
.setTween(force)
.addIndicators()
.addTo(overlay);

/*
overlayTrigger.on('enter',function(event){
    console.log(event.scrollDirection);
});
.on("update", function() {
    var x1 = controller.info("scrollDirection");
    if ( x1 == "FORWARD") {
        force.play();
    }
    })
*/
/*
var vanishOverlay = new TimelineMax();
vanishOverlay.to('.overlay', 1, {scale:0, transformOrigin:"50% 50%", ease:"Back.easeIn", borderRadius:"100%"})
.to('.overlay', 0.1, {display:"none"});
*/
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



/* SPOTLIGHT */
var spotlightEnter = new TimelineMax();
spotlightEnter.from('#spotlight-beam', 0.75, {transformOrigin:"0% 100%", rotation:-45, ease:"Back.easeOut",opacity:0})
spotlightEnter.from('#super',0.4,{y:-800, ease:"Back.easeOut"},0.5);




/* HERO ENTRIES */
var heroEntries = new ScrollMagic.Controller({vertical: false});

/*
var agent = new TweenMax.from('#agent', 0.4, {y:-800, x:-300, ease:"Back.easeOut"}); */
var agentEntry = new TimelineMax();
agentEntry.from('#agent', 0.4, {y:300, scaleY:0.5, ease:"Back.easeOut"})

    //scene
    var agent = new ScrollMagic.Scene({
        triggerElement: "#agent",
        reverse: false,
      })
      .setTween(agentEntry)
      .addIndicators()
      .addTo(heroEntries);

var robotEntry = new TimelineMax();
robotEntry.from('#robot', 0.4, {y:-800, ease:"Bounce.easeOut"});
/*.to('.background',0.1,{rotation:-2,yoyo:true,repeat:1,ease:"Bounce.easeOut"})
.to('.background',0.1,{rotation:0,yoyo:true,repeat:1,ease:"Bounce.easeOut"}); */
      //scene
      var robot = new ScrollMagic.Scene({
          triggerElement: "#robot",
          reverse: false,
          offset:200,
        })
        .setTween(robotEntry)
        .addIndicators()
        .addTo(heroEntries);

var powersEntry = new TimelineMax();
powersEntry.from('#powers', 0.4, {ease:"Back.easeOut", x:100,y:-600});
      //scene
      var powers = new ScrollMagic.Scene({
          triggerElement: "#powers",
          reverse: false,
          offset:-100,
        })
        .setTween(powersEntry)
        .addIndicators()
        .addTo(heroEntries);

var hammerEntry = new TimelineMax();
hammerEntry.from('#hammer', 0.4, {ease:"Back.easeOut", x:600,y:-300});
      //scene
      var hammer = new ScrollMagic.Scene({
          triggerElement: "#hammer",
          reverse: false,
          offset:-600
        })
        .setTween(hammerEntry)
        .addIndicators()
        .addTo(heroEntries);

var pyroEntry = new TimelineMax();
pyroEntry.from('#scientist', 0.4, {ease:"Back.easeOut", y:400,scaleY:0.5});
      //scene
      var pyro = new ScrollMagic.Scene({
          triggerElement: "#scientist",
          reverse: false,
        })
        .setTween(pyroEntry)
        .addIndicators()
        .addTo(heroEntries);

var dualEntry = new TimelineMax();
dualEntry.from('#armour', 0.4, {ease:"Back.easeOut", y:-800, x:800}, 0)
.from('#punch', 0.4, {ease:"Back.easeOut", y:-800,x:-800}, 0);

      //scene
      var dual = new ScrollMagic.Scene({
          triggerElement: "#armour",
          reverse: false,
          offset:-700,
        })
        .setTween(dualEntry)
        .addIndicators()
        .addTo(heroEntries);

var villainEntry = new TimelineMax();
villainEntry.from('#laser', 0.4, {ease:"Back.easeOut", y:400,scaleY:0})
.from('#villain', 0.4, {ease:"Bounce.easeOut", y:-800}, 0.2);
      //scene
      var villain = new ScrollMagic.Scene({
          triggerElement: "#villain",
          reverse: false,
        })
        .setTween(villainEntry)
        .addIndicators()
        .addTo(heroEntries);

var sidekickEntry = new TimelineMax();
sidekickEntry.from('#sidekick', 0.4, {ease:"Back.easeOut", y:400,scaleY:0.2});
      //scene
      var sidekick = new ScrollMagic.Scene({
          triggerElement: "#sidekick",
          reverse: false,
        })
        .setTween(sidekickEntry)
        .addIndicators()
        .addTo(heroEntries);

var forceEntry = new TimelineMax();
forceEntry.from('#force', 0.8, {ease:"Back.easeOut", opacity:0});
      //scene
      var forceEnter = new ScrollMagic.Scene({
          triggerElement: "#force",
          reverse: false,
          offset: -150,
        })
        .setTween(forceEntry)
        .addIndicators()
        .addTo(heroEntries);


/* HERO ANIMATIONS */
var agentFire = new TimelineMax({repeat: -1, yoyo:true, repeatDelay:0.2});
agentFire.to('#agent-arm', 1, {rotation:-3, transformOrigin: "0% 50%", ease:"Back.easeIn"}, 0);


/* TEXT BOX TRIGGER */
var textBoxTriggers = new ScrollMagic.Controller({vertical: false});
    
    //loops it through all elements with fade-in class
    $('.text-box').each(function(){
    
    //animation.
    var reveal = new TimelineMax();
    reveal.from($(this), 1, {transformOrigin:"0% 50%", scaleX:0, ease:"Back.easeOut"})
    .to($(this), 0.3, {transformOrigin:"0% 50%", scaleX:0, ease:"Back.easeIn"});

    //scene
    var revealText = new ScrollMagic.Scene({
        triggerElement: this,
        duration: '60%',
        offset:-50,
        })
        .setTween(reveal)
        .addIndicators()
        .addTo(textBoxTriggers);
    });