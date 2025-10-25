
'use client'
import { builder } from '@builder.io/react'

const KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || ''
if (KEY) builder.init(KEY)

export { builder }
