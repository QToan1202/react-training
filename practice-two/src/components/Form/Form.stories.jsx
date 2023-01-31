import { Button, Input, Form, FormItem } from '../index'

export default {
  title: 'Form',
  component: Form,
}

const FormContent = (args) => (
  <Form {...args}>
    <FormItem>
      <legend>TEST FORM</legend>
    </FormItem>
    <FormItem>
      <Input placeholder="Enter your email" />
    </FormItem>
    <FormItem>
      <Button size="sm" />
    </FormItem>
  </Form>
)

export const LogInForm = FormContent.bind({})
LogInForm.args = {
  action: '/',
  method: 'post',
  onSubmit: () => undefined,
}
