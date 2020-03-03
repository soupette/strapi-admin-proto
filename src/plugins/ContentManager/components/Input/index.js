import React, { useMemo } from 'react';
import { get, toLower } from 'lodash';
import { Inputs } from '@buffetjs/custom';

const getInputType = (type = '') => {
  switch (toLower(type)) {
    case 'boolean':
      return 'bool';
    case 'decimal':
    case 'float':
    case 'integer':
      return 'number';
    case 'date':
    case 'datetime':
    case 'time':
      return type;
    case 'email':
      return 'email';
    case 'enumeration':
      return 'select';
    case 'password':
      return 'password';
    case 'string':
      return 'text';
    case 'text':
      return 'textarea';
    case 'media':
    case 'file':
    case 'files':
      return 'media';
    case 'json':
      return 'json';
    case 'wysiwyg':
    case 'WYSIWYG':
    case 'richtext':
      return 'wysiwyg';
    case 'uid':
      return 'uid';
    default:
      return 'text';
  }
};

const Input = ({ layout, name, onChange, value }) => {
  const attribute = useMemo(
    () => get(layout, ['schema', 'attributes', name], {}),
    [layout, name],
  );
  const metadatas = useMemo(
    () => get(layout, ['metadatas', name, 'edit'], {}),
    [layout, name],
  );
  const disabled = useMemo(() => !get(metadatas, 'editable', true), [
    metadatas,
  ]);
  const type = useMemo(() => get(attribute, 'type', null), [attribute]);

  return (
    <Inputs
      {...metadatas}
      type={getInputType(type)}
      name={name}
      onChange={onChange}
      disabled={disabled}
      value={value}
    />
  );
};

Input.defaultProps = {
  modifiedData: {},
  onChange: () => {},
};

export default Input;
