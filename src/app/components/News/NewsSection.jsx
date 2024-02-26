'use client'
import React from 'react'

import { useRouter } from 'next/navigation'

import Section from '../Section'
import Container from '../Container'
import Title from '../Title'
import NewsSlider from './NewsSlider'
import { useTranslation } from '@/app/i18n/client'

export default function NewsSection({lng}) {
	const { t } = useTranslation(lng, 'title')
	const router = useRouter()
	return (
		<Section>
			<Container>
				<Title titleName={t('news')} />
				<NewsSlider />
			</Container>
		</Section>
	)
}
