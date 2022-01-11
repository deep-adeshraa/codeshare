import API_CLIENT from "../Api/baseClient"
import useForm from "../hooks/useFormHook"
import validateSignupForm from "../validators/signUpFormValidators"
import { setUserLoggedIn } from "../helpers/authHelpers"
import InputDiv from "./common/inputDiv"

export default function SignUp() {
    const signUp = async () => {
        try {
            let res = await API_CLIENT.post('/signup/', values);
            setUserLoggedIn(res.data.token);
        } catch (e) {
            setErrors(e.response.data);
        }
    }

    const { handleChange, handleSubmit, values, setValues, errors, setErrors } = useForm(signUp, validateSignupForm);

    return (
        <div id="sign-up-container">
            <section className="h-100 gradient-form">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <h4 className="mt-1 mb-5 pb-1">Create new account</h4>
                                            </div>

                                            <form>
                                                <InputDiv type="text" name="first_name" placeholder="first name" onChange={handleChange} value={values.first_name} errors={errors} />
                                                <InputDiv type="text" name="last_name" placeholder="last name" onChange={handleChange} value={values.last_name} errors={errors}/>
                                                <InputDiv type="email" name="email" placeholder="email" onChange={handleChange} value={values.email} errors={errors}/>
                                                <InputDiv type="password" name="password" placeholder="password" onChange={handleChange} value={values.password} errors={errors}/>
                                                <InputDiv type="password" name="confirm_password" placeholder="confirm password" onChange={handleChange} value={values.confirm_password} errors={errors}/>

                                                <div className="text-center pt-1 mb-5 pb-1 row signup-btn">
                                                    <button className="btn btn-primary btn-block fa-lg mb-3" onClick={handleSubmit} type="button">Sign-up</button>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Already have an account?</p>
                                                    <a href="/">Sign-in</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 d-flex align-items-center right-part">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
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
