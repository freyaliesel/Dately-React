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
                        <Link to="/">home</Link>
                    </li>
                    <li className="waves-effect waves-light">
                        <Link to="/search">search</Link>
                    </li>
                    <li className="waves-effect waves-light">
                        <Link to="/bucketlist">bucket list</Link>
                    </li>
                    <li className="waves-effect waves-light">
                        <Link to="/about">about</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
