import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className = 'Navbar' >
            <div className = 'NavbarItem' > <Link className = 'NavbarLink' to = '/' >Books</Link> </div>
            <div className = 'NavbarItem' > <Link className = 'NavbarLink' to = '/search' >Search</Link> </div>
        </div>
    );
}

export default Navbar;