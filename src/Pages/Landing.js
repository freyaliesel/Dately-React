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
                        {/* <form autocomplete="off" className="white-text">
                            <div className="input-field">
                                <input
                                    className="datepicker validate white-text"
                                    id="datepicker"
                                    type="text"
                                    required=""
                                    aria-required="true"
                                />
                                <label for="datepicker">Date</label>
                                <span
                                    className="helper-text"
                                    data-error="Select a date"
                                ></span>
                            </div>
                            <div className="input-field">
                                <input
                                    id="location"
                                    className="autocomplete validate white-text"
                                    required=""
                                    aria-required="true"
                                    type="text"
                                >
                                    <label for="location">Neighborhood</label>
                                    <span
                                        className="helper-text"
                                        data-error="Enter a location"
                                        data-success=""
                                    ></span>
                                </input>
                            </div>
                            <button
                                id="submit-btn"
                                className="xwaves-effect waves-light btn-small"
                            >
                                <i
                                    id="search-icon"
                                    className="medium material-icons"
                                >
                                    search
                                </i>
                                Search
                            </button>
                        </form> */}

                        <img
                            className="chicago-img"
                            src="/assets/images/Chicago.png"
                            alt="chicago"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Landing;
