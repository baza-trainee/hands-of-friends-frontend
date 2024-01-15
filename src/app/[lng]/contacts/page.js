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
		<section className='py-10 w-[90vw] mx-auto lg:w-full'>
			<h1 className='mb-8 text-3xl font-bold'>{t('title')}</h1>
			<div className='flex flex-col gap-6'>
				<div className='flex items-center gap-4'>
					<FaMobile />
					<a href='tel:+380508214978' className='hover:text-violet'>
						+380 50 821 4978
					</a>
				</div>
				<div className='flex items-center gap-4'>
					<FaRegEnvelope />
					<a
						href='mailto:fond.hands@gmail.com'
						className='hover:text-violet'
					>
						fond.hands@gmail.com
					</a>
				</div>
				<div className='flex items-center gap-4'>
					<FaYoutube />
					<a
						href='https://www.youtube.com/@go2frg'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-violet'
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
						className='hover:text-violet'
					>
						https://www.facebook.com/FriendsHands
					</a>
				</div>
				<div className='flex items-center gap-4'>
					<FaLocationDot />
					<address>
						<a
							href='https://www.google.com/maps/place/Bar,+Vinnytsia+Oblast,+23000/@49.077341,27.679213,14z/data=!3m1!4b1!4m6!3m5!1s0x4732892e7f3b47f9:0xdd8d742e4a1abaa6!8m2!3d49.0779819!4d27.681276!16zL20vMDNkbHFt?hl=en&entry=ttu'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-violet'
						>
							{t('address')}
						</a>
					</address>
				</div>
			</div>
		</section>
	);
}
