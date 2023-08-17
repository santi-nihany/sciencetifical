import { signIn } from "next-auth/react";

export default function LoginForm() {
  return(
    <div className="TakeStudy2">
      <div className="div">
        <div className="section">
          <div className="div-register-layout">
            <div className="heading">
              <div className="span">
                <div className="group">
                  <p className="heading-researcher">
                    <span className="text-wrapper">Nice to see </span>
                    <span className="text-wrapper-2">you </span>
                    <span className="text-wrapper">again!</span>
                  </p>
                  <p className="we-are-glad-you">
                    <span className="text-wrapper-3">
                     To log in, we use a Proof of Personhood protocol to verify you are a real human.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div>
            <button  className="button text-wrapper-5" onClick={()=>signIn()}>Log in</button>
            </div>
            <div className="div-body">
              <div className="p-terms-and-privacy">
                <p className="by-continuing-you">
                  <span className="text-wrapper-6">By continuing you agree to </span>
                  <span className="text-wrapper-2">Science</span>
                  <span className="text-wrapper-4">tifical</span>
                  <span className="text-wrapper-6"> terms and conditions&nbsp;&nbsp;and privacy policy </span>
                </p>
              </div>
            </div>
          </div>
          <div className="div-links">
            <p className="already-have-an">
              <span className="text-wrapper-6">Already have an account? </span>
              <span className="text-wrapper-4">Log in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}