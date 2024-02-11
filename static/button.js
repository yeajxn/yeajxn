var noCount = 0;
var timer = 0;
var fontsize = 2;

function noClick(){
    if (noCount<1){
        alert("Excuse me?")
        document.getElementById("yesBtn").style.fontSize='2vw';
    }
    else if(noCount<2){
        document.getElementById("yesBtn").style.fontSize='3vw';
        document.getElementById("img1").style.display='block';
    }
    else if(noCount <3){
        document.getElementById("yesBtn").style.fontSize='4vw';
        document.getElementById("img1").style.display='none';
        document.getElementById("img2").style.display='block';
    }
    else if(noCount <4){
        document.getElementById("yesBtn").style.fontSize='5vw';
        document.getElementById("img2").style.display='none';
        document.getElementById("img3").style.display='block';
    }
    else if(noCount <5){
        document.getElementById("img3").style.display='none';
        document.getElementById("img4").style.display='block';
    }
    else if(noCount <6){
        document.getElementById("img4").style.display='none';
        document.getElementById("img5").style.display='block';
        document.getElementById("noBtn").disabled = true;
        document.getElementById("noBtn").style.backgroundColor = 'grey';
    }
    noCount+=1;
    
}