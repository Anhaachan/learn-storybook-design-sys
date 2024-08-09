import { Global } from '@emotion/react';
import { GlobalStyle } from '../src/shared/global';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
      (Story) => (
        <>
          <Global styles={GlobalStyle} />
          <Story />
        </>
      ),
    ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
