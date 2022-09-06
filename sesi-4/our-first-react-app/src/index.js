import React from "react";
import ReactDOM from "react-dom";
// import "./Style.css";

const App = () => {
    return (
        <div>
            <nav>
                <div className="left">
                    <div className="logo"><b>QTemu</b></div>
                    <ul>
                        <li>Create Meetup</li>
                        <li>Explore</li>
                    </ul>
                </div>
                <a className="right" href="#">Login</a>
            </nav>

            <div className="bg-head">
                <div className="left">
                    <div className="image"></div>
                </div>
                <div className="right">
                    <h2>Hactiv8 Meetup</h2>
                    <tr>
                        <td>Location</td>
                        <td>Jakarta, Indonesia</td>
                    </tr>
                    <tr>
                        <td>Members</td>
                        <td>1.078</td>
                    </tr>
                    <tr>
                        <td>Organizers</td>
                        <td>Adhy Wiranata</td>
                    </tr>
                    <button>Join Us</button>
                </div>
            </div>

            <section>
                <h2>Next Meetup</h2>
                <div className="content">
                    <div className="bg-content">
                        <div>
                            <h3>Awesome meetup and event</h3>
                            <p className="date">25 January 2019</p><br />
                            <p>Hello, Javascript & Node.js Ninjas!<br />
                            Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018! <br /> The meetup format will contain some short stories and technical talks.<br />
                            lf you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.<br />
                            <br />Remember to bring a photo ID to get through building security.<br />
                            <br />-----<br />
                            <br />See you there!<br />
                            <br />Best,Hengki, Giovanni, Soflan, Riza, Agung The JakartaJS Organizers</p>   
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2>About Meetup</h2>
                <div className="content">
                    <br />Come and meet other developers interested in the JavaScript and ít's library in the Greater Jakarla area<br />
                    <br /> Twitter: @JakartaJS and we use the hashtag #jakartajs<bt/>
                </div>
            </section>

            <section>
                <div className="content-head">
                    <h2>Members</h2>
                    <a href="#">see all</a>
                </div>
                <div className="content">
                    <div className="bg-content">
                        <div className="left">
                            <div className="image"></div>
                        </div>
                        <div className="right">
                            <p>Organizers</p>
                            <tr>
                                <td>Adhy Wiranata</td>
                                <td>4 others.</td>
                            </tr>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <div className="content-head">
                    <h2>Past Meetup</h2>
                    <a href="#">see all</a>
                </div>
                <div className="content space">
                    <div className="bg-content sizing">
                        <div className="card">
                            <p>27 November 2017</p>
                            <hr />
                            <p>#39 JakartaJS April Meetup with kumparan</p>
                            <p className="went">139 <span>went</span></p>
                            <button>View</button>
                        </div>
                    </div>
                    <div className="bg-content sizing">
                        <div className="card">
                            <p>27 November 2017</p>
                            <hr />
                            <p>#38 JakartaJS April Meetup with BliBli</p>
                            <p className="went">113 <span>went</span></p>
                            <button>View</button>
                        </div>
                    </div>
                    <div className="bg-content sizing">
                        <div className="card">
                            <p>27 November 2017</p>
                            <hr />
                            <p>#37 JakartaJS April Meetup with Hactiv8</p>
                            <p className="went">110 <span>went</span></p>
                            <button>View</button>
                        </div>
                    </div>
                </div>

                <footer>
                    <b>Copyright Hacktiv8 2018</b>
                </footer>
            </section>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)