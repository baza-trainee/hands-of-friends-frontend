'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Keyboard, A11y, Mousewheel } from 'swiper/modules'
import { useTranslation } from '@/app/i18n/client'

import { useCurrentLang } from '@/app/hooks/useCurrentLang'

import Section from '../Section'
import Container from '../Container'
import Title from '../Title'
import Action from '../Action'

import Team from '../../../../public/img/about-us.png'
import Cargo from '../../../../public/img/cargo.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function About({ lng }) {
	const { t } = useTranslation(lng, 'about-section')
	const router = useRouter()
	const lang = useCurrentLang() === 'uk' ? 'ua' : 'en'

	return (
		<Section>
			<Container>
				<blockquote>
					<p className='min-w-[288px] xs:max-w-[360px] md:max-w-[608px] text-xs italic mb-8 font-bold sm:text-sm md:text-2xl lg:text-left xl:text-left'>
						"{t('blockquote')}"
					</p>
				</blockquote>

				<div className='md:hidden'>
					<Swiper
						pagination={{
							clickable: true,
							type: 'progressbar',
						}}
						modules={[Keyboard, Pagination, A11y, Mousewheel]}
						className='swiper about '
						breakpoints={{
							320: {
								slidesPerView: 1,
							},
						}}
					>
						<SwiperSlide>
							<div className=''>
								<Image
									src={Team}
									width={388}
									height={254}
									alt='Picture of the our team'
									className='object-cover'
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<Image
									src={Cargo}
									width={388}
									height={254}
									alt='Picture of the our cargo'
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className='hidden md:flex flex-col	gap-5 mb-10 xl:flex-row	'>
					<Image
						src={Team}
						width='auto'
						height={398}
						alt='Picture of the our team'
						className='md:h-[386px] w-[688px] lg:mx-0 xl:w-[550px] 2xl:w-[588px]'
					/>

					<Image
						src={Cargo}
						width='auto'
						height={398}
						alt='Picture of the our team'
						className='md:h-[386px] w-[688px] lg:mx-0 xl:w-[550px] 2xl:w-[588px]'
					/>
				</div>

				<Title className='mb-15' titleName={t('title')} />
				<h2 className='text-xl mb-8 md:text-2xl'>{t('subtitle')}</h2>
				<div className='text-base max-w-[740px] md:text-lg '>
					<p className='mb-4'>{t('p1')}</p>
					<p className='mb-4'>{t('p2')}</p>
					<p className='mb-8'>{t('p3')}</p>
				</div>
				<div className='flex justify-center md:justify-start'>
					<Action
						onClick={() => router.push(`${lang}/aboutUs`)}
						type='button'
						className='text-center px-0 min-w-[12.38rem] font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue'
					>
						{t('btn')}
					</Action>
				</div>
			</Container>
		</Section>
	)
}
