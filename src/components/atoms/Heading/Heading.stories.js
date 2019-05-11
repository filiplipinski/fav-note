import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Big', () => <Heading big>Cześć, tu Filip</Heading>)
  .add('Normal', () => <Heading>No elo</Heading>);
