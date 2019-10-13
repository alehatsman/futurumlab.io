import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Button', module)
  .add('default', () => (
    <Button label='Label' />
  ))
