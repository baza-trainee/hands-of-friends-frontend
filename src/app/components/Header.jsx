'use client';

import { FaBars, FaPlus } from 'react-icons/fa6';
import { CiGlobe } from 'react-icons/ci';
import Link from 'next/link';
import logo from '../../assets/logo.png';
import { useState } from 'react';

export const links = [
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

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<header className='bg-lightBlue'>
			<div className='flex lg:justify-between py-4 mx-auto max-w-7xl w-[90vw] relative lg:flex-row flex-col gap-4'>
				<div className='flex items-center lg:justify-center'>
					<Link href='/'>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={logo.src} alt='logo' className='' />
					</Link>
				</div>
					{menuOpen && (
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
					)}
				{menuOpen && (
					<div className='flex items-center gap-2 duration-300 cursor-pointer lg:justify-center'>
						<CiGlobe size={30} />
						<span className=' hover:text-violet'>UKR</span>|
						<span className=' hover:text-violet'>ENG</span>
					</div>
				)}
				{menuOpen && (
					<a
						href='https://www.monobank.ua/?lang=uk'
						target='_blank'
						rel='noopener noreferrer'
						className='p-4 text-xl text-white duration-300 border-2 rounded cursor-pointer lg:self-center bg-violet border-violet hover:bg-white hover:text-violet'
					>
						Support the fund
					</a>
				)}
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
