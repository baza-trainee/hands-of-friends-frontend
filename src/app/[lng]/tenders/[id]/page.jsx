'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Container from '@/app/components/Container';
import BreadCrumbs from '@/app/components/BreadCrumbs';

import { OLCLASS, ULCLASS } from '@/app/helpers/consts';
import { useTranslation } from '@/app/i18n/client';
import { useHttp } from '@/app/hooks/useHttp';

import Loader from '../../../../../public/img/loader.svg';

export default function Page({ params, lng }) {
	const { t } = useTranslation(lng, 'tenders-page');
	const router = useRouter();

	const { id } = params;
	const [dataByID, , isLoading] = useHttp(`tenders/${id}`);
	const [formattedDescription, setFormattedDescription] = useState();

	useEffect(() => {
		if (!isLoading && dataByID) {
			if (!dataByID.is_shown) {
				router.replace('/404')
				return
			}

			const desc = dataByID.description
				.replace(/<ul/g, `<ul class="${ULCLASS}"`)
				.replace(/<ol/g, `<ol class="${OLCLASS}"`)
				.replace(/<a /g, `<a style="color: blue;" target="_blank" `);

			setFormattedDescription(desc);
		}
	}, [isLoading, dataByID])

	useEffect(() => {
		const formattedLinksContainer = document.querySelector(
			'.formatted-links-container'
		)

		if (formattedLinksContainer) {
			formattedLinksContainer.style.maxWidth = '100%';
			formattedLinksContainer.style.wordWrap = 'break-word';
		}
	}, [formattedDescription])

	return (
		<>
			<Container>
				<BreadCrumbs
					className='my-12'
					href='/tenders'
					text={t('breadcrumbs')}
					textColor='blue'
				/>
				{!isLoading
					? <div className='max-w-[835px] text-lg mb-40'>
						<p className='mb-6'>{dataByID.date}</p>
						<h2 className='text-3xl font-bold mb-10'>{dataByID.title}</h2>
						<div
							className='text-lg formatted-links-container'
							dangerouslySetInnerHTML={{
								__html: formattedDescription,
							}}
						/>
					</div>
					: <div className='flex items-center justify-center pb-14'>
						<Loader className='animate-spin' />
					</div>
				}
			</Container>
		</>
	)
}
