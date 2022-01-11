import baseValidator from "./baseValidator";

export default function validateLoginForm(values) {
    let requiredFields = ['email', 'password'];
    let errors = baseValidator(requiredFields, values);

    return errors;
};
