import React from "react";
import signupImage from "../../assets/images/signup.svg";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import Info from "../Info";
import TextInput from "../TextInput";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={signupImage} />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button>
            <span>Submit now</span>
          </Button>
          <Info />
        </Form>
      </div>
    </>
  );
}
