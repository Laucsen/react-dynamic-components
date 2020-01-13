export default {
  properties: {
    type: { type: 'string' },
    name: { type: 'string' },
    components: {
      type: 'array',
      items: {
        type: 'object',
      },
    },
  },
  required: ['type', 'components'],
};
