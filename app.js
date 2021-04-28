'use strict'

const switcher = document.querySelector('.btn');

class Header extends React.Component {
    render() {
       const mystyle = {
           color: "white",
           fontFamily: "Arial"
       };
       return (
           <div><h1>Hallo</h1></div>
       );
    }
}

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});