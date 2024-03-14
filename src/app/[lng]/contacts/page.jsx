'use client';

import Link from 'next/link';
import React from 'react';
import {
	FaEnvelope,
	FaFacebook,
	FaLocationDot,
	FaPhone,
	FaYoutube,
} from 'react-icons/fa6';
import { useHttp } from '@/app/hooks/useHttp'

import { useTranslation } from '../../i18n/client';

export default function Contacts({ params: { lng } }) {
	const { t } = useTranslation(lng, 'contacts');
	const [contacts] = useHttp("contacts");

	return (
		<section className='xl:py-12 max-w-screen-2xl 2xl:px-[120px] height-minus xl:px-20 md:px-10 p-4 pb-12 mx-auto md:pt-8'>
			<Link
				href={`/${lng}`}
				className='flex items-center w-24 gap-2 text-xs md:text-lg xl:text-xl text-deepBlue hover:text-violet'
			>
				<svg
					className='w-3 md:w-[18px] xl:w-5'
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 18 15'
					fill='none'
				>
					<path
						d='M7.77934 14.03C7.63871 14.1704 7.44809 14.2493 7.24934 14.2493C7.05059 14.2493 6.85997 14.1704 6.71934 14.03L0.46934 7.78C0.32889 7.63937 0.25 7.44875 0.25 7.25C0.25 7.05125 0.32889 6.86062 0.46934 6.72L6.71934 0.469997C6.81101 0.371272 6.92762 0.299101 7.05686 0.261087C7.18611 0.223073 7.32322 0.220623 7.45374 0.253996C7.58427 0.28737 7.70338 0.35533 7.79852 0.450717C7.89366 0.546105 7.96131 0.665387 7.99434 0.795997C8.02776 0.926373 8.02543 1.06335 7.98759 1.19251C7.94976 1.32167 7.87782 1.43826 7.77934 1.53L2.80934 6.5H17.2493C17.4483 6.5 17.639 6.57902 17.7797 6.71967C17.9203 6.86032 17.9993 7.05108 17.9993 7.25C17.9993 7.44891 17.9203 7.63967 17.7797 7.78033C17.639 7.92098 17.4483 8 17.2493 8H2.80934L7.77934 12.97C7.91979 13.1106 7.99868 13.3012 7.99868 13.5C7.99868 13.6987 7.91979 13.8894 7.77934 14.03Z'
						fill='currentColor'
					/>
				</svg>
				{t('back')}
			</Link>
			<h1 className='mt-8 mb-6 text-2xl font-bold xl:mb-8 xl:mt-12 md:mb-8 md:mt-12 md:text-3xl'>
				{t('title')}
			</h1>
			<div className='flex flex-col gap-4 md:gap-6'>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaPhone className='text-base md:text-2xl' />
					<p className='text-sm text-black md:text-lg'>
						{contacts[0]?.phone_number}
					</p>
				</div>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaEnvelope className='text-base md:text-2xl' />
					<p className='text-sm text-black md:text-lg'>
						{contacts[0]?.email}
					</p>
				</div>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaYoutube className='text-base md:text-2xl' />
					<a
						href={contacts[0]?.youtube_link}
						target='_blank'
						rel='noopener noreferrer'
						className='text-sm text-black md:text-lg hover:text-violet'
					>
						{contacts[0]?.youtube_link}
					</a>
				</div>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaFacebook className='text-base md:text-2xl' />
					<a
						href={contacts[0]?.facebook_link}
						target='_blank'
						rel='noopener noreferrer'
						className='text-sm text-black md:text-lg hover:text-violet'
					>
						{contacts[0]?.facebook_link}
					</a>
				</div>
				<div className='flex items-center gap-4 text-lightGray'>
					<FaLocationDot className='text-base md:text-2xl' />
					<p className='text-sm text-black md:text-lg'>
						{contacts[0]?.address}
					</p>
				</div>
			</div>
		</section>
	);
}
