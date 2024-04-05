import React, { ReactNode, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "../App.css";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";

const Account = ({ onSubmitForm , title, children}: { onSubmitForm: Function, title?:string, children?:ReactNode}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onsubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitForm({ email, password });
  };

  return (
    <div className="page-container">
      <div className="half-page">
        <div className="p-d-flex">
          <div className="grid" style={{ maxWidth: "400px" }}>
            <div className="col-12 p-3 ml-8 mt-8">
              <Card className="col-12">
                <form onSubmit={onsubmit} className="p-fluid">
                 {title ? <h2 className="text-center">{title}</h2> : <React.Fragment></React.Fragment>}   
                  <div className="p-field my-3">
                    <span className="p-float-label">
                      <InputText
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        autoComplete="off"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      <label htmlFor="email">Email</label>
                    </span>
                  </div>
                  <div className="p-field my-3">
                    <span className="p-float-label">
                      <InputText
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        autoComplete="off"
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <label htmlFor="password">Password</label>
                    </span>
                  </div>
                  <div className="p-field">
                    <Button
                      type="submit"
                      className="p-mt-2 justify-content-center"
                    >
                      Log In
                    </Button>
                  </div>
                  <span className="p-field my-3">
                    <Link to="">Forgot Password</Link>
                  </span>

                  <p className="p-field mt-4">
                    {children}
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
