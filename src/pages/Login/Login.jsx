import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = event => {
        event.preventDefault()
              const form = event.target;
          
              const email = form.email.value;
              const password = form.password.value;
              console.log(email,password);
              signIn(email,password)
              .then(result=>{
                const user = result.user
                console.log(user);
                navigate(location?.state ? location?.state: '/')
              })
              .catch(error=>console.log(error))
    }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="text-black">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-black">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered bg-white"
                required
              />
            
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn bg-orange-600 hover:bg-orange-800 border-0 text-white" />
            </div>
            <p className="my-4 text-center">
              New to Car Doctors{" "}
              <Link className="text-orange-600 font-bold" to="/signup">
                Sign Up
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
