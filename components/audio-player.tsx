'use client'

import { useRef } from 'react'

export default function AudioPlayer({ src = '' }) {
  const audioRef = useRef<HTMLVideoElement>(null)

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }
  return (
    <>
      <button onClick={play} className='absolute text-sm'>
        🔊
      </button>
      <audio ref={audioRef} src={src} />
    </>
  )
}
