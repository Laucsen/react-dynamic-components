export default {
  properties: {
    version: { type: 'number' },
    name: { type: 'string' },
    title: { type: 'string' },
    background: {
      type: 'object',
      additionalProperties: false,
      properties: {
        color: { type: 'string' },
        image: { type: 'string' },
        gradient: { type: 'string' },
      },
    },
    root: { tyoe: 'object' },
  },
  additionalProperties: false,
  required: ['version', 'name', 'title', 'root'],
};
