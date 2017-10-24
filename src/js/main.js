function hello() {
  alert('hello');
}
var img = new Image();
img.src = "src/resources/pubg_map.png?" + new Date().getTime();
var darts_ya = new Image();
darts_ya.src = "src/resources/darts_ya.png?" + new Date().getTime();

onload = function() {
  draw();
};


function draw() {
  var canvas = document.getElementById('mainMapCanvas');
  if ( ! canvas || ! canvas.getContext ) { return false; }
  var ctx = canvas.getContext('2d');
  console.log(img.src);

  /* Imageオブジェクトを生成 */
  /* 画像が読み込まれるのを待ってから処理を続行 */
  // img.onload = function() {
  console.log('aa');
  console.log(img.src);
  ctx.drawImage(img, 0, 0);
  // }
}

// mapを回転させる
var intervalFunc;
var count = 0;
var isStop = false;
function rotateMap() {
  audioStart();
  var canvas = document.getElementById('mainMapCanvas');
  if ( ! canvas || ! canvas.getContext ) { return false; }
  var ctx = canvas.getContext('2d');

  var countup = function(){
    console.log(count++);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.rotate( 5 * count * Math.PI / 180 );
    ctx.translate(-canvas.width/2, -canvas.height/2);
    ctx.drawImage(img, 0, 0);
    ctx.restore();

    var intervalFunc = setTimeout(countup, 10);
    if(isStop || count > 5000){　
      count = 5000;
      se.play();
      audioStop();


      clearTimeout(intervalFunc);　//idをclearTimeoutで指定している
      var canvas2 = document.getElementById('mainMapCanvas');
      if ( ! canvas2 || ! canvas2.getContext ) { return false; }
      var ctx2 = canvas.getContext('2d');
      clearTimeout(intervalFunc);　//idをclearTimeoutで指定している
      ctx2.save();
      ctx2.translate(canvas.width/1.5, canvas.height/4);
      ctx2.drawImage(darts_ya, 0, 0, darts_ya.width, darts_ya.height, 0, 0, canvas.width/5, canvas.height/5);
      ctx2.restore();


    }
  }
  countup();
}

function stopAndDarts() {
  isStop = true;
  // ctx.drawImage(darts_ya, canvas.width/2, canvas.height/2);
  // ctx.drawImage(darts_ya, canvas.width/2, canvas.height/2);
}

// AudioElement を作成
var audio = new Audio();
// サウンドファイルまでの URL アドレスを指定
audio.src = "src/resources/bgm.mp3";
var se = new Audio();
se.src = "src/resources/tapSE.mp3";



function audioStart() {
  // 再生を開始する
  audio.currentTime = 6;

  audio.play();
}

function audioStop() {

  audio.pause();
}
