import React, { useEffect } from "react";

function About() {
    // set page title w/Effect Hook
    useEffect(() => {
        document.title = 'About';
    }, []);

    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <h1>About Us</h1>
                    <p>
                        We are a dedicated team of developers passionate about creating innovative web applications.
                    </p>
                    <p>
                        Our goal is to leverage the power of React to deliver seamless and engaging user experiences.
                    </p>
                    <p>
                        Explore our application to see how we've implemented stateful components, effects, and Bootstrap for a polished UI.
                    </p>
                    <a href="/contact" className="btn btn-outline-success">Get in touch</a>
                </div>
                <div className="col-lg-6">
                    <img
                        src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1700929368~exp=1700929968~hmac=f7ea4acef63dbe44f11e1d41e2e19cf6812d032387ab13b274db4dc23e66aa56"
                        alt="Isometric cms concept"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
