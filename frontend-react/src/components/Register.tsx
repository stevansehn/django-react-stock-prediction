import type { ReactElement } from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

interface RegisterUserData {
  username: string;
  email: string;
  password: string;
}

interface RegisterErrors {
  username?: string[];
  password?: string[];
}

const Register = (): ReactElement => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleRegistration(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    setLoading(true);

    const userData: RegisterUserData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        userData
      );
      console.log(response.data);
      console.log("Registration successful!");
      setErrors({});
      setSuccess(true);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setErrors(err.response?.data);
        console.error("Axios error:", err.response?.data || err.message);
      } else {
        console.error("Unexpected error:", err);
      }
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-light text-center">Create an Account</h3>
            <form onSubmit={handleRegistration}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <small>
                  {errors.username?.map((msg, idx) => (
                    <div key={idx} className="text-danger">
                      {msg}
                    </div>
                  ))}
                </small>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Set password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small>
                  {errors.password?.map((msg, idx) => (
                    <div key={idx} className="text-danger">
                      {msg}
                    </div>
                  ))}
                </small>
              </div>
              {success && (
                <div className="alert alert-success">
                  Registration Successful!
                </div>
              )}
              {loading ? (
                <button
                  type="submit"
                  className="btn btn-info d-block mx-auto"
                  disabled
                >
                  <FontAwesomeIcon icon={faSpinner} spin />
                  Please wait...
                </button>
              ) : (
                <button type="submit" className="btn btn-info d-block mx-auto">
                  Register
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
