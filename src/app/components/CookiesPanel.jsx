'use client'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Action from './Action'
import Link from 'next/link'
import Container from './Container'

const CookiesPanel = () => {
	const [showPanel, setShowPanel] = useState(false)

	useEffect(() => {
		if (!Cookies.get('cookiesAccepted')) {
			setShowPanel(true)
		}
	}, [])

	const acceptCookies = () => {
		setShowPanel(false)
		Cookies.set('cookiesAccepted', 'true', { expires: 365 })
	}

	return (
		showPanel && (
			<div className='fixed bottom-0 left-0 right-0 bg-[#F8FAFC] z-[1000]  '>
				<Container>
					<div className='flex justify-between py-8 items-center'>
						<div className='text-lg w-[644px]'>
							Цей сайт використовує файли cookie для зручнішої роботи
							користувача. Продовжуючи перегляд сторінок сайту, ви погоджуєтесь{' '}
							<Link className='font-bold	' href={'/privacy-policy'}>
								з використанням файлів cookie.
							</Link>
						</div>

						<div className='flex justify-between gap-4 max-h-[61px]'>
							<Action
								type='button'
								onClick={acceptCookies}
								className='min-w-[208px] mx-auto bg-deepBlue border hover:text-deepBlue hover:border hover:border-deepBlue'
							>
								Прийняти всі
							</Action>
							<Action
								type='button'
								onClick={acceptCookies}
								className='text-[black] min-w-[208px] mx-auto bg-white border-deepBlue hover:underline decoration-solid'
							>
								Прийняти обов’язкові
							</Action>
						</div>
					</div>
				</Container>
			</div>
		)
	)
}

export default CookiesPanel
