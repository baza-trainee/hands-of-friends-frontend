'use client';

import React from 'react';
import { useTranslation } from '@/app/i18n/client';

import Container from '../Container';
import NewsSlider from './NewsSlider';
import Section from '../Section';
import Title from '../Title';

export default function NewsSection({ lng }) {
	const { t } = useTranslation(lng, 'title');

	return (
		<Section id="news">
			<Container>
				<Title titleName={t('news')} />
				<NewsSlider />
			</Container>
		</Section>
	);
}
