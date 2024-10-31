import React from 'react'
import { Typography, Card, Avatar, List, Button, Row, Col } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function DiscussionDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: discussion, isLoading: isDiscussionLoading } =
    Api.discussion.findUnique.useQuery({
      where: { id },
      include: {
        participants: { include: { user: true, role: true } },
        agreements: true,
      },
    })

  const { data: agreement, isLoading: isAgreementLoading } =
    Api.agreement.findFirst.useQuery({
      where: { discussionId: id, status: 'FINAL' },
    })

  if (isDiscussionLoading || isAgreementLoading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  if (!discussion) {
    return <PageLayout layout="narrow">Discussion not found</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Col>
          <Title level={2}>Discussion Details</Title>
        </Col>
        <Col>
          <Button type="primary" onClick={() => navigate(`/discussions/${id}`)}>
            <i className="las la-arrow-left"></i> Back to Discussion
          </Button>
        </Col>
      </Row>

      <Card title="Participants" style={{ marginBottom: 24 }}>
        <List
          dataSource={discussion.participants}
          renderItem={participant => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={participant.user?.pictureUrl} />}
                title={participant.user?.name}
                description={`Role: ${participant.role?.name}`}
              />
            </List.Item>
          )}
        />
      </Card>

      <Card title="Final Agreement Summary" style={{ marginBottom: 24 }}>
        {agreement ? (
          <>
            <Paragraph>{agreement.content}</Paragraph>
            <Text type="secondary">
              Last updated:{' '}
              {dayjs(agreement.updatedAt).format('MMMM D, YYYY h:mm A')}
            </Text>
          </>
        ) : (
          <Text>No final agreement has been saved yet.</Text>
        )}
      </Card>
    </PageLayout>
  )
}
