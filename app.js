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
