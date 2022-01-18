import React from 'react';
import { ReactComponent as Menu } from '../images/bars-solid.svg';



function nav(props) {
    return (
        <div className = 'nav'>
            <div className = 'menu-logo'>
                <Menu style={{color:'orangered'}}/>
                <span className='logo'>QJobs</span>
            </div>
            <div className='nav-right'>
                <form>
                    <button className='login-button'>LOG IN</button>
                    <button className='post-job'>POST A JOB</button>
                </form>
            </div> 
        </div>
    );
}

export default nav;
