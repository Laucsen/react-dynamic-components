export default {
  properties: {
    type: { type: 'string' },
    name: { type: 'string' },
    typography: {
      type: 'string',
      enum: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
  required: ['type', 'name'],
};
