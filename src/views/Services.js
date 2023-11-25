import React, { useEffect } from "react";

function Services() {
    // set page title w/Effect Hook
    useEffect(() => {
        document.title = 'Services';
    }, []);

    // define a list of services and their descriptions
    let services = ["Web Design", "Programming", "Logo Design", "SEO"];
    let serviceDescriptions = [
        "Create visually appealing and user-friendly websites tailored to your brand.",
        "Develop custom software solutions to meet your specific business needs.",
        "Design unique and memorable logos to enhance your brand identity.",
        "Optimize your website to rank higher in search engine results."
    ];

    return (
        <section className="container">
            <h1>Our Services</h1>
            
            <p>
                Explore the range of services we offer to enhance your web development experience.
            </p>
            
            
            <div className="row my-3">
                {/* use array.map to loop through, creating a card for each service */}
                {services.map((service, index) => (
                    <div className="col-md-3 col-lg-3 col-sm-6 mt-3" key={service}>
                        <div className="card h-100">
                            <div className="card-body">
                                <i className="bi bi-tools"></i>
                                <h5 className="card-title">{service}</h5>
                                <p className="card-text">{serviceDescriptions[index]}</p>
                                <a href="/contact" className="btn btn-outline-success">Get in touch</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <p>
                Our team is dedicated to delivering high-quality solutions tailored to your needs.
            </p>
        </section>
    );
}

export default Services;
