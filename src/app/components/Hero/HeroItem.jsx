import React from 'react'
import Image from 'next/image'

export default function HeroItem({ data }) {
	return (
		<li className='bg-[#E0F2FE]'>
			<Image
				src={data.image}
				alt={`${data.image}`}
				width={1440}
				height={869}
				className='w-auto h-[1024px] md:h-[1024px] xl:h-[832px] 2xl:h-[976px] '
			/>

			<p className='absolute left-1/2 transform -translate-x-1/2 bottom-20 mx-0 text-white text-[20px] lg:w-[881px] lg:text-[40px] xl:w-[1175px] '>
				{data.title}
			</p>
		</li>
	)
}
