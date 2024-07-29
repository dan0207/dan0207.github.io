import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";
import logo from '../assets/logo.png'

function LoginPage() {

    const handleBackLoginFormBtn = () => {
        window.history.back()
    }

    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: () => console.log('Error')
    });

    return (
        <>
            <div className="background container-fluid bg-background">
                <section className="loin_section container d-flex justify-content-center align-items-center vh-100 text-center">
                    <div className="login_content col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 bg-surface shadow-lg p-4 rounded-4">
                        <img src={logo} alt="CAVITE STATE UNIVERSITY TANZA CAMPUS LIBRARY LOGO" className="img-fluid" />

                        <h3 className="fs-2 py-3" style={{ fontFamily: 'arial', fontWeight: 'bold' }} >LOGIN</h3>

                        <div className="container d-flex justify-content-center">
                            {/* <GoogleLogin buttonText="Login with Google" onSuccess={handleLoginSuccess} onError={handleLoginFailure} /> */}
                            <button className='btn border rounded-pill d-flex align-items-center' onClick={googleLogin}><i className='mx-2'><FcGoogle /></i>Continue with Google</button>
                        </div>

                        <hr className="hr_login_text" data-content="or continue with username & password" />

                        <form id="login_form" action="../php_script/login_script.php" className="needs-validation m-0" method="POST" noValidate>
                            <div className="form-outline text-start mb-2">
                                <label className="form-label mb-0">Username</label>
                                <input id="login_username" type="text" name="username" className="form-control form-control-md" required />
                                <div id="validationUsernameFeedback" className="invalid-feedback fs-7">
                                    Please enter username.
                                </div>
                            </div>

                            <div className="form-outline text-start">
                                <label className="form-label mb-0">Password</label>
                                <input id="login_password" type="password" name="password" className="form-control form-control-md" required />
                                <div id="validationPasswordFeedback" className="invalid-feedback fs-7">
                                    Please enter the password.
                                </div>
                            </div>

                            <div className="form-check d-flex justify-content-start mb-2">
                                <input className="form-check-input" type="checkbox" id="rememberCheckbox" />
                                <label className="form-check-label ms-2" htmlFor="rememberCheckbox"> Remember password </label>
                            </div>

                            <div className="text-danger mb-2 fs-7"></div>

                            <button type="button" className="btn btn-primary btn-md w-100 mb-3"> Login </button>
                        </form>

                        <div className="d-flex align-items-center">
                            <button type='button' className="btn btn-danger fs-7" onClick={handleBackLoginFormBtn}>Cancel</button>
                            <a className="ms-auto fs-7" type="button">Forgot password?</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default LoginPage