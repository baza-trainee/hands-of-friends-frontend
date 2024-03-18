'use client';

import React from 'react';

import NewsItem from './NewsItem';
import UniversalSlider from '../UniversalSlider';

export default function NewsSlider() {
	return (
		<div className='newsSlider'>
			<UniversalSlider
				endpoint='news/'
				ItemComponent={NewsItem}
				loaderType="news"
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
	);
}
