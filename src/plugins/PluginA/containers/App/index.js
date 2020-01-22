/**
 *
 * PluginA
 *
 */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import EditView from '../EditView';
// import PropTypes from 'prop-types';

function PluginA() {
  let { url } = useRouteMatch();

  return (
    <Container fluid>
      <Row>
        <Col md="4">
          <ul>
            <li>
              <Link to={`${url}/edit-view`}>Go to EditView</Link>
            </li>
          </ul>
        </Col>
        <Switch>
          <Route path={`${url}/edit-view`} component={EditView} />
        </Switch>
      </Row>
    </Container>
  );
}

PluginA.defaultProps = {};
PluginA.propTypes = {};

export default PluginA;
