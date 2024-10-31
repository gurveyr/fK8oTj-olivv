import { Typography, Button, Card, Row, Col, Space } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function LandingPage() {
  const navigate = useNavigate()

  const handleSignUp = () => {
    navigate('/signup')
  }

  const handleSignIn = () => {
    navigate('/signin')
  }

  const handleDownloadPWA = () => {
    // Logic to download PWA version
    alert('PWA download initiated')
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={1} style={{ textAlign: 'center' }}>
          Welcome to Olivv
        </Title>
        <Paragraph style={{ textAlign: 'center' }}>
          Discover how Olivv can help you manage discussions and reach
          agreements efficiently.
        </Paragraph>

        <Card>
          <Title level={2}>Olivv's Benefits</Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card>
                <i
                  className="las la-comments"
                  style={{ fontSize: '2rem', color: '#1890ff' }}
                ></i>
                <Title level={4}>Streamlined Discussions</Title>
                <Text>
                  Engage in organized and productive conversations with ease.
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card>
                <i
                  className="las la-handshake"
                  style={{ fontSize: '2rem', color: '#52c41a' }}
                ></i>
                <Title level={4}>Efficient Agreements</Title>
                <Text>
                  Reach consensus faster with our intuitive agreement tools.
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card>
                <i
                  className="las la-users"
                  style={{ fontSize: '2rem', color: '#faad14' }}
                ></i>
                <Title level={4}>Collaborative Environment</Title>
                <Text>
                  Work together seamlessly with multiple participants and roles.
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card>
                <i
                  className="las la-chart-line"
                  style={{ fontSize: '2rem', color: '#eb2f96' }}
                ></i>
                <Title level={4}>Insightful Feedback</Title>
                <Text>
                  Gather and analyze feedback to improve your discussions.
                </Text>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card>
          <Title level={2}>Get Started</Title>
          <Space>
            <Button type="primary" size="large" onClick={handleSignUp}>
              Sign Up
            </Button>
            <Button size="large" onClick={handleSignIn}>
              Sign In
            </Button>
          </Space>
        </Card>

        <Card>
          <Title level={2}>Download Olivv</Title>
          <Button
            type="primary"
            icon={<i className="las la-download"></i>}
            size="large"
            onClick={handleDownloadPWA}
          >
            Download PWA Version
          </Button>
        </Card>

        <Paragraph>
          By using Olivv, you agree to our{' '}
          <a
            href="/terms"
            onClick={e => {
              e.preventDefault()
              navigate('/terms')
            }}
          >
            Terms and Conditions
          </a>{' '}
          and{' '}
          <a
            href="/privacy"
            onClick={e => {
              e.preventDefault()
              navigate('/privacy')
            }}
          >
            Privacy Policy
          </a>
          .
        </Paragraph>
      </Space>
    </PageLayout>
  )
}
