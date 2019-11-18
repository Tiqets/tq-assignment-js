import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './components/MenuItem';
import './navMenu.css';

/* Feel free to make this a functional component if you consider it necessary */
class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggleHamburger = this.toggleHamburger.bind(this);
    this.state = {
      showMenu: false,
    };
  }

  toggleHamburger() {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  }

  render() {
    const { routes } = this.props;
    const { showMenu } = this.state;

    const navMenuVisiblity = `${showMenu ? '' : 'navMenu_menu-mobileHide'} navMenu_menu`;
    const openMenuVisibility = `${showMenu ? 'navMenu_hamburger-hide' : ''} navMenu_hamburger `;
    const closeMenuVisiblity = `${showMenu ? '' : 'navMenu_hamburger-hide'} navMenu_hamburger `;

    const menu = routes.map((route) => (
      <MenuItem name={route.name} href={route.href} subRoutes={route.subRoutes} key={route.name + route.href} />
    ));
    return (
      <div className="navMenu">
        <button className={openMenuVisibility} type="button" onClick={this.toggleHamburger}>
          <i className="material-icons md-light">
          menu
          </i>
        </button>
        <img
          className="navMenu_logo"
          src="https://www.tiqets.com/static/assets/webpack/logo/logo-white-medium.0c98d94780.png"
          alt="Tiqets.com"
        />
        <div className={navMenuVisiblity}>
          {menu}
        </div>
        <button className={closeMenuVisiblity} type="button" onClick={this.toggleHamburger}>
          <i className="material-icons md-light">
          cancel
          </i>
        </button>

      </div>
    );
  }
}

NavMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
    subRoutes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
    })),
  })),
};

NavMenu.defaultProps = {
  routes: [
    {
      name: 'Gondor',
      href: '',
      subRoutes: [],
    },
    {
      name: 'Isengard',
      href: '',
      subRoutes: [],
    },
    {
      name: 'Rohan',
      href: '',
      subRoutes: [],
    },
    {
      name: 'Rivers',
      href: '',
      subRoutes: [
        {
          name: 'Anduin',
          href: '',
        },
        {
          name: 'Bruinen',
          href: '',
        },
        {
          name: 'Baranduin',
          href: '',
        },
      ],
    },
    {
      name: 'Mordor',
      href: '',
      subRoutes: [],
    },
  ],
};

export default NavMenu;
