var React = require('react');

class SideMenu extends React.Component {
    render() {
        var menu = document.querySelector(".menu"),
        toggle = document.querySelector(".menu-toggle");

        function toggleToggle() {
          toggle.classList.toggle("menu-open");
        };

        function toggleMenu() {
          menu.classList.toggle("active");
        };

        toggle.addEventListener("click", toggleToggle, false);
        toggle.addEventListener("click", toggleMenu, false);

        return (
            <nav role="navigation">
              <div class="menu-toggle"><span>Menu</span></div>
              <ul class="menu">
                <li><a href="#"><span>Home</span></a></li>
                <li><a href="#"><span>Learn More</span></a></li>
                <li><a href="#"><span>Get Involved</span></a></li>
                <li><a href="#"><span>Have Some Fun</span></a></li>
                <li><a href="#"><span>Don't Miss Out</span></a></li>
                <li><a href="#"><span>Get The Gear</span></a></li>
              </ul>
            </nav>
        );
    }
};

module.exports = SideMenu;