import React, { useEffect } from "react";

function About() {
    // set page title w/Effect Hook
    useEffect(() => {
        document.title = 'About';
    }, []);

    return (
        <section className="container">
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
        </section>
    );
}

export default About;