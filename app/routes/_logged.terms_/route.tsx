import { Typography, Button } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function TermsPage() {
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
        <Title level={1}>Terms and Conditions</Title>
        <Paragraph>
          Please read our Terms and Conditions carefully to understand our
          policies and your rights when using our app.
        </Paragraph>

        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            textAlign: 'left',
            marginTop: '20px',
          }}
        >
          <Title level={2}>1. Acceptance of Terms</Title>
          <Paragraph>
            By accessing or using our app, you agree to be bound by these Terms
            and Conditions. If you do not agree to these terms, please do not
            use our app.
          </Paragraph>

          <Title level={2}>2. User Responsibilities</Title>
          <Paragraph>
            You are responsible for maintaining the confidentiality of your
            account and password. You agree to accept responsibility for all
            activities that occur under your account.
          </Paragraph>

          <Title level={2}>3. Privacy Policy</Title>
          <Paragraph>
            Your use of our app is also governed by our Privacy Policy. Please
            review our Privacy Policy to understand how we collect, use, and
            protect your personal information.
          </Paragraph>

          <Title level={2}>4. Intellectual Property</Title>
          <Paragraph>
            All content, features, and functionality of our app are owned by us
            or our licensors and are protected by copyright, trademark, and
            other intellectual property laws.
          </Paragraph>

          <Title level={2}>5. Limitation of Liability</Title>
          <Paragraph>
            We shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use of or
            inability to use our app.
          </Paragraph>

          <Title level={2}>6. Changes to Terms</Title>
          <Paragraph>
            We reserve the right to modify these Terms and Conditions at any
            time. We will notify users of any significant changes. Your
            continued use of the app after such modifications constitutes your
            acceptance of the updated terms.
          </Paragraph>

          <Title level={2}>7. Termination</Title>
          <Paragraph>
            We reserve the right to terminate or suspend your account and access
            to our app at our sole discretion, without notice, for conduct that
            we believe violates these Terms and Conditions or is harmful to
            other users, us, or third parties, or for any other reason.
          </Paragraph>

          <Title level={2}>8. Governing Law</Title>
          <Paragraph>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of the jurisdiction in which our company is
            registered, without regard to its conflict of law provisions.
          </Paragraph>

          <Title level={2}>9. Contact Us</Title>
          <Paragraph>
            If you have any questions about these Terms and Conditions, please
            contact us at support@ourapp.com.
          </Paragraph>
        </div>

        <Button
          type="primary"
          onClick={handleGoBack}
          style={{ marginTop: '20px' }}
          icon={<i className="las la-arrow-left"></i>}
        >
          Go Back
        </Button>
      </div>
    </PageLayout>
  )
}
