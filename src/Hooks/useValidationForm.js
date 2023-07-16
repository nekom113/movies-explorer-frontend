import {useCallback, useState} from "react";
import {logDOM} from "@testing-library/react";

export default function useValidationForm() {
    const [inputValue, setInputValue] = useState({});
    const [inputError, setInputErrors] = useState({});
    const [validationStatus, setValidationStatus] = useState(false);
    const [currentNameInput, setCurrentNameInput] = useState('');

    const handleChangeForm = (target) => {
        const {name, value} = target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
        setInputErrors({
            ...inputError,
            [name]: target.validationMessage
        });
        // setValidationStatus(target.closest("form").checkValidity());
        setCurrentNameInput(name)
    }
    const resetForm = useCallback(() => {
            setInputValue({})
            setInputErrors({})
            setValidationStatus(false)
        }, [inputValue,
            inputError,
            validationStatus]
    )

    return (
        {
            inputValue,
            validationStatus,
            inputError,
            currentNameInput,
            resetForm,
            handleChangeForm,
        }
    )
};
