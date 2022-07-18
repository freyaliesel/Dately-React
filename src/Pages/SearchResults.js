const SearchResults = () => {
    return (

            <div className="row">
                <div
                    id="yelp-container"
                    className="card-container col s12 flow-text"
                >
                    <h2 className="white-text std-padding-left">Events</h2>
                    <p className="white-text flow-text std-padding-left">
                        {" "}
                        Like an event to find nearby restaurants{" "}
                    </p>
                    <div id="yelp-results" className="card-parent">
                        <div className="progress">
                            <div className="indeterminate"></div>
                        </div>
                    </div>
                </div>
                <div
                    id="google-container"
                    className="card-container hide col l6 s12 flow-text"
                >
                    <h2 className="white-text std-padding-left">Eateries</h2>
                    <p className="white-text flow-text std-padding-left">
                        Like an eatery to save both to your Bucketlist
                    </p>
                    <div id="google-results" className="card-parent"></div>
                </div>
            </div>

    );
};

export default SearchResults;
