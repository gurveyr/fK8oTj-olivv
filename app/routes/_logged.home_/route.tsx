import { Typography, Card, Button, List, Avatar, Badge } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const { user } = useUserContext()
  const navigate = useNavigate()

  const { data: discussions, isLoading } = Api.discussion.findMany.useQuery({
    where: { userId: user?.id },
    include: { messages: true, participants: true },
  })

  const handleNewDiscussion = () => {
    navigate('/discussions/new')
  }

  const handleOpenDiscussion = (id: string) => {
    navigate(`/discussions/${id}`)
  }

  const handleOpenAccount = () => {
    navigate('/account')
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>Discussions</Title>
        <Text>Manage your discussions and start new ones</Text>
      </div>

      <Card>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <Avatar
            src={user?.pictureUrl}
            size="large"
            onClick={handleOpenAccount}
            style={{ cursor: 'pointer' }}
          />
          <Button
            type="primary"
            onClick={handleNewDiscussion}
            icon={<i className="las la-plus"></i>}
          >
            New Discussion
          </Button>
        </div>

        <List
          loading={isLoading}
          dataSource={discussions}
          renderItem={discussion => (
            <List.Item
              key={discussion.id}
              onClick={() => handleOpenDiscussion(discussion.id)}
              style={{ cursor: 'pointer' }}
            >
              <List.Item.Meta
                avatar={<Avatar icon={<i className="las la-comments"></i>} />}
                title={discussion.title}
                description={`Created on ${dayjs(discussion.createdAt).format(
                  'MMMM D, YYYY',
                )}`}
              />
              <Badge
                count={discussion.messages.length}
                overflowCount={99}
                style={{ backgroundColor: '#52c41a' }}
              >
                <i className="las la-envelope" style={{ fontSize: '24px' }}></i>
              </Badge>
              <Badge
                count={discussion.participants.length}
                overflowCount={99}
                style={{ marginLeft: '1rem' }}
              >
                <i className="las la-users" style={{ fontSize: '24px' }}></i>
              </Badge>
            </List.Item>
          )}
        />
      </Card>
    </PageLayout>
  )
}
