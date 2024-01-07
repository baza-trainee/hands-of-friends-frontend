import HeaderBase from './HeaderBase';
import { useTranslation } from '../../i18n/';

export default async function Header({ lng }) {
	const { t } = await useTranslation(lng, 'header');
	return <HeaderBase t={t} lng={lng} />;
}
