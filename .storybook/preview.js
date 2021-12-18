export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#509eef'
      },
      {
        name: 'dark',
        value: '#010a13'
      },
      {
        name: 'backdrop',
        value: 'rgb(0, 0, 0, 0.5)'
      }
    ]
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
