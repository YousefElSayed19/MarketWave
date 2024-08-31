let up=document.querySelector(".up");
window.onscroll=()=>{
    if (window.scrollY<740){
        up.style.display="none ";
    }
    else{
        up.style.display="flex";
    }
}