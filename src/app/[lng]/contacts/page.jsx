'use client';

import { useTranslation } from '../../i18n/client';
import Link from 'next/link';

import {
	FaFacebook,
	FaLocationDot,
	FaPhone ,
	FaEnvelope ,
	FaYoutube,
	FaArrowLeftLong,
} from 'react-icons/fa6';

export default function Contacts({ params: { lng } }) {
	const { t } = useTranslation(lng, 'contacts');

	return (
		<section className='pt-12 pb-40 w-[90vw] mx-auto lg:w-full max-w-[1200px]'>
			<Link
				href={`/${lng}`}
				className='flex items-center gap-2 text-xl text-deepBlue hover:text-violet'
			>
				<FaArrowLeftLong size={24} /> {t('back')}
			</Link>
			<h1 className='my-12 text-3xl font-bold'>{t('title')}</h1>
			<div className='flex flex-col gap-6'>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaPhone size={24}  />
					<p className='text-lg text-black'>+380 50 821 4978</p>
				</div>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaEnvelope size={24}  />
					<p className='text-lg text-black'>fond.hands@gmail.com</p>
				</div>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaYoutube size={24} />
					<a
						href='https://www.youtube.com/@go2frg'
						target='_blank'
						rel='noopener noreferrer'
						className='text-lg text-black hover:text-violet'
					>
						https://www.youtube.com/@go2frg
					</a>
				</div>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaFacebook size={24} />
					<a
						href='https://www.facebook.com/FriendsHands'
						target='_blank'
						rel='noopener noreferrer'
						className='text-lg text-black hover:text-violet'
					>
						https://www.facebook.com/FriendsHands
					</a>
				</div>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaLocationDot size={24} />
					<p className='text-lg text-black'>{t('address')}</p>
				</div>
			</div>
		</section>
	);
}
