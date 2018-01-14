// Javascript for media 101 project

//******* VARIABLES *****************

// navbar links ids
const home = document.getElementById('homeLink');
const about = document.getElementById("aboutLink");
const offers = document.getElementById('offersLink');
const portfolio = document.getElementById('portfolioLink');
const blog = document.getElementById('blogLink');
const contactUs = document.getElementById('contactLink');

// html section ids
const showcaseSection = document.getElementById('showcaseJs');
const aboutSection = document.getElementById('servicesJs');
const offersSection = document.getElementById('offersJs');
const portfolioSection = document.getElementById('portfolioJs');
const blogSection = document.getElementById('blogJs');
const contactUsSection = document.getElementById('contact-usJs');

//navbar
const navbar = document.getElementById('fullNavbar');
// navbar ul
const navLinks = document.getElementById('dropDownMenu');



//function for dropdown menu
function dropdownClick() {
    if (navLinks.className === 'navBar') {
        navLinks.className += ' responsiveNavbar';
    }
    else {
      navLinks.className = 'navBar';
    }
}

// function for navbar link to scroll to section
   //   NEED TO FIX NAVBAR REQUIRING 2 CLICKS
navLinks.addEventListener('click', function scrollToSection(goto) {
    let link = goto.target;

      if (link == home) {
        showcaseSection.scrollIntoView();
        navLinks.className -= ' responsiveNavbar';
      }
      else if (link == about ) {
        aboutSection.scrollIntoView();
        navLinks.className -= 'responsiveNavbar';
      }
      else if (link == offers) {
         offersSection.scrollIntoView();
         navLinks.className -= ' responsiveNavbar';
      }
      else if (link == portfolio) {
         portfolioSection.scrollIntoView();
         navLinks.className -= ' responsiveNavbar';
      }
      else if (link == blog) {
         blogSection.scrollIntoView();
         navLinks.className -= ' responsiveNavbar';
      }
      else{
         contactUsSection.scrollIntoView();
         navLinks.className -= ' responsiveNavbar';
      }
  });

//Change navbar color on scroll
  window.onscroll = function() {navbarColor()};

  function navbarColor() {
    if (document.documentElement.scrollTop > 50) {
      navbar.style.background = "black";
    }
    else {
    }
  }
