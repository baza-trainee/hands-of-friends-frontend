'use client';

import { FaBars, FaPlus } from 'react-icons/fa6';

import { CiGlobe } from 'react-icons/ci';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../../i18n/settings';
import logo from '../../../assets/logo.png';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeaderBase({ t, lng }) {
	const variants = {
		open: { opacity: 1, y: 0 },
		closed: { opacity: 0, y: '-100%' },
	};

	const links = [
		{
			id: 1,
			url: '/en/aboutUs',
			text: 'About',
		},
		{
			id: 2,
			url: '/en/projects',
			text: 'Projects',
		},
		{
			id: 3,
			url: '/en//tenders',
			text: 'Tenders',
		},
		{
			id: 4,
			url: '/en/team',
			text: 'Team',
		},
	];
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<header className='bg-lightBlue'>
			<div className='flex py-4 mx-auto max-w-7xl w-[90vw] relative lg:flex-row flex-col gap-4 lg:items-center lg:justify-between'>
				<div className='flex items-center lg:justify-center'>
					<Link href='/en'>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={logo.src} alt='logo' className='' />
					</Link>
				</div>
				<div className='items-center hidden md:justify-center lg:flex'>
					<ul className='flex flex-col justify-between gap-4 lg:gap-14 lg:flex-row'>
						{links.map((link) => (
							<li key={link.id}>
								<Link
									href={link.url}
									className='text-xl text-black duration-300 hover:text-violet hover:pl-4 lg:hover:pl-0'
								>
									{link.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='items-center hidden gap-2 duration-300 cursor-pointer lg:flex lg:justify-center'>
					<CiGlobe size={30} />
					<span className=' hover:text-violet'>UKR</span>|
					<span className=' hover:text-violet'>ENG</span>
				</div>
				<a
					href='https://www.monobank.ua/?lang=uk'
					target='_blank'
					rel='noopener noreferrer'
					className='hidden p-4 text-xl text-white duration-300 border-2 rounded cursor-pointer lg:self-center bg-violet border-violet hover:bg-white hover:text-violet lg:block'
				>
					{/* {t('support')} */}
					{/* {t('robot')} */}
					Support the fund
				</a>
				<motion.nav
					animate={menuOpen ? 'open' : 'closed'}
					variants={variants}
					className='lg:hidden'
				>
					{menuOpen && (
						<div className='flex flex-col gap-4 lg:flex-row lg:justify-between'>
							<div className='flex items-center md:justify-center'>
								<ul className='flex flex-col justify-between gap-4 lg:gap-14 lg:flex-row'>
									{links.map((link) => (
										<li key={link.id}>
											<Link
												href={link.url}
												className='text-xl text-black duration-300 hover:text-violet hover:pl-4 lg:hover:pl-0'
											>
												{link.text}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className='flex items-center gap-2 duration-300 cursor-pointer lg:justify-center'>
								<CiGlobe size={30} />
								<span className=' hover:text-violet'>UKR</span>|
								<span className=' hover:text-violet'>ENG</span>
							</div>
							<a
								href='https://www.monobank.ua/?lang=uk'
								target='_blank'
								rel='noopener noreferrer'
								className='p-4 text-xl text-white duration-300 border-2 rounded cursor-pointer lg:self-center bg-violet border-violet hover:bg-white hover:text-violet'
							>
								Support the fund
							</a>
						</div>
					)}
				</motion.nav>
				<div
					className={`cursor-pointer duration-300 absolute right-0 top-10 lg:hidden ${
						menuOpen ? 'transform rotate-45 scale-125' : ''
					}`}
					onClick={toggleMenu}
				>
					{menuOpen ? (
						<FaPlus size={30} className='fill-slate-900' />
					) : (
						<FaBars size={30} className='fill-slate-900' />
					)}
				</div>
			</div>
		</header>
	);
}
