export default {
  properties: {
    version: { type: 'number' },
    name: { type: 'string' },
    title: { type: 'string' },
    root: { tyoe: 'object' },
  },
  required: ['version', 'name', 'title', 'root'],
};
