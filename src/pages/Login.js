import "../Components/Css/login.css";


const LoginPage = () => {
    return (
    <div className="login_page">
      <div className="left_side">
      <img src="/images/img2.png" alt="" height={400} width={400} />
      </div>
      <div className="right_side">
      <h1>Fill what we know <span>!</span></h1>
      <form>
        <input type="email" placeholder="Email"/><br></br>
        <input type="password" placeholder="Password"/><br></br>
         <button className="btn">Sign In </button>
         <button className="btn1">Sign Up</button>
      </form>
      </div>
    </div>
    );
  };
  
  export default LoginPage;