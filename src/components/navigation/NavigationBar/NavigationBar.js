import { Link, NavLink } from 'react-router-dom';

import styles from './NavigationBar.module.css';

export default function NavigationBar() {
    return (
       <div className="d-flex flex-column flex-md-row align-items-center justify-content-between
        p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal">RouterApp</h5>
          <nav className="my-2 my-md-0 me-md-3">
                {/* <Link className="p-2 text-dark" to={"/"} >Home</Link> */}
                <NavLink className={(navData) => (navData.isActive ? styles.selected : 'p-2')}  to={"/"} >Home</NavLink>
                
                <NavLink className={(navData) => (navData.isActive ? styles.selected : 'p-2')}  to={"/list"} >List</NavLink>
                
                <NavLink className={(navData) => (navData.isActive ? styles.selected : 'p-2')} to={"/about"} >About</NavLink>

                <NavLink className={(navData) => (navData.isActive ? styles.selected : 'p-2')} to={"/example"} >Example</NavLink>

                <NavLink className={(navData) => (navData.isActive ? styles.selected : 'p-2')} to={"/profile"} >Profile</NavLink>


           </nav>
        </div>
    );
  }