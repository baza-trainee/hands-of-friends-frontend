'use client';

import Container from '../Container';
import NewsSlider from './NewsSlider';
import Section from '../Section';
import Title from '../Title';

import { useTranslation } from '@/app/i18n/client';

export default function NewsSection({ lng }) {
	const { t } = useTranslation(lng, 'title');
	return (
		<Section id='news'>
			<Container>
				<Title titleName={t('news')} />
				<NewsSlider />
			</Container>
		</Section>
	);
}