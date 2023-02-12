
// keyboard press

document.addEventListener('keydown',function(event)
{
    makeSound(event.key);
    animation(event.key);
});


// Button press

var elements=document.querySelectorAll(".drum");
for(var i=0;i<elements.length;i++)
{
    elements[i].addEventListener("click",function()
    {
        var key=this.innerHTML;
        makeSound(key);
        animation(key);
    });
}






function makeSound(k)
{
    switch (k) {
        case "w":
            var audioW=new Audio('sounds/tom-1.mp3');
            audioW.play();
            break;
        case "a":
            var audioA=new Audio('sounds/tom-2.mp3');
            audioA.play();
            break;
        case "s":
            var audioS=new Audio('sounds/tom-3.mp3');
            audioS.play();
            break;
        case "d":
            var audioD=new Audio('sounds/tom-4.mp3');
            audioD.play();
            break;
        case "j":
            var audioJ=new Audio('sounds/kick-bass.mp3');
            audioJ.play();
            break;
        case "k":
            var audioK=new Audio('sounds/snare.mp3');
            audioK.play();
            break;
        case "l":
            var audioI=new Audio('sounds/crash.mp3');
            audioI.play();
            break;
        default:
            break;
    }   
}


function animation(key)
{
    var button=document.querySelector("."+key);
    button.classList.add("pressed");

    setTimeout(function()
    {
        button.classList.remove("pressed",300);
    });
}