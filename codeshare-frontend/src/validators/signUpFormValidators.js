import { FIELD_REQUIRED_MSG } from "../constants/error_msgs";

export default function validateSignupForm(values) {
    let errors = {};
    let requiredFields = ['first_name', 'last_name', 'email',
                          'password', 'confirm_password'];

    requiredFields.forEach((item) => {
        if (!values[item]) {
            errors[item] = FIELD_REQUIRED_MSG;
        }
    });

    if (values.password && values.confirm_password &&
        values.password !== values.confirm_password) {
        errors.confirm_password = "This should be same as password"
    }

    return errors;
};
