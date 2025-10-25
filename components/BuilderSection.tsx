
'use client'
import { BuilderComponent } from '@builder.io/react'
import '../lib/builder'

export default function BuilderSection({ model }: { model: string }) {
  return <BuilderComponent model={model} options={{ includeRefs: true }} />
}
