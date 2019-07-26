import { storiesOf } from '@storybook/react';
import roverUiReadme from './ROVER_UI.md';
import darkMatterReadme from './DARK_MATTER.md';
import responsivenessReadme from './RESPONSIVENESS.md';

storiesOf('/RoverUI', module)
  .add('Introduction', () => null, {
    info: {
      inline: true,
      source: false,
      text: roverUiReadme || ``,
    },
  })
  .add('Layout (Dark matter)', () => null, {
    info: {
      inline: true,
      source: false,
      text: darkMatterReadme || ``,
    },
  })
  .add('Responsiveness', () => null, {
    info: {
      inline: true,
      source: false,
      text: responsivenessReadme || ``,
    },
  });
