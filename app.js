// Тоглогчийн ээлжийг хадгалаХ хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэнэ. 
var activePlayer = 1;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;

//  <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score - 0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";


// Программ эхлэхэд бэлтгэе
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector(".dice").style.display = "none";
