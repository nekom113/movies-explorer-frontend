import {useCallback, useState} from "react";

export default function useValidationForm() {
    const [valuesForm, setValues] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [currentNameInput, setCurrentNameInput] = useState({});

    const handleChange = ({target}) => {
        const {name, value, validationMessage, validity, form} = target;
        setValues({
            ...valuesForm,
            [name]: value
        });
        setCurrentNameInput({
            ...currentNameInput,
            [name]: validity.valid
        });
        setErrors({
            ...errors,
            [name]: validationMessage
        });
        setIsValid(form.checkValidity());
    };

    const resetForm = useCallback(
        (newIsValid, newValues, newErrors, newInputVilidities) => {
            setErrors(newErrors || {});
            setValues(newValues || {});
            setIsValid(newIsValid || false);
            setCurrentNameInput(newInputVilidities || {});

        },
        [setValues, setErrors, setIsValid, setCurrentNameInput]
    );

    return {
        valuesForm,
        errors,
        isValid,
        resetForm,
        currentNameInput,
        handleChange,
    };
};

