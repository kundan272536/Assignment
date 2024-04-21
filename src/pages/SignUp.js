import "../Components/Css/sign_up.css";
import { Link } from "react-router-dom";
const SignUp = () => {

  const handleClick = (e) => {
    // Update the state when the element is clicked
   console.log(e.target.value)
  };
  return (
    <div className="sign_up">
      <div className="left_part">
        <img src="/images/img1.png" alt="" height={400} width={400} />
      </div>
      <div className="right_part">
        <div className="form_section">
          <div className="text_part">
            <div className="heading">
              <h1>Let Us Know <span>!</span></h1>
            </div>
            <div className="singin_text" >
            <Link to="/Login">
              <p> Sign <span>In</span> </p>
            </Link>
            </div>
          </div>
          <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="password" placeholder="Set Password" />
            <input type="password" placeholder="Retype Password"/>
            <input type="text" placeholder="Contact Mode" />
            <input type="email" placeholder="Email" />
            <button className="btn" onChange={handleClick}>Sign Up </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
