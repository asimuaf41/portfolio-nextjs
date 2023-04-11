import logo from "./logo.svg";
import "./App.css";
import Home from "./compoenents/home/home";
import SideBar from "./compoenents/sideBar";
import About from "./compoenents/about";
import history from "./history";
import Contact from "./compoenents/contact";
import Resume from "./compoenents/resume";
import ScrollToTop from "./scroll";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { MenuOutlined, CloseCircleOutlined } from "@ant-design/icons";
function App(props) {
  const handleOpenSideBar = () => {
    document.getElementsByClassName("sidebar-area")[0].style.left = "-15px";
  };
  const handleCloseSideBar = () => {
    document.getElementsByClassName("sidebar-area")[0].style.left = "-285px";
  };
  return (
    <div className="myportfolio-app">
      <Router history={history}>
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-lg-3 col-xl-3 d-none d-lg-block"
              style={{ paddingLeft: "0px", paddingRight: "30px" }}
            >
              <SideBar handleCloseSideBar={handleCloseSideBar} {...props} />
            </div>
            <div
              style={{
                height: "100vh",
                position: "relative",
                overflowY: "auto",
              }}
              class="col-lg-9 col-md-12 col-xl-9"
              id="style-10"
            >
              <div className="container1">
                <div className="sidebar-button-area">
                  <div onClick={handleOpenSideBar} className="sidebar-button">
                    <MenuOutlined />
                  </div>
                  <div className="sidebar-area">
                    <div
                      onClick={handleCloseSideBar}
                      className="close-button-side-bar"
                    >
                      <CloseCircleOutlined />
                    </div>
                    <SideBar
                      handleCloseSideBar={handleCloseSideBar}
                      {...props}
                    />
                  </div>
                </div>
                <ScrollToTop>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/contact/:id" component={Contact} />
                  </Switch>
                </ScrollToTop>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
