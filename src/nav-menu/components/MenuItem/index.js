import React from 'react';
import PropTypes from 'prop-types';
import './menuItem.css';

/* Feel free to make this a functional component if you consider it necessary */
const MenuItem = (props) => {
  const { name, href, subRoutes } = props;
  let menuItem;
  let subMenu;
  if (subRoutes.length) {
    menuItem = (
      <button className="menuItem_link" type="button">
        {name}
        <i className="menuItem_link_arrow" />
      </button>
    );
    const subMenuItems = subRoutes.map((route) => (
      <a className="menuItem_subMenu_link" href={href} key={route.name + route.href}>{route.name}</a>
    ));
    subMenu = (
      <div className="menuItem_subMenu">
        {subMenuItems}
      </div>
    );
  } else {
    menuItem = (
      <a className="menuItem_link" href={href}>{name}</a>
    );
  }
  return (
    <div className="menuItem">
      {menuItem}
      {subMenu}
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  subRoutes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
  })),
};

MenuItem.defaultProps = {
  name: '',
  href: '',
  subRoutes: '',
};

export default MenuItem;
