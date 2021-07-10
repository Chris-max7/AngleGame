var elem = document.getElementById("li");
var angle;

set()

function set(){
    angle = getRandomInt(1,180);
    elem.style.transform = 'rotate(-' + angle + 'deg)';
    document.getElementById('angle').innerText = angle;
}

function answer(){
    const textbox = document.getElementById('ans')
    const value = textbox.value; 
    
    if(value == angle){
        document.getElementById('hantei').innerHTML = "なに！？正解だと！！<br>あなたは神の目の持ち主です。";
    }else if(between(value, angle-5,angle+5)){
        document.getElementById('hantei').innerText = "惜しい！！";
        document.getElementById('seikai').innerText = "正解：" + angle + '°';
    }
    else{
        document.getElementById('hantei').innerText = "全然違うしwww";
        document.getElementById('seikai').innerText = "正解：" + angle + '°';
    }
}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function between(x, min, max) {
    return x >= min && x <= max;
  }