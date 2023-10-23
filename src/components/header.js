import React from 'react';

function Header() {
    return(
        <nav class="h-20 w-full flex items-center justify-center">
            <img src='../assets/images/cloud-icon-12871.png' alt="cloudLogo"></img><h1 class="text-2xl text-grey" id="header">Weather Dashboard</h1>
        </nav>
    );
}
export default Header;