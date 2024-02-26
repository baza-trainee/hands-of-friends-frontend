import React from 'react'
import Container from '../Container'
import BreadCrumbs from '../BreadCrumbs'
import { useTranslation } from '@/app/i18n/client'

export default function TenderList({ handleTabClick, activeTab, lng }) {
	const { t } = useTranslation(lng, 'tenders')
	return (
		<div className='bg-image-tenders bg-center min-h-[620px]'>
			<Container>
				<BreadCrumbs
					className='mb-[389px] z-10'
					href='/'
					text={t('breadcrumbs')}
					textColor='white'
				/>
				<h2 className='text-3xl text-white font-bold mb-16'>{t('title')}</h2>
				{/*<div className="flex space-x-4 gap-8">
          <button
            onClick={() => handleTabClick("all")}
            className={`focus:outline-none w-[180px] text-start text-2xl pb-2 ${activeTab === "all"
              ? " text-white z-10 border-b-2"
              : "bg-gray-300 text-fontGray border-b-2 hover:text-white transition border-transparent"
              }`}
          >
            Усі
          </button>
          <button
            onClick={() => handleTabClick("active")}
            className={`focus:outline-none w-[180px] text-start text-2xl pb-2 ${activeTab === "active"
              ? " text-white border-b-2"
              : "bg-gray-300 text-fontGray border-b-2 hover:text-white transition border-transparent "
              }`}
          >
            Активні
          </button>
        </div>*/}
			</Container>
		</div>
	)
}
