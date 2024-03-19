import Link from "next/link";

import { useTranslation } from "@/app/i18n/client";
import { useCurrentLang } from "@/app/hooks/useCurrentLang";

export default function TenderItem({ data, lng }) {
	const { t } = useTranslation(lng, "tenders");
	const lang = useCurrentLang() === 'uk' ? 'ua' : 'en';
	
	return (
		<Link href={`/${lang}/tenders/${data.id}`}>
			<li
				className='flex flex-col flex-wrap min-w-[288px] min-h-[304px] p-4 bg-[#E0F2FE]
				border border-transparent border-gray-300 hover:border-blue-500 transition duration-400 hover:shadow-md
				sm:p-6 sm:min-w-[388px] sm:min-h-[326px]
				md:min-w-[334px] md:min-h-[288px]
				xl:min-w-[330px] xl:min-h-[279px] 
				2xl:p-8 2xl:min-w-[352px] 2xl:min-h-[307px]'
				style={{ cursor: 'pointer' }}
			>
				<p
					className='flex justify-between font-body text-base
					md:text-lg
					xl:text-base'
				>
					<span
						className={`font-bold ${data.is_active || !data.end_date ? 'text-green' : 'text-lightGray'}`}
					>
						{data.is_active || !data.end_date ? t('status1') : t('status2')}
					</span>
					<span className='text-black text-base'>
						{data.start_date} - {data.end_date ? data.end_date : 'Активний'}
					</span>
				</p>
				<p
					className="font-['Open_Sans'] mt-6 text-left text-lg text-black font-semibold
					md:mt-4 
					2xl:mt-6"
				>
					{data.title
						.split(' ')
						.slice(0, 200)
						.map((word, index) => (
							<span key={index}>{word.trim()} </span>
						))
					}
				</p>
			</li>
		</Link>
	)
}