export default {
  properties: {
    type: { type: 'string' },
    name: { type: 'string' },
    items: {
      type: 'array',
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              properties: {
                mobile: { type: 'number' },
                tablet: { type: 'number' },
                desktop: { type: 'number' },
                component: { type: 'object' },
              },
              required: ['mobile', 'tablet', 'desktop', 'component'],
            },
          },
          required: ['data'],
        },
      },
    },
  },
  required: ['type', 'name', 'items'],
};
