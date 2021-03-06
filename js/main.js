//Flip scrollwheel so horizontal scroll triggers regardless of scroll direction
//Thanks Tim! : http://tim-davidson.com/
if(window.innerWidth > 959){
(function() {
    function horizontal(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.documentElement.scrollLeft -= (delta*40);
      document.body.scrollLeft -= (delta*40);
      e.preventDefault();
    }
    if (window.addEventListener) {
      // IE9, Chrome, Safari, Opera
      window.addEventListener("mousewheel", horizontal, false);
      // Firefox
      window.addEventListener("DOMMouseScroll", horizontal, false);
    } else {
      // IE 6/7/8
      window.attachEvent("onmousewheel", horizontal);
    }
    })();

    /*

    //Vertical -> horizontal scroll attempts

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
*/

var overlay = new ScrollMagic.Controller({vertical: false});

//animation.
var force = new TimelineMax();
force.to('#force-l', 0.3, {transformOrigin: "50% 50%", scale:4}, 0.1)
.to('#force-r', 0.3, {transformOrigin: "50% 50%", scale:4}, 0.1)
.fromTo('.overlay', 0.5, {scale:0, transformOrigin:"50% 50%", ease:"Back.easeIn", borderRadius:"100%"}, {transformOrigin:"50% 50%", display:"block", borderRadius:"0", scale:1},0.15);


//scene
var overlayTrigger = new ScrollMagic.Scene({
  triggerElement: "#force",
  reverse: false,
  offset:30,
})
/*
.on("end", function (e) {
    if (e.scrollDirection == "FORWARD") {
      force.play();
    }
  })
  */
.setTween(force)
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

    
  var closeOverlay = new TimelineMax({paused:true});
  closeOverlay.to('.overlay', 1, {scale:0, transformOrigin:"50% 50%", ease:"Back.easeIn", borderRadius:"100%"});
  
  $('#close-overlay').on('click', function(event) {
      force.reverse();
  });
}






/* SPOTLIGHT */
var spotlightEnter = new TimelineMax();
spotlightEnter.from('#spotlight-beam', 0.75, {transformOrigin:"0% 100%", rotation:-70, ease:"Back.easeOut",opacity:0})
.from('.spotlight-content', 0.4, {opacity:0}, 0.5)
.from('#super',0.4,{y:-1400, ease:"Back.easeOut"},0.5)
.from('.btn-svg', 0.4,{transformOrigin:"50% 50%", ease:"Elastic.easeOut", scale:2, opacity:0});


/* BUTTON HOVER */
var btnHover = new TimelineMax({paused: true});
btnHover.to('.btn-svg', 0.5, {transformOrigin:"50% 50%", ease: "Back.easeOut", scale:1.05}, 0)
.to('.btn-fill', 0.5,{transformOrigin:"50% 50%", fill:"#ff0000", ease: "Back.easeOut"}, 0)
.to('.btn-text', 0.5,{transformOrigin:"50% 50%", fill:"#fff", ease: "Back.easeOut"}, 0)


$(".btn-svg").hover(function(){
    btnHover.play();
},function(){
    btnHover.reverse();
})


var clickHover = new TimelineMax({paused: true});
clickHover.to('.click', 0.4, {transformOrigin:"50% 50%", ease: "Back.easeOut", scale:1.05}, 0)

$(".click").hover(function(){
    clickHover.play();
},function(){
    clickHover.reverse();
})


var navHover = new TimelineMax({paused: true});
navHover.from('#nav-dl', 0.4, {ease:"Back.easeOut",opacity:0,scale:0.8,left:'1em'}, 0)
.to('#logo-nav', 0.4, {scale:1.035, ease: "Back.easeOut"},0);

$(".nav").hover(function(){
    navHover.play();
},function(){
    navHover.reverse();
})


  /* CLICK */
var shrink = new TimelineMax({paused:true});
shrink.fromTo('#zing', 0.2, {transformOrigin:"100% 0%", scale:0},{scale:1,ease:"Elastic.easeOut"})
.to('#robot', 0.6, {transformOrigin:"70% 100%", scale:0.3, ease:"Bounce.easeOut"});

