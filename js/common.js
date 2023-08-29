// 오픈 버튼 생성
const open_menu = document.querySelector('#menu_btn')
console.log(open_menu)
// 나가기 버튼 생성
const menu = document.querySelector('.menu')
const closer = document.querySelector('#m_btn')
console.log(menu, closer)

menu.style.display = 'none';
menu.style.transition = 'transform 0.8s ease'

// 메뉴 클릭 시 메뉴창 오픈
open_menu.addEventListener('click',function(){
    menu.style.display = 'block'
    menu.style.transform = 'translateX(0)';
})
// closer 클릭 시 메뉴창 없어지기
closer.addEventListener('click',function(){
    menu.style.transform = 'translateX(100%)';
})
