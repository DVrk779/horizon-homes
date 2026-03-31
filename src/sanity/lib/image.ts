import createImageUrlBuilder from '@sanity/image-url'

const imageBuilder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
})

export const urlForImage = (source: any) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
