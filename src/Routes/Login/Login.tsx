import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Login.module.css"
import images from "../../assets";


export default function Login() {
  return (
        <div className={`${styles.login}`}>
            <div className={`${styles.welcome_back}`}>Welcome Back!</div>
            <div className={`${styles.login_continue}`}>login to continue</div>
            <div className={`${styles.login_form_wrapper}`}>
                <form>
                    <div className={`flex justify-center`}>
                        <input className={`${styles.login_input}`} type="email" placeholder='Email Address'/>
                    </div>
                    <div className={`flex justify-center`}>
                        <input className={`${styles.login_input}`} type="password" placeholder='Password'/>
                    </div>
                </form>
                <div className={`${styles.forgot_password}`}>
                     forgot password?
                </div>
                <div className={`flex justify-center items-center gap-5 mt-10`}>
                    <button className={`${styles.login_text}`}>Log in</button>
                    <button><FaArrowRight color="white"/></button>
                </div>
            </div>

            {/* Login with Google or Apple */}
            <div className={`flex justify-center gap-5 mt-10`}>
                <div className={`${styles.login_social_container}`}>
                    <img src={images.Ellipse} alt="" />
                    <img className={`${styles.login_social}`} src={images.google} alt="" />
                </div>

                <div className={`${styles.login_social_container}`}>
                    <img src={images.Ellipse} alt="" />
                    <img className={`${styles.login_social}`} src={images.apple} alt="" />
                </div>
        
            </div>

              {/* login here */}
            <div className={`${styles.signup} flex justify-center mt-10`}>
                Sign Up, <b className="ms-1"><Link to="/signup"> here</Link></b>
            </div>
            
        </div>
  )
}
