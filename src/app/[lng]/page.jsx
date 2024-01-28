'use client';

import About from '../components/About';
import CooperationSection from '../components/Cooperation/CooperationSection';
import FeedbackFormSection from '../components/FeedbackForm/FeedbackFormSection';
import Hero from '../components/Hero';
import News from '../components/News';
import ProjectSection from '../components/Projects/ProjectSection';
import TeamSection from '../components/Team/TeamSection';
import TendersSection from '../components/Tenders/TendersSection';

export default async function Page() {
	console.log(1)

	return (
		<>
			<Hero />
			<About />
			<ProjectSection />
			<TendersSection />
			<TeamSection />
			<CooperationSection />
			<News />
			<FeedbackFormSection />
		</>
	);
}
