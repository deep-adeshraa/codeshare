import { FIELD_REQUIRED_MSG } from "../constants/errorMsgs";

export default function baseValidator(requiredFields, values) {
    let errors = {};

    requiredFields.forEach((item) => {
        if (!values[item]) {
            errors[item] = FIELD_REQUIRED_MSG;
        }
    });

    return errors;
};
