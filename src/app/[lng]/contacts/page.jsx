'use client';

import {
	FaArrowLeftLong,
	FaEnvelope,
	FaFacebook,
	FaLocationDot,
	FaPhone,
	FaYoutube,
} from 'react-icons/fa6';

import Link from 'next/link';
import React from 'react';
import { useTranslation } from '../../i18n/client';

export default function Contacts({ params: { lng } }) {
	const { t } = useTranslation(lng, 'contacts');

	return (
		<section className='xl:py-12 max-w-screen-2xl 2xl:px-[120px] height-minus xl:px-20 md:px-10 p-4 pb-12 mx-auto md:pt-8'>
			<Link
				href={`/${lng}`}
				className='flex items-center gap-2 text-sm xl:text-xl text-deepBlue hover:text-violet md:text-lg'
			>
				<FaArrowLeftLong className='text-base md:text-2xl'/> {t('back')}
			</Link>
			<h1 className='mt-8 mb-6 text-2xl font-bold xl:mb-8 xl:mt-12 md:mb-8 md:mt-12 md:text-3xl'>{t('title')}</h1>
			<div className='flex flex-col gap-4 md:gap-6'>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaPhone className='text-base md:text-2xl'/>
					<p className='text-sm text-black md:text-lg'>+380 50 821 4978</p>
				</div>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaEnvelope className='text-base md:text-2xl'/>
					<p className='text-sm text-black md:text-lg'>fond.hands@gmail.com</p>
				</div>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaYoutube className='text-base md:text-2xl'/>
					<a
						href='https://www.youtube.com/@go2frg'
						target='_blank'
						rel='noopener noreferrer'
						className='text-sm text-black md:text-lg hover:text-violet'
					>
						https://www.youtube.com/@go2frg
					</a>
				</div>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaFacebook className='text-base md:text-2xl'/>
					<a
						href='https://www.facebook.com/FriendsHands'
						target='_blank'
						rel='noopener noreferrer'
						className='text-sm text-black md:text-lg hover:text-violet'
					>
						https://www.facebook.com/FriendsHands
					</a>
				</div>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaLocationDot className='text-base md:text-2xl'/>
					<p className='text-sm text-black md:text-lg'>{t('address')}</p>
				</div>
			</div>
		</section>
	);
}
