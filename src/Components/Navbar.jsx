import React, { useState } from "react";
import "../Styles/Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import logo from "../Assets/logoName.svg";

function Navbar() {
    const [activeIcon, setActiveIcon] = useState('home'); // Initial active icon is 'home'
  
    const handleIconClick = (iconName) => {
      setActiveIcon(iconName);
    };
  
    return (
      <div className='navbar'>
        <div className="logo-wrapper">
          <img src={logo} className='logo' alt='logo'/>
        </div>
        <div className="navlink-wrapper">
          <div className="icon-wrapper" onClick={() => handleIconClick('home')}>
            <HomeRoundedIcon
              className={`icon ${activeIcon === 'home' ? 'active' : ''}`}
              style={{ color: activeIcon === 'home' ? '#F05A22' : '#F9DDCF' }}
            />
            {activeIcon === 'home' && <span className='active-dot'>.</span>}
          </div>
          <div className="icon-wrapper" onClick={() => handleIconClick('notifications')}>
            <NotificationsIcon
              className={`icon ${activeIcon === 'notifications' ? 'active' : ''}`}
              style={{ color: activeIcon === 'notifications' ? '#F05A22' : '#F9DDCF' }}
            />
            {activeIcon === 'notifications' && <span className='active-dot'>.</span>}
          </div>
          <div className="icon-wrapper" onClick={() => handleIconClick('turnedIn')}>
            <TurnedInIcon
              className={`icon ${activeIcon === 'turnedIn' ? 'active' : ''}`}
              style={{ color: activeIcon === 'turnedIn' ? '#F05A22' : '#F9DDCF' }}
            />
            {activeIcon === 'turnedIn' && <span className='active-dot'>.</span>}
          </div>
          <div className="icon-wrapper" onClick={() => handleIconClick('person')}>
            <PersonIcon
              className={`icon ${activeIcon === 'person' ? 'active' : ''}`}
              style={{ color: activeIcon === 'person' ? '#F05A22' : '#F9DDCF' }}
            />
            {activeIcon === 'person' && <span className='active-dot'>.</span>}
          </div>
        </div>
      </div>
    );
  }
  

// function Navbar() {

//     const [activeIcon, setActiveIcon] = useState('home'); // Initial active icon is 'home'

//     const handleIconClick = (iconName) => {
//       setActiveIcon(iconName);
//     };
  
//     const getOpacity = (iconName) => (activeIcon === iconName ? '#F05A22' : "#F9DDCF");
  

//     return (
//         <div className='navbar'>
//           <div className="logo-wrapper">
//             <img src={logo} className='logo' alt='logo'/>
//           </div>
//           <div className="navlink-wrapper">
//             <div className="icon-wrapper" onClick={() => handleIconClick('home')}>
//               <HomeRoundedIcon className='icon' style={{ color: getOpacity('home') }} />
//               <span className='active-dot'>.</span>
//             </div>
//             <div className="icon-wrapper" onClick={() => handleIconClick('notifications')}>
//               <NotificationsIcon className='icon' style={{ color: getOpacity('notifications') }} />
//               <span className='active-dot'>.</span>
//             </div>
//             <div className="icon-wrapper" onClick={() => handleIconClick('turnedIn')}>
//               <TurnedInIcon className='icon' style={{ color: getOpacity('turnedIn') }} />
//               <span className='active-dot'>.</span>
//             </div>
//             <div className="icon-wrapper" onClick={() => handleIconClick('person')}>
//               <PersonIcon className='icon' style={{ color: getOpacity('person') }} />
//               <span className='active-dot'>.</span>
//             </div>
//           </div>
//         </div>
//       );
// }

export default Navbar;