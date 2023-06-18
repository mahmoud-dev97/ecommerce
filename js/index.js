let index = 0;
let imgs = document.querySelectorAll(".row .navbar-nav img");
let imgsModal = document.querySelectorAll(".modal-footer .img-fluid");
let mainImgModal = document.querySelector(".modal-body .img-fluid");
let bigImg = document.querySelector(".parent img");
let plusBtn = document.querySelector(".plus");
let num = document.querySelector(".disabled");
let minusBtn = document.querySelector(".minus");
let addCart = document.querySelector(".pe-5 .add");
// right and left btns
let right = document.querySelector(".fa-circle-chevron-right");
let left = document.querySelector(".fa-circle-chevron-left");
let rightModal = document.querySelector(".modal-body .fa-circle-chevron-right");
let leftModal = document.querySelector(".modal-body .fa-circle-chevron-left");

// li sec var
let out = document.querySelector(".out");
let cal = document.querySelector(".cal");
let price = document.querySelector(".out .total");
let cheOut = document.querySelector(".dropdown-menu .add");
let empty = document.querySelector(".empty");
let badge = document.querySelector(".position-relative .position-absolute");
// all fun event

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    bigImg.src = img.src;
    imgs.forEach((e) => {
      e.classList.remove("active");
    });
    img.classList.add("active");
  });
});
plusBtn.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML + 1;
});
minusBtn.addEventListener("click", () => {
  if (+num.innerHTML === 0) {
    num.innerHTML = "0";
    empty.classList.remove("d-none");
    out.classList.replace("d-flex", "d-none");
    cheOut.classList.add("d-none");
    badge.classList.add("d-none");
  } else {
    num.innerHTML = +num.innerHTML - 1;
  }
});

addCart.addEventListener("click", () => {
  if (+num.innerHTML > 0) {
    let total = +num.innerHTML * 125;
    out.classList.replace("d-none", "d-flex");
    cal.innerHTML = `$125.00 x ${+num.innerHTML}`;
    price.innerHTML = `$${total}.00`;
    cheOut.classList.remove("d-none");
    empty.classList.add("d-none");
    badge.classList.remove("d-none");
    badge.innerHTML = +num.innerHTML;
  }
});

right.addEventListener("click", () => {
  if (index < imgs.length - 1) {
    index++;
  } else {
    index = 0;
  }
  imgs.forEach((e) => {
    e.classList.remove("active");
    imgs[index].classList.add("active");
    bigImg.src = imgs[index].src;
  });
});
left.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = imgs.length - 1;
  }
  imgs.forEach((e) => {
    e.classList.remove("active");
    imgs[index].classList.add("active");
    bigImg.src = imgs[index].src;
  });
});
rightModal.addEventListener("click", () => {
  if (index < imgsModal.length - 1) {
    index++;
  } else {
    index = 0;
  }
  imgsModal.forEach((e) => {
    e.classList.remove("active");
    imgsModal[index].classList.add("active");
    mainImgModal.src = imgsModal[index].src;
  });
});
leftModal.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = imgsModal.length - 1;
  }
  imgsModal.forEach((e) => {
    e.classList.remove("active");
    imgsModal[index].classList.add("active");
    mainImgModal.src = imgsModal[index].src;
  });
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    bigImg.dataset.bsToggle = "modal0";
  } else {
    bigImg.dataset.bsToggle = "modal";
  }
});
