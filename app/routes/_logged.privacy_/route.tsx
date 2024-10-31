import { Typography, Button } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PrivacyPage() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <PageLayout layout="narrow">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Title level={1}>Privacy Policy</Title>
        <Paragraph>
          Understand how we handle and protect your personal information.
        </Paragraph>

        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            textAlign: 'left',
            marginTop: '2rem',
          }}
        >
          <Paragraph>
            At our company, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use our website or services.
          </Paragraph>

          <Title level={3}>Information We Collect</Title>
          <Paragraph>
            We collect information that you provide directly to us, such as when
            you create an account, participate in discussions, or contact us for
            support. This may include your name, email address, and any other
            information you choose to provide.
          </Paragraph>

          <Title level={3}>How We Use Your Information</Title>
          <Paragraph>
            We use the information we collect to provide, maintain, and improve
            our services, to communicate with you, and to comply with legal
            obligations. We may also use your information to personalize your
            experience and to send you updates about our services.
          </Paragraph>

          <Title level={3}>Data Security</Title>
          <Paragraph>
            We implement a variety of security measures to maintain the safety
            of your personal information. However, no method of transmission
            over the Internet or electronic storage is 100% secure, so we cannot
            guarantee absolute security.
          </Paragraph>

          <Title level={3}>Your Rights</Title>
          <Paragraph>
            You have the right to access, correct, or delete your personal
            information. If you have any questions about this Privacy Policy or
            our practices, please contact us.
          </Paragraph>

          <Title level={3}>Changes to This Policy</Title>
          <Paragraph>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </Paragraph>
        </div>

        <Button
          type="primary"
          onClick={handleGoBack}
          icon={<i className="las la-arrow-left"></i>}
          style={{ marginTop: '2rem' }}
        >
          Go Back
        </Button>
      </div>
    </PageLayout>
  )
}
