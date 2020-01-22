/**
 *
 * PluginA
 *
 */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import EditView from '../EditView';
import PluginAHomePage from '../PluginAHomePage';
// import PropTypes from 'prop-types';

function PluginA() {
  let { url } = useRouteMatch();

  return (
    <Container fluid>
      <Row>
        <Col md="2">
          <ul>
            <li>
              <Link to={`${url}`}>Go to PluginA HomePage</Link>
            </li>
            <li>
              <Link to={`${url}/edit-view`}>Go to EditView</Link>
            </li>
          </ul>
        </Col>
        <Col md="10">
          <Switch>
            <Route path={`${url}/edit-view`} component={EditView} />
            <Route path={url} component={PluginAHomePage} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

PluginA.defaultProps = {};
PluginA.propTypes = {};

export default PluginA;
