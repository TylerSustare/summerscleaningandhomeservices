import React from "react";
import Helmet from "react-helmet";
import { Carousel } from 'react-responsive-carousel';

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import LogoA from '../assets/images/Logo.png';
import LogoB from '../assets/images/SummersCleaningBC.png';
const L = Math.floor(Math.random() * 2)
if (L === 0) {
}

class Homepage extends React.Component {
    /* no payment
    render() {
        return (
            <img src="https://www.jotajoti.info/wp-content/uploads/2018/08/under-construction_geek_man_01.png" width="500px" />
        )
    }*/
    /* payment */
    render() {
        const siteTitle = "Summer's Cleaning and Home Services";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section>
                    <div className="grid-wrapper">
                        <div className="col-12">
                            {
                                L === 0
                                    ?
                                    <span className="image fit"><img src={LogoA} alt="" /></span>
                                    :
                                    <span className="image fit"><img src={LogoB} alt="" /></span>

                            }
                            <Carousel
                                autoPlay={true}
                                interval={2500}
                                infiniteLoop={true}
                                dynamicHeight={true}
                                showArrows={false}
                            >
                                <div>
                                    <img src="https://picsum.photos/2000/1000/?random" />
                                </div>
                                <div>
                                    <img src="https://picsum.photos/2000/1000/?random" />
                                </div>
                                <div>
                                    <img src="https://picsum.photos/2000/1000/?random" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </section>
                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                    amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                    amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Adipiscing amet consequat</h2>
                            </header>
                            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                    </div>
                </section>
            </Layout>
        );
    } */
}

export default Homepage;