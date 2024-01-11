'use client';

import { HeaderBase } from './HeaderBase';
import { useState } from 'react';
import { useTranslation } from '../../i18n/client';

export const Footer = ({ lng }) => {
	const { t } = useTranslation(lng, 'header');
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<HeaderBase
			t={t}
			lng={lng}
			menuOpen={menuOpen}
			setMenuOpen={setMenuOpen}
		/>
	);
};
