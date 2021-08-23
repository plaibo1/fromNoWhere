'use strict';

window.onload = function () {

	fullScreenImages()

	// ======= laxxxxx ======== //
	lax.init()

	lax.addDriver('scrollY', function () {
	  return window.scrollY
	}, { inertiaEnabled: true })
	
	lax.addElements(".stop-line",
		{
			scrollY: {
				"background-position": [
					["elInY", "elOutY"],
					[0, 400],
					{
						cssFn: function (val) {
							return `${val}px 0`
						}
					}
				]
			},
		});

	lax.addElements(".stop-line-left", {
		scrollY: {
			"background-position": [
				["elInY", "elOutY"],
				[0, -400],
				{
					cssFn: function (val) {
						return `${val}px 0`
					}
				}
			]
		},
	});


	lax.addElements(".green-danger__right",
		{
			scrollY: {
				"background-position": [
					["elInY", "elOutY"],
					[0, 400],
					{
						cssFn: function (val) {
							return `${val}px 0`
						}
					}
				]
			},
		});

	lax.addElements(".green-danger__left", {
		scrollY: {
			"background-position": [
				["elInY", "elOutY"],
				[0, -400],
				{
					cssFn: function (val) {
						return `${val}px 0`
					}
				}
			]
		},
	});
	
	lax.addElements(".starz-bg__prej__lax", {
        scrollY: {
            opacity: [["elCenterY", "elOutY*1.1"], [1, 0]],
        },
      });

	lax.addElements(".starz-bg__kostya__lax", {
        scrollY: {
            opacity: [["elCenterY", "elOutY*1.1"], [1, 0]],
        },
      });

	// ======= laxxxxx ======== //

	//  ======= line break init ====== //
lineBreak('.dialog__message__text');
lineBreak('p');
lineBreak('.message__box');
lineBreak('.box__text');
//  ======= line break init ====== //

	//  ======= AOS init ====== //
	try {AOS.init();}
	catch {return 0}
  //  ======= AOS init ====== //
}

function lineBreak(format) {
	const nbsp = '&nbsp;';
	let text = document.querySelectorAll(format);
	
	for (let i = 0; i < text.length; i++) {
		if (!text[i].classList.contains('no-format')) {
			let words = text[i].innerText.split(" ");
			let formatText = '';

			for (let i = 0; i < words.length; i++) {
				if (words[i].length <= 2 && words[i] !== '—') words[i] = words[i] + nbsp;
				else words[i] = words[i] + ' ';
				formatText += words[i];
			}

			text[i].innerHTML = formatText;
		}
	}
	
};


// ============= menu ========== //

