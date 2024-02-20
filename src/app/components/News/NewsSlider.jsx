'use client'

import React from 'react'
import UniversalSlider from '../ UniversalSlider'
import NewsItem from './NewsItem'

export default function NewsSlider() {
	return (
		<div className='newsSlider'>
			<UniversalSlider
				endpoint='news/'
				ItemComponent={NewsItem}
				swiperSettings={{
					breakpoints: {
						320: { slidesPerView: 1, spaceBetween: 16 },
						420: { slidesPerView: 1, spaceBetween: 16 },
						768: { slidesPerView: 2, spaceBetween: 20 },

						1280: { slidesPerView: 3, spaceBetween: 20 },
						1420: { slidesPerView: 3, spaceBetween: 24 },
					},
				}}
			/>
		</div>
	)
}
