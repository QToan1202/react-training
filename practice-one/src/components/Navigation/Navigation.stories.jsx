import logo from '../../assets/images/logo.svg'
import user from '../../assets/icons/user.svg'
import search from '../../assets/icons/search.svg'
import cart from '../../assets/icons/cart.svg'
import {Navigation} from '../index'

export default {
  title: 'Navigation',
  component: Navigation,
  argTypes: {
    logo: {
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: logo,
      table: {
        defaultValue: {
          summary: logo
        }
      },
      control: {
        type: 'text',
      },
      description: 'Header logo',
    },
    links: {
      type: {
        name: 'array',
        required: true,
      },
      defaultValue: ['headphones', 'earphones', 'speakers', 'explore'],
      table: {
        defaultValue: {
          summary: ['headphones', 'earphones', 'speakers', 'explore']
        }
      },
      control: {
        type: 'array',
      },
      description: 'Header links to another page',
    },
    icons: {
      type: {
        name: 'array',
        required: true,
      },
      defaultValue: [search, user, cart],
      table: {
        defaultValue: {
          summary: [search, user, cart]
        }
      },
      control: {
        type: 'array',
      },
      description: 'All the icons that can be show on the header navigation bar',
    },
  },
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {};