import { useEffect } from 'react'
import Modal from 'react-modal'
import Close from '../../../../public/img/close.svg'
import Image from 'next/image'

const NewsModal = ({ isOpen, onClose, data, formattedDescription }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	return (
		<Modal
			isOpen={isOpen}
			className='news-modal w-[344px] md:w-[792px] md:h-[867px] xl:h-[819px] 2xl:h-[835px] flex flex-col custom-scrollbar [&::-webkit-scrollbar]:[width:10px]'
			overlayClassName='news-overlay'
			onRequestClose={onClose}
			contentLabel='Детальна інформація про новину'
		>
			<button className='mb-4 self-end justify-end' onClick={onClose}>
				<Close />
			</button>
			<Image
				src={data.image}
				alt='Photo of the news'
				width={696}
				height={315}
				className='mx-auto mb-6 w-[230px] xs:h-[170px] xs:w-[288px] md:w-[506px] md:h-[299px] xl:w-[660px] 2xl:w-[696px] 2xl:h-[315px] object-cover '
			/>
			<span className='text-xl lg:text-lg mb-4'>{data.date}</span>
			<h2 className='text-xl font-bold mb-3 md:max-w-[506px]'>{data.title}</h2>

			<p
				className='lg:max-w-[660px] md:max-w-[506px]'
				dangerouslySetInnerHTML={{ __html: data.description }}
			></p>
		</Modal>
	)
}

export default NewsModal