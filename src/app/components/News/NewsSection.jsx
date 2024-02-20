'use client'
import React from 'react'

import { useRouter } from 'next/navigation'

import Section from '../Section'
import Container from '../Container'
import Title from '../Title'
import NewsSlider from './NewsSlider'

export default function NewsSection() {
	const router = useRouter()
	return (
		<Section>
			<Container>
				<Title titleName='Новини' />
				<NewsSlider />
			</Container>
		</Section>
	)
}
