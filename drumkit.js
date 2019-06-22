document.addEventListener("keydown",function(e){
    var key=document.querySelector(`div[data-key='${e.keyCode}']`);
    var sound=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    if(key){
    key.classList.add("effect");
    sound.currentTime=0;
    sound.play();
    }
    

})
document.addEventListener("keyup",function(e){
    var key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(key)
    key.classList.remove("effect");
    
})