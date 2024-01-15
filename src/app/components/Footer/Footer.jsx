'use client';

import { FaFacebook, FaYoutube } from 'react-icons/fa6';

import Link from 'next/link';
import logo from '../../../assets/logo.png';
import { useTranslation } from '../../i18n/client';

export default function Footer({ lng }) {
	const { t } = useTranslation(lng, 'footer');

	const links = [
		{
			id: 1,
			url: `/${lng}`,
			text: t('home'),
		},
		{
			id: 2,
			url: `/${lng}/aboutUs`,
			text: t('about'),
		},
		{
			id: 3,
			url: `/${lng}/projects`,
			text: t('projects'),
		},
		{
			id: 4,
			url: `/${lng}/tenders`,
			text: t('tenders'),
		},
		{
			id: 5,
			url: `/${lng}/contacts`,
			text: t('contacts'),
		},
	];

	const docs = [
		{
			id: 1,
			url: 'https://www.monobank.com.ua/',
			text: t('terms'),
		},
		{
			id: 2,
			url: 'https://www.monobank.com.ua/',
			text: t('policy'),
		},
		{
			id: 3,
			url: 'https://www.monobank.com.ua/',
			text: t('report'),
		},
		{
			id: 4,
			url: 'https://www.monobank.com.ua/',
			text: t('status'),
		},
	];

	return (
		<footer className='mx-auto bg-lightBlue mt-80'>
			<div className='py-8 mx-auto w-[90vw] max-w-7xl'>
				<div className='flex flex-row items-center justify-between mb-8 gap-7'>
					<div className='flex items-center justify-center'>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={logo.src} alt='logo' className='' />
					</div>
					<div className='flex flex-col gap-8'>
						<div className='flex items-center justify-center'>
							<ul className='flex flex-row flex-wrap justify-center gap-4 lg:justify-between lg:gap-14'>
								{links.map((link) => (
									<li key={link.id}>
										<Link
											href={link.url}
											className='text-xl text-black duration-300 hover:text-violet'
										>
											{link.text}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className='flex items-center justify-center gap-6'>
							<div className='flex items-center hover:text-violet'>
								<a
									href='https://www.youtube.com/@go2frg'
									target='_blank'
									rel='noopener noreferrer'
									className=''
								>
									<FaYoutube size={20} />
								</a>
							</div>
							<div className='flex items-center hover:text-violet'>
								<a
									href='https://www.facebook.com/FriendsHands'
									target='_blank'
									rel='noopener noreferrer'
									className=''
								>
									<FaFacebook size={20} />
								</a>
							</div>
						</div>
					</div>
					<div></div>
				</div>
				<div className='flex flex-col items-center gap-4'>
					<div className='flex items-center lg:justify-center'>
						<ul className='flex flex-row flex-wrap justify-center gap-7 lg:justify-between lg:gap-14'>
							{docs.map((doc) => (
								<li key={doc.id}>
									<a
										href={doc.url}
										className='text-xl text-black duration-300 hover:text-violet'
									>
										{doc.text}
									</a>
								</li>
							))}
						</ul>
					</div>
					<p className='text-center'>{t('rights')}</p>
				</div>
			</div>
		</footer>
	);
}
