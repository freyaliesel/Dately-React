const Bucketlist = () => {
    return (

            <div className="row">
                <div className="col l4 hide-on-med-and-down">
                    <div className="bucketlist-img">
                        <img
                            className="branding-img"
                            src="/assets/images/bucketlist.png"
                            alt="bucketlist"
                        />
                    </div>
                </div>
                <div className="card-container col s12 l8 flow-text">
                    <h2 className="white-text std-padding-left">
                        Your Top Picks
                    </h2>
                    <div className="card-parent s1"></div>
                </div>
            </div>

    );
};

export default Bucketlist;
