'use client'
import { useState } from 'react'
import Container from '@/app/components/Container'
import Section from '@/app/components/Section'
import { dataTenders } from '@/app/components/Tenders/data'
import Link from 'next/link'
import BreadCrumbs from '@/app/components/BreadCrumbs'

export default function TendersPage() {
	const [activeTab, setActiveTab] = useState('all')

	const handleTabClick = tab => {
		setActiveTab(tab)
	}

	const filteredTenders = dataTenders.filter(item => {
		if (activeTab === 'all') {
			return true
		} else if (activeTab === 'active') {
			return item.active
		}
		return false
	})

	return (
		<>
			<div className='bg-image-tenders min-h-[620px]'>
				<Container>
					<BreadCrumbs className='pt-11 mb-[319px]' href='/' text='Назад' />
					<h2 className='text-3xl	text-white font-bold mb-16'>Тендери</h2>
					<div className='flex space-x-4 gap-8'>
						<button
							onClick={() => handleTabClick('all')}
							className={`focus:outline-none w-[180px] text-start text-2xl pb-2 ${
								activeTab === 'all'
									? ' text-white border-b-2'
									: 'bg-gray-300 text-fontGray border-b-2  border-transparent'
							}`}
						>
							Усі
						</button>
						<button
							onClick={() => handleTabClick('active')}
							className={`focus:outline-none w-[180px] text-start text-2xl pb-2 ${
								activeTab === 'active'
									? ' text-white border-b-2'
									: 'bg-gray-300 text-fontGray border-transparent '
							}`}
						>
							Активні
						</button>
					</div>
				</Container>
			</div>
			<Container>
				<Section marginTop="mt-20" marginBottom="mb-[8.25rem]">
					<ul className='flex gap-5 max-w-[360px] not-italic leading-normal'>
						{filteredTenders.map(item => (
							<li
								key={item.id}
								className='flex flex-col p-6 min-w-[22.5rem] bg-[#E0F2FE]'
							>
								{activeTab === 'all' ||
								(activeTab === 'active' && item.active) ? (
									<Link href={`/tenders/${item.id}`}>
										<p className='flex justify-between font-body text-lg'>
											<span
												className={`font-bold ${
													item.type === 'Активний'
														? 'text-green'
														: 'text-lightGray'
												}`}
											>
												{item.type}
											</span>
											<span className='text-black'>{item.data}</span>
										</p>
										<p className='font-sans mt-6 text-left leading-6 text-2xl text-black font-medium'>
											{item.text}
										</p>
									</Link>
								) : null}
							</li>
						))}
					</ul>
				</Section>
			</Container>
		</>
	)
}
