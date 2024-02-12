import React from 'react'
import Image from 'next/image'

export default function HeroItem({ data }) {
	return (
		<li className='max-h-[685px] bg-[#E0F2FE]'>
			<Image
				src={data.image}
				alt={`${data.image}`}
				width={1280}
				height={685}
				className='h-200px'
			/>
			<p className='absolute bottom-40 left-1/2 text-white text-[60px] bg-black bg-opacity-50 p-2'>
				{data.title}
			</p>
		</li>
	)
}
