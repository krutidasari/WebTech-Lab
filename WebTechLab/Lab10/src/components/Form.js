import Button from "./Button";

function Logo({ title }) {
  return (
    <>
      <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
      />
      <h3 className="heading">{title}</h3>
    </>
  );
}

function Form() {
  return (
    <div className="form">
      <div className="top">
        <Logo title="Microsoft" />
      </div>
      <h2 className="sub">Sign In</h2>
      <input placeholder="Email,phone or skype" />
      <div className="mid">
        <p className="para1">No account?</p>
        <a href="/">Create One!</a>
      </div>
      <a className="link2" href="/">
        Can't access your account?
      </a>
      <div className="bottom">
        <a className="link2" href="/">
          Sign in with Windows Hello or a Security Key ?
        </a>
      </div>
      <div className="buttons">
        <Button bgcolor="lightgray" title="Back" color="" />
        <Button bgcolor="#0067b8" title="Next" color="white" />
      </div>
    </div>
  );
}

export default Form;
