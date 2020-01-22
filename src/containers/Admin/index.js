/**
 *
 * Admin
 *
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import useAppContext from '../../hooks/useAppContext';
import HomePage from '../HomePage';
import Menu from '../Menu';
import PluginDispatcher from '../PluginDispatcher';
import SettingsView from '../SettingsView';

function Admin() {
  const { plugins } = useAppContext();
  const hasAPluginNotReady = !Object.keys(plugins).every(plugin => plugins[plugin].isReady === true);

  if (hasAPluginNotReady) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '25%' }}>
        <p>Loading...</p>
        {Object.keys(plugins).reduce((acc, current) => {
          const InitializerComponent = plugins[current].initializer;
          const key = plugins[current].id;

          acc.push(<InitializerComponent key={key} />);

          return acc;
        }, [])}
      </div>
    );
  }

  return (
    <Container fluid style={{ paddingTop: 40 }}>
      <Row>
        <Col md="4">
          <Menu />
        </Col>
        <Col md="8">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/plugins/:pluginId" component={PluginDispatcher} exact />
            <Route path="/settings" component={SettingsView} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

Admin.defaultProps = {};
Admin.propTypes = {};

export default Admin;
