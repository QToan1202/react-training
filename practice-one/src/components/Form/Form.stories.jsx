import {Button, HeadingText, Input, Form} from '../index'

export default {
  title: 'Form',
  component: Form,
};

const FormContent = (args) => (
  <Form {...args}>
    <HeadingText content="Hear it first" style='black' />
    <p className="form__sub-title">Get updates on product drops, collaborations and all things Beats.</p>
    <Input placeholder='Enter your email' />
    <Button size="large" style="warning" title="sign up" />
  </Form>
)

export const LogInForm = FormContent.bind({});
LogInForm.args = {
  action: 'javascript:void(0)',
  method: 'get',
}
