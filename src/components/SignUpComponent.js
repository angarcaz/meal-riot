import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { doSignUp } from "../store/users/actions";

const SignUpComponent = () => {
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};
    const currentYear = new Date().getFullYear();
    const birthYear = parseInt(values.birthyear, 10);
    const age = currentYear - birthYear;

    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length < 3) {
      errors.username = 'Must be 3 characters or more'
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (!/^[A-Za-z0-9]{5,}$/i.test(values.password)) {
      errors.password = 'Must be at least 5 characters and only contain letters and numbers';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords must match';
    }

    if (!values.firstname) {
      errors.firstname = 'Required';
    } else if (values.firstname.length < 2) {
      errors.firstname = 'Must be 2 characters or more';
    }
  
    if (!values.lastname) {
      errors.lastname = 'Required';
    } else if (values.lastname.length < 2) {
      errors.lastname = 'Must be 2 characters or more';
    }

    if (isNaN(birthYear) || birthYear < 1920 || birthYear > currentYear) {
      errors.birthyear = 'Insert a valid year';
    } else if (age < 18) {
      errors.birthyear = 'You must be at least 18 years old to register';
    }
  
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      birthyear: "",
      currentcity: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(doSignUp(values)).then(() => {
        alert("signup ok");
      });
    },
  });

  return (
    <>
      <form className="SignUpForm" onSubmit={formik.handleSubmit}>
        {/* USERNAME */}
        <fieldset>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username *"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="errorMessage">{formik.errors.username}</div>
          ) : null}
        </fieldset>

        {/* EMAIL */}
        <fieldset>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email *"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="errorMessage">{formik.errors.email}</div>
          ) : null}
        </fieldset>

        {/* PASSWORD */}
        <fieldset>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password *"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="errorMessage">{formik.errors.password}</div>
          ) : null}
        </fieldset>

        {/* CONFIRM PASSWORD */}
        <fieldset>
          <input
            excludeOnChange
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Repeat password *"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="errorMessage">{formik.errors.confirmPassword}</div>
          ) : null}
        </fieldset>

        <div className="twoColumns">
          {/* FIRST NAME */}
          <fieldset>
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="First name *"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <div className="errorMessage">{formik.errors.firstname}</div>
            ) : null}
          </fieldset>

          {/* LAST NAME */}
          <fieldset>
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Last name *"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <div className="errorMessage">{formik.errors.lastname}</div>
            ) : null}
          </fieldset>
        </div>
        <div className="twoColumns">
          {/*BIRTHYEAR*/}
          <fieldset>
            <div>
              <input
                id="birthyear"
                type="number"
                name="birthyear"
                placeholder="Birth year *"
                value={formik.values.birthyear}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.birthyear && formik.errors.birthyear ? (
                <div className="errorMessage">{formik.errors.birthyear}</div>
              ) : null}
            </div>
          </fieldset>
          {/* CURRENT CITY */}
          <fieldset>
            <input
              id="currentcity"
              name="currentcity"
              type="text"
              placeholder="Current city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.currentcity}
            />
          </fieldset>
        </div>
        {/* ACCEPT PRIVACY POLICY */}
        <fieldset>
          <label htmlFor="acceptPrivacyPolicy">
            <input
              id="acceptPrivacyPolicy"
              name="acceptPrivacyPolicy"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.acceptPrivacyPolicy}
              required
            />
            I have read and accept the{" "}
            <Link to="/privacy-policy">privacy policy</Link>.
          </label>
        </fieldset>
        <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUpComponent;
