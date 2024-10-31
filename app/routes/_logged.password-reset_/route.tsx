import React, { useState } from 'react'
import { Typography, Form, Input, Button, message } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PasswordResetPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const { mutateAsync: updateUser } = Api.user.update.useMutation()

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      await updateUser({
        where: { email },
        data: {
          tokenInvitation: 'reset_' + Math.random().toString(36).substr(2, 9),
        },
      })
      message.success('Password reset email sent. Please check your inbox.')
      setEmail('')
    } catch (error) {
      message.error('Failed to send password reset email. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
        <Title level={2}>
          <i className="las la-lock" style={{ marginRight: '10px' }}></i>
          Password Reset
        </Title>
        <Paragraph>
          Enter your email address below, and we'll send you a link to reset
          your password.
        </Paragraph>
        <Form onFinish={handleSubmit}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input
              prefix={<i className="las la-envelope"></i>}
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading} block>
              Send Reset Link
            </Button>
          </Form.Item>
        </Form>
        <Button
          type="link"
          onClick={() => navigate('/signin')}
          icon={<i className="las la-arrow-left"></i>}
        >
          Back to Sign In
        </Button>
      </div>
    </PageLayout>
  )
}
