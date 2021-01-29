import React from 'react'

const Home = () => {
    return (
        <>
            <section className="hero">
        <div className="container">
            <div className="left-col">
                <p className="subhead">SEO is Important that's why</p>
                <h1>Some Beautiful Minds are Dedicated to Improve Ranking Of Website in Ethical Way</h1>

                <div className="hero-cta">
                    <a href="#" className="primary-cta">Contact</a>
                    <a href="#" className="sign-in-cta">Sign In</a>
                </div>
            </div>

            <img src="../images/illustration.svg" alt="Illustration" className="hero-img" />
        </div>
    </section>

    <section className="features-section">
        <div className="container">
            <ul className="features-list">
                <li>SEO Optimization</li>
                <li>UI/UX Design</li>
                <li>Website Devlopment</li>
                <li>Mobile Apps Devlopment</li>
            </ul>

            <img src="../images/holding-phone.jpg" alt="Man Holding Phome" />
        </div>
    </section>

    <section className="testimonials-section">
        <div className="container">
            <ul>
                <li>
                    <img src="/images/person.jpg" alt="Person" />
                    <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem eveniet facere dolorem culpa facilis aliquam perspiciatis dolore vero, beatae fugiat voluptatem odio in quia suscipit harum eligendi optio vel!</blockquote>
                    <cite>- Rafi Uzzaman</cite>
                </li>

                <li>
                    <img src="/images/person.jpg" alt="Person" />
                    <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem eveniet facere dolorem culpa facilis aliquam perspiciatis dolore vero, beatae fugiat voluptatem odio in quia suscipit harum eligendi optio vel!</blockquote>
                    <cite>- Rafi Uzzaman</cite>
                </li>

                <li>
                    <img src="/images/person.jpg" alt="Person" />
                    <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem eveniet facere dolorem culpa facilis aliquam perspiciatis dolore vero, beatae fugiat voluptatem odio in quia suscipit harum eligendi optio vel!</blockquote>
                    <cite>- Rafi Uzzaman</cite>
                </li>
            </ul>
        </div>
    </section>

    
        </>
    )
}

export default Home
