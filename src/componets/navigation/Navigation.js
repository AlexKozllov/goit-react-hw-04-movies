import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationList } from './styleNavigation';

const Navigation = () => {
    return (<>
    <NavigationList>
        <li><NavLink to='/' className='navLink' activeClassName='aktiveNavLink' exact>Home</NavLink></li>
        <li><NavLink to='/movies' className='navLink' activeClassName='aktiveNavLink'>Movies</NavLink></li>
    </NavigationList>
        
        </>
    );
}

export default Navigation;