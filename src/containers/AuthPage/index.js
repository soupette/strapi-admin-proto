/**
 *
 * AuthPage
 *
 */
import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { Inputs } from "@buffetjs/custom";
import { Button } from "@buffetjs/core";
import { Container, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import { object, string } from "yup";
import auth from "../../utils/auth";
import getYupInnerErrors from "../../utils/getYupInnerErrors";

function AuthPage() {
  const [state, setState] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const { push } = useHistory();
  const handleChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async e => {
    e.preventDefault();

    const schema = object().shape({
      username: string().required(),
      password: string().required(),
    });

    try {
      await schema.validate(state, { abortEarly: false });

      auth.setUser(state, true);
      push("/");
    } catch (err) {
      const errors = getYupInnerErrors(err);

      setErrors(errors);
    }
  };

  return (
    <Container style={{ paddingTop: "25%" }}>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Inputs
              label="username"
              name="username"
              type="text"
              error={errors.username}
              onChange={handleChange}
              value={state.username}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Inputs
              label="password"
              name="password"
              type="password"
              error={errors.password}
              onChange={handleChange}
              value={state.password}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

AuthPage.defaultProps = {};
AuthPage.propTypes = {};

export default AuthPage;