function baseMenu() {
const nav = document.querySelector('nav');

const menuData = `
<div class="menu closed">

<div class="menu__header">
	<img src="img/logo.svg"	alt="img" class="menu__header__logo">
	<div class="menu__header__close">
		<span></span>
		<span></span>
	</div>
</div>

<div class="menu-main">

	<div class="menu__countries">

		<a href='/' class="menu__countries__title">
			Оглавление
		</a>

		<a href='./preface.html' class="menu__countries__title">
			Предисловие
		</a>

		<div class="menu__countries__item">

			<img src="img/countries/RUS.svg" alt="img" class="menu__countries__item__img">

			<div class="menu__countries__item__links">
				<a href='./moscow.html' class="menu__countries__item">Москва</a>
				<a href='./moscow-minsk.html' class="menu__countries__item">Москва-Минск</a>
			</div>

		</div>

		<div class="menu__countries__item">

			<img src="img/countries/BLR.svg" alt="img" class="menu__countries__item__img">

			<div class="menu__countries__item__links">
				<a href='./minsk.html' class="menu__countries__item">Минск</a>
				<a href='./minsk-warsawa.html' class="menu__countries__item">Минск-Варшава</a>
			</div>

		</div>

		<div class="menu__countries__item">

			<img src="img/countries/POL.svg" alt="img" class="menu__countries__item__img">

			<div class="menu__countries__item__links">
				<a href='./warsawa.html' class="menu__countries__item">Варшава</a>
				<a href='./warsawa-berlin.html' class="menu__countries__item">Варшава-Берлин</a>
			</div>

		</div>

		<div class="menu__countries__item">

			<img src="img/countries/DEO-white.png" alt="img" class="menu__countries__item__img">

			<div class="menu__countries__item__links">
				<a href='./berlin.html' class="menu__countries__item">Берлин</a>
				<a href='./berlin-hanover.html' class="menu__countries__item">Берлин-Ганновер</a>
			</div>

		</div>

		<div class="menu__countries__item">

			<img src="img/countries/DEO-white.png" alt="img" class="menu__countries__item__img">

			<div class="menu__countries__item__links">
				<a href='./hanover.html' class="menu__countries__item">Ганновер</a>
			</div>

		</div>

		<div class="menu__countries__item">

			<img src="img/countries/NLD.svg" alt="img" class="menu__countries__item__img">

			<div class="menu__countries__item__links">
				<a href='./amsterdam-01.html' class="menu__countries__item">Амстердам #1</a>
				<a href='./amsterdam-02.html' class="menu__countries__item">Амстердам #2</a>
				<a href='./amsterdam-03.html' class="menu__countries__item">Амстердам #3</a>
				<a href='./amsterdam-brussels.html' class="menu__countries__item">Амстердам-Брюссель</a>
			</div>

		</div>

		<div class="menu__countries__item">

			<img src="img/countries/BEL-no.svg" alt="img" class="menu__countries__item__img">

			<div class="menu__countries__item__links">
				<a href='./brussels.html' class="menu__countries__item">Брюссель</a>
				<a href='./brussels-paris.html' class="menu__countries__item">Брюссель-Париж</a>
			</div>

		</div>

		<div class="menu__countries__item">

			<img src="img/countries/FRA-no.svg" alt="img" class="menu__countries__item__img">

			<div class="menu__countries__item__links">
				<a href='./paris-01.html' class="menu__countries__item">Париж #1</a>
				<a href='./paris-02.html' class="menu__countries__item">Париж #2</a>
			</div>

		</div>

		<div class="menu__countries__item">

			<img src="img/countries/FRA-no.svg" alt="img" class="menu__countries__item__img">

			<div class="menu__countries__item__links">
				<a href='./lyon-01.html' class="menu__countries__item">Лион #1</a>
				<a href='./lyon-02.html' class="menu__countries__item">Лион #2</a>
				<a href='./lyon-grenoble.html' class="menu__countries__item">Лион-Гренобль</a>
				<a href='./grenoble-marseilles.html' class="menu__countries__item">Гренобль-Марсель</a>
				<a href='./marseilles.html' class="menu__countries__item">Марсель</a>
				<a href='./marseilles.html' class="menu__countries__item">Марсель-Ницца</a>
				<a href='./marseilles.html' class="menu__countries__item">Ницца - Сан-Ремо</a>
			</div>

		</div>

	</div>
	
	<div class="menu__authors">
		<div class="menu__authors__title">Авторы:</div>

		<div class="menu__authors__box">

			<div class="menu__authors__box__face">
				<img src="img/perj-yellow.png" alt="img">
			</div>

			<div class="menu__authors__box__name">Преж</div>

			<div class="menu__authors__box__socialmedia">

				<a href='https://instagram.com' target='_blank' class="menu__authors__box__socialmedia__icon">
					<img src="img/instagram.svg" alt="img">
				</a>

				<a href='https://vk.com/prezh9' target='_blank' class="menu__authors__box__socialmedia__icon">
					<img src="img/vk.svg" alt="img">
				</a>

			</div>

		</div>

		<div class="menu__authors__box">
			
			<div class="menu__authors__box__face">
				<img src="img/kostya-purple.png" alt="img">
			</div>

			<div class="menu__authors__box__name">Костэн</div>

			<div class="menu__authors__box__socialmedia">

				<a href='https://instagram.com' target='_blank' class="menu__authors__box__socialmedia__icon purple">
					<img src="img/instagram.svg" alt="img">
				</a>

				<a href='https://vk.com/kostanlikesbars' target='_blank' class="menu__authors__box__socialmedia__icon purple">
					<img src="img/vk.svg" alt="img">
				</a>

			</div>

		</div>

	</div>

</div>

</div>
`
nav.insertAdjacentHTML('beforeend', menuData)

setTimeout(function () {
	const menu = document.querySelector('.menu');
	const burger = document.querySelector('#burger');
	const close = document.querySelector('.menu__header__close');


	burger.addEventListener('click', function () {
		menu.classList.remove('closed');
		if (window.matchMedia("(max-width: 589px)").matches) {
			window.document.body.classList.add('no-scroll');
		}
	})

	close.addEventListener('click', function () {
		menu.classList.add('closed');
		if (window.matchMedia("(max-width: 589px)").matches) {
			window.document.body.classList.remove('no-scroll');
		}
	})

	window.addEventListener('click', function(e) {
		if ((!menu.contains(e.target)) && (!burger.contains(e.target))) {
			menu.classList.add('closed');
		}
	})

}, 30)

}

