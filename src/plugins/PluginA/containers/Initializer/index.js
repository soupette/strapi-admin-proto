/**
 *
 * Initializer
 *
 */
import { useEffect, useRef } from 'react';
import useAppContext from '../../../../hooks/useAppContext';
import useStrapi from '../../../../hooks/useStrapi';
import pluginId from '../../pluginId';
import Media from '../../components/Media';

const Initializer = () => {
  const { updatePlugin } = useAppContext();
  const {
    strapi: {
      fieldApi: { registerField },
    },
  } = useStrapi();
  const ref = useRef();
  const registerFieldRef = useRef(registerField);
  ref.current = updatePlugin;

  useEffect(() => {
    const waitPluginLoaded = () =>
      new Promise(resolve =>
        setTimeout(() => {
          // Add a field using the hook system
          registerFieldRef.current({ type: 'media', Component: Media });

          // Set the plugin ready
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
