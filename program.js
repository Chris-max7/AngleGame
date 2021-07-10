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
        document.getElementById('hantei').innerText = "正解";
    }else{
        document.getElementById('hantei').innerText = "不正解";
        document.getElementById('seikai').innerText = "正解は" + angle + '°です';
    }
}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }