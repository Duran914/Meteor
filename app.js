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

//services(about us) boxs
const servicesBox1 = document.querySelector('.box.first');
 const servicesBox1Img = servicesBox1.firstElementChild;

const servicesBox2 = document.querySelector('.box.second');
  const servicesBox2Img = servicesBox2.firstElementChild;

const servicesBox3 = document.querySelector('.box.third');
  const servicesBox3Img = servicesBox3.firstElementChild;

const servicesBox4 = document.querySelector('.box.fourth');
  const servicesBox4Img = servicesBox4.firstElementChild;

//Scroll function
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

      if (link == home) {
        showcaseSection.scrollIntoView();
         navbarUl.setAttribute('class', 'navBar');
          hamburgerFaIcon.setAttribute('class', 'fa fa-bars fa-2x');
      }
      else if (link == about ) {
        aboutSection.scrollIntoView();
         navbarUl.setAttribute('class', 'navBar');
          hamburgerFaIcon.setAttribute('class', 'fa fa-bars fa-2x');
      }
      else if (link == offers) {
         offersSection.scrollIntoView();
          navbarUl.setAttribute('class', 'navBar');
           hamburgerFaIcon.setAttribute('class', 'fa fa-bars fa-2x');
      }
      else if (link == portfolio) {
         portfolioSection.scrollIntoView();
          navbarUl.setAttribute('class', 'navBar');
           hamburgerFaIcon.setAttribute('class', 'fa fa-bars fa-2x');
      }
      else if (link == blog) {
         blogSection.scrollIntoView();
          navbarUl.setAttribute('class', 'navBar');
           hamburgerFaIcon.setAttribute('class', 'fa fa-bars fa-2x');
      }
      else{
         contactUsSection.scrollIntoView();
          navbarUl.setAttribute('class', 'navBar');
           hamburgerFaIcon.setAttribute('class', 'fa fa-bars fa-2x');
      }
  });

//Change navbar color on scroll
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

// Remove/add portfolio pictures

const portfolioButtons = document.querySelector('.portfolio-btns')
 const landscape = portfolioButtons.children[1];
  const workspace = portfolioButtons.children[2];
   const technology = portfolioButtons.children[3];

  //portfolio pictures
const workspaceImgs = document.querySelectorAll('.workspace');
 const landscapeImgs = document.querySelectorAll('.landscape');
  const technologyImgs = document.querySelectorAll('.technology');
   const allImgs = document.querySelectorAll('.imgBox');

 // function for portfolio picture filter buttons
  function allBtn() {
    portfolioButtons.children[0].setAttribute('class', 'portfolio-button Active');
     portfolioButtons.children[1].setAttribute('class', 'portfolio-button');
      portfolioButtons.children[2].setAttribute('class', 'portfolio-button');
       portfolioButtons.children[3].setAttribute('class', 'portfolio-button');
        landscapeImgs.forEach(function(img){
         img.classList.remove('hide');
       });
         technologyImgs.forEach(function(img){
          img.classList.remove('hide');
        });
          workspaceImgs.forEach(function(img){
           img.classList.remove('hide');
         });
    }

  function landscapeBtn() {
    portfolioButtons.children[1].setAttribute('class', 'portfolio-button Active');
     portfolioButtons.children[0].setAttribute('class', 'portfolio-button');
      portfolioButtons.children[2].setAttribute('class', 'portfolio-button');
       portfolioButtons.children[3].setAttribute('class', 'portfolio-button');
        landscapeImgs.forEach(function(img){
         img.classList.remove('hide');
       });
         workspaceImgs.forEach(function(img){
          img.classList.add('hide');
        });
          technologyImgs.forEach(function(img){
           img.classList.add('hide');
         });
  }

  function technologyBtn() {
    portfolioButtons.children[3].setAttribute('class', 'portfolio-button Active');
     portfolioButtons.children[0].setAttribute('class', 'portfolio-button');
      portfolioButtons.children[1].setAttribute('class', 'portfolio-button');
       portfolioButtons.children[2].setAttribute('class', 'portfolio-button');
        technologyImgs.forEach(function(img){
         img.classList.remove('hide');
       });
          workspaceImgs.forEach(function(img){
           img.classList.add('hide');
         });
           landscapeImgs.forEach(function(img){
            img.classList.add('hide');
          });
      }

  function workspaceBtn() {
    portfolioButtons.children[2].setAttribute('class', 'portfolio-button Active');
     portfolioButtons.children[0].setAttribute('class', 'portfolio-button');
      portfolioButtons.children[1].setAttribute('class', 'portfolio-button');
       portfolioButtons.children[3].setAttribute('class', 'portfolio-button');
        workspaceImgs.forEach(function(img){
         img.classList.remove('hide');
       });
          technologyImgs.forEach(function(img){
           img.classList.add('hide');
         });
           landscapeImgs.forEach(function(img){
            img.classList.add('hide');
          });
      }
function scrollAnimation() {
 let offerImg = document.querySelector('.offersPicture');
  let blogLgImg = document.querySelector('.lg-box');
   let blogSmImgs = document.querySelectorAll('.blog-img-box');
    let contactUsForm = document.querySelector('.contact-us-form');
     let contactUsImg = document.querySelector('.map-img');
      if (document.documentElement.scrollTop > 680){
        offerImg.classList.add('animateSideInRight');
         }
          else {
            offerImg.classList.remove('animateSideInRight');
        }
           if (document.documentElement.scrollTop > 2000){
             blogLgImg.classList.add('animateSideInLeft');
            }
               else {
                 blogLgImg.classList.remove('animateSideInLeft');
           }
             if (document.documentElement.scrollTop > 2000){
               blogSmImgs.forEach(function(x){
                x.classList.add('animateSideInRight');
              });
             }
               else {
               blogSmImgs.forEach(function(x){
                x.classList.remove('animateSideInRight');
               });
              }
                if (document.documentElement.scrollTop > 3300) {
                  contactUsForm.classList.add('animationSlideFromBottom');
                  contactUsImg.classList.add('animationSlideFromBottom');
                }
                else {
                  contactUsForm.classList.remove('animationSlideFromBottom');
                  contactUsImg.classList.remove('animationSlideFromBottom');
                }

            }
