import React from 'react';
import '../App.css';
import Appointment from './Appointment';
import { SidebarData } from './SidebarData';
import EllipseGirl from '../Components/Image/EllipseGirl.jpg'
import Vector1 from '../Components/Image/Vector1.png'
import note4 from '../Components/Image/note4.svg'


function Sidebar() {
    return (
        <>
            <div className='main'>
                <div className='Sidebar'>
                    <ul className='SidebarList'>
                        {SidebarData.map((val, key) => {
                            return (
                                <li
                                    key={key}
                                    className='row'
                                    // id={window.location.pathname = val.link ? "active" : "deactive"}
                                    onClick={() => {
                                        window.location.pathname = val.link;
                                    }}
                                >
                                    <div id='icon'>
                                        {val.icon}
                                    </div>
                                    <div id='title'>
                                        {val.title}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div> 
                <div className='main1'>
                    <div className='ellipse-image'>
                        <img src={EllipseGirl} alt="ellipse" />
                    </div>
                    <div className='ellipse-name'>
                        {<h3>Diane Cooper</h3>}
                    </div>
                    <div className='ellipse-mail'>
                        <a href="mailto:diane.cooper@example.com">diane.cooper@example.com</a>
                    </div>
                    <div className='ellipse-past'>
                        <p id='el-15'>15</p>
                        <p id='past'>Past</p>
                    </div>
                    <div className='vector1'>
                        <img src={Vector1} alt="vector" />
                    </div>
                    <div className='ellipse-upcoming'>
                        <p id='el-02'>02</p>
                        <p id='upcoming'>Upcoming</p>
                    </div>
                    <div className='send-box'>
                        <p className='message-box'>Send Message</p>
                    </div>
                    <div className='files'>
                        <p>Files / Documents</p>
                    </div>
                    <div className='mainNote'>
                        <div className='note4'>
                            <img src={note4} alt="note" />
                        </div>
                        <div className='noteText'><p>Check Up Results.pdf</p></div>
                    </div>
                    <div className='mainNote1'>
                        <div className='note1'>
                            <img src={note4} alt="note" />
                        </div>
                        <div className='noteText1'><p>Check Up Results.pdf</p></div>
                    </div>

                    <div className='mainNote2'>
                        <div className='note2'>
                            <img src={note4} alt="note" />
                        </div>
                        <div className='noteText2'><p>Medical Prescription.pdf</p></div>
                    </div>

                    <div className='mainNote3'>
                        <div className='note3'>
                            <img src={note4} alt="note" />
                        </div>
                        <div className='noteText3'><p>Check Up Results.pdf</p></div>
                    </div>
                </div>
                <div className='secondMain'>
                    <div className='main2'>
                    <div>
                        <p className='gender'>Gender</p>
                        <input type="text" placeholder='Female' className='gender-female'/>
                    </div>
                    <div>
                        <p className='birth'>Birthday</p>
                        <input type="date" name="birthday" className='birth-date' placeholder='Feb 24th, 1997'/>
                    </div>
                    <div>
                        <p className='phone'>Phone Number</p>
                        <input type="tel" id="phone" name="phone" placeholder='(239) 555 -0108' className='phone-no'/>
                    </div>
                    <div>
                        <p className='register'>Registered Date</p>
                        <input type="date" name="register" placeholder='Feb 24th, 1997' className='reg-date'/>
                    </div>
                    <div className='sideline'></div>
                    <div className='sideline1'></div>
                    <div className='sideline2'></div>
                    <div className='sideline3'></div>
                    <div>
                        <p className='add'>Street Address</p>
                        <input type="text" placeholder='JL.Diponegoro No.21'className='add-demo'/>
                        <div className='sideline4'></div>
                    </div>
                    <div>
                        <p className='city'>City</p>
                        <input type="text" placeholder='Cilacap' className='city-demo'/>
                        <div className='sideline5'></div>
                    </div>
                    <div>
                        <p className='zipCode'>Zip Code</p>
                        <input type="text" placeholder='655859' className='zipCode-demo' />
                        <div className='sideline6'></div>
                    </div>
                    <div>
                        <p className='mamber'>Member Status</p>
                        <input type="text" placeholder='Active Member' className='mamber-demo'/>
                        <div className='sideline7'></div>
                    </div>
                        {/* <div className='appointments'>
                            <button className='button1' >Upcoming Appointments</button>
                            <button className='button2'>Past Appointments</button>
                            <button className='button3'>Medical Records</button>
                        </div> */}
                    <div>
                        <Appointment />
                    </div>
                    </div>        
                </div>
            </div>
        </>
    )

}
export default Sidebar
