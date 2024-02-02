import { FaArrowRight } from "react-icons/fa";

import styles from './SignUp.module.css';

import images from "../../assets";


export default function SignUp() {
  return (
    <div className={`${styles.signup}`}>
      <div className={`${styles.welcome}`}>Welcome</div>
      <div className={`${styles.signup_start}`}>Sign Up to get Started</div>
      <div className={`${styles.signup_form_wrapper}`}>
        <form className={`${styles.signup_form}`}>
            <div className={`flex justify-center`}>
                <input className={`${styles.signup_input}`} type="text" placeholder='First name'/>
            </div>
            <div className={`flex justify-center`}>
            <input className={`${styles.signup_input}`} type="text" placeholder='Last name'/>
            </div>
            <div className={`flex justify-center`}>
            <input className={`${styles.signup_input}`} type="email" placeholder='Email Address'/>
            </div>
            <div className={`flex justify-center`}>
            <input className={`${styles.signup_input}`} type="number" placeholder='Phone Number'/>
            </div>
            <div className={`flex justify-center`}>
            <input className={`${styles.signup_input}`} type="password" placeholder='Password'/>
            </div>
            <div className={`flex justify-center`}>
            <input className={`${styles.signup_input}`} type="password" placeholder='Repeat Password'/>
            </div>
            
          </form>
      </div>
      <div className={`flex justify-center items-center gap-5`}>
          <div className={`${styles.signup_text}`}>Sign Up</div>
          <div><FaArrowRight color="white"/></div>
      </div>

      <div className={`flex justify-center gap-5 mt-10`}>
        <div className={`${styles.signup_social_container}`}>
          <img src={images.Ellipse} alt="" />
          <img className={`${styles.signup_social}`} src={images.google} alt="" />
        </div>

        <div className={`${styles.signup_social_container}`}>
          <img src={images.Ellipse} alt="" />
          <img className={`${styles.signup_social}`} src={images.apple} alt="" />
        </div>
        
      </div>
      {/* login here */}
      <div className={`${styles.login} flex justify-center mt-10`}>
          Log in, <b>here</b>
      </div>
    </div>
  )
}
