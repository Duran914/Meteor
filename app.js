// Javascript for media 101 project

//function for dropdown menu

function dropdownClick() {
    var x = document.getElementById('dropDownMenu');
    if (x.className === 'navBar') {
        x.className += ' responsiveNavbar';
    }
    else {
      x.className = 'navBar';
    }
}

// function for back to top button




// function for navigation color change
window.onscroll = function() {changeNavbarColor()};

function changeNavbarColor() {
  if (document.body.scrollTop > 16 ||
  document.documentElement.scrollTop > 16){
    document.getElementById('dropDownMenu').className =
    "white-navBar", "white-navBar-li";
    document.getElementById('lis').className =
    "black-li";
  }else {
    document.getElementById('dropDownMenu').className =
    "navBar";
    document.getElementById('lis').className =
    "white-li";
  }
}
