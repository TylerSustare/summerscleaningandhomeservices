import React from "react";
import Helmet from "react-helmet";
import { Carousel } from 'react-responsive-carousel';

import Layout from '../components/layout';

import car1 from '../assets/images/dirty-oven.jpeg';
import car2 from '../assets/images/clean-oven.jpeg';
import car3 from '../assets/images/dirty-sink.jpeg';
import car4 from '../assets/images/clean-sink.jpeg';
import car5 from '../assets/images/dirty-stove.jpeg';
import car6 from '../assets/images/clean-stove.jpeg';
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import image1 from '../assets/images/image1.jpeg'
import image2 from '../assets/images/image2.jpeg'
import image3 from '../assets/images/image3.jpeg'
import image4 from '../assets/images/image4.jpeg'
import image5 from '../assets/images/image5.jpeg'
import image6 from '../assets/images/image6.jpeg'
import image7 from '../assets/images/image7.jpeg'
import image8 from '../assets/images/image8.jpeg'
import image9 from '../assets/images/image9.jpeg'
import image10 from '../assets/images/image10.jpeg'
import LogoA from '../assets/images/Logo.png';

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
                    {/* <div className="grid-wrapper"> */}
                    {/* <div className="column"> */}
                    {
                        <div className="outer">
                            <div className="centre"><img className="centre" src={LogoA} alt="logo" /></div>
                        </div>
                    }
                    <div className="outer">
                        <div className="centre">
                            <Carousel
                                autoPlay={true}
                                interval={1500}
                                infiniteLoop={true}
                                dynamicHeight={true}
                                showArrows={false}
                                showThumbs={false}
                            >
                                {/* before and after pictures */}

                                <img src={car1} />
                                <img src={car2} />
                                <img src={car3} />
                                <img src={car4} />
                                <img src={car5} />
                                <img src={car6} />
                                {/* some pictures of the inside of a house?  */}
                                <img src={image3} />
                                <img src={image4} />
                                <img src={image5} />
                                <img src={image6} />
                                <img src={image7} />
                                <img src={image8} />
                                <img src={image9} />
                                <img src={image10} />
                            </Carousel>
                        </div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                </section>

                <section id="four" className="main style2 special">
                    <header className="minor">
                        <h3> 541-815-9104 <br /> summerscleaningno.1@gmail.com</h3>
                    </header>
                </section>

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>About Us</h2>
                            </header>
                            <p>Summer's Cleaning and Home Services is a small family owned and operated business. We have been in business here in Central Oregon since April of 2006. You will find that our meticulous attention to detail if far above the rest! Home cleaning is an extremely  personal business, we understand that and we are committed to working together with trust integrity and professionalism. When you call Summer's Cleaning and Home Services you will speak directly with the owners, Summer or Jason,we will speak with you personally to design a customized cleaning service based on YOUR needs, time, and schedule.
</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={image1} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <span className="image fit"><img src={image2} alt="" /></span>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Free Estimates!!!</h2>
                            </header>
                            <p>At Summer's Cleaning and Home Services you are not just another number, you become part of our family. We treat you and your home how we would want to be treated and how we would want our home cared for. With hard work, honesty, and a level of service that surpasses all of our competitors standards we have managed to become a number one family owned industry leader. We are not your "typical" cleaning service. We meet all of your home care needs by offering Construction Cleans, Deep Cleans, Move Out/In cleans, Monthly cleans, bi-weekly cleans, weekly cleans, vacation rentals, and  air bnb rentals, as well as offering handyman services from fixing a leaky pipe to installing new blinds. We also offer snow removal, gutter cleaning, security checks you name it! If you have a need we can meet it! We become your eyes and ears for your home when you are not able to. Need a service we don't provide? We will work with our trusted business partner we have established over the years and get you taken care of. One call one bill!</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Testimonials</h2>
                            </header>
                            <p>See what people are saying about Summers Cleaning and Home Services.</p>
                        </div>

                        <div className="col-4">
                            {/* deleted per content review by Brittany Sustare */}
                            {/* <span className="image fit"><img src={pic02} alt="" /></span> */}
                            <h3>Dacyl Winterbottom</h3>
                            <p>Came home after a 12 hour shift to a sparkling clean house!! Summer and her team have made my home shine!! their attention to detail is impeccable!! Will be using her services again!! Highly recommend!!</p>
                        </div>
                        <div className="col-4">
                            {/* deleted per content review by Brittany Sustare */}
                            {/* <span className="image fit"><img src={pic03} alt="" /></span> */}
                            <h3>Kendra Jarrett <br />Mom and Owner of Stiletto Salon</h3>
                            <p>I love coming home to a clean house! Working and being a new mom makes for a busy life and cleaning in my spare time is not something I enjoy doing. Summer's Cleaning has done a fantastic job cleaning my home for the last two years! They are trustworthy and consistent. Their service is worth every penny!! Let the professionals do the work!!</p>
                        </div>
                        <div className="col-4">
                            {/* deleted per content review by Brittany Sustare */}
                            {/* <span className="image fit"><img src={pic04} alt="" /></span> */}
                            <h3>Shona Lyster <br />Client since 2015</h3>
                            <p>Summer and Jason do a great job cleaning and quality checking their work! I trust them and have recommended their services to friends. They are hard workers who take pride in what they do. I wouldn't use anyone else!</p>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Contact Us for a Free Quote</h2>
                        </header>
                        <p> 541-815-9104 <br /> summerscleaningno.1@gmail.com</p>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;