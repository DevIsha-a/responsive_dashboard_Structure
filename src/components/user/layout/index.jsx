import Sidebar from "../sidebar";
import Navbar from "../navbar"
const Layout = ({ CurrentComponent }) => {
   
    return (
      <div >
        <Sidebar />
        <div className="main">
          <div className="inner_main">
            <Navbar />
            {CurrentComponent}
          </div>
        </div>
      </div>
    );
  };
export default Layout