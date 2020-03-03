/**
 *
 * ContentManager
 *
 */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import EditPage from '../EditPage';

function PluginA() {
  let { url } = useRouteMatch();

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Switch>
            <Route path={url} component={EditPage} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

PluginA.defaultProps = {};
PluginA.propTypes = {};

export default PluginA;
