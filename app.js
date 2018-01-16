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

// site logo
const meteorLogo = document.querySelector('.logo img');


// html section ids
const showcaseSection = document.getElementById('showcaseJs');
const aboutSection = document.getElementById('servicesJs');
const offersSection = document.getElementById('offersJs');
const portfolioSection = document.getElementById('portfolioJs');
const blogSection = document.getElementById('blogJs');
const contactUsSection = document.getElementById('contact-usJs');


//function for dropdown menu
function dropdownClick() {
    if (navbarUl.className === 'navBar') {
        navbarUl.className += ' responsiveNavbar';
    }
    else {
      navbarUl.className = 'navBar';
    }
}

// function for navbar link to scroll to section
   //   NEED TO FIX NAVBAR REQUIRING 2 CLICKS
navbarUl.addEventListener('click', function scrollToSection(goto) {
    let link = goto.target;

      if (link == home) {
        showcaseSection.scrollIntoView();
        navbarUl.className -= ' responsiveNavbar';
      }
      else if (link == about ) {
        aboutSection.scrollIntoView();
        navbarUl.className -= 'responsiveNavbar';
      }
      else if (link == offers) {
         offersSection.scrollIntoView();
         navbarUl.className -= ' responsiveNavbar';
      }
      else if (link == portfolio) {
         portfolioSection.scrollIntoView();
         navbarUl.className -= ' responsiveNavbar';
      }
      else if (link == blog) {
         blogSection.scrollIntoView();
         navbarUl.className -= ' responsiveNavbar';
      }
      else{
         contactUsSection.scrollIntoView();
         navbarUl.className -= ' responsiveNavbar';
      }
  });

//Change navbar color on scroll
  window.onscroll = function() {navbarColor()};

  function navbarColor() {
    if (document.documentElement.scrollTop > 450) {
      navbar.style.background = '#000';
       hamburgerFaIcon.style.color = '#a2cf8d';
        meteorLogo.setAttribute('src', 'img/white_logo.png')
         navbarUlLinks.forEach(function(link){
          link.style.color = '#fff';
        });
    }
      else {
      navbar.style.background = "#a2cf8d";
       hamburgerFaIcon.style.color = '#000';
        meteorLogo.setAttribute('src', 'img/black_logo.png');
         navbarUlLinks.forEach(function(link){
          link.style.color = '#000';
        });
      }
    }
