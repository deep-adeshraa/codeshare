import API_CLIENT from "../Api/baseClient"
import useForm from "../hooks/useFormHook"
import validateSignupForm from "../validators/signUpFormValidators"

export default function SignUp() {

    const login = async () => {
        let data = await API_CLIENT.post('signup/', values);
        localStorage.setItem("token", data.token);
        window.location.href = '/code';
    }

    const { handleChange, handleSubmit, values, errors } = useForm(login, validateSignupForm);

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
                                                <div className="form-outline mb-4">
                                                    <input type="text" name="first_name" onChange={handleChange} value={values.first_name} className="form-control" placeholder="first name" />
                                                </div>
                                                {errors.first_name && (<p className="form-err">{errors.first_name}</p>)}

                                                <div className="form-outline mb-4">
                                                    <input type="text" name="last_name" onChange={handleChange} value={values.last_name} className="form-control" placeholder="last name" />
                                                </div>
                                                {errors.last_name && (<p className="form-err">{errors.last_name}</p>)}

                                                <div className="form-outline mb-4">
                                                    <input type="email" name="email" onChange={handleChange} value={values.email} className="form-control" placeholder="email" />
                                                </div>
                                                {errors.email && (<p className="form-err">{errors.email}</p>)}

                                                <div className="form-outline mb-4">
                                                    <input type="password" name="password" onChange={handleChange} value={values.password} className="form-control" placeholder="password" />
                                                </div>
                                                {errors.password && (<p className="form-err">{errors.password}</p>)}

                                                <div className="form-outline mb-4">
                                                    <input type="password" name="confirm_password" onChange={handleChange} value={values.confirm_password} className="form-control" placeholder="confirm password" />
                                                </div>
                                                {errors.confirm_password && (<p className="form-err">{errors.confirm_password}</p>)}

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
