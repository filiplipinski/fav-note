import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      Green: 'hsl(106, 47%, 64%)',
      Blue: 'hsl(196, 83%, 75%)',
      Yellow: 'hsl(49, 100%, 58%)',
    };
    const defaultValue = 'red';
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>Przycisk</Button>;
  })
  .add('Secondary', () => <Button secondary>Przycisk</Button>);
