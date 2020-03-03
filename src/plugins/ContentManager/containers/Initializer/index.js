/**
 *
 * Initializer
 *
 */
import { useEffect, useRef } from 'react';
import useAppContext from '../../../../hooks/useAppContext';
import pluginId from '../../pluginId';

const Initializer = () => {
  const { updatePlugin } = useAppContext();
  const ref = useRef();
  ref.current = updatePlugin;

  useEffect(() => {
    const waitPluginLoaded = () =>
      new Promise(resolve =>
        setTimeout(() => {
          ref.current([pluginId, 'isReady'], true);
          resolve();
        }, 300),
      );

    waitPluginLoaded();
  }, []);

  return '';
};

Initializer.defaultProps = {};
Initializer.propTypes = {};

export default Initializer;
