import React, { useState, useEffect } from 'react';
import './navBar.css'
import { FaBarsStaggered } from 'react-icons/fa6';
import { AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai';


const NavBar = () => {
    const [time, setTime] = useState(new Date());



    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const handleBarClick = () => {
       alert("Hey..!! Bar Clicked")
      };

    return (
        <>
            <nav>
                <div className='inner-nav'>
                    <div className='nav-items-left'>
                        <img src="./images/logom.png" alt='' />
                        <FaBarsStaggered className="bars" />
                        <input type='text' placeholder='Search..' /><AiOutlineSearch className='search' />
                    </div>
                    <div className='nav-items-right'>
                        <div className='icons'>
                            <AiOutlineSetting className='settings' />
                            <p>7</p>  <p id="third"></p>
                            <select>
                                <option>T.JOBLONSKI</option>
                            </select>
                            {formattedTime}
                        </div>
                        <div className="bar-m" onClick={handleBarClick}>
                            <FaBarsStaggered />
                        </div>
            
                    </div>
                </div>

        </nav >
        </>
    )
}

export default NavBar;