$('#powers').on('click', function(event) {
  shrink.play();
  });

  var flame = new TimelineMax({paused:true});
  flame.fromTo('.flame', 0.4, {transformOrigin:"50% 100%", scale:0},{transformOrigin:"50% 100%", scale:1, ease:"Back.easeOut"})
  .fromTo('#kaboom',0.4,{scale:0,transformOrigin:"30% 60%"},{scale:1.2, ease:"Elastic.easeOut"},'-=0.3')
  .to('#kaboom',0.2,{rotation:5, yoyo:true, repeat:1, ease:"Back.easeIn"},'-=0.4')
  .to('.flame', 0.6, {transformOrigin:"50% 100%", scale:1.035, ease:"Power0.easeIn",repeat:-1, yoyo:true});

  $('#scientist').on('click', function(event) {
    flame.play();
    });

  var boom = new TimelineMax({paused:true});
  boom.to('.city-buildings', 0.6, {y:300,ease:"Bounce.easeOut"})
  .fromTo('#kaboom',0.4,{scale:0,transformOrigin:"30% 60%"},{scale:1.2, ease:"Elastic.easeOut"},'-=0.3')
  .to('#kaboom',0.2,{rotation:5, yoyo:true, repeat:1, ease:"Back.easeIn"},'-=0.4');

  $('#remote').on('click', function(event) {
    boom.play();
    });

  var laserBlast = new TimelineMax({paused:true});
  laserBlast.fromTo('#laser-blast', 0.5, {opacity:0, scale:0.4, transformOrigin:"0% 100%", ease:"Bounce.easeOut"}, {opacity:1, scale:1, ease:"Bounce.easeOut"},0)
  laserBlast.to('.background', 0.1, {ease:"Bounce.easeOut", fill:'#000', opacity:0.6,repeat:4, yoyo:true},'-=0.3');

  $('#laser-button').on('click', function(event) {
    laserBlast.play();
    });




/* HERO ENTRIES */
var heroEntries = new ScrollMagic.Controller({vertical: false});

var agentEntry = new TimelineMax();
agentEntry.from('#agent', 0.4, {y:400, transformOrigin:"50% 100%", scaleY:0.01, ease:"Back.easeOut"})
agentEntry.from('#bang', 0.4, {y:700, ease:"Back.easeOut"},0)

    //scene
    var agent = new ScrollMagic.Scene({
        triggerElement: "#agent",
        reverse: false,
      })
      .setTween(agentEntry)
      .addTo(heroEntries);

var robotEntry = new TimelineMax();
robotEntry.from('#robot', 0.4, {y:-2200, ease:"Bounce.easeOut"});
/*.to('.background',0.1,{rotation:-2,yoyo:true,repeat:1,ease:"Bounce.easeOut"})
.to('.background',0.1,{rotation:0,yoyo:true,repeat:1,ease:"Bounce.easeOut"}); */
      //scene
      var robot = new ScrollMagic.Scene({
          triggerElement: "#robot",
          reverse: false,
          offset:200,
        })
        .setTween(robotEntry)
        .addTo(heroEntries);

var powersEntry = new TimelineMax();
powersEntry.from('#powers', 0.4, {ease:"Back.easeOut", x:100,y:-950});
      //scene
      var powers = new ScrollMagic.Scene({
          triggerElement: "#powers",
          reverse: false,
          offset:-100,
        })
        .setTween(powersEntry)
        .addTo(heroEntries);

var hammerEntry = new TimelineMax();
hammerEntry.from('#hammer', 0.4, {ease:"Back.easeOut", opacity: 0, x:600,y:-300});
      //scene
      var hammer = new ScrollMagic.Scene({
          triggerElement: "#hammer",
          reverse: false,
          offset:-600
        })
        .setTween(hammerEntry)
        .addTo(heroEntries);

