import React from 'react'

const Nav = ({toggleMenu, showMenu}) => {
   return (
      <>
         <nav id="navbar">
            <div className="nav-wrapper">
               <p className="brand">
                  {`Gantushig Javkhlan `}
                  <strong>aka "tushig"</strong>
               </p>
               <span
               onClick={toggleMenu}
               className={showMenu === 'active' ? 'menu-button active' : 'menu-button'}
               >
                  <span />
               </span>
            </div>
         </nav>
      </>
   );
};

 export default Nav