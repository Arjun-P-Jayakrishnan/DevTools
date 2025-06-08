'use client'

import Hero from '@/components/common/Hero'
import { useState } from 'react'

export default function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Hero />
    </>
  )
}
