'use client'
import Container from '@/app/components/Container'
import BreadCrumbs from '@/app/components/BreadCrumbs'
import AboutTabs from '../../components/About/AboutTabs'
import AboutContent from '../../components/About/AboutContent'
import { useState } from 'react'
import { useTranslation } from '@/app/i18n/client'

function Page({ lng }) {
	const { t } = useTranslation(lng, 'about-page')
	const [activeTab, setActiveTab] = useState('mission')

	return (
		<div>
			<div className='bg-image-about bg-center h-[275px] md:min-h-[620px]'>
				<Container>
					<BreadCrumbs
						className='mb-[177px] mt-[16px] md:mt-[41px] md:mb-[319px] z-10'
						href='/'
						text={t('breadcrumbs')}
						textColor='white'
					/>
					<h2 className='text-2xl md:text-3xl text-white font-bold md:mb-16'>
						{t('title')}
					</h2>
					<AboutTabs
						className='hidden md:flex'
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				</Container>
			</div>
			<Container>
				<AboutTabs
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					className='flex flex-col text-[black] md:hidden'
				/>
			</Container>
			<AboutContent activeTab={activeTab} />
		</div>
	)
}

export default Page
