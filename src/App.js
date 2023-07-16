import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Footers from "./Components/Footer/Footers";
import Portfolio from "./Pages/Portfolio";
import Fashion from "./Pages/Fashion";
import Maternity from "./Pages/Maternity";
import Wedding from "./Pages/Wedding";
import {Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Gallery from "./Pages/Gallery";
import VideoList from "./Pages/VideoList";
import Portrait from "./Pages/Portrait";
import KidsPhoto from "./Pages/KidPhoto";
import Commercial from "./Pages/Commercial";
import ImageView from "./Pages/ImageView";
import Ariel from "./Pages/Ariel";
import Concert from "./Pages/Concert";
import Corporate from "./Pages/Corporate";
import Puberty from "./Pages/Puberty";
import Babyshoot from "./Pages/Babyshoot";
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
                      {/*<Route path="/profile" element={<Profile />} />*/}
                      <Route path="/portfolio" element={<Portfolio />} />
                      <Route path="/fashion" element={<Fashion />} />
                      <Route path="/maternity" element={<Maternity />} />
                      <Route path="/wedding" element={<Wedding />} />
                      <Route path="/kidsphotography" element={<KidsPhoto />} />
                      <Route path="/gallery" element={<Gallery />} />
                      <Route path="/films" element={<VideoList />} />
                      <Route path="/portrait" element={<Portrait />} />
                      <Route path="/commercial" element={<Commercial />} />
                      <Route path="/ariel" element={<Ariel />} />
                      <Route path="/concert" element={<Concert />} />
                      <Route path="/corporate" element={<Corporate />} />
                      <Route path="/puberty" element={<Puberty />} />
                      <Route path="/babyshoot" element={<Babyshoot />} />
                      <Route exact path="/image/:datasetId" element={<ImageView />} />
                  </Routes>
              </Content>

                  <Footers />

          </Layout>

      </div>
  );
}

export default App;
