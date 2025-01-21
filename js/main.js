const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// window.addEventListener('scroll', function () { 
//   console.log('scroll!');
// }); 화면이 스크롤 될 때 마다 콘솔에 scroll! 로그가 기록되어 function이 몇십개씩 실행됨(cf.window는 우리가 보고 있는 화면 자체) 

window.addEventListener('scroll', _.throttle(function () { 
     console.log(window.scrollY);
     if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap.to(요소, 지속시간(s), 옵션{객체 데이터}); => 자바스크립트의 애니메이션 처리 라이브러리
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none'
      });
      // 버튼 보이기!
      gsap.to(toTopEl, .2, {
        x: 0 
      });
     } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block'
      });
      // 버튼 숨기기!
      gsap.to(toTopEl, .2, {
        x: 100 
      });
     }
}, 300)); 
// _.throttle(함수, 시간) =>lodash라는 자바스크립트 라이브러리 실행. 실행되는 함수의 개수를 일정 시간(300ms = 0.3s)에 한 번씩만 실행되도로 제한
// gsap이라는 메소드 부분에 요소(ex.toTopEl)와 특정한 요소의 선택자(ex.'#to=top')를 명시 할 수 있음


toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0  // 별도의 ScrollToPlugin 스크립트를 index.html에 추가함
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // index는 기본 0부터 시작하는 zerobased numbering. => 0.7s, 1.4s, 2.1s, 2.8s 뒤에 순차적으로 애니메이션 실행. 
    opacity: 1
  });
}); 
// html에서 찾은 fade-in이라는 요소들의 개수만큼 이 forEach라는 메소드의 인수로 적은 함수가 실행됨 (반복처리 함수)
// forEach(fucntion (요소, 반복되는 횟수) {로직}) : 찾은 fade-in이라는 클래스를 가지고 있는 요소들을 하나씩(=fadeEl) 순차적으로 함수에서 쓸수 있게 데이터로 내어줌. 원하는 이름으로 대체 가능


// new생성자 : JavaScript 클래스 생성
// new Swiper(선택자, {옵션})
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
}); // 선택자 => .notice-line안에 있는 .swiper-container를 실제로 슬라이드 하겠다는 명령어 (cf.띄어쓰기는 후손 선택자)
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', => 기본값이므로 생략 가능
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(px)
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // !가 붙으면 부정. 즉, !isHidePromotion = true
  if (isHidePromotion) { // if(isHidePromotion)에서의 isHidePromotion은 !isHidePromotion이 반영된 것이므로 true
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, {옵션});
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1, // 무한반복
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic //아래와 같은 부분을 메소드 체이닝(Method Chaining) 이라고 함
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, // 감시하고 있는 요소가 뷰포트의 어떤 지점에서 감시되었는지 판단할 수 있도록 지정 (뷰포트 시작 지점 = 0, 끝 지점 = 1)
    })
    .setClassToggle(spyEl, 'show') // setClassToggle에서의 Class는 html class. html class를 넣었다 뺐다(Toggle) 하도록 제어하는 기능
    .addTo(new ScrollMagic.Controller()); // 추가한 옵션들을 내부의 컨트롤러에 내용을 할당해서 실제로 동작할 수 있는 구조로 만들어주는 용도
});