import React from 'react'
import { Body, Container, Head, Heading, Html, Preview, Section, Text, Hr } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  firstName?: string
  lastName?: string
  email?: string
  business?: string
  phone?: string
  smsOptIn?: boolean
  industry?: string
  message?: string
  submittedAt?: string
}

const Email = ({
  firstName = '',
  lastName = '',
  email = '',
  business = '',
  phone = '',
  smsOptIn = false,
  industry = '',
  message = '',
  submittedAt = new Date().toISOString(),
}: Props) => {
  const fullName = `${firstName} ${lastName}`.trim() || 'New lead'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New demo request from {fullName} — {business || 'Local Biz Ninja'}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Demo Request</Heading>
          <Text style={muted}>Submitted {new Date(submittedAt).toLocaleString()}</Text>
          <Hr style={hr} />
          <Section>
            <Row label="Name" value={fullName} />
            <Row label="Email" value={email} />
            <Row label="Business" value={business} />
            <Row label="Phone" value={phone || '—'} />
            <Row label="SMS opt-in" value={smsOptIn ? 'Yes' : 'No'} />
            <Row label="Industry" value={industry || '—'} />
          </Section>
          <Hr style={hr} />
          <Heading as="h2" style={h2}>What they want to fix</Heading>
          <Text style={body}>{message || '(not provided)'}</Text>
        </Container>
      </Body>
    </Html>
  )
}

const Row = ({ label, value }: { label: string; value: string }) => (
  <Text style={row}>
    <span style={rowLabel}>{label}:</span> <span style={rowValue}>{value}</span>
  </Text>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) =>
    `New demo request — ${[d.firstName, d.lastName].filter(Boolean).join(' ') || d.email || 'Local Biz Ninja'}`,
  displayName: 'Demo Request (internal)',
  to: 'caleb@localbizninja.com',
  previewData: {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    business: 'Jane\'s Plumbing',
    phone: '+1 555-123-4567',
    smsOptIn: true,
    industry: 'Home services',
    message: 'Missing calls after hours and no follow-up on reviews.',
    submittedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '600px' }
const h1 = { color: '#0f172a', fontSize: '22px', margin: '0 0 4px' }
const h2 = { color: '#0f172a', fontSize: '16px', margin: '16px 0 8px' }
const muted = { color: '#64748b', fontSize: '12px', margin: '0' }
const hr = { borderColor: '#e2e8f0', margin: '18px 0' }
const row = { margin: '4px 0', fontSize: '14px', color: '#0f172a' }
const rowLabel = { color: '#64748b', fontWeight: 600 as const }
const rowValue = { color: '#0f172a' }
const body = { fontSize: '14px', color: '#0f172a', lineHeight: '1.55' }