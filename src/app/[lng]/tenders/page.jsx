'use client'
import { useState, useEffect } from 'react'
import Container from '@/app/components/Container'
import Section from '@/app/components/Section'
import Link from 'next/link'
import BreadCrumbs from '@/app/components/BreadCrumbs'
import axios from 'axios'

async function getData() {
	try {
		const response = await axios.get(
			'https://hands-of-friends-backend.onrender.com/api/content_management/tenders/'
		)
		return response.data
	} catch (error) {
		console.log(error)
		return []
	}
}
export default function TendersPage() {
	const [data, setData] = useState([])

	useEffect(() => {
		async function fetchData() {
			const tendersPromise = getData()

			const [tendersData] = await Promise.all([tendersPromise])
			setData(tendersData.results)
		}
		fetchData()
	}, [])

	const [activeTab, setActiveTab] = useState('all')
	const handleTabClick = tab => {
		setActiveTab(tab)
	}
	const filteredTenders = data.filter(item => {
		if (activeTab === 'all') {
			return true
		} else if (activeTab === 'active') {
			return item.is_active
		}
		return false
	})
	console.log('filteredTenders:', filteredTenders)

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
				<Section marginTop='mt-20' marginBottom='mb-[8.25rem]'>
					<ul className='grid lg:grid-cols-3 gap-5 min-w-[360px] not-italic leading-normal'>
						{Array.isArray(filteredTenders)
							? filteredTenders.map(item => (
									<Link key={item.id} href={`/tenders/${item.id}`}>
										<li
											className='flex flex-col flex-wrap p-6 min-w-[22.5rem] min-h-[297px] bg-[#E0F2FE]'
											style={{ cursor: 'pointer' }}
										>
											{activeTab === 'all' ||
											(activeTab === 'active' && item.is_active) ? (
												<>
													<p className='flex justify-between font-body text-lg'>
														<span
															className={`font-bold ${
																item.is_active ? 'text-green' : 'text-lightGray'
															}`}
														>
															{item.is_active ? 'Активний' : 'Архівний'}
														</span>
														<span className='text-black'>{item.date}</span>
													</p>
													<p className='font-sans mt-6 text-left text-2xl text-black font-medium'>
														{item.title
															.split(' ')
															.slice(0, 20)
															.map((word, index) => (
																<span key={index}>{word.trim()} </span>
															))}
														{item.description.split(' ').length > 20 && '...'}{' '}
													</p>
												</>
											) : null}
										</li>
									</Link>
							  ))
							: null}
					</ul>
				</Section>
			</Container>
		</>
	)
}
