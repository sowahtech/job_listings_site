import React from 'react';
import { ReactComponent as Phone } from '../images/phone-alt-solid.svg';
import { ReactComponent as Email } from '../images/envelope-square-solid.svg';


function footer(props) {
    return (
        <div id='footer'>
            <div id='footer-top'>
                <div className='contact-us'>
                    <form id='contact-form'>
                        <h2>Contact Us</h2><br />
                        <input type='text' placeholder='First Name' 
                            style={{border:'none', borderRadius:'0.5rem', height:'3vh', width: '20vw', padding: '0.5vw'}} 
                        /><br /><br />
                        <input type='text' placeholder='Last Name' 
                            style={{border:'none', borderRadius:'0.5rem', height:'3vh', width: '20vw', padding: '0.5vw'}} 
                        /><br /><br />
                        <input type='text' placeholder='Email' style={{border:'none', borderRadius:'0.5rem', height:'3vh', width: '20vw', padding: '0.5vw'}} /><br /><br />
                        <textarea rows={4} cols={35} placeholder='Your message here'/><br /><br />
                        <input type='submit' value='Submit' 
                            style={{width:'8vw', height:'4vh', 
                            border:'none', 
                            borderRadius:'0.5rem', 
                            color:'white', 
                            backgroundColor: 'orangered',
                            fontSize:'calc(8px + 2vmin)'
                        }}
                        />
                    </form>
                </div>
                <div className='quick-links'>
                    <h2 style={{marginLeft:'-3vw'}}>Quick Links</h2><br />
                    <span>Home</span><br /><br />
                    <span>About</span><br /><br />
                    <span>Contact</span><br /><br />
                    <span>Services</span><br /><br />
                    <span>Carreers</span><br /><br />
                    <span>Salaries</span><br /><br />
                    <span>Resume development</span><br /><br />
                </div>
                <div className='contacts'>
                    <h2 style={{marginLeft: '5vw'}}>Contact</h2><br />
                    <div>
                        <Phone  style={{color:'white', width: '3vw', height: '3vh'}}/>
                        <span style={{color:'orangered', fontWeight:'bold', fontSize:'1.5rem'}}>055-355-7278</span>
                    </div><br /><br />
                    <div>
                        <Email  style={{color:'white', width: '3vw', height: '3vh'}}/>
                        <span style={{color:'orangered', fontWeight:'bold', fontSize:'1.5rem'}}>hr@qjobs.com</span>
                    </div>
                    

                </div>
            </div>
            <div>
                <hr />
                <div id='copyright'>
                    <span>Copyright &copy; Quick Jobs.</span> &nbsp;&nbsp;
                    <span>TERMS OF USE</span>&nbsp;&nbsp; | &nbsp;&nbsp;
                    <span>PRIVACY POLICY</span>
                </div>
            </div>
            
        </div> 
    );
}

export default footer;