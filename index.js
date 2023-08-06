var dice=document.getElementById('start');

function startgame(){
    var p1=Math.floor(Math.random()*6)+1;

    var ran1="images/dice"+p1+".png"; // this will become address to one of the image

    var img1= document.querySelectorAll('img')[0];

    img1.setAttribute('src' ,ran1);


    var p2=Math.floor(Math.random()*6)+1;

    var ran2="images/dice"+p2+".png"; // this will become address to one of the image

    var img2= document.querySelectorAll('img')[1];

    img2.setAttribute('src' ,ran2);



    if(p1>p2){
        document.querySelector('h2').innerHTML="🏁Player 1 wins🏁";
    }

    if(p2>p1){
        document.querySelector('h2').innerHTML="🏁Player 2 wins🏁";
    }

    if(p1===p2){
        document.querySelector('h2').innerHTML="Ooops it's a draw🤓";
    }
}

