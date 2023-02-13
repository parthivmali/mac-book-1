import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import note4 from '../Components/Image/note4.svg'


function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box className="Appoint-item">
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange} className="Appoint-text">
          <Tab label="Upcoming Appointments" />
          <Tab label="Past Appointments" />
          <Tab label="Medical Records" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 18 }}>
        {tabIndex === 0 && (
          <Box>
            <Typography>
            <div>
                <p className='root-text'>Root Canal Treatment</p>
                <button className='root-button'>Show Previous Treatments</button>
            </div>
            <div className='border-line'></div>
            <div className='main-box'>
                <div className='main1-box'>
                        <p className='mainBox-date'>26 Nov'19</p>
                        <p className='mainBox-time'>09.00 - 10.00</p>
                        <div className='mainLine'></div>
                        <p className='mainBox-treat'>Treatment</p>
                        <p className='mainBox-open'>Open Access</p>
                        <div className='mainLine1'></div>
                        <p className='mainBox-dent'>Dentist</p>
                        <p className='mainBox-dr'>Drg. Adam H.</p>
                        <p className='mainBox-nurse'>Nurse</p>
                        <p className='mainBox-jessi'>Jessicamila</p>
                        <img src={note4} alt="note" className='mainBox-img'/>
                        <p className='mainBox-note'>Note</p>
                </div>
                <div className='main2-box'>
                        <p className='mainBox-date1'>12 Nov'19</p>
                        <p className='mainBox-time1'>09.00 - 10.00</p>
                        <div className='mainLine1'></div>
                        <p className='mainBox-treat1'>Treatment</p>
                        <p className='mainBox-open1'>Root Canal</p>
                        <div className='mainLine2'></div>
                        <p className='mainBox-dent1'>Dentist</p>
                        <p className='mainBox-dr1'>Drg. Adam H.</p>
                        <p className='mainBox-nurse1'>Nurse</p>
                        <p className='mainBox-jessi1'>Jessicamila</p>
                        <img src={note4} alt="note1" className='mainBox-img'/>
                        <p className='mainBox-note1'>Note</p>
                </div>
            </div>
            </Typography>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography>
            <div>
                <p className='root-text'>Root Canal Treatment</p>
                <button className='root-button'>Show Previous Treatments</button>
            </div>
            <div className='border-line'></div>
            <div className='main-box'>
                <div className='main1-box'>
                        <p className='mainBox-date'>10 Jan'22</p>
                        <p className='mainBox-time'>08.00 - 10.00</p>
                        <div className='mainLine'></div>
                        <p className='mainBox-treat'>Treatment</p>
                        <p className='mainBox-open'>Root Access</p>
                        <div className='mainLine1'></div>
                        <p className='mainBox-dent'>Dentist</p>
                        <p className='mainBox-dr'>Drg. Deny H.</p>
                        <p className='mainBox-nurse'>Nurse</p>
                        <p className='mainBox-jessi'>Joly</p>
                        <img src={note4} alt="note" className='mainBox-img'/>
                        <p className='mainBox-note'>Note</p>
                </div>
                <div className='main2-box'>
                        <p className='mainBox-date1'>05 Nov'19</p>
                        <p className='mainBox-time1'>09.00 - 10.00</p>
                        <div className='mainLine1'></div>
                        <p className='mainBox-treat1'>Treatment</p>
                        <p className='mainBox-open1'>Root Canal</p>
                        <div className='mainLine2'></div>
                        <p className='mainBox-dent1'>Dentist</p>
                        <p className='mainBox-dr1'>Drg. Adam H.</p>
                        <p className='mainBox-nurse1'>Nurse</p>
                        <p className='mainBox-jessi1'>Jessicamila</p>
                        <img src={note4} alt="note1" className='mainBox-img'/>
                        <p className='mainBox-note1'>Note</p>
                </div>
            </div>
            </Typography>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography>
            <div>
                <p className='root-text'>Root Canal Treatment</p>
                <button className='root-button'>Show Previous Treatments</button>
            </div>
            <div className='border-line'></div>
            <div className='main-box'>
                <div className='main1-box'>
                        <p className='mainBox-date'>10 Nov'19</p>
                        <p className='mainBox-time'>09.00 - 10.00</p>
                        <div className='mainLine'></div>
                        <p className='mainBox-treat'>Treatment</p>
                        <p className='mainBox-open'>Open Access</p>
                        <div className='mainLine1'></div>
                        <p className='mainBox-dent'>Dentist</p>
                        <p className='mainBox-dr'>Drg. Adam H.</p>
                        <p className='mainBox-nurse'>Nurse</p>
                        <p className='mainBox-jessi'>Jessicamila</p>
                        <img src={note4} alt="note" className='mainBox-img'/>
                        <p className='mainBox-note'>Note</p>
                </div>
                <div className='main2-box'>
                        <p className='mainBox-date1'>02 Oct'19</p>
                        <p className='mainBox-time1'>10.00 - 12.00</p>
                        <div className='mainLine1'></div>
                        <p className='mainBox-treat1'>Treatment</p>
                        <p className='mainBox-open1'>John Canal</p>
                        <div className='mainLine2'></div>
                        <p className='mainBox-dent1'>Dentist</p>
                        <p className='mainBox-dr1'>Drg. Patel H.</p>
                        <p className='mainBox-nurse1'>Nurse</p>
                        <p className='mainBox-jessi1'>Doly</p>
                        <img src={note4} alt="note1" className='mainBox-img'/>
                        <p className='mainBox-note1'>Note</p>
                </div>
            </div>
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;