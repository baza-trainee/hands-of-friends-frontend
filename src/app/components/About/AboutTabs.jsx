import { useTranslation } from '@/app/i18n/client'
import Tab from '../../components/About/Tab'

function AboutTabs({ activeTab, setActiveTab, lng, className }) {
	const { t } = useTranslation(lng, 'about-page');
	const handleTabChange = tab => {
		setActiveTab(tab)
	};

	return (
		<div className={`flex space-x-4 gap-6 md:gap-8 mt-[40px] md:mt-0 ${className}`}>
			<Tab
				label={t('tab1')}
				isActive={activeTab === 'mission'}
				onClick={() => handleTabChange('mission')}
			/>
			<Tab
				label={t('tab2')}
				isActive={activeTab === 'principles'}
				onClick={() => handleTabChange('principles')}
			/>
			<Tab
				label={t('tab3')}
				isActive={activeTab === 'values'}
				onClick={() => handleTabChange('values')}
			/>
		</div>
	)
}

export default AboutTabs