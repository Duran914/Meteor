// Javascript for media 101 project

//******* VARIABLES *****************

//navbar
const navbar = document.getElementById('fullNavbar');
// navbar ul
const navbarUl = document.getElementById('dropDownMenu');
//all nav bar <a> tags
const navbarUlLinks = document.querySelectorAll('a.green-navBar');

// navbar individuallinks ids
const home = document.getElementById('homeLink');
const about = document.getElementById("aboutLink");
const offers = document.getElementById('offersLink');
const portfolio = document.getElementById('portfolioLink');
const blog = document.getElementById('blogLink');
const contactUs = document.getElementById('contactLink');

//nav bar hamburger menu
const hamburgerFaIcon = document.querySelector('#menu');
console.log(hamburgerFaIcon);
// site logo
const meteorLogo = document.querySelector('.logo img');


// html section ids
const showcaseSection = document.getElementById('showcaseJs');
const aboutSection = document.getElementById('servicesJs');
const offersSection = document.getElementById('offersJs');
const portfolioSection = document.getElementById('portfolioJs');
const blogSection = document.getElementById('blogJs');
const contactUsSection = document.getElementById('contact-usJs');

//services(about us) boxs
const servicesBox1 = document.querySelector('.box.first');
  const servicesBox1Img = servicesBox1.firstElementChild;

const servicesBox2 = document.querySelector('.box.second');
  const servicesBox2Img = servicesBox2.firstElementChild;

const servicesBox3 = document.querySelector('.box.third');
  const servicesBox3Img = servicesBox3.firstElementChild;

const servicesBox4 = document.querySelector('.box.fourth');
  const servicesBox4Img = servicesBox4.firstElementChild;


// dropdown menu
function dropdownClick() {
    if (navbarUl.className === 'navBar') {
        navbarUl.className += ' responsiveNavbar';
        hamburgerFaIcon.setAttribute('class', 'fa fa-times fa-2x');
    }
    else {
      navbarUl.className = 'navBar';
        hamburgerFaIcon.setAttribute('class', 'fa fa-bars fa-2x');
    }
}

//  navbar links scroll to section
  navbarUl.addEventListener('click', function scrollToSection(goto) {
    let link = goto.target;

      if (link == home) {
        showcaseSection.scrollIntoView();
        navbarUl.setAttribute('class', 'navBar');
      }
      else if (link == about ) {
        aboutSection.scrollIntoView();
        navbarUl.setAttribute('class', 'navBar');
      }
      else if (link == offers) {
         offersSection.scrollIntoView();
         navbarUl.setAttribute('class', 'navBar');
      }
      else if (link == portfolio) {
         portfolioSection.scrollIntoView();
         navbarUl.setAttribute('class', 'navBar');
      }
      else if (link == blog) {
         blogSection.scrollIntoView();
         navbarUl.setAttribute('class', 'navBar');
      }
      else{
         contactUsSection.scrollIntoView();
         navbarUl.setAttribute('class', 'navBar');
      }
  });

//Change navbar color on scroll
  window.onscroll = function() {navbarColor()};

  function navbarColor() {

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      navbar.style.background = '#000';
       hamburgerFaIcon.style.color = '#a2cf8d';
        meteorLogo.setAttribute('src', 'img/white_logo.png');
         navbarUlLinks.forEach(function(link){
          link.style.color = '#fff';
        });
    }
      else {
      navbar.style.background = '#a2cf8d';
       hamburgerFaIcon.style.color = '#000';
        meteorLogo.setAttribute('src', 'img/black_logo.png');
         navbarUlLinks.forEach(function(link){
          link.style.color = '#000';
        });
      }
    }

// Change img of services boxes

    //Box 1
    servicesBox1.addEventListener('mouseenter', function() {
      servicesBox1Img.setAttribute('src', 'img/first-service-white.png');
    });

    servicesBox1.addEventListener('mouseleave', function() {
      servicesBox1Img.setAttribute('src', 'img/first-service-main.png');
    });


    //Box 2
    servicesBox2.addEventListener('mouseenter', function() {
       servicesBox2Img.setAttribute('src', 'img/second-service-white.png');
    });

    servicesBox2.addEventListener('mouseleave', function() {
       servicesBox2Img.setAttribute('src', 'img/second-service-main.png');
    });


    //Box 3
    servicesBox3.addEventListener('mouseenter', function() {
       servicesBox3Img.setAttribute('src', 'img/third-service-white.png');
    });

    servicesBox3.addEventListener('mouseleave', function() {
       servicesBox3Img.setAttribute('src', 'img/third-service-main.png');
    });


     //Box 4
    servicesBox4.addEventListener('mouseenter', function() {
       servicesBox4Img.setAttribute('src', 'img/fourth-service-white.png');
    });

    servicesBox4.addEventListener('mouseleave', function() {
       servicesBox4Img.setAttribute('src', 'img/fourth-service-main.png');
    });
