import { Link } from "react-router-dom";
import "./Css/layout.css";
const Layout = () => {
  return (
    // <>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/blogs">Blogs</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //     </ul>
    //   </nav>

    //   <Outlet />
    // </>
    <div className="main_page" >
        <div className="img1">
          <Link to="/sign_up">
          <img src="/images/img1.png" alt="" height={400} width={400} />
          </Link>
        </div>
        <div className="img2" >
            <Link to="/Login">
            <img src="/images/img2.png" alt="" height={400} width={400} /> 
            </Link>
        </div>
       </div>
  )
};

export default Layout;