import Image from 'next/image'
import authorImage from '@/public/images/authors/uy.jpg'
import AudioPlayer from './audio-player'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
      <div className='flex-1'>
        <h1 className='mb-4 text-3xl font-bold'>
          Hey, I&#39;m Uy.
          <AudioPlayer src={'/audio/uy.mp3'} />
        </h1>
        <p className='text-muted-foreground'>
          I&#39;m a frontend developer based in HCMC, Vietnam. I&#39;m
          passionate about learning new technologies and tackling frontend
          challenges to deliver optimal user experiences.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-2xl'
          src={authorImage}
          alt='Uy Van'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
