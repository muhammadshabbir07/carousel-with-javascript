flag = 0;

function imageSlides(x){
    flag = flag + x;
    slidesShow(flag)
}

slidesShow(flag)

function slidesShow(num){
    var getSlides = document.getElementsByTagName("img");
    for (let i = 0; i < getSlides.length; i++) {
        const element = getSlides[i];
        element.classList.remove("active")
    }
    if(num >= getSlides.length){
        flag = 0;
        num = 0
    }
    else if (num < 0){
        flag = getSlides.length -1;
        num = getSlides.length -1;
    }
    getSlides[num].classList.add("active")
}