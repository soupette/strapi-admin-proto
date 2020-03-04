import invariant from 'invariant';

class FieldApi {
  constructor() {
    this.fields = {};
  }

  getField = type => {
    invariant(type, 'A type must be provided');

    return this.fields[type] || null;
  };

  getFields = () => {
    return this.fields;
  };

  registerField = field => {
    const { type, Component } = field;

    invariant(Component, 'A Component must be provided');
    invariant(type, 'A type must be provided');
    invariant(this.fields[type] === undefined, 'A similar field already exists');

    this.fields[type] = Component;
  };

  registerFields = fields => {
    invariant(Array.isArray(fields), 'An array is required');

    fields.forEach(field => {
      this.registerField(field);
    });
  };

  removeField = type => {
    invariant(type, 'A type must be provided in order to remove a field');

    delete this.fields[type];
  };
}

export default FieldApi;