baseMenu();


function navbar() {
	const navbar = document.querySelector('nav');
	let prevScrollpos = window.pageYOffset;

	window.onscroll = function () {
		let currentScrollPos = window.pageYOffset;

		if (prevScrollpos > currentScrollPos) {
			navbar.style.top = "0";
		} else {
			navbar.style.top = "-130px";
		}
		prevScrollpos = currentScrollPos;
	}
}

navbar();

window.addEventListener('onwheel', function(e) {
	e.preventDefault()
})



// class Swipe {
//     constructor(element) {
//         this.xDown = null;
//         this.yDown = null;
//         this.element = typeof(element) === 'string' ? document.querySelector(element) : element;

//         this.element.addEventListener('touchstart', function(evt) {
//             this.xDown = evt.touches[0].clientX;
//             this.yDown = evt.touches[0].clientY;
//         }.bind(this), false);

//     }

//     onLeft(callback) {
//         this.onLeft = callback;

//         return this;
//     }

//     onRight(callback) {
//         this.onRight = callback;

//         return this;
//     }

//     onUp(callback) {
//         this.onUp = callback;

//         return this;
//     }

//     onDown(callback) {
//         this.onDown = callback;

//         return this;
//     }

//     handleTouchMove(evt) {
//         if ( ! this.xDown || ! this.yDown ) {
//             return;
//         }

//         var xUp = evt.touches[0].clientX;
//         var yUp = evt.touches[0].clientY;

//         this.xDiff = this.xDown - xUp;
//         this.yDiff = this.yDown - yUp;

//         if ( Math.abs( this.xDiff ) > Math.abs( this.yDiff ) ) { // Most significant.
//             if ( this.xDiff > 0 ) {
//                 this.onLeft();
//             } else {
//                 this.onRight();
//             }
//         } else {
//             if ( this.yDiff > 0 ) {
//                 this.onUp();
//             } else {
//                 this.onDown();
//             }
//         }

//         // Reset values.
//         this.xDown = null;
//         this.yDown = null;
//     }

//     run() {
//         this.element.addEventListener('touchmove', function(evt) {
//             this.handleTouchMove(evt).bind(this);
//         }.bind(this), false);
//     }
// }


// let swiperMenu = new Swipe(document.querySelector('body'));
// swiperMenu.onLeft(function() {
// 	document.querySelector('.menu').classList.remove('closed');
// 	if (window.matchMedia("(max-width: 589px)").matches) {
// 		window.document.body.classList.add('no-scroll');
// 	}
// });
// swiperMenu.onRight(function() {
// 	document.querySelector('.menu').classList.add('closed');
// 	if (window.matchMedia("(max-width: 589px)").matches) {
// 		window.document.body.classList.remove('no-scroll');
// 	}
// });
// swiperMenu.run();


function fullScreenImages() {
	const images = document.querySelectorAll('img');
	for (let i = 0; i < images.length; i++) {
		if (   images[i].getAttribute('src') !== 'img/kostya-purple.png' 
			&& images[i].getAttribute('src') !== 'img/perj-yellow.png'
			&& images[i].getAttribute('src') !== 'img/perj-face.png'
			&& images[i].getAttribute('src') !== 'img/instagram.svg'
			&& images[i].getAttribute('src') !== 'img/vk.svg'
			&& images[i].getAttribute('src') !== 'img/kostya-face.png') 
			{
				images[i].classList.add('openInFullScreen')
			}
	}
}



function openInFullScreen() {
	let img = document.querySelectorAll('img');
	
	img.forEach(element => {
		element.addEventListener('click', function() {
			if (this.classList.contains('openInFullScreen')) {
				
				createFullScreenImg(this)

			}
			return false;
		})
	});

}

openInFullScreen();


function createFullScreenImg(thisImg) {
	let fullScreenImgWrapper = document.createElement('div');
	fullScreenImgWrapper.classList.add('openFullScreenImg');
	

	let img = document.createElement('img');
	img.src = thisImg.getAttribute('src');
	img.style.maxHeight = window.innerHeight - 50 + 'px';


	fullScreenImgWrapper.append(img);
	document.querySelector('.main').append(fullScreenImgWrapper);

	fullScreenImgWrapper.addEventListener('click', function(e) {
		if (!(e.target == img)) {
			fullScreenImgWrapper.style.opacity = 0;
			setTimeout(function() {
				fullScreenImgWrapper.remove()
			}, 300)
		}
	})

}