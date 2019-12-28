import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { MyGreeter } from './index'

const stories = storiesOf('Components', module)

stories.add('MyGreeter', () => <MyGreeter name="Tuija" />, {
  info: { inline: true }
})
