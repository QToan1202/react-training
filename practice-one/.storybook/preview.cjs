import '../src/styles/colors.css'
import '../src/styles/z-index.css'
import '../src/styles/font.css'
import '../src/styles/index.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}