import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Footers from "./Components/Footer/Footers";
import Portfolio from "./Pages/Portfolio";
import Fashion from "./Pages/Fashion";
import Maternity from "./Pages/Maternity";
import Wedding from "./Pages/Wedding";
import BabyShoot from "./Pages/KidPhoto";
import {Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Gallery from "./Pages/Gallery";
import VideoList from "./Pages/VideoList";
import Navbar from "./Components/Navbar/Navbar";
import Portrait from "./Pages/Portrait";
import KidsPhoto from "./Pages/KidPhoto";
import Commercial from "./Pages/Commercial";
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
                      <Route path="/portfolio" element={<Portfolio />} />
                      <Route path="/fashion" element={<Fashion />} />
                      <Route path="/maternity" element={<Maternity />} />
                      <Route path="/wedding" element={<Wedding />} />
                      <Route path="/kidsphotography" element={<KidsPhoto />} />
                      <Route path="/gallery" element={<Gallery />} />
                      <Route path="/films" element={<VideoList />} />
                      <Route path="/portrait" element={<Portrait />} />
                      <Route path="/commercial" element={<Commercial />} />
                  </Routes>
              </Content>
              <Footers />

          </Layout>

      </div>
  );
}

export default App;
