import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper black">
                <img
                    href="#"
                    className="brand-logo logo"
                    src="assets/images/Dately Logo.png"
                    alt=""
                />
                {/* <Link to="/" data-target="mobile" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </Link> */}
                <ul className="right hide-on-med-and-down">
                    <li className="waves-effect waves-light">
                        <a href="index.html">home</a>
                    </li>
                    <li className="waves-effect waves-light">
                        <a href="search.html">search</a>
                    </li>
                    <li className="waves-effect waves-light">
                        <a href="bucketlist.html">bucket list</a>
                    </li>
                    <li className="waves-effect waves-light">
                        <a href="about.html">about</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
