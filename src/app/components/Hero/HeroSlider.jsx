'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/app/i18n/client'
import UniversalSlider from '../ UniversalSlider'
import HeroItem from './HeroItem'
import Container from '../Container'

const HeroSlider = ({ lng }) => {
	const { t } = useTranslation(lng, 'hero')
	return (
		<>
			<div className='HeroSlider max-w-[1440px] mb-6 md:mb-0 relative mx-auto'>
				<UniversalSlider
					endpoint='hero-slider/'
					ItemComponent={HeroItem}
					skeletonType='hero'
					useBullets={true}
					swiperSettings={{
						navigation: {
							nextEl: '.nextButton',
							prevEl: '.prevButton',
						},
					}}
				/>
				<div className='nextButton hidden xl:block z-10  absolute top-1/2 right-[120px] text-white hover:text-vividBlue hover:transition-all'>
					<svg
						width='34'
						height='27'
						viewBox='0 0 34 27'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M19.6962 0.991664C19.954 0.734171 20.3035 0.589541 20.6679 0.589541C21.0323 0.589541 21.3817 0.734171 21.6395 0.991664L33.0979 12.45C33.3554 12.7078 33.5 13.0573 33.5 13.4217C33.5 13.786 33.3554 14.1355 33.0979 14.3933L21.6395 25.8517C21.4715 26.0327 21.2577 26.165 21.0207 26.2347C20.7838 26.3044 20.5324 26.3089 20.2931 26.2477C20.0538 26.1865 19.8355 26.0619 19.6611 25.887C19.4866 25.7121 19.3626 25.4935 19.302 25.254C19.2408 25.015 19.2451 24.7639 19.3144 24.5271C19.3838 24.2903 19.5157 24.0765 19.6962 23.9083L28.8079 14.7967L2.33454 14.7967C1.96987 14.7967 1.62013 14.6518 1.36227 14.3939C1.10441 14.1361 0.959542 13.7863 0.959542 13.4217C0.959542 13.057 1.10441 12.7073 1.36227 12.4494C1.62013 12.1915 1.96987 12.0467 2.33454 12.0467L28.8079 12.0467L19.6962 2.935C19.4387 2.67719 19.2941 2.32771 19.2941 1.96333C19.2941 1.59896 19.4387 1.24948 19.6962 0.991664Z'
							fill='currentColor'
						/>
					</svg>
				</div>
				<div className='prevButton hidden xl:block z-10 rotate-180 absolute top-1/2 left-[120px] text-white hover:text-vividBlue hover:transition-all'>
					<svg
						width='34'
						height='27'
						viewBox='0 0 34 27'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M19.6962 0.991664C19.954 0.734171 20.3035 0.589541 20.6679 0.589541C21.0323 0.589541 21.3817 0.734171 21.6395 0.991664L33.0979 12.45C33.3554 12.7078 33.5 13.0573 33.5 13.4217C33.5 13.786 33.3554 14.1355 33.0979 14.3933L21.6395 25.8517C21.4715 26.0327 21.2577 26.165 21.0207 26.2347C20.7838 26.3044 20.5324 26.3089 20.2931 26.2477C20.0538 26.1865 19.8355 26.0619 19.6611 25.887C19.4866 25.7121 19.3626 25.4935 19.302 25.254C19.2408 25.015 19.2451 24.7639 19.3144 24.5271C19.3838 24.2903 19.5157 24.0765 19.6962 23.9083L28.8079 14.7967L2.33454 14.7967C1.96987 14.7967 1.62013 14.6518 1.36227 14.3939C1.10441 14.1361 0.959542 13.7863 0.959542 13.4217C0.959542 13.057 1.10441 12.7073 1.36227 12.4494C1.62013 12.1915 1.96987 12.0467 2.33454 12.0467L28.8079 12.0467L19.6962 2.935C19.4387 2.67719 19.2941 2.32771 19.2941 1.96333C19.2941 1.59896 19.4387 1.24948 19.6962 0.991664Z'
							fill='currentColor'
						/>
					</svg>
				</div>
			</div>
			<Container>
				<Link
					href='https://www.monobank.ua/?lang=uk'
					target='_blank'
					rel='noopener noreferrer'
					className='block py-4 text-lg text-center text-white transition rounded cursor-pointer border-2 border-violet bg-violet hover:bg-transparent hover:text-violet hover:border-violet w-full md:hidden'
				>
					{t('btn')}
				</Link>
			</Container>
		</>
	)
}

export default HeroSlider