var pyroEntry = new TimelineMax();
pyroEntry.from('#scientist', 0.4, {ease:"Back.easeOut", transformOrigin:"50% 100%", y:400, scaleY:0.01});
      //scene
      var pyro = new ScrollMagic.Scene({
          triggerElement: "#scientist",
          reverse: false,
        })
        .setTween(pyroEntry)
        .addTo(heroEntries);

var insanityEntry = new TimelineMax();
insanityEntry.from('#insanity', 0.4, {y:-1400, ease:"Bounce.easeOut"});
      //scene
      var insanity = new ScrollMagic.Scene({
          triggerElement: "#insanity",
          reverse: false,
        })
        .setTween(insanityEntry)
        .addTo(heroEntries);

var dualEntry = new TimelineMax();
dualEntry.from('#armour', 0.4, {ease:"Back.easeOut", y:-1400, x:800}, 0)
.from('#punch', 0.4, {ease:"Back.easeOut", y:-1400,x:-800}, 0);

      //scene
      var dual = new ScrollMagic.Scene({
          triggerElement: "#armour",
          reverse: false,
          offset:-700,
        })
        .setTween(dualEntry)
        .addTo(heroEntries);

var villainEntry = new TimelineMax();
villainEntry.from('#laser', 0.4, {ease:"Back.easeOut", transformOrigin:"50% 100%", y:400,scaleY:0})
.from('#villain', 0.4, {ease:"Bounce.easeOut", y:-1400}, 0.2);
      //scene
      var villain = new ScrollMagic.Scene({
          triggerElement: "#villain",
          reverse: false,
          offset:-200,
        })
        .setTween(villainEntry)
        .addTo(heroEntries);

var sidekickEntry = new TimelineMax();
sidekickEntry.from('#sidekick', 0.4, {ease:"Back.easeOut", y:400,transformOrigin:"50% 100%",scaleY:0.2});
      //scene
      var sidekick = new ScrollMagic.Scene({
          triggerElement: "#sidekick",
          reverse: false,
        })
        .setTween(sidekickEntry)
        .addTo(heroEntries);

var forceEntry = new TimelineMax();
forceEntry.from('#force', 1, {ease:"Back.easeOut", opacity:0});
      //scene
      var forceEnter = new ScrollMagic.Scene({
          triggerElement: "#force",
          reverse: false,
          offset: -150,
        })
        .setTween(forceEntry)
        .addTo(heroEntries);


/* HERO ANIMATIONS */
var superCape = new TimelineMax({repeat: -1, yoyo:true,repeatDelay:0.2});
superCape.to('#super-cape', 0.6, {transformOrigin:"100% 40%", scaleX:1.035, ease:"Power0.easeIn"});

var shoot = new TimelineMax({repeat:-1, repeatDelay:0.9, paused:true});
shoot.fromTo('#b1', 0.6, {transformOrigin:"0% 100%", scale:0},{scale:1,ease:"Elastic.easeOut"})
shoot.fromTo('#b2', 0.6, {transformOrigin:"0% 100%", scale:0},{scale:1,ease:"Elastic.easeOut"},'-=0.2');

var agentFire = new TimelineMax({repeatDelay:0.2});
agentFire.to('#agent-arm', 1, {rotation:-3, transformOrigin: "0% 50%", ease:"Back.easeIn", repeat: -1, yoyo:true}, 0)
.add(shoot.play());

var robotStomp = new TimelineMax({repeat: -1, repeatDelay:1});
robotStomp.to('#stomp', 0.4, {rotation:-5, transformOrigin: "30% 100%"})
robotStomp.to('#stomp', 0.4, {rotation:0, transformOrigin: "30% 100%", ease:"Bounce.easeOut"})
robotStomp.to('#stomp', 0.4, {rotation:5, transformOrigin: "70% 100%"},'+=0.4')
robotStomp.to('#stomp', 0.4, {rotation:0, transformOrigin: "70% 100%", ease:"Bounce.easeOut"})
/*.to('.city-buildings',0.1,{rotation:2,ease:"Bounce.easeOut"},"-=0.1")*/
;

