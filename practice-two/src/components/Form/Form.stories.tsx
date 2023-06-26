import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, Input, Form, FormItem } from '../index'

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>

const handleClick = () => alert('Click')

const FormContent: ComponentStory<typeof Form> = (args) => (
  <Form {...args}>
    <FormItem>
      <legend>TEST FORM</legend>
    </FormItem>
    <FormItem>
      <Input placeholder="Enter your email" />
    </FormItem>
    <FormItem>
      <Button size="sm" title="Submit" onClick={handleClick} />
    </FormItem>
  </Form>
)

export const LogInForm = FormContent.bind({})
LogInForm.args = {
  action: '/',
  method: 'post',
  onSubmit: () => undefined,
}
