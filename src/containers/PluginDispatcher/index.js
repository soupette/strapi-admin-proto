/**
 *
 * PluginDispatcher
 *
 */

import React from "react";
import { get } from "lodash";
import { useParams } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";

function PluginDispatcher() {
  const { pluginId } = useParams();
  const { plugins } = useAppContext();
  const pluginToRender = get(plugins, pluginId, null);

  if (!pluginToRender) {
    return <div>This plugin does not exist</div>;
  }

  const PluginEntryComponent = pluginToRender.mainComponent;

  return <PluginEntryComponent />;
}

PluginDispatcher.defaultProps = {};
PluginDispatcher.propTypes = {};

export default PluginDispatcher;
