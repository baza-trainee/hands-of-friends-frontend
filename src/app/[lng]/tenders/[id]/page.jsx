import BreadCrumbs from '@/app/components/BreadCrumbs'
import Container from '@/app/components/Container'


const getData = async id => {
	const res = await fetch(
		`https://hands-of-friends-backend.onrender.com/api/content_management/tenders/${id}`
	)

	if (!res.ok) {
		throw new Error('Something went wrong')
	}

	return res.json()
}
export default async function Page({ params }) {
	const { id } = params
	const data = await getData(id)

	return (
		<>
			<Container>
				<BreadCrumbs href='/tenders' className='my-12 ' text='Тендери' />

				<div className='max-w-[835px] text-lg mb-40'>
					<p className='mb-6'>{data.date}</p>
					<h2 className='text-3xl	font-bold	mb-10'>{data.title}</h2>
					<div>{data.description}</div>
				</div>
			</Container>
		</>
	)
}
