import logo from '../../assets/images/logo.svg'
import socials_icon from '../../assets/icons/socials.svg'
import columns from '../../data/columns'
import { Footer } from '../index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {
    logo: {
      type: {
        name: 'string',
        required: true,
      },
      table: {
        defaultValue: {
          summary: logo,
        },
      },
      defaultValue: logo,
      control: {
        type: 'text',
      },
      description: 'Logo for the footer',
    },
    notice: {
      type: {
        name: 'string',
        required: true,
      },
      table: {
        defaultValue: {
          summary: 'Copyright &#169; 2020 Apple Inc. - All rights reserved.',
        },
      },
      defaultValue: 'Copyright &#169; 2020 Apple Inc. - All rights reserved.',
      control: {
        type: 'text',
      },
      description: 'The copyright notice at the bottom of the page',
    },
    socialIcon: {
      type: {
        name: 'string',
        required: true,
      },
      table: {
        defaultValue: {
          summary: socials_icon,
        },
      },
      defaultValue: socials_icon,
      control: {
        type: 'text',
      },
      description: 'The copyright notice at the bottom of the page',
    },
    columns: {
      table: {
        defaultValue: {
          summary: columns,
        },
      },
      defaultValue: columns,
      control: {
        type: 'text',
      },
      description: 'Data for each column',
    },
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
