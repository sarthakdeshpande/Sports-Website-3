var items = document.querySelectorAll(".timeline li")

function checkViewport(el){
    var rect = el.getBoundingClientRect();

    return(rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.width <=
        (window.innerWidth || document.documentElement.clientWidth))
}


function scrollfunc(){
    for (var i = 0 ; i< items.length; i++){
        if(checkViewport(items[i])){
            items[i].classList.add("in-view");
        }
    }
}

window.addEventListener("scroll",scrollfunc);