import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { sendTemplateEmail } from './email-templates/send-email'

const DemoInput = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  business: z.string().trim().min(1).max(200),
  phone: z.string().trim().max(50).optional().default(''),
  smsOptIn: z.boolean().optional().default(false),
  industry: z.string().trim().max(100).optional().default(''),
  message: z.string().trim().max(2000).optional().default(''),
})

export const submitDemoRequest = createServerFn({ method: 'POST' })
  .inputValidator((data) => DemoInput.parse(data))
  .handler(async ({ data }) => {
    const submittedAt = new Date().toISOString()
    const idempotencyKey = `demo-request-${data.email}-${submittedAt}`
    const result = await sendTemplateEmail('demo-request', 'caleb@localbizninja.com', {
      templateData: { ...data, submittedAt },
      idempotencyKey,
      replyTo: data.email,
    })
    return { ok: true, delivered: result.sent }
  })