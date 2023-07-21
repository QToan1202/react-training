import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, HeadingText, Input, Form } from '../index'

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>

const FormContent: ComponentStory<typeof Form> = (args) => (
  <Form {...args}>
    <HeadingText content="Hear it first" type="primary" />
    <p>Get updates on product drops, collaborations and all things Beats.</p>
    <Input placeholder="Enter your email" />
    <Button size="large" variant="secondary" title="sign up" />
  </Form>
)

export const LogInForm = FormContent.bind({})
LogInForm.args = {
  action: 'javascript:void(0)',
  method: 'get',
}
