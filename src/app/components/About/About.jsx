"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, A11y, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRouter } from "next/navigation";

import Team from "../../../../public/img/about-us1.png";

import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import Action from "../Action";
import { useTranslation } from "@/app/i18n/client";


export default function About({lng}) {
   const { t } = useTranslation(lng, 'about-section')

  const router = useRouter();
  return (
		<Section>
			<Container>
				<blockquote>
					<p className='max-w-[288px] xs:max-w-[328px] md:max-w-[618px] text-xs italic mb-8 font-bold sm:text-sm md:text-2xl lg:text-left xl:text-left'>
						{t('blockquote')}
					</p>
				</blockquote>

				<div className='md:hidden'>
					<Swiper
						pagination={{
							clickable: true,
							type: 'progressbar',
						}}
						modules={[Keyboard, Pagination, A11y, Mousewheel]}
						className='swiper about '
						breakpoints={{
							320: {
								slidesPerView: 1,
							},
						}}
					>
						<SwiperSlide>
							<div className=''>
								<Image
									src={Team}
									width={388}
									height={254}
									alt='Picture of the our team'
									className='object-cover'
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<Image
									src={Team}
									width={388}
									height={254}
									alt='Picture of the our team'
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className='hidden md:flex flex-col	gap-5 mb-10 xl:flex-row	'>
					<Image
						src={Team}
						width='auto'
						height={398}
						alt='Picture of the our team'
						className='md:h-[386px] w-[688px] lg:mx-0 xl:w-[550px] 2xl:w-[588px]'
					/>
					<Image
						src={Team}
						width='auto'
						height={398}
						alt='Picture of the our team'
						className='md:h-[386px] w-[688px] lg:mx-0 xl:w-[550px] 2xl:w-[588px]'
					/>
				</div>

				<Title className='mb-15' titleName={t('title')} />
				<h2 className='text-xl mb-8 md:text-2xl'>{t('subtitle')}</h2>
				<div className='text-base max-w-[740px] md:text-lg '>
					<p className='mb-4'>{t('p1')}</p>
					<p className='mb-4'>{t('p2')}</p>
					<p className='mb-8'>{t('p3')}</p>
				</div>
				<Action
					onClick={() => router.push('/aboutUs')}
					type='button'
					className='mx-auto px-0 min-w-[12.38rem] font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue'
				>
					{t('btn')}
				</Action>
			</Container>
		</Section>
	)
}
