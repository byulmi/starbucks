// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // onYouTubeIframeAPIReady 라는 함수 이름은, 외부에서 가져온 유튜브를 제어해주는 자바스크립트 라이브러리가 자체적으로 이 이름을 찾으므로 절대 변경하면 안 됨.
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 지생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      }
    } // 영상이 준비가 되면 (onReady) 익명의 함수가 실행이 되고, 이 익명의 함수가 실행될 때 준비된 영상을 음소거 처리
  });
}