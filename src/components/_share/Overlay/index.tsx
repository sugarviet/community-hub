'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

interface OverlayProps {
  isOpen: boolean
  type?: 'normal' | 'blur'
  onClick?: () => void
  duration?: number
}

const Overlay: React.FC<OverlayProps> = ({
  isOpen,
  type = 'normal',
  onClick,
  duration = 0.25,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
          onClick={onClick}
          className={`
            fixed inset-0 z-40 
            ${type === 'blur'
              ? 'bg-black/40 backdrop-blur-sm'
              : 'bg-black/50'
            }
          `}
        />
      )}
    </AnimatePresence>
  )
}

export default Overlay
