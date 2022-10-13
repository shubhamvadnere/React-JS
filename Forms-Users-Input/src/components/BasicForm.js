import useInput from "./hooks/use-input";
// import { useEffect, useState } from "react";
const BasicForm = (props) => {
    // const {} = useInput();
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredlName,
        isValid: enteredlNameIsValid,
        hasError: lnameInputHasError,
        valueChangeHandler: lnameChangedHandler,
        inputBlurHandler: lnameBlurHandler,
        reset: resetlNameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes("@"));

    let formIsValid = false;

    if (enteredNameIsValid && enteredlNameIsValid && enteredEmailIsValid){
        formIsValid = true;
    }

    // const [formIsValid, setFormIsValid] = useState(false);

    // useEffect(() => {
    //     if (enteredNameIsValid && enteredEmailIsValid && enteredlNameIsValid) {
    //         setFormIsValid(true);
    //     } else {
    //         setFormIsValid(false);
    //     }
    // }, [enteredNameIsValid, enteredEmailIsValid, enteredlNameIsValid]);

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!formIsValid){
            return;
        }

        resetNameInput();
        resetEmailInput();
        resetlNameInput();
    };

    const nameInputClasses = nameInputHasError
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailInputHasError
        ? "form-control invalid"
        : "form-control";

    const lnameInputClasses = lnameInputHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="control-group">
                <div className={nameInputClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={nameChangedHandler}
                        onBlur={nameBlurHandler}
                        value={enteredName}
                    />
                    {nameInputHasError && (
                        <p className="error-text">
                            First Name must not be empty
                        </p>
                    )}
                </div>
                <div className={lnameInputClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={lnameChangedHandler}
                        onBlur={lnameBlurHandler}
                        value={enteredlName}
                    />
                    {lnameInputHasError && (
                        <p className="error-text">
                            Last Name must not be empty
                        </p>
                    )}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">E-Mail Address</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && (
                    <p className="error-text">
                        Please enter a valid e-mail Id.
                    </p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
