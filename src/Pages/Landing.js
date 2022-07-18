import SearchForm from "../components/SearchForm";

const Landing = () => {
    return (
        <main>
            <div className="row">
                <div className="col l7  push-l5 s12">
                    <h1 className="white-text">EXPERIENCE CHICAGO</h1>
                    <h5 className="white-text flow-text light-weight">
                        For your local date night experiences in Chicago. Find
                        upcoming events in your neighborhood, then find nearby
                        eateries! Love more than one? Like to add to your
                        bucketlist and save for later.
                    </h5>
                    <br />

                    <div>
                        <SearchForm />

                        <img
                            className="chicago-img"
                            src="assets/images/Chicago.png"
                            alt="chicago"
                        />
                    </div>
                </div>
                <div className=" hide-on-small-only col s5 pull-s7">
                    <img
                        className="branding-img"
                        src="./assets/images/Events.png"
                        alt="events"
                    />
                </div>
            </div>
        </main>
    );
};

export default Landing;
