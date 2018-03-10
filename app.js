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

//Scroll functions
  window.onscroll = function()
  {
    navbarColor(),
    scrollAnimation()
  };


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
    console.log(link);
      if (link == home) {
        showcaseSection.scrollIntoView(
          {behavior: "smooth",
            block: "start"});
         navbarUl.setAttribute('class', 'navBar');
          hamburgerFaIcon.setAttribute('class', 'fa fa-bars fa-2x');
      }
      else if (link == about ) {
        aboutSection.scrollIntoView(
          {behavior: "smooth",
             block: "start"});
         navbarUl.setAttribute('class', 'navBar');
          hamburgerFaIcon.setAttribute('class', 'fa fa-bars fa-2x');

      }
      else if (link == offers) {
         offersSection.scrollIntoView(
           {behavior: "smooth",
              block: "start"});
          navbarUl.setAttribute('class', 'navBar');
           hamburgerFaIcon.setAttribute('class', 'fa fa-bars fa-2x');
      }
      else if (link == portfolio) {
         portfolioSection.scrollIntoView(
           {behavior: "smooth",
              block: "start"});
          navbarUl.setAttribute('class', 'navBar');
           hamburgerFaIcon.setAttribute('class', 'fa fa-bars fa-2x');
      }
      else if (link == blog) {
         blogSection.scrollIntoView(
           {behavior: "smooth",
              block: "start"});
          navbarUl.setAttribute('class', 'navBar');
           hamburgerFaIcon.setAttribute('class', 'fa fa-bars fa-2x');
      }
      else{
         contactUsSection.scrollIntoView(
           {behavior: "smooth",
              block: "start"});
          navbarUl.setAttribute('class', 'navBar');
           hamburgerFaIcon.setAttribute('class', 'fa fa-bars fa-2x');
      }
  });


//Change navbar color on scroll
  function navbarColor() {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      navbar.style.background = '#262626';
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
//services(about us) boxs
const servicesBox1 = document.querySelector('.box.first');
 const servicesBox1Img = servicesBox1.firstElementChild;

const servicesBox2 = document.querySelector('.box.second');
  const servicesBox2Img = servicesBox2.firstElementChild;

const servicesBox3 = document.querySelector('.box.third');
  const servicesBox3Img = servicesBox3.firstElementChild;

const servicesBox4 = document.querySelector('.box.fourth');
  const servicesBox4Img = servicesBox4.firstElementChild;

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

// Remove/add portfolio pictures

 //portfolio buttons
const portfolioButtons = document.querySelector('.portfolio-btns').children;

  //portfolio pictures
const workspaceImgs = document.querySelectorAll('.workspace');
 const landscapeImgs = document.querySelectorAll('.landscape');
  const technologyImgs = document.querySelectorAll('.technology');
   const allImgs = document.querySelectorAll('.imgBox');

 // function for portfolio picture filter buttons
  function allBtn() {
    for (let i = 0; i < portfolioButtons.length; i++) {
      if (i === 0) {
        portfolioButtons[i].classList.add('Active');
         landscapeImgs.forEach(function(img){
          img.classList.remove('hide')});
      }
      else {
        portfolioButtons[i].setAttribute('class', 'portfolio-button');
         technologyImgs.forEach(function(img){
          img.classList.remove('hide')});
           workspaceImgs.forEach(function(img){
           img.classList.remove('hide')});
        }
     }
  }

  function landscapeBtn() {
      for (let i = 0; i < portfolioButtons.length; i++) {
        if (i === 1) {
          portfolioButtons[i].classList.add('Active');
           landscapeImgs.forEach(function(img){
            img.classList.remove('hide')});
        }
        else {
          portfolioButtons[i].setAttribute('class', 'portfolio-button');
          workspaceImgs.forEach(function(img){
           img.classList.add('hide')});
            technologyImgs.forEach(function(img){
             img.classList.add('hide')});
         }
      }
  }

  function technologyBtn() {
    for (let i = 0; i < portfolioButtons.length; i++) {
      if (i === 3) {
        portfolioButtons[i].classList.add('Active');
         technologyImgs.forEach(function(img){
          img.classList.remove('hide')});
      }
      else {
        portfolioButtons[i].setAttribute('class', 'portfolio-button');
         workspaceImgs.forEach(function(img){
          img.classList.add('hide')});
           landscapeImgs.forEach(function(img){
           img.classList.add('hide')});
        }
     }
  }

  function workspaceBtn() {
    for (let i = 0; i < portfolioButtons.length; i++) {
      if (i === 2) {
        portfolioButtons[i].classList.add('Active');
         workspaceImgs.forEach(function(img){
          img.classList.remove('hide')});
      }
      else {
        portfolioButtons[i].setAttribute('class', 'portfolio-button');
         technologyImgs.forEach(function(img){
          img.classList.add('hide')});
           landscapeImgs.forEach(function(img){
            img.classList.add('hide')});
        }
     }
  }

function scrollAnimation() {
 let offerImg = document.querySelector('.offersPicture');
  let blogLgImg = document.querySelector('.lg-box');
   let blogSmImgs = document.querySelectorAll('.blog-img-box');
    let contactUsForm = document.querySelector('.contact-us-form');
     let contactUsImg = document.querySelector('.map-img');
      if (document.body.scrollTop > 680 || document.documentElement.scrollTop > 680){
        offerImg.classList.add('animateSideInRight');
         }
          else {
            offerImg.classList.remove('animateSideInRight');
        }
           if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000){
             blogLgImg.classList.add('animateSideInLeft');
            }
               else {
                 blogLgImg.classList.remove('animateSideInLeft');
           }
             if ( document.body.scrollTop > 2000 ||document.documentElement.scrollTop > 2000){
               blogSmImgs.forEach(function(x){
                x.classList.add('animateSideInRight');
              });
             }
               else {
               blogSmImgs.forEach(function(x){
                x.classList.remove('animateSideInRight');
               });
              }
                if (document.body.scrollTop > 3300 || document.documentElement.scrollTop > 3300) {
                  contactUsForm.classList.add('animationSlideFromBottom');
                   contactUsImg.classList.add('animationSlideFromBottom');
                }
                else {
                  contactUsForm.classList.remove('animationSlideFromBottom');
                   contactUsImg.classList.remove('animationSlideFromBottom');
                }

            }

// Form Validation

function validateForm() {
 let nameError = document.querySelector('.error-name');
  let contactFormName = document.forms['contantUsForm']['fname'].value

   if (contactFormName == '') {
    nameError.innerHTML = "Please enter a name.";
     nameError.parentElement.style.padding = '5px';
  }
  let emailError = document.querySelector('.error-email');
   let contactFormEmail = document.forms['contantUsForm']['email'].value
    if (contactFormEmail == '') {
    emailError.innerHTML = 'Please enter an email address';
    emailError.parentElement.style.padding = '5px';
  }
  let messageError = document.querySelector('.error-textarea');
   let messageFormEmail = document.forms['contantUsForm']['message'].value
     if (messageFormEmail == '') {
       messageError.innerHTML = 'Please enter a message';
        messageError.parentElement.style.padding = '5px';
         return false;
    }
    // clear fields after submit
    contactFormName.value = '';
     contactFormEmail.value = '';
      messageFormEmail.value = '';
}
