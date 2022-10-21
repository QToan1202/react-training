import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  card: {
    id: '1',
    title: 'Test Card',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum possimus beatae corrupti, incidunt sit reiciendis blanditiis ipsam hic necessitatibus.',
    date: '10/20/2022',
  },
};
