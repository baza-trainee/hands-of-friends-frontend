import Link from 'next/link'
import Arrow from '@/assets/Frame.png'

export default function BreadCrumbs({ href, text, className }) {
	return (
		<Link href={href}>
			<div className={`flex gap-2 block ${className}`}>
				<img src={Arrow.src} alt='arrow' />
				<p className='text-xl text-deepBlue'>{text}</p>
			</div>
		</Link>
	)
}
