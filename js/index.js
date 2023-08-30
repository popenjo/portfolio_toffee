// index - bg
const swiper_bg = new Swiper('#swiper_bg',{
    autoplay:{
        delay:8000, // 1000 단위 당 1초
        disableOnInteraction:false //버튼 클릭 후 자동 재생유지
    },
    loop:true,
    speed:1000,
    direction:'horizontal',
    scrollbar:{el:'#swiper_bg .swiper-scrollbar'}, //스크롤바 표시
})

// scroll - bar
const scrollUp = document.querySelector('#up')
const scrolldown = document.querySelector('#down')
console.log(scrollUp, scrolldown)
scrollUp.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})
scrolldown.addEventListener('click',function(){
    window.scrollTo({
        bottom:0,
        behavior:'smooth',
    })
})