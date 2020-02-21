export default {
  properties: {
    type: { type: 'string' },
    name: { type: 'string' },
    inline: { type: 'boolean' },
  },
  additionalProperties: false,
  required: ['type', 'name'],
};
