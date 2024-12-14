 // Savatchaga mahsulot qo'shish
 let savatcha = [];

 // Mahsulotni savatchaga qo'shish funktsiyasi
 function savatchagaQoshish(item) {
     savatcha.push(item);  // Tanlangan mahsulotni savatchaga qo'shish
     alert(item + " harid qilishlar ro'yxatiga olindi!"); // Foydalanuvchiga xabar berish

     // Ixtiyoriy ravishda savatdagi mahsulotlarni ko'rsatish
     console.log("Joriy savatcha:", savatcha);
 }let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

// Savatchaga qo'shish tugmasini ushlab olish
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', (event) => {
      // Tugma bosilganda tegishli mahsulot ma'lumotlarini olish
      const productBox = event.target.closest('.box');
      const productName = productBox.querySelector('h3').textContent;
      const productPrice = productBox.querySelector('.price').textContent;

      // Ma'lumotlarni konsolga chiqarish yoki kerakli amallarni bajarish
      console.log(`Mahsulot: ${productName}, Narxi: ${productPrice}`);
      alert(`${productName} narxi ${productPrice} savatchaga qo'shildi!`);
  });
});

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});