import API_CLIENT from "../Api/baseClient";
import { setUserLoggedIn } from "../helpers/authHelpers";
import useForm from "../hooks/useFormHook";
import validateLoginForm from "../validators/loginFormValidators";
import InputDiv from "./common/inputDiv";

export default function SignIn() {
    const login = async () => {
        try {
            let res = await API_CLIENT.post('/login/', values);
            setUserLoggedIn(res.data.token);
        } catch (e) {
            setErrors(e.response.data);
        }
    }

    let { handleChange, handleSubmit, values, setValues, errors, setErrors } = useForm(login, validateLoginForm);

    return (
        <div id="sign-in-container">
            <section className="h-100 gradient-form">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                <h4 className="mt-1 mb-5 pb-1">Enter credentials</h4>
                                            </div>

                                            <form>
                                                <InputDiv type="email" name="email" placeholder="email" onChange={handleChange} value={values.email} errors={errors} />
                                                <InputDiv type="password" name="password" placeholder="password" onChange={handleChange} value={values.password} errors={errors} />

                                                <div className="text-center pt-1 mb-5 pb-1 row login-btn">
                                                    <button className="btn btn-primary btn-block fa-lg mb-3" onClick={handleSubmit} type="button">Log in</button>
                                                    <a className="text-muted text-center" href="#!">Forgot password?</a>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <a href="/signup">Create new</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 d-flex align-items-center right-part">
                                        <div className="px-3 py-4 p-md-5 mx-md-4">
                                            <p className="text-muted">
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
