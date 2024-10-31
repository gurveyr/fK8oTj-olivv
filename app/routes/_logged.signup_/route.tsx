import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Row,
  Col,
  Divider,
  Progress,
} from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SignUpPage() {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [passwordStrength, setPasswordStrength] = useState(0)

  const { mutateAsync: createUser } = Api.user.create.useMutation()

  const onFinish = async (values: any) => {
    try {
      await createUser({
        data: {
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          password: values.password,
        },
      })
      navigate('/home')
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  const checkPasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength += 25
    if (password.match(/[a-z]+/)) strength += 25
    if (password.match(/[A-Z]+/)) strength += 25
    if (password.match(/[0-9]+/)) strength += 25
    setPasswordStrength(strength)
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>Create an Account</Title>
          <Paragraph>
            Join our community and start your journey with us!
          </Paragraph>

          <Form form={form} name="signup" onFinish={onFinish} layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your first name!',
                    },
                  ]}
                >
                  <Input prefix={<i className="las la-user"></i>} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[
                    { required: true, message: 'Please input your last name!' },
                  ]}
                >
                  <Input prefix={<i className="las la-user"></i>} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input prefix={<i className="las la-envelope"></i>} />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                prefix={<i className="las la-lock"></i>}
                onChange={e => checkPasswordStrength(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Progress percent={passwordStrength} showInfo={false} />
              <Text>Password strength: {passwordStrength}%</Text>
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error('You must accept the terms and conditions'),
                        ),
                },
              ]}
            >
              <Checkbox>
                I have read and agree to the{' '}
                <a href="/terms">Terms and Conditions</a> and{' '}
                <a href="/privacy">Privacy Policy</a>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Sign Up
              </Button>
            </Form.Item>
          </Form>

          <Divider>Or</Divider>

          <Button icon={<i className="lab la-google"></i>} block>
            Sign up with Google
          </Button>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Button type="link" onClick={() => navigate('/')}>
              <i className="las la-arrow-left"></i> Back to Landing Page
            </Button>
          </div>
        </Col>
      </Row>
    </PageLayout>
  )
}
