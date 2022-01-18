import React , { useState } from 'react';
import superagent from 'superagent';

function Cobid() {

    const [cobidField, setCobidField] = React.useState('')
    const [stateData, setStateData] = React.useState({});
    const [loaded, setLoaded] = React.useState(false)


        const cobidFetch = () => {
        const cap = cobidField.toUpperCase()
        const url = `https://api.covidactnow.org/v2/state/${cap}.timeseries.json?apiKey=${process.env.REACT_APP_ACT_NOW_API}`
            superagent.get(url)
            .then((rez)=>{
                let core = JSON.parse(rez.text)
                console.log("in call", core)
                setStateData({cdcTransmissionLevel: core.cdcTransmissionLevel,
                            cases: core.actuals.cases,
                            deaths: core.actuals.deaths,
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
                setLoaded(true);
                console.log("the state: ", stateData)
            })
            .catch((error) =>{
                console.log('try harder', error)
            })
        }

        const enter = (e) => {
            if (e.key === "Enter") { cobidFetch() }
        }

    return (
        <>{ !loaded 
            ? <input className="state-field" name="cobidInput" maxLength="2" value={cobidField} pattern="[A-Z]+.{,2}" onChange={el => setCobidField(el.target.value)} onKeyDown={e => enter(e)} />
            :<>
            <input className="state-field" name="cobidInput" maxLength="2" value={cobidField} pattern="[A-Z]+.{,2}" onChange={el => setCobidField(el.target.value)} onKeyDown={e => enter(e)} />
            <div style={{ 'width': '40%', 'opacity': '30%', 'justifySelf': 'right' }} className='big-text'>{cobidField}</div>
            <table id="stacked-covid-chart" className="charts-css bar multiple stacked">
            <thead>
                {/* <tr>
                    <th scope="col"> Location </th>
                    <th scope="col"> #1 </th>
                    <th scope="col"> #2 </th>
                    <th scope="col"> #3 </th>
                    <th scope="col"> #4 </th>
                </tr> */}
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Hospital Beds</th>
                    <td style={{"--size":`calc(${stateData.hospitalBeds.covidPer} / 100)` , "color": "--color-1"}}><span className="data"> {stateData.hospitalBeds.covidPer}% </span></td>
                    <td style={{"--size":`calc(${stateData.hospitalBeds.usedPer - stateData.hospitalBeds.covidPer} / 100)` , "color": "--color-2"}}><span className="data"> {stateData.hospitalBeds.usedPer}% </span></td>
                    <td style={{"--size":`calc(${100 - stateData.hospitalBeds.usedPer} / 100)` , "color": "--color-3"}}><span className="data">{100 - stateData.hospitalBeds.usedPer}%</span></td>
                </tr>
                <tr>
                    <th scope="row">ICU Beds</th>
                    <td style={{"--size":`calc(${stateData.icuBeds.covidPer} / 100)`}}><span className="data"> {stateData.icuBeds.covidPer}% </span></td>
                    <td style={{"--size":`calc(${stateData.icuBeds.usedPer - stateData.icuBeds.covidPer} / 100)`}}><span className="data"> {stateData.icuBeds.usedPer}% </span></td>
                    <td style={{"--size":`calc(${100 - stateData.icuBeds.usedPer} / 100)`}}><span className="data"> {100 - stateData.icuBeds.usedPer}% </span></td>
                </tr>

            </tbody>
            </table>

                    <div>{stateData.cases} | {stateData.deaths}</div>
            </>
        }
        </>
    );
}

export default Cobid;