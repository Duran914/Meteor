// Javascript for media 101 project

//function for dropdown menu

function dropdownClick() {
    let x = document.getElementById('dropDownMenu');
    if (x.className === 'navBar') {
        x.className += ' responsiveNavbar';
    }
    else {
      x.className = 'navBar';
    }
}

// scroll to nav links
// function scrollToAbout() {
//     let aboutSection = document.getElementById('servicesJs');
//     aboutSection.scrollIntoView();
//     prevent.default();
// }

function scrollToSection() {
  // nav ids
  let home = document.getElementById('homeLink');
  let about = document.getElementById("aboutLink");
  let offers = document.getElementById('offersLink');
  let portfolio = document.getElementById('portfolioLink');
  let blog = document.getElementById('blogLink');
  let contactUs = document.getElementById('contactLink');

  //nav sections
  let showcaseSection = document.getElementById('showcaseJs');
  let aboutSection = document.getElementById('servicesJs');
  let offersSection = document.getElementById('offersJs');
  let portfolioSection = document.getElementById('portfolioJs');
  let blogSection = document.getElementById('blogJs');
  let contactUsSection = document.getElementById("contact-usJs");

  if (about) {
     aboutSection.scrollIntoView();
  }
  else if (home) {
    showcaseSection.scrollIntoView();
  }
  else if (offers) {
    offersSection.scrollIntoView();
  }
  else if (portfolio) {
    portfolioSection.scrollIntoView();
  }
  else if (blog) {
    blogSection.scrollIntoView();
  }
  else if (contactUs) {
    contactUsSection.scrollIntoView();
  }

}
