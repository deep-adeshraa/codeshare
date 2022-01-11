import baseValidator from "./baseValidator";

export default function validateSignupForm(values) {
    let requiredFields = ['first_name', 'last_name', 'email',
        'password', 'confirm_password'];

    let errors = baseValidator(requiredFields, values);

    if (values.password && values.confirm_password &&
        values.password !== values.confirm_password) {
        errors.confirm_password = "This should be same as password"
    }

    return errors;
};
