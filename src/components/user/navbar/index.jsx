
import { Link } from "react-router-dom";
import { IoSearchSharp as SearchIcon } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="topbar_container">
      <div className="topbar">
        <div className="toggle container__ ">
          {/* <RxHamburgerMenu size={18} /> */}
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className="user float-end flex-grow-1 justify-content-end">
          <div className="form-outline position-relative" data-mdb-input-init>
            <input id="search-focus" placeholder="Search" type="search" className="form-control" />
            <button type="button" className="btn position-absolute top-0 right-0" data-mdb-ripple-init>
              <SearchIcon />
            </button>
          </div>
          <div className="dropdown ">
            <div className="dropbtn d-flex align-items-center gap-2">
            <button className="user_dropbtn  border-0">
            </button>
            <FaChevronDown />
            </div>
            <div className="dropdown-content">
              <div className="tt-dropdown-content">
                <div className="tt-dropdown-triangle"></div>
                <Link to="/profile">Profile</Link>
                <Link to="/profile">Change password</Link>
                <Link to="/notifications" >Notification preferences</Link>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
