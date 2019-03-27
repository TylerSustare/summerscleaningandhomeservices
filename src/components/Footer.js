import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://www.facebook.com/summerscleaningandhomeservices/" target="_blank" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" target="_blank" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" target="_blank" className="icon alt fa-snapchat"><span className="label">Instagram</span></a></li>
                    <li><a href="mailto:summerscleaningno.1@gmail.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
