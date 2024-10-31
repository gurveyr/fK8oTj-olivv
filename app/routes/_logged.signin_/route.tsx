import React, { useState } from 'react'
import { Form, Input, Button, Typography, message } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useNavigate, Link } from '@remix-run/react'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SignInPage() {
  const navigate = useNavigate()
  const { mutateAsync: signIn } = Api.authentication.login.useMutation()
  const { mutateAsync: forgotPassword } = Api.authentication.sendResetPasswordEmail.useMutation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('')
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const { isLoggedIn } = useUserContext()

  const handleSignIn = async () => {
    try {
      await signIn({ email, password })
      message.success('Signed in successfully')
      navigate('/home')
    } catch (error) {
      message.error('Failed to sign in')
    }
  }

  const handleForgotPassword = async () => {
    try {
      await forgotPassword({ email: forgotPasswordEmail })
      message.success('Password reset instructions sent to your email')
      setShowForgotPassword(false)
    } catch (error) {
      message.error('Failed to send password reset instructions')
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', maxWidth: 400, margin: '0 auto' }}>
        <Title level={2}>Sign In</Title>
        <Paragraph>Welcome back! Please sign in to your account.</Paragraph>

        <Form layout="vertical">
          <Form.Item label="Email" required>
            <Input
              prefix={<i className="las la-envelope"></i>}
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </Form.Item>
          <Form.Item label="Password" required>
            <Input.Password
              prefix={<i className="las la-lock"></i>}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSignIn} block>
              Sign In
            </Button>
          </Form.Item>
        </Form>

        <div style={{ marginTop: 16 }}>
          <Text>
            <a onClick={() => setShowForgotPassword(true)}>Forgot Password?</a>
          </Text>
        </div>

        {showForgotPassword && (
          <div style={{ marginTop: 16 }}>
            <Input
              prefix={<i className="las la-envelope"></i>}
              value={forgotPasswordEmail}
              onChange={e => setForgotPasswordEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <Button onClick={handleForgotPassword} style={{ marginTop: 8 }}>
              Reset Password
            </Button>
          </div>
        )}

        <div style={{ marginTop: 16 }}>
          <Text>
            By signing in, you agree to our{' '}
            <Link to="/terms">Terms and Conditions</Link> and{' '}
            <Link to="/privacy">Privacy Policy</Link>.
          </Text>
        </div>

        <div style={{ marginTop: 16 }}>
          <Button
            onClick={() => navigate('/')}
            icon={<i className="las la-arrow-left"></i>}
          >
            Back to Landing Page
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
