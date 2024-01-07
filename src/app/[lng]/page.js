import Link from 'next/link';
import { useTranslation } from '../i18n';

export default async function Page({ params: { lng } }) {
	const { t } = await useTranslation(lng);

	return (
		<>
			<h1>{t('title')}</h1>
			<Link href={`/${lng}/aboutUs`}>{t('to-about-page')}</Link>
			<br />
			<Link href={`/${lng}/client-page`}>{t('to-client-page')}</Link>
		</>
	);
}
