function showDiv(){
    document.getElementById("test").style.display = "block";
    document.getElementById("men").style.opacity = "0";
    document.getElementById("close-men").style.opacity = "1";
    document.getElementById("close-men").style.zIndex = "2";
    document.getElementById("men").style.zIndex = "1";
    document.getElementById("test").style.animationName = "menu"
    document.getElementById("test").style.animationDuration = ".5s"

};
function hideDiv(){
    document.getElementById("test").style.display = "none";
    document.getElementById("men").style.opacity = "1";
    document.getElementById("men").style.zIndex = "2";
    document.getElementById("close-men").style.zIndex = "1";
    document.getElementById("close-men").style.opacity = "0";
    document.getElementById("test").style.animationName = "clmen"
    document.getElementById("test").style.animationDuration = "1s"
};