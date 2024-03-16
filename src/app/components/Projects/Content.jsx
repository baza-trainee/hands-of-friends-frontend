import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { OLCLASS, ULCLASS } from '@/app/helpers/consts'
import { useHttp } from '@/app/hooks/useHttp'

export default function ContentItem({ item }) {
	const [formattedDescription, setFormattedDescription] = useState()

	const [projectData] = useHttp('projects/')
	useEffect(() => {
		if (projectData) {
			const foundItem = projectData.find(project => project.id === item.id)
			if (foundItem) {
				const formatted = foundItem.content[0]?.text.replace(
					/<ul/g,
					`<ul class="${ULCLASS}"`
				)
				setFormattedDescription(formatted)
			}
		}
	}, [projectData, item.id])

	return (
		<li key={item.id}>
			<p
				className='mb-6'
				dangerouslySetInnerHTML={{ __html: formattedDescription }}
			/>
			{item.image ? 111 : ' '}
		</li>
	)
}