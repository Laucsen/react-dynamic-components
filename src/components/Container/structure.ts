export default {
  properties: {
    type: { type: 'string' },
    name: { type: 'string' },
    background: {
      type: 'object',
      additionalProperties: false,
      properties: {
        color: { type: 'string' },
        image: { type: 'string' },
        gradient: { type: 'string' },
      },
    },
    components: {
      type: 'array',
      items: {
        type: 'object',
      },
    },
  },
  additionalProperties: false,
  required: ['type', 'components'],
};
