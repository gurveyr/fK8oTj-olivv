import React, { useState } from 'react'
import {
  Typography,
  Form,
  Input,
  Button,
  Switch,
  Space,
  Modal,
  message,
} from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AccountPage() {
  const { user, isLoggedIn } = useUserContext()
  const navigate = useNavigate()
  const { mutateAsync: upload } = useUploadPublic()
  const [form] = Form.useForm()

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

  const { data: userData, refetch } = Api.user.findFirst.useQuery(
    { where: { id: user?.id } },
    { enabled: !!user?.id },
  )

  const { mutateAsync: updateUser } = Api.user.update.useMutation()
  const { mutateAsync: deleteUser } = Api.user.delete.useMutation()

  const handleUpdateProfile = async (values: any) => {
    try {
      if (values.pictureUrl && values.pictureUrl instanceof File) {
        const { url } = await upload({ file: values.pictureUrl })
        values.pictureUrl = url
      }
      await updateUser({
        where: { id: user?.id },
        data: {
          pictureUrl: values.pictureUrl,
          email: values.email,
        },
      })
      message.success('Profile updated successfully')
      refetch()
    } catch (error) {
      message.error('Failed to update profile')
    }
  }

  const handleDeleteAccount = async () => {
    try {
      await deleteUser({ where: { id: user?.id } })
      message.success('Account deleted successfully')
      navigate('/signin')
    } catch (error) {
      message.error('Failed to delete account')
    }
  }

  if (!isLoggedIn || !userData) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Account Settings</Title>
        <Paragraph>Manage your profile and account settings here.</Paragraph>

        <Form
          form={form}
          layout="vertical"
          initialValues={{
            name: userData.name,
            email: userData.email,
            pictureUrl: userData.pictureUrl,
          }}
          onFinish={handleUpdateProfile}
        >
          <Form.Item label="Profile Picture" name="pictureUrl">
            <Input type="file" accept="image/*" />
          </Form.Item>
          <Form.Item label="Name" name="name">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item
            label="Push Notifications"
            name="pushNotifications"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Profile
            </Button>
          </Form.Item>
        </Form>

        <Space direction="vertical">
          <Button onClick={() => navigate('/password-reset')}>
            <i className="las la-key"></i> Reset Password
          </Button>
          <Button danger onClick={() => setIsDeleteModalVisible(true)}>
            <i className="las la-trash"></i> Delete Account
          </Button>
        </Space>

        <Space direction="vertical">
          <Text>
            Member since: {dayjs(userData.createdAt).format('MMMM D, YYYY')}
          </Text>
          <Button type="link" onClick={() => navigate('/terms')}>
            Terms and Conditions
          </Button>
          <Button type="link" onClick={() => navigate('/privacy')}>
            Privacy Policy
          </Button>
        </Space>

        <Button onClick={() => navigate('/home')}>
          <i className="las la-arrow-left"></i> Back to Home
        </Button>
      </Space>

      <Modal
        title="Delete Account"
        visible={isDeleteModalVisible}
        onOk={handleDeleteAccount}
        onCancel={() => setIsDeleteModalVisible(false)}
        okText="Delete"
        okButtonProps={{ danger: true }}
      >
        <p>
          Are you sure you want to delete your account? This action cannot be
          undone.
        </p>
      </Modal>
    </PageLayout>
  )
}
