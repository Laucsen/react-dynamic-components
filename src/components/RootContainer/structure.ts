export default {
  properties: {
    version: { type: 'number' },
    name: { type: 'string' },
    title: { type: 'string' },
    background: {
      type: 'object',
      properties: {
        color: { type: 'string' },
      },
    },
    root: { tyoe: 'object' },
  },
  required: ['version', 'name', 'title', 'root'],
};
