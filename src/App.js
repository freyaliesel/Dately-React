import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Landing from "./Pages/Landing";
import Bucketlist from "./Pages/BucketList";
import About from "./Pages/About";
import SearchResults from "./Pages/SearchResults";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/bucketlist" element={<Bucketlist />} />
                <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
