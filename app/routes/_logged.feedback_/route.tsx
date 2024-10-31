import React, { useState } from 'react'
import { Typography, Input, Button, Space, message } from 'antd'
const { Title, Paragraph } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function FeedbackPage() {
  const navigate = useNavigate()
  const { id: discussionId } = useParams()
  const { user } = useUserContext()

  const [likeExperience, setLikeExperience] = useState('')
  const [dislikeExperience, setDislikeExperience] = useState('')
  const [futureFeature, setFutureFeature] = useState('')

  const { mutateAsync: createFeedback } = Api.feedback.create.useMutation()

  const handleSubmit = async () => {
    if (!user?.id || !discussionId) {
      message.error('User or discussion information is missing')
      return
    }

    try {
      await createFeedback({
        data: {
          content: JSON.stringify({
            likeExperience,
            dislikeExperience,
            futureFeature,
          }),
          userId: user.id,
          discussionId,
        },
      })
      message.success('Feedback submitted successfully')
      navigate('/home')
    } catch (error) {
      message.error('Failed to submit feedback')
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>
          <i className="las la-comment-alt"></i> Feedback
        </Title>
        <Paragraph>
          We value your opinion! Please take a moment to share your thoughts
          about your experience.
        </Paragraph>

        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <div>
            <Title level={4}>What did you like about your experience?</Title>
            <TextArea
              rows={4}
              value={likeExperience}
              onChange={e => setLikeExperience(e.target.value)}
              placeholder="Share what you enjoyed..."
            />
          </div>

          <div>
            <Title level={4}>
              What did you not like about your experience?
            </Title>
            <TextArea
              rows={4}
              value={dislikeExperience}
              onChange={e => setDislikeExperience(e.target.value)}
              placeholder="Tell us what could be improved..."
            />
          </div>

          <div>
            <Title level={4}>
              What feature would you like to see in the future?
            </Title>
            <TextArea
              rows={4}
              value={futureFeature}
              onChange={e => setFutureFeature(e.target.value)}
              placeholder="Suggest new features..."
            />
          </div>
        </Space>

        <Space>
          <Button type="primary" onClick={handleSubmit}>
            <i className="las la-paper-plane"></i> Submit Feedback
          </Button>
          <Button onClick={() => navigate('/home')}>
            <i className="las la-arrow-left"></i> Back to Home
          </Button>
        </Space>
      </Space>
    </PageLayout>
  )
}
