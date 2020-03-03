import React from 'react';
import { Inputs } from '@buffetjs/custom';

const Input = ({ layout, modifiedData, name, onChange }) => {
  return <Inputs type="text" />;
};

Input.defaultProps = {
  onChange: () => {},
};

export default Input;
