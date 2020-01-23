export default {
  properties: {
    type: { type: 'string' },
    name: { type: 'string' },
  },
  additionalProperties: false,
  required: ['type', 'name'],
};
