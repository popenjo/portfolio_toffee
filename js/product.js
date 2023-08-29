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

// 북마크 클릭 시 이미지 변경
const btn = document.querySelector('#mark')
const btnImg = document.querySelector('#mark > img')
const btn2 = document.querySelector('#url')
console.log(btn, btnImg, btn2)
let keepImg = false; // 이미지 추가 여부를 추적

btn.addEventListener('click', function() {
    if(!keepImg) {
        btnImg.style.backgroundImage = 'url("../toffee_image/keep.png")'; // 이미지 파일 경로를 수정해야 합니다.
        btnImg.style.backgroundSize = 'contain'; // 이미지 크기를 요소에 맞게 조절
        keepImg = true;
    }else {
        btnImg.style.backgroundImage = 'none'; // 이미지 제거
        keepImg = false;
    }
});

console.log('---------------------------------------')
// 색상 선택 x 사이즈를 선택했을시 경고문
const size = document.querySelectorAll('input[name="product_size"]')
const color = document.querySelector('#color_all')
console.log(size, color)

size.forEach(radioButton => {
    radioButton.addEventListener('click', function() {
        if (color.value === 'top1') {
            window.alert('색상을 선택해주세요.');
        }
    });
});

console.log('---------------------------------------')
// 버튼 클릭 시 가격 추가 or 수량 1개씩 추가

const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const quantity_value = document.querySelector('.quantity_value')
const cash = document.querySelector('.value_cash')
console.log(minus, plus, quantity_value, cash)

let quantity = 0;
let value_cash = 33000;

function updateQuantityAndValue() {
    quantity_value.textContent = quantity;
    cash.textContent = (quantity * value_cash) + ``;
}

minus.addEventListener('click', function() {
    if (quantity > 0) {
        quantity--;
        updateQuantityAndValue();
    }
});

plus.addEventListener('click', function() {
    quantity++;
    updateQuantityAndValue();
});







