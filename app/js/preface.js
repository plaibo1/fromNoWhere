window.onload = function () {
	// ======= laxxxxx ======== //
	lax.init()

	lax.addDriver('scrollY', function () {
	  return window.scrollY
	}, { inertiaEnabled: true })
	

	  lax.addElements(".handsmash__wrap__leftHand", {
        scrollY: {
			translateX: [["elInY", "elCenterY"], [-350, -30]],
			opacity: [["elCenterY", "elOutY"], [1, 0]],
        },
      })

	  lax.addElements(".handsmash__wrap__rightHand", {
        scrollY: {
			translateX: [["elInY", "elCenterY"], [350, 30]],
			opacity: [["elCenterY", "elOutY"], [1, 0]],
        },
      })

	  // lax.addElements(".handsmash__wrap-circles", {
    //     scrollY: {
		// 	translateY: [["elInY+100", "10000"], [0, 'elOutY']],
    //     },
    //   })

	  lax.addElements(".handsmash-circleWrap__circle", {
        scrollY: {
          	scale: [["elCenterY-100", "elOutY"], [0.25, 10]],
          	// opacity: [["elCenterY-100", "elCenterY-100"], [0, 1, 1, 0]],
            opacity: [["elCenterY", "elCenterY", "elOutY"], [0,1, 0]],
        },
      })
	// ======= laxxxxx ======== //

  //  ======= line break init ====== //
lineBreak('.dialog__message__text');
lineBreak('p');
lineBreak('.message__box');
lineBreak('.box__text');
//  ======= line break init ====== //
}


function boom() {
	let handsmash = document.querySelector('.handsmash');
	let handsmash__wrap = document.querySelector('.handsmash__wrap');
	let screenHeight = document.documentElement.clientHeight;

    function debounce(func, wait, immediate) {
        let timeout;
      
        return function executedFunction() {
          const context = this;
          const args = arguments;
      
          const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
      
          const callNow = immediate && !timeout;
      
          clearTimeout(timeout);
      
          timeout = setTimeout(later, wait);
      
          if (callNow) func.apply(context, args);
        };
      };

	debounce(window.addEventListener('scroll', function(){

    if (handsmash.getBoundingClientRect().top <= (screenHeight / 3)) {
      handsmash__wrap.classList.add('fixed')
    }else {
      handsmash__wrap.classList.remove('fixed')
    }
		
	}), 200, true)
}

boom();
