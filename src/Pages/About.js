const About = () => {
    return (

            <div className="row">
                <h1 className="white-text">About Us</h1>
                <h5 className="flow-text white-text light-weight">
                    <img
                        src="./assets/images/Dately Logo_v2.png"
                        alt="Dately"
                        width="100"
                        style={{ verticalAlign: "middle" }}
                    />{" "}
                    was built using
                    <a href="https://materializecss.com/">
                        Materialize CSS Framework
                    </a>
                    and access Yelp's Fusion API and Google Maps API. 
                    <span style={{ fontWeight: "bold" }}> GitGals</span> is
                    comprised of 3 junior Web Developers taking Northwestern
                    University's Full-Stack Coding Bootcamp.
                </h5>
                <div className="card-container">
                    <div className="card-parent">
                        <div
                            id="about-lea"
                            className="card search-card about-card"
                        >
                            <img
                                src="assets/images/Lea_photo.JPG"
                                alt="lea"
                                style={{ width: "100%" }}
                            />
                            <div className="card-content">
                                <h4>
                                    <b>Lea</b>
                                </h4>
                                <p>
                                    Hey, It's Lea. Design is my passion whether
                                    its the creation of print or web. I am
                                    excited to broaden my skillsets on a
                                    different platform and learn the user
                                    interface and user experience side of web
                                    development.{" "}
                                </p>
                            </div>
                            <div className="card-action">
                                <a
                                    className="btn-flat center"
                                    href="https://github.com/lealinnea"
                                >
                                    Github
                                </a>
                                <a
                                    className="btn-flat center"
                                    href="https://lealinnea.github.io/portfolio/"
                                >
                                    Portfolio
                                </a>
                                <a
                                    className="btn-flat center"
                                    href="https://www.linkedin.com/in/lea-guerrero-020516174/"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                        <div
                            id="about-jenni"
                            className="card search-card about-card"
                        >
                            <img
                                src="./assets/images/jenni.jpg"
                                alt="jenni"
                                style={{ width: "100%" }}
                            />
                            <div className="card-content">
                                <h4>
                                    <b>Jenni</b>
                                </h4>
                                <p>
                                    I am making a career switch from Linux
                                    systems administration to web development.
                                    Learning a new side of tech has been
                                    challenging and fun!
                                </p>
                            </div>
                            <div className="card-action">
                                <a
                                    className="btn-flat center"
                                    href="https://github.com/jenniwritescode"
                                >
                                    Github
                                </a>
                                <a
                                    className="btn-flat center"
                                    href="https://jenniwritescode.github.io/portfolio/"
                                >
                                    Portfolio
                                </a>
                                <a
                                    className="btn-flat center"
                                    href="https://www.linkedin.com/in/jennihartman/"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                        <div
                            id="about-kit"
                            className="card search-card about-card"
                        >
                            <img
                                src="./assets/images/kit.png"
                                alt="kit"
                                style={{ width: "100%" }}
                            />
                            <div className="card-content">
                                <h4>
                                    <b>Kit</b>
                                </h4>
                                <p>
                                    I can't wait to enter the exciting world of
                                    web development. Every task is a fun
                                    challenge to see just what I can accomplish,
                                    and how efficiently I can do it!
                                </p>
                            </div>
                            <div className="card-action">
                                <a
                                    className="btn-flat center"
                                    href="https://github.com/freyaliesel"
                                >
                                    Github
                                </a>
                                <a
                                    className="btn-flat center"
                                    href="https://freyaliesel.github.io/Portfolio/"
                                >
                                    Portfolio
                                </a>
                                <a
                                    className="btn-flat center"
                                    href="https://www.linkedin.com/in/kelsea-glidden-907490126/"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default About;
