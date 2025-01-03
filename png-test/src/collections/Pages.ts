import { block } from '@/blocks/Block'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    { type: 'text', name: 'textSlug', required: true },
    {
      type: 'blocks',
      name: 'header',
      blocks: [block],
      required: true,
      minRows: 1,
      maxRows: 1,
    },
  ],
}