var powersFlame = new TimelineMax({repeat: -1, yoyo:true});
powersFlame.to('#powers', 1,{transformOrigin: "50% 50%",rotation:-1, ease:"Power0.easeIn",repeatDelay:0.2}, 0)
.to('#powers-hair', 1,{transformOrigin: "100% 100%",scaleX:1.1, ease:"Power0.easeIn"}, 0)
.to('#powers-flame', 1,{transformOrigin: "100% 100%",scale:1.2, ease:"Power0.easeIn"}, 0.1)
.to('#powers-belt', 1,{transformOrigin: "100% 0%",rotation:5, ease:"Power0.easeIn",repeatDelay:0.2}, 0);

var hammerThrow = new TimelineMax({repeat: -1, yoyo:true,repeatDelay:0.2});
hammerThrow.to('#hammer-hand', 0.6, {transformOrigin:"50% 80%", rotation:10, ease:"Power0.easeIn"});

var pyroFlame = new TimelineMax({repeat: -1, yoyo:true,repeatDelay:0.2});
pyroFlame.to('#flamethrower', 0.6, {transformOrigin:"0% 80%", scaleX:1.1, ease:"Power0.easeIn"});

var insanityHead = new TimelineMax({repeat: -1, yoyo:true});
insanityHead.to('#insanity-head', 1, {x:-5, y:-5, ease:"Power0.easeIn",repeatDelay:0.6})
.to('.bubbles', 1, {x:3, y:-3, ease:"Power0.easeIn",repeatDelay:0.6},0)
.to('#insanity-arm-l', 0.8, {transformOrigin:"100% 60%", rotation:5,ease:"Back.easeIn", repeatDelay:0.2},0)
.to('#insanity-arm-r', 0.8, {transformOrigin:"0% 60%", rotation:-10,ease:"Back.easeIn", repeatDelay:0.2},0);

var glow = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0.2});
glow.from('.glow', 0.4, {scale:1.1, opacity:0.8,transformOrigin:"50% 50%"},0);

var armourGlow = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0.2});
armourGlow.to('.armour-glow', 0.6, {fill:'red',ease:"Power0.easeIn"},0)
.to('.armour-hair', 0.6,{transformOrigin: "0% 50%",scale:1.035, ease:"Power0.easeIn"}, 0);

var punchArm = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0.2});
punchArm.to('#punch-arm', 0.4,{x:-10,scale:1.2,ease:"Back.easeOut"})
.fromTo('#punch-arm', 0.4,{x:-80},{transformOrigin: "0% 50%",scaleX:1.2, ease:"Back.easeOut"});

var villainLaugh = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0.2});
villainLaugh.to('#villain-l', 0.8, {transformOrigin:"100% 60%", rotation:11,ease:"Back.easeOut"},0)
.to('#villain-r', 0.8, {transformOrigin:"0% 60%", rotation:-11,ease:"Back.easeOut"},0);

var staffTwirl = new TimelineMax({repeat: -1, yoyo:true,repeatDelay:0.1});
staffTwirl.fromTo('#staff', 1, {transformOrigin:"65% 60%", rotation:5, ease:"Power0.easeIn"},{transformOrigin:"65% 60%", rotation:-10, ease:"Power0.easeIn"})
.to('#sidekick-tassle', 1,{transformOrigin: "100% 0%",rotation:6, ease:"Power0.easeIn"}, 0);

var forceHair = new TimelineMax({repeat: -1, yoyo:true, repeatDelay:0.1});
/*forceHair.to('#force-hair', 1,{transformOrigin: "30% 0%",scaleX:1.035, ease:"Power0.easeIn"}, 0)*/
forceHair.to('#force-l', 0.8, {transformOrigin: "50% 50%", scale:1.2}, 0)
.to('#force-r', 0.8, {transformOrigin: "50% 50%", scale:1.2}, 0);


/* TEXT BOX TRIGGER */
var textBoxTriggers = new ScrollMagic.Controller({vertical: false});
    
    //loops it through all elements with class
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
        .addTo(textBoxTriggers);
    });
