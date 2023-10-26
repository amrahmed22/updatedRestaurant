let menu = document.querySelector('.menu')
let navItem = document.getElementsByClassName('navLink')
let bars = document.querySelector('.open-menu')
let times = document.querySelector('.close-menu')


bars.addEventListener('click',()=> {
    menu.style.right = '0'
})

times.addEventListener('click',()=> {
    menu.style.right = '-100%'
})

for (let i = 0; i < navItem.length; i++) {
    
    navItem[i].addEventListener('click',()=> {
        menu.style.right = '-100%'
    })
}





let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(document).ready(function () {
    $('#loading .sk-cube-grid').fadeOut(1000, () => {
        $('#loading').fadeOut(1000, () => {
            $('body').css('overflow-y', 'auto')
        })
    });
});