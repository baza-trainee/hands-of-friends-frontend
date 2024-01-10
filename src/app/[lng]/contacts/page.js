'use client';

import {
	FaFacebook,
	FaLocationDot,
	FaMobile,
	FaRegEnvelope,
	FaYoutube,
} from 'react-icons/fa6';
import { useTranslation } from '../../i18n/client';

export default function Contacts({ params: { lng } }) {
	const { t } = useTranslation(lng, 'contacts');

	return (
		<section className='py-10 w-[90vw] mx-auto'>
			<h1 className='mb-8 text-3xl font-bold'>{t('title')}</h1>
			<div className='flex flex-col gap-6'>
				<div className='flex items-center gap-4'>
					<FaMobile />
					<p>+380 50 821 4978</p>
				</div>
				<div className='flex items-center gap-4'>
					<FaRegEnvelope />
					<p>fond.hands@gmail.com</p>
				</div>
				<div className='flex items-center gap-4'>
					<FaYoutube />
					<a
						href='https://www.youtube.com/@go2frg'
						target='_blank'
						rel='noopener noreferrer'
						className=''
					>
						https://www.youtube.com/@go2frg
					</a>
				</div>
				<div className='flex items-center gap-4'>
					<FaFacebook />
					<a
						href='https://www.facebook.com/FriendsHands'
						target='_blank'
						rel='noopener noreferrer'
						className=''
					>
						https://www.facebook.com/FriendsHands
					</a>
				</div>
				<div className='flex items-center gap-4'>
					<FaLocationDot />
					<p>Kramatorsk</p>
				</div>
			</div>
		</section>
	);
}
