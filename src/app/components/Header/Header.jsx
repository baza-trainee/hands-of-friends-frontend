'use client';

import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa6';
import { HiPlus } from 'react-icons/hi2';
import { Trans } from 'react-i18next/TransWithoutContext';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from '@/app/i18n/client';

import Bars from '../../../../public/img/bars.svg';
import LogoIcon from '../../../../public/img/logo.svg';
import LogoIconTablet from '../../../../public/img/logo-tablet.svg';
import { languages } from '../../i18n/settings';

export default function Header({ lng }) {
	const variants = {
		open: { opacity: 1, y: 0 },
		closed: { opacity: 0, y: '-100%' },
	};

	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	const { t } = useTranslation(lng, 'header');
	const pathname = usePathname();
	const pathParts = pathname.split('/');

	const pathWithoutLanguage =
		pathParts.length > 2
			? pathParts.length > 3
				? pathParts[pathParts.length - 2] +
				'/' +
				pathParts[pathParts.length - 1]
				: pathParts[pathParts.length - 1]
			: '';

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
			url: `/${lng}/#news`,
			text: t('news'),
		},
		{
			id: 6,
			url: `/${lng}/contacts`,
			text: t('contacts'),
		},
	];

	return (
		<div className='fixed z-20 w-full border-t border-b bg-lightBlue border-deepBlue'>
			<div className='flex xl:py-4 mx-auto max-w-screen-2xl 2xl:px-[120px] xl:px-20 md:px-10 px-4 relative xl:flex-row flex-col xl:gap-4 xl:items-center xl:justify-between gap-0'>
				<div className='items-center hidden xl:flex xl:justify-center'>
					<LogoIcon alt='Hands of Friends logo' />
				</div>
				<div className='items-center hidden md:justify-center xl:flex'>
					<ul className='flex flex-col justify-between gap-4 xl:gap-14 xl:flex-row'>
						{links.map((link) => (
							<li key={link.id}>
								<Link
									href={link.url}
									className={`text-xl text-black transition hover:text-violet hover:pl-4 lg:hover:pl-0 link ${
										pathname === link.url ? 'active' : ''
									}`}
								>
									{link.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<a
					href='https://www.monobank.ua/?lang=uk'
					target='_blank'
					rel='noopener noreferrer'
					className='hidden p-4 text-xl text-white transition border-2 rounded cursor-pointer xl:self-center bg-violet border-violet hover:bg-transparent hover:text-violet xl:block'
				>
					{t('support')}
				</a>
				<Trans i18nKey='languageSwitcher' t={t}>
					<div className='items-center hidden gap-2 transition xl:flex xl:justify-center'>
						<FaGlobe size={24} className='text-deepBlue' />
						<span
							className={
								lng === 'en'
									? 'text-deepBlue uppercase pointer-events-none'
									: 'text-gray uppercase hover:text-black'
							}
						>
							{languages
								.filter((activeLng) => lng !== activeLng)
								.map((activeLng) => {
									return (
										<span key={activeLng}>
											<Link
												href={`/${activeLng}/${pathWithoutLanguage}`}
											>
												EN
											</Link>
										</span>
									);
								})}
						</span>
						<div className='w-px bg-black h-7'></div>
						<span
							className={
								lng === 'ua'
									? 'text-deepBlue uppercase pointer-events-none'
									: 'text-gray uppercase hover:text-black'
							}
						>
							{languages
								.filter((activeLng) => lng !== activeLng)
								.map((activeLng) => {
									return (
										<span key={activeLng}>
											<Link
												href={`/${activeLng}/${pathWithoutLanguage}`}
											>
												UA
											</Link>
										</span>
									);
								})}
						</span>
					</div>
				</Trans>
				<div className='flex items-center justify-between w-full gap-5 p-4 sm:py-5 md:py-[22px] xl:hidden'>
					<div
						className={`cursor-pointer transition xl:hidden ${
							menuOpen ? 'transform rotate-45 scale-125' : ''
						}`}
						onClick={toggleMenu}
					>
						{menuOpen ? (
							<HiPlus size={24} className='fill-slate-900' />
						) : (
							<Bars />
						)}
					</div>
					<div className='flex items-center'>
						<LogoIconTablet alt='Hands of Friends logo' />
					</div>
					<Trans i18nKey='languageSwitcher' t={t}>
						<div className='flex items-center justify-end flex-1 gap-2 transition'>
							<FaGlobe size={24} className='text-deepBlue' />
							<span
								className={
									lng === 'en'
										? 'text-deepBlue uppercase pointer-events-none text-sm md:text-lg'
										: 'text-gray uppercase text-sm md:text-lg'
								}
							>
								{languages
									.filter((activeLng) => lng !== activeLng)
									.map((activeLng) => {
										return (
											<span key={activeLng}>
												<Link
													href={`/${activeLng}/${pathWithoutLanguage}`}
												>
													EN
												</Link>
											</span>
										);
									})}
							</span>
							|
							<span
								className={
									lng === 'ua'
										? 'text-deepBlue uppercase pointer-events-none text-sm md:text-lg'
										: 'text-gray uppercase text-sm md:text-lg'
								}
							>
								{languages
									.filter((activeLng) => lng !== activeLng)
									.map((activeLng) => {
										return (
											<span key={activeLng}>
												<Link
													href={`/${activeLng}/${pathWithoutLanguage}`}
												>
													UA
												</Link>
											</span>
										);
									})}
							</span>
						</div>
					</Trans>
				</div>
				<motion.nav
					animate={menuOpen ? 'open' : 'closed'}
					variants={variants}
					className='xl:hidden'
				>
					{menuOpen && (
						<div className='flex flex-col gap-8 px-4 xl:flex-row xl:justify-between'>
							<div className='bg-deepBlue h-[1px] w-full'></div>
							<div className='flex items-center xl:justify-center'>
								<ul className='flex flex-col justify-between gap-6 xl:gap-14 xl:flex-row'>
									{links.map((link) => (
										<li key={link.id}>
											<Link
												href={link.url}
												onClick={toggleMenu}
												className={`text-sm text-black duration-300 link ${
													pathname === link.url
														? 'active'
														: ''
												}`}
											>
												{link.text}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<a
								href='https://www.monobank.ua/?lang=uk'
								target='_blank'
								rel='noopener noreferrer'
								className='px-4 py-2 mb-20 text-sm text-white transition border-2 rounded cursor-pointer border-violet xl:self-center bg-violet w-36'
							>
								{t('support')}
							</a>
						</div>
					)}
				</motion.nav>
			</div>
		</div>
	);
}
