import React from 'react';
import './mainSection.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import Chart from './ChartOne'
import NavBar from '../Navbar/navBar';
const MainSection = () => {
    return (
        <>
        <NavBar/>
            <section>
                <div className='sideOne'>
                    <div className='sideOne-left'>
                        <div className='profile'>
                            <div className='image'></div>
                            <h5>T.JOBLONSKI</h5>
                            <p>ADMINISTRATOR</p>
                        </div>

                        <div className='menus'>
                            <div className='dashboard'>
                                <div className='lappi'><img src='./images/lappi.png' alt='' /></div>
                            </div>
                            <div className='dashboard-2'>
                                <div className='lappio'><img src='./images/buccket.png' alt='' /></div>
                            </div>
                            <div className='dashboard-2'>
                                <div className='lappio'><img src='./images/persontarget.png' alt='' /></div>
                            </div>

                            <div className='dashboard'>
                                <AiOutlineSetting className='lappi' />
                            </div>
                        </div>
                    </div>
                    <div className='sideOne-right'>
                        <div className='calendr'>
                            <img src="./images/calndr.png" alt='' />
                            <p className='name'>ALBERTA,CA</p>
                            <input type='text' placeholder='Hide'/>
                            <h1>2019</h1>
                            <h2>12 <br/>DECEMBER</h2>
                        </div>

                        <div className='menus'>
                            <div className='dashboard'>
                                <p className='lappi'>DASHBOARD</p>
                            </div>
                            <p>MESSAGE</p>
                            <p>BUYER PERSONA</p>
                            <div className='Settings'>
                                <ul className='s-menu'>
                                    <li className='list'>My PROFILE</li>
                                    <li className='list'>My SECURITY</li>
                                    <li className='list'>My PANEL</li>
                                    <li>LOGOUT</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sideTwo'>
                    <div className='variation'>
                        <div className='v-1'>
                            <div className='i-c'><img src='./images/peoplex.png' alt='' className='i-1' /></div>
                            <h1 className='vh1'>38</h1>
                            <p className='vp'>Total Visitors</p>
                        </div>
                        <div className='v-2'>
                            <div className='i-c'><img src='./images/mf.png' alt='' className='i-1' /></div>
                            <h1 className='vh1'>38</h1>
                            <p className='vp'>Total Visitors</p>
                        </div>
                        <div className='v-3'>
                            <div className='i-c'><img src='./images/Time.png' alt='' className='i-1' /></div>
                            <h1 className='vh1'>38</h1>
                            <p className='vp'>Total Visitors</p>
                        </div>
                        <div className='v-4'>
                            <div className='i-c'><img src='./images/Clock.png' alt='' className='i-1' /></div>
                            <h1 className='vh1'>38</h1>
                            <p className='vp'>Total Visitors</p>
                        </div>
                    </div>
                    <div className='chart-1'>
                        <div className='chart-left'>
                            <div className='left-up'>
                                <h2 style={{ fontSize: "12px" }}>ANALYSIC &nbsp;<span>6</span></h2>
                                <input type='text' placeholder='Last Week' /><BsThreeDotsVertical className='ana-line' />
                            </div>
                            <div className='left-down'>
                                <div className='smile'>
                                    <img src='./images/pink.png' alt='' />
                                    <h1>45%</h1>
                                </div>
                                <div className='smile'>
                                    <img src='./images/blue.png' alt='' />
                                    <h1>45%</h1>
                                </div>
                                <div className='smile'>
                                    <img src='./images/black.png' alt='' />
                                    <h1>45%</h1>
                                </div>



                            </div>

                        </div>
                        <div className='chart-right'>
                            <div className='cru'>
                                <h2 style={{ fontSize: "14px" }}>Statistics </h2>
                                <select>
                                    <option>Last Year</option>
                                </select>
                            </div>
                            <div className='crd'>
                                <img src='./images/line.png' alt='' />  <Chart /> 
                            </div>
                        </div>
                    </div>
                    <div className='chart-2'>
                        <div className='left-2'>
                            <div className='clu'>
                                <h2 style={{ fontSize: "14px" }}>Male Vs Female </h2>
                                <span><BsThreeDotsVertical /></span>
                                <h2 style={{ fontSize: "14px" }}>AVG DWEL TIME</h2>
                                <span><BsThreeDotsVertical /></span>
                            </div>
                            <div className='cld'>
                                <div className='clw'>
                                    <img src='./images/pw.png' alt='' /> <h5 className='wp'>40%</h5>
                                </div>
                                <div className='clw'>
                                    <img src='./images/bm.png' alt='' /> <h5 className='wp'>40%</h5>
                                </div>
                                <img src='./images/line.png' alt='' />
                                <p>3:05</p>
                                <img src='./images/line.png' alt='' />
                            </div>
                        </div>
                        <div className='right-2'>
                            <div className='ru'>
                                <h2 style={{ fontSize: "14px" }}>AGE GROUP</h2>
                                <p className='ru-p'>6</p>
                                <select>
                                    <option>&nbsp; See More</option>
                                </select>
                                <select>
                                    <option>&nbsp; See More</option>
                                </select>

                            </div>
                            <div className='rd'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Crowd Size</th>
                                            <th>Video 1</th>
                                            <th>Video 2</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>000-100</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>100-200</td>
                                            <td>2</td>
                                            <td>2</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td>200-300</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>300-400</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>400-500</td>
                                            <td>5</td>
                                            <td>5</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>500-600</td>
                                            <td>6</td>
                                            <td>6</td>
                                            <td>12</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                    <div className='chart-3'>
                        <div className='left-3'>
                            <div className='ctu'>
                                <h2 style={{ fontSize: "14px" }}>NATIONALITY &nbsp;<span>5</span> </h2>
                                <select>
                                    <option>Last Month</option>
                                </select>
                            </div>
                            <div className='ctd'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Video 1</th>
                                            <th>0-1</th>
                                            <th>1-2</th>
                                            <th>2-3</th>
                                            <th>3-4</th>
                                            <th>4-5</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Caucasian %</td>
                                            <td>1%</td>
                                            <td>1%</td>
                                            <td>2%</td>
                                            <td>1%</td>
                                            <td>2%</td>
                                        </tr>
                                        <tr>
                                            <td>Black %</td>
                                            <td>2%</td>
                                            <td>2%</td>
                                            <td>4%</td>
                                            <td>2%</td>
                                            <td>4%</td>
                                        </tr>
                                        <tr>
                                            <td>Hispanic %</td>
                                            <td>3%</td>
                                            <td>3%</td>
                                            <td>6%</td>
                                            <td>3%</td>
                                            <td>6%</td>
                                        </tr>
                                        <tr>
                                            <td>Asian %</td>
                                            <td>4%</td>
                                            <td>4%</td>
                                            <td>8%</td>
                                            <td>4%</td>
                                            <td>8%</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='right-3'>
                        <div className='cru'>
                                <h2 style={{ fontSize: "14px" }}>Statistics </h2>
                            </div>
                            <div className='crd'>
                                <img src='./images/line.png' alt='' />  <Chart />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainSection;
