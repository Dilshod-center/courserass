'use client'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import { useTranslation } from '@/i18next/client'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { commited } from '@/constants'

export default function Hero() {
  const { lng } = useParams()
  const { t } = useTranslation(lng as string)

  return (
    <>
      <div className="container mx-auto grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-32">
        <div className="flex flex-col space-y-4 self-center">
          <h1 className="font-space-grotesk text-5xl font-bold">
            {t('heroTitle')}{' '}
            <span className="text-blue-500">{t('heroTitleSpan')}</span>
          </h1>
          <p className="text-muted-foreground">{t('heroDescription')}</p>
          <div className="flex gap-4">
            <Link href="/courses">
              <Button variant="outline" size="lg" className="rounded-full">
                {t('findCourses')}
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" className="rounded-full">
                {t('blogs')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[1905px] h-auto  bg-secondary">
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="container mx-auto w-[1900px] h-auto max-w-6xl"
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent className=' flex justify-around gap-8  cursor-pointer items-center w-full '>
            {commited.map((item, idx) => (
              <CarouselItem key={idx} className="w-[500px] border-2 basis-1/3 md:basis-1/4 lg:basis-1/6">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={250}
                  height={100}
                  className="w-full my-5   object-cover"
                  unoptimized
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
