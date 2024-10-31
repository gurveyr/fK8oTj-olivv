import { useState, useEffect } from 'react'
import { Typography, Button, Input, List, Avatar, Modal, Spin } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function DiscussionPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useUserContext()
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [showReview, setShowReview] = useState(false)
  const [showFinalise, setShowFinalise] = useState(false)

  const { data: discussion, isLoading } = Api.discussion.findUnique.useQuery({
    where: { id },
    include: {
      participants: { include: { user: true, role: true } },
      messages: { include: { user: true } },
    },
  })

  const { mutateAsync: sendMessage } = Api.message.create.useMutation()
  const { mutateAsync: updateDiscussion } = Api.discussion.update.useMutation()

  useEffect(() => {
    if (discussion) {
      setMessages(discussion.messages)
    }
  }, [discussion])

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      const newMessage = await sendMessage({
        data: {
          content: inputMessage,
          userId: user.id,
          discussionId: id,
        },
      })
      setMessages([...messages, newMessage])
      setInputMessage('')
    }
  }

  const handleReview = () => {
    setShowReview(true)
  }

  const handleFinalise = async () => {
    await updateDiscussion({
      where: { id },
      data: { title: 'Finalised: ' + discussion.title },
    })
    setShowFinalise(true)
  }

  const handleAbandon = async () => {
    await updateDiscussion({
      where: { id },
      data: { title: 'Abandoned: ' + discussion.title },
    })
    navigate('/home')
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  const otherParticipant = discussion.participants.find(
    p => p.userId !== user.id,
  )
  const topBannerTitle =
    discussion.participants.length > 2
      ? 'Group Discussion'
      : otherParticipant?.user.name

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Title level={2}>Discussion</Title>
        <Paragraph>
          Collaborate and reach an agreement with other participants.
        </Paragraph>
      </div>

      <div
        style={{
          border: '1px solid #d9d9d9',
          borderRadius: '4px',
          padding: '16px',
          marginBottom: '20px',
        }}
      >
        <Title level={4} onClick={() => navigate(`/discussions/${id}/details`)}>
          <i className="las la-users"></i> {topBannerTitle}
        </Title>
        <Text>
          Roles: {discussion.participants?.map(p => p.role.name).join(', ')}
        </Text>
      </div>

      <List
        dataSource={messages}
        renderItem={message => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={message.user.pictureUrl} />}
              title={message.user.name}
              description={dayjs(message.createdAt).format('YYYY-MM-DD HH:mm')}
            />
            {message.content}
          </List.Item>
        )}
      />

      <Input.TextArea
        value={inputMessage}
        onChange={e => setInputMessage(e.target.value)}
        placeholder="Type your message here..."
        style={{ marginTop: '20px' }}
      />
      <Button
        onClick={handleSendMessage}
        type="primary"
        style={{ marginTop: '10px' }}
      >
        <i className="las la-paper-plane"></i> Send
      </Button>

      <div style={{ marginTop: '20px' }}>
        <Button onClick={handleReview} style={{ marginRight: '10px' }}>
          <i className="las la-file-alt"></i> Review
        </Button>
        <Button
          onClick={handleFinalise}
          type="primary"
          style={{ marginRight: '10px' }}
        >
          <i className="las la-check-circle"></i> Finalise
        </Button>
        <Button onClick={handleAbandon} danger>
          <i className="las la-times-circle"></i> Abandon
        </Button>
      </div>

      <Modal
        title="Discussion Summary"
        open={showReview}
        onOk={() => setShowReview(false)}
        onCancel={() => setShowReview(false)}
      >
        <p>Here's a summary of the discussion...</p>
      </Modal>

      <Modal
        title="Agreement Finalised"
        open={showFinalise}
        onOk={() => navigate('/home')}
        onCancel={() => setShowFinalise(false)}
      >
        <p>The agreement has been finalised. All parties have agreed.</p>
      </Modal>
    </PageLayout>
  )
}
