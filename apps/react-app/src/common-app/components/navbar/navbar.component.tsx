import React from 'react';
import * as classes from './navbar.styles';

export const Navbar: React.FC = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.items_1}>
        <img className={classes.img_1} src="/assets/navbar-manfred.svg" width={'54'} alt="export" />
        <img className={classes.img_2} src="/assets/navbar-Export.svg" width={'42'} alt="export" />
        <img className={classes.img_3} src="/assets/navbar-vector.svg" width={'32'} alt="export" />
      </div>
      <div className={classes.items_3}>
        <img src="" alt="" />
      </div>
      <div className={classes.items_3}>
        <img className={classes.img_5} src="/assets/lines-vector.svg" width={'24'} height={'24'} alt="export" />
      </div>
    </nav>
  );
};
