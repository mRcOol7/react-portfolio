import React from 'react';

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="section">
            <div className="container" data-aos="fade-up">
                <h2>Portfolio</h2>

                {/* Badge container to display badges in one row */}
                <div className="badge-container" data-aos="fade-up">
                    <a href="https://i.ibb.co/Lv440T2/Whats-App-Image-2023-12-07-at-8-00-45-PM-1.jpg" target="_blank" rel="noopener noreferrer" className="badge" data-aos="fade-up">
                        <img src="https://i.ibb.co/Lv440T2/Whats-App-Image-2023-12-07-at-8-00-45-PM-1.jpg" alt="Badge 1" />
                        <p>This is my badge</p>
                    </a>
                    <a href="https://i.ibb.co/HXFJh0g/Whats-App-Image-2023-12-07-at-8-00-45-PM.jpg" target="_blank" rel="noopener noreferrer" className="badge" data-aos="fade-up">
                        <img src="https://i.ibb.co/HXFJh0g/Whats-App-Image-2023-12-07-at-8-00-45-PM.jpg" alt="Badge 2" />
                        <p>This is my badge</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
