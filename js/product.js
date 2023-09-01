// scroll - bar
const scrollUp = document.querySelector('#up')
console.log(scrollUp)
scrollUp.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
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
// 색상 선택x size를 선택했을시 경고문
// 색상을 선택하고 사이즈를 선택했을때 문자 추가 및 사이즈 문자 추가
const size = document.querySelectorAll('input[name="product_size"]')
const u_size = document.querySelectorAll('label')
const color = document.querySelector('#color_all')
const order = document.querySelectorAll('.order')
const product = document.querySelector('.order1')
const imgTxt = document.querySelector('.s_left > img')
console.log(size, color, order, product, u_size, imgTxt)

size.forEach(radioButton => {
    radioButton.addEventListener('click', function() {
        if (color.value === 'top1') {
            window.alert('색상을 선택해주세요.');
        }else if (color.value <= 'top2'){
            const selectedLabel = document.querySelector('label[for="' + radioButton.id + '"]');
            const colorAll = color.selectedOptions[0];
            const productName = imgTxt.alt;
            product.textContent = `${productName} ${colorAll.textContent} ${selectedLabel.textContent}`;
        }else if (color.value <= 'top3'){
            const colorAll = color.selectedOptions[0];
            const selectedLabel = document.querySelector('label[for="' + radioButton.id + '"]');
            const productName = imgTxt.alt;
            product.textContent = `${productName} ${colorAll.textContent} ${selectedLabel.textContent}`;
        }else if (color.value <= 'top4'){
            const colorAll = color.selectedOptions[0];
            const selectedLabel = document.querySelector('label[for="' + radioButton.id + '"]');
            const productName = imgTxt.alt;
            product.textContent = `${productName} ${colorAll.textContent} ${selectedLabel.textContent}`;
        }else if (color.value <= 'top5'){
            const colorAll = color.selectedOptions[0];
            const selectedLabel = document.querySelector('label[for="' + radioButton.id + '"]');
            const productName = imgTxt.alt;
            product.textContent = `${productName} ${colorAll.textContent} ${selectedLabel.textContent}`;
        }else if (color.value <= 'top6'){
            const colorAll = color.selectedOptions[0];
            const selectedLabel = document.querySelector('label[for="' + radioButton.id + '"]');
            const productName = imgTxt.alt;
            product.textContent = `${productName} ${colorAll.textContent} ${selectedLabel.textContent}`;
        }else if (color.value <= 'top7'){
            const colorAll = color.selectedOptions[0];
            const selectedLabel = document.querySelector('label[for="' + radioButton.id + '"]');
            const productName = imgTxt.alt;
            product.textContent = `${productName} ${colorAll.textContent} ${selectedLabel.textContent}`;
        }else if (color.value <= 'top8'){
            const colorAll = color.selectedOptions[0];
            const selectedLabel = document.querySelector('label[for="' + radioButton.id + '"]');
            const productName = imgTxt.alt;
            product.textContent = `${productName} ${colorAll.textContent} ${selectedLabel.textContent}`;
        }else if (color.value <= 'top9'){
            const colorAll = color.selectedOptions[0];
            const selectedLabel = document.querySelector('label[for="' + radioButton.id + '"]');
            const productName = imgTxt.alt;
            product.textContent = `${productName} ${colorAll.textContent} ${selectedLabel.textContent}`;
        }
    });
});

console.log('---------------------------------------')
// 버튼 클릭 시 가격 추가 or 수량 1개씩 추가

const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const quantity_value = document.querySelector('.quantity_value')
const cash = document.querySelector('.value_cash')
const font = document.querySelector('#money > em')
console.log(minus, plus, quantity_value, cash, font)

let quantity = 0;
let user_money = 33000;

// 색상 or 사이즈 선택 안하고 버튼 클릭 시 경고문
function updateQuantityAndValue() {
    if (color.value === 'top1') {
        window.alert('색상과 사이즈를 선택해주세요.')
    }else {
        quantity_value.textContent = quantity;
        cash.textContent = (quantity * user_money).toLocaleString('ko-kr');
    }
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

console.log('---------------------------------------')
// 상품 이미지에 마우스를 올렸을 시 이미지 체인지

const mainImg = document.querySelector('.s_left > img')
const subImg = document.querySelectorAll('.s_btm > img')
console.log(mainImg, subImg)

subImg.forEach(subImg => {
    subImg.addEventListener('mouseover',function() {
        mainImg.src = subImg.src;
        mainImg.alt = subImg.alt;
    })
})

size.forEach(radioButton => {
    radioButton.addEventListener('click', function() {
        if (color.value === 'top1') {
            window.alert('색상을 선택해주세요.');
        } else {
            const selectedLabel = document.querySelector('label[for="' + radioButton.id + '"]');
            const colorAll = color.selectedOptions[0];
            const productName = imgTxt.alt;
            product.textContent = `${productName} ${colorAll.textContent} ${selectedLabel.textContent}`;
            quantity_value.textContent = 1;
            quantity = 1;
            cash.innerHTML = (quantity * user_money).toLocaleString('ko-kr');
        }
    });
});








