import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'uvmk3ysq', // الـ ID الحقيقي بتاعك
  dataset: 'production',
  apiVersion: '2024-03-19',
  useCdn: false,
})
