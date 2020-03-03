const schema = {
  attributes: {
    geolocation: { type: 'json', required: true },
    created_at: { type: 'timestamp' },
    city: { type: 'string', required: true },
    postal_coder: { type: 'string' },
    updated_at: { type: 'timestamp' },
    cover: { type: 'media', multiple: false, required: false },
    images: { type: 'media', multiple: true, required: false },
    id: { type: 'integer' },
    full_name: { type: 'string', required: true },
  },
};

export default schema;
