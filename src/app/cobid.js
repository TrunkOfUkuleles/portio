import React , { useState } from 'react';
import superagent from 'superagent';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from 'react-bootstrap';

function Cobid(props) {

    const [cobidField, setCobidField] = useState('--')
    const [stateData, setStateData] = useState({risk: 0});
    const [loaded, setLoaded] = useState(false)

    const stateList = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", 
                        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
                        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
                        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
                        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

        const cobidFetch = (sta) => {
        
        setCobidField(sta)
        const cap = sta
        const url = `https://api.covidactnow.org/v2/state/${cap}.timeseries.json?apiKey=${process.env.REACT_APP_ACT_NOW_API}`
            superagent.get(url)
            .then((rez)=>{
                let core = JSON.parse(rez.text)
                console.log("in call", core)
                setStateData({cdcTransmissionLevel: core.cdcTransmissionLevel,
                            cases: core.actuals.cases,
                            deaths: core.actuals.deaths,
                            risk: core.riskLevels.overall,
                            hospitalBeds: { capacity: core.actuals.hospitalBeds.capacity,
                                            currentUsageTotal: core.actuals.hospitalBeds.currentUsageTotal,
                                            currentUsageCovid: core.actuals.hospitalBeds.currentUsageCovid,
                                            usedPer: Math.round((core.actuals.hospitalBeds.currentUsageTotal/core.actuals.hospitalBeds.capacity)*100),
                                            covidPer: Math.round(core.actuals.hospitalBeds.currentUsageCovid/core.actuals.hospitalBeds.capacity*100)
                                            },
                            icuBeds: { capacity: core.actuals.icuBeds.capacity,
                                        currentUsageTotal: core.actuals.icuBeds.currentUsageTotal,
                                        currentUsageCovid: core.actuals.icuBeds.currentUsageCovid,
                                        usedPer: Math.round((core.actuals.icuBeds.currentUsageTotal/core.actuals.icuBeds.capacity)*100),
                                        covidPer: Math.round((core.actuals.icuBeds.currentUsageCovid/core.actuals.icuBeds.capacity)*100)
                                            }
                                  }
                            )
                props.warn(core.riskLevels.overall)
                setLoaded(true);
                // console.log("the state: ", stateData)
            })
            .catch((error) =>{
                console.log('try harder', error)
            })
        }


    return (
         <div >
           {/* <DropdownButton title={cobidField} >
                {stateList.map(el => <Dropdown.Item id={el} value={el} key={el} onClick={(ell) => { cobidFetch(ell.target.text) }} >{el}</Dropdown.Item> )}
            </DropdownButton> */}
            {loaded && <div className='risk-score'>{stateData.risk}</div>}
            <Navbar   expand="lg">
                <NavDropdown title={cobidField}>
            {stateList.map(el => <NavDropdown.Item id={el} className="dropdown-states" value={el} key={el} onsubmit={(e)=>{enter(e)}} onClick={(ell) => { cobidFetch(ell.target.text) }}>{el}</NavDropdown.Item> )}
                </NavDropdown>
            </Navbar>
        { !loaded 
            ? <></>
            :<div className="covid-data-box">
            <p>Hospital Bed Capacity</p>
            <div className="progress-box">
            <ProgressBar label="hospital-beds">
                <ProgressBar striped variant="danger" label={"COVID"} now={stateData.hospitalBeds.covidPer} key={1} />
                <ProgressBar variant="warning" label={"USED"} now={stateData.hospitalBeds.usedPer - stateData.hospitalBeds.covidPer} key={2} />
            </ProgressBar>
            </div>
            
            <p>ICU Bed Capacity</p>
            <div className="progress-box">  
            <ProgressBar label="icu-beds">
                <ProgressBar striped variant="danger" label="COVID" now={stateData.icuBeds.covidPer} key={1} />
                <ProgressBar variant="warning" label="USED" now={stateData.icuBeds.usedPer - stateData.icuBeds.covidPer} key={2} />
            </ProgressBar>
            </div>

            <div className="case-line">{stateData.cases} total cases | {stateData.deaths} total deaths</div>

            </div>
        }
        </div>
    );
}

export default Cobid;