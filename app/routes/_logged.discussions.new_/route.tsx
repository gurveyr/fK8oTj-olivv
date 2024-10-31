import React, { useState, useEffect } from 'react'
import { Form, Select, Input, Button, Typography, Space, message } from 'antd'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function NewDiscussionPage() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { user } = useUserContext()
  const [categories, setCategories] = useState<any[]>([])
  const [subcategories, setSubcategories] = useState<any[]>([])
  const [roles, setRoles] = useState<any[]>([])

  const { data: categoriesData } = Api.category.findMany.useQuery({})
  const { data: rolesData } = Api.roleData.findMany.useQuery({})
  const { mutateAsync: createDiscussion } = Api.discussion.create.useMutation()
  const { mutateAsync: createParticipant } =
    Api.participant.create.useMutation()

  useEffect(() => {
    if (categoriesData) {
      setCategories(categoriesData)
    }
  }, [categoriesData])

  useEffect(() => {
    if (rolesData) {
      setRoles(rolesData)
    }
  }, [rolesData])

  const handleCategoryChange = (categoryId: string) => {
    const selectedCategory = categories.find(cat => cat.id === categoryId)
    if (selectedCategory) {
      setSubcategories(selectedCategory.subcategorys || [])
    }
    form.setFieldsValue({ subcategory: undefined, role: undefined })
  }

  const handleSubcategoryChange = () => {
    form.setFieldsValue({ role: undefined })
  }

  const onFinish = async (values: any) => {
    try {
      if (!user) {
        message.error('User not authenticated')
        return
      }

      const newDiscussion = await createDiscussion({
        data: {
          title: values.title,
          userId: user.id,
        },
      })

      await createParticipant({
        data: {
          userId: user.id,
          discussionId: newDiscussion.id,
          roleId: values.role,
        },
      })

      for (const invitee of values.invitees) {
        await createParticipant({
          data: {
            userId: invitee,
            discussionId: newDiscussion.id,
            roleId: values.role,
          },
        })
      }

      message.success('Discussion created successfully')
      navigate(`/discussions/${newDiscussion.id}`)
    } catch (error) {
      console.error('Error creating discussion:', error)
      message.error('Failed to create discussion')
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Create a New Discussion</Title>
        <Text>Fill out the form below to start a new discussion.</Text>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select a category"
              onChange={handleCategoryChange}
            >
              {categories?.map(category => (
                <Option key={category.id} value={category.id}>
                  {category.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="subcategory"
            label="Subcategory"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select a subcategory"
              onChange={handleSubcategoryChange}
            >
              {subcategories?.map(subcategory => (
                <Option key={subcategory.id} value={subcategory.id}>
                  {subcategory.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="role" label="Role" rules={[{ required: true }]}>
            <Select placeholder="Select a role">
              {roles?.map(role => (
                <Option key={role.id} value={role.id}>
                  {role.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="title"
            label="Discussion Title"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="groupName"
            label="Group Name (for discussions with more than two members)"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="invitees"
            label="Invite Members (Enter email addresses)"
          >
            <Select
              mode="tags"
              style={{ width: '100%' }}
              placeholder="Enter email addresses"
            />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Create Discussion
              </Button>
              <Button onClick={() => navigate('/home')}>
                <i className="las la-arrow-left"></i> Back to Home
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Space>
    </PageLayout>
  )
}
