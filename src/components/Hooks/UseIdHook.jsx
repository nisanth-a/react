import { useId } from "react";

function PasswordField() {
  const passwordHintId = useId();
  console.log(passwordHintId);
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

export default PasswordField;
