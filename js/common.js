const searchEl = document.querySelector('.search'); //document안에서 .search를 찾아서 searchEl이라는 변수에 할당 (cf.document는 html 자체)
const searchInputEl = searchEl.querySelector('input'); //searchEl 안에서 input 요소를 찾아서 searchInputEl이라는 변수에 할당

searchEl.addEventListener('click', function() {
  // Logic..
  searchInputEl.focus();
}); //serachEl 요소에 'click' 이벤트를 추가 => serach라는 클래스를 가지고 있는 div 요소를 클릭하면 함수(핸들러)의 Logic을 실행

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused'); //특정 요소(searchEl)에 클래스 정보를 가지고 있는 객체에서, 어떤 클래스('focused')를 추가하는 method
  searchInputEl.setAttribute('placeholder', '통합검색'); //특정 요소(searchInputEl)에 어떤 html의 속성('placeholder')을 지정하는 method (cf.Attribute란 html의 속성을 의미함)
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 자동으로 현재 연도 기입