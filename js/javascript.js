class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
        .myheader {
            z-index: 999;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 100px;
            transition: .05s ease;
            position: sticky;
            height: 62px;
            background-color: #20a29e;
         
         }
         
         .myheader .mybrand {
            color: #fff;
            font-size: 23px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
         }
         
         .myheader .mynavigation {
            position: relative;
         }
         
         .myheader .mynavigation .mynavigation_item a {
            position: relative;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
            margin-left: 30px;
            transition: 0.3s ease;
            text-transform: capitalize;
            padding: 15px 0px !important;
         
         }
         
         .myheader .mynavigation .mynavigation_item a:before {
            content: '';
            position: absolute;
            width: 0;
            height: 3px;
            bottom: -7px;
            left: 0;
            background: #fff;
            border-radius: 0 0 20px 20px;
         }
         
         .myheader .mynavigation .mynavigation_item a:hover:before {
            width: 100%;
         }
         
         @media(max-width:1040px) {
            .myheader {
               padding: 12px 20px;
            }
         
            .myheader .mynavigation {
               display: none;
            }
         
            .myheader .mynavigation.active {
               position: fixed;
               width: 60%;
               height: 100vh;
               top: 0;
               right: 0;
               display: block;
               justify-content: center;
               align-items: center;
               /* background: rgba(1, 1, 1, 0.5); */
            }
         
            .myheader .mynavigation .mynavigation_item a {
               color: #222;
               font-size: 15px;
               margin: 10px;
               padding-bottom: 0 !important;
               padding: 0px !important;
            }
         
         
            .myheader .mynavigation.active .mynavigation_item {
               background: #fff;
               width: 100%;
               /* max-width: 600px; */
               /* margin-top: 40px;  */
               margin: 60px -1%;
               padding: 40px;
               display: flex;
               flex-direction: column;
               align-items: center;
               border-radius: 5px;
               box-shadow: 0 5px 25px rgba(1 1 1 / 20%);
            }
         
            .myheader .mynavigation .mynavigation_item a:before {
               background-color: #222;
               height: 5px;
            }
         
            .menu_btn {
               background: url('../images/lists-solid.svg') no-repeat;
               background-size: 30px;
               background-position: center;
               height: 40px;
               width: 40px;
               cursor: pointer;
               transition: 0.3s ease;
               font-size: 15px !important;
         
         
            }
         
            .menu_btn.active {
               z-index: 999;
               background: url('../images/xmark-solid.svg') no-repeat;
               background-size: 25px;
               background-position: center;
               transition: 0.3s ease;
               background-color: #fff;
               border-radius: 5px;
         
            }
         
         }</style>
         <section class="myheader" id="home" style="background:#20a29">
         <a href="index.html" class="mybrand">Tourisam </a>
         <div class="menu_btn"></div>
         <div class="mynavigation">
             <div class="mynavigation_item">
                 <a href="index.html">home</a>
                 <a href="about.html">about</a>
                 <a href="services.html">Services</a>
                 <a href="gallery.html">Gallery</a>
                 <a href="contact.html">contact us</a>
                 <a href="http://localhost/travel/php/signup1.php">Signup</a>
             </div>
         </div>
     </section>
         `;
    }
}
customElements.define('header-component', Header);


class footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
        .footer {
            /* background: url('../images/footer-bg.jpg') no-repeat; */
            background-size: cover;
            background-position: center;
            background-color: #20a29e;
            position: relative;
         }
         
         .footer .box-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
            gap: 3rem;
         }
         
         .footer .box-container .box h3 {
            color: #fff;
            font-size: 25px;
            padding-bottom: 2rem;
         }
         
         .footer .box-container .box a {
            color: #fff;
            font-size: 15px;
            padding-bottom: 1.5rem;
            display: block;
            text-decoration: none;
         
         }
         
         .footer .box-container .box a i {
            color: #fff;
            padding-right: .5rem;
            transition: .2s linear;
         }
         
         .footer .box-container .box a:hover i {
            padding-right: 2rem;
         }
         
         .footer .credit {
            text-align: center;
            padding-top: 3rem;
            margin-top: 3rem;
            border-top: .1rem solid #fff;
            font-size: 16px;
            color: #fff;
            font-weight: bold;
         }
         
         .footer .credit span {
            color: #fff;
            font-size: 1rem;
         }
        </style>
        <section class="footer">
         
 <div class="box-container">
     <div class="box">
         <h3>quick links</h3>
         <a href="index.html"> <i class="fas fa-angle-right"></i> home</a>
         <a href="about.html"> <i class="fas fa-angle-right"></i> about</a>
         <a href="services.html"> <i class="fas fa-angle-right"></i> service</a>
         <a href="index.html"> <i class="fas fa-angle-right"></i> package</a>
     </div>

     <div class="box">
         <h3>extra links</h3>
         <a href="contact.html"> <i class="fas fa-angle-right"></i> ask questions</a>
         <a href="gallery.html"> <i class="fas fa-angle-right"></i> Gallery</a>
         <a href="#"> <i class="fas fa-angle-right"></i>coming soon</a>
         <a href="#"> <i class="fas fa-angle-right"></i>coming soon </a>

     </div>

     <div class="box">
         <h3>contact info</h3>
         <a href="tel:9994539140"> <i class="fas fa-phone"></i> 9994539140</a>
         <a href="tel:6380296271"> <i class="fas fa-phone"></i> 6380296271 </a>
         <a href="mailto:vickypersonalguide@gmail.com"> <i class="fas fa-envelope"></i> vickypersonalguide@gmail.com </a>
         <a href="#"> <i class="fas fa-map"></i> Madurai, india - 625009 </a>
     </div>

     <div class="box">
         <h3>follow us</h3>
         <a href="#" target="_blank"> <i class="fab fa-facebook-f"></i> facebook </a>
         <a href="#" target="_blank"> <i class="fab fa-twitter"></i> twitter </a>
         <a href="https://www.instagram.com/fraud_beats/" target="_blank"> <i class="fab fa-instagram"></i> instagram </a>
         <a href="#" target="_blank"> <i class="fab fa-youtube"></i> youtube</a>
     </div>

 </div>

 <div class="credit"> created by <span>Vingenesh babu</span> | all rights reserved! </div>

</section>
        `;
    }
}
customElements.define('footer-component', footer);

//navbar toggle

const menuBtn = document.querySelector(".menu_btn");
const navigation = document.querySelector(".mynavigation");
const overlay = document.querySelector(".overlay");
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
    overlay.classList.toggle("active");

});

//video silder

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");


var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
});


//-----page scroll enable up arrow-->

const scrollup = document.querySelector('.scrollup');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollup.classList.add("active");
    }
    else {
        scrollup.classList.remove("active");
    }
});


//current date set

var da = new Date();
var ye = da.getFullYear();
var mo = da.getMonth() + 1;
var to = String(da.getDate()).padStart(2, '0');
var dat = ye + '-' + mo + '-' + to;
document.getElementById("date-picker").value = dat;






