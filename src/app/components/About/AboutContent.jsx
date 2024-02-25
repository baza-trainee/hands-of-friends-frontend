import Container from '@/app/components/Container'
import { useTranslation } from '@/app/i18n/client'

function AboutContent({ activeTab, lng }) {
	const { t } = useTranslation(lng, 'about-page')
	return (
		<Container>
			<div className='mt-4'>
				{activeTab === 'mission' && (
					<div className='mt-[32px] md:mt-[56px] mb-[64px] sm:mb-[72px] md:mb-[112px] xl:mb-[144px] 2xl:mb-[160px] text-lg md:max-w-[688px] xl:max-w-[820px] 2xl:max-w-[912px]'>
						<p className='mb-6'>{t('mission-p1')}</p>
						<p className='mb-6'>{t('mission-p2')}</p>
						<p className='mb-6'>{t('mission-p3')}</p>
						<p className='mb-6'>{t('mission-p4')}</p>
						<p>{t('mission-p5')}</p>
					</div>
				)}
				{activeTab === 'principles' && (
					<div className='mt-[32px] md:mt-[80px] mb-[64px] sm:mb-[72px] md:mb-[112px] xl:mb-[144px] md:max-w-[688px] xl:max-w-[820px] 2xl:max-w-[792px]'>
						<ul className='list-disc '>
							<li className='ml-4 text-lg md:text-2xl'>
								{t('principles-li1')}
							</li>
							<p className='md:text-lg ml-4 mb-10'>{t('principles-p1')}</p>
							<li className='ml-4 text-lg md:text-2xl'>
								{t('principles-li2')}
							</li>
							<p className='md:text-lg ml-4 mb-10'>{t('principles-p2')}</p>
							<li className='ml-4 text-lg md:text-2xl'>
								{t('principles-li3')}
							</li>
							<p className='md:text-lg ml-4 mb-10'>{t('principles-p3')}</p>
							<li className='ml-4 text-lg md:text-2xl'>
								{t('principles-li4')}
							</li>
							<p className='md:text-lg ml-4 mb-10'>{t('principles-p4')}</p>
							<li className='ml-4 text-lg md:text-2xl'>
								{t('principles-li5')}
							</li>
							<p className='md:text-lg ml-4'>{t('principles-p5')}</p>
						</ul>
					</div>
				)}
				{activeTab === 'values' && (
					<div className='mt-[32px] md:mt-[80px] mb-[160px] md:max-w-[688px] xl:max-w-[740px] 2xl:max-w-[740px]'>
						<ul className='list-disc '>
							<li className='ml-4 text-lg md:text-2xl'>{t('values-li1')}</li>
							<p className='md:text-lg ml-4 mb-10'>{t('values-p1')}</p>
							<li className='ml-4 text-lg md:text-2xl'>{t('values-li2')}</li>
							<p className='md:text-lg ml-4 mb-10'>{t('values-p2')}</p>
							<li className='ml-4 text-lg md:text-2xl'>{t('values-li3')}</li>
							<p className='md:text-lg ml-4 mb-10'>{t('values-p3')}</p>
							<li className='ml-4 text-lg md:text-2xl'>{t('values-li4')}</li>
							<p className='md:text-lg ml-4 mb-10'>{t('values-p4')}</p>
							<li className='ml-4 text-lg md:text-2xl'>{t('values-li5')}</li>
							<p className='md:text-lg ml-4'>{t('values-p5')}</p>
						</ul>
					</div>
				)}
			</div>
		</Container>
	)
}

export default AboutContent
