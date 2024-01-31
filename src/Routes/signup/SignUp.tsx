

import styles from './SignUp.module.css';


export default function SignUp() {
  return (
    <div className={`${styles.signup}`}>
      <div className={`${styles.welcome}`}>Welcome</div>
      <div className={`${styles.signup_start}`}>Sign Up to get Started</div>
      <form>
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
  )
}
