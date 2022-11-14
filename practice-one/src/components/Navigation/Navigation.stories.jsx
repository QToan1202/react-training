import Header from './Navigation';
import logo from '../../assets/images/logo.svg'
import ic_user from '../../assets/images/ic_user.svg'
import ic_search from '../../assets/images/ic_search.svg'
import ic_cart from '../../assets/images/ic_cart.svg'

export default {
  title: 'Header Nav',
  component: Header,
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
      defaultValue: [ic_search, ic_user, ic_cart],
      table: {
        defaultValue: {
          summary: [ic_search, ic_user, ic_cart]
        }
      },
      control: {
        type: 'array',
      },
      description: 'All the icons that can be show on the header navigation bar',
    },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};