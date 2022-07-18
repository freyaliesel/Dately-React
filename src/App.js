// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Navigate,
// } from "react-router-dom";

import Header from "./components/Header";
// import Landing from "./Pages/Landing";
import Footer from "./components/Footer";
// import Landing from "./Pages/Landing";
// import Bucketlist from "./Pages/BucketList";
// import About from "./Pages/About";
import SearchResults from "./Pages/SearchResults";

function App() {
    return (
        <>
            <Header />
            {/* <Landing /> */}
            {/* <About /> */}
            {/* <Bucketlist /> */}
            <SearchResults />
            <Footer />
        </>
    );
}

export default App;
