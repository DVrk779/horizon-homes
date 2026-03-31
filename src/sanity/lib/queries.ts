import { groq } from 'next-sanity'

export const featuredPropertiesQuery = groq`
  *[_type == "property"] | order(isFeatured desc, _createdAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    price,
    location,
    bedrooms,
    bathrooms,
    sqft,
    description,
    isFeatured
  }
`
