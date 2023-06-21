import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Footers from "./Components/Footer/Footers";
import Candid from "./Pages/Candid";
import Fashion from "./Pages/Fashion";
import Food from "./Pages/Food.";
import Wedding from "./Pages/Wedding";
import BabyShoot from "./Pages/BabyShoot";
import {Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Gallery from "./Pages/Gallery";
import VideoList from "./Pages/VideoList";
import Navbar from "./Components/Navbar/Navbar";
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
      <div className="App">
          {/*<Navbar />*/}
          <Layout>
              <Content>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      {/*<Route path="/website" element={<Home />} />*/}
                      {/*<Route path="/contact" element={<Contact />} />*/}
                      {/*<Route path="/works" element={<Works />} />*/}
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/candid" element={<Candid />} />
                      <Route path="/fashion" element={<Fashion />} />
                      <Route path="/food" element={<Food />} />
                      <Route path="/wedding" element={<Wedding />} />
                      <Route path="/babyshoot" element={<BabyShoot />} />
                      <Route path="/gallery" element={<Gallery />} />
                      <Route path="/films" element={<VideoList />} />
                  </Routes>
              </Content>
              <Footers />

          </Layout>

      </div>
  );
}

export default App;