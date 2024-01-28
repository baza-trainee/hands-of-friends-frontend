'use client'
import { useState, useRef } from 'react'

import Image from 'next/image'

import Section from './Section'
import Img from '../../../public/img/play-icon.svg'

export default function Hero() {
	const [isVideoPlaying, setVideoPlaying] = useState(false)
	const [isVideoPaused, setVideoPaused] = useState(false)
	const [isSeeking, setSeeking] = useState(false) 
	const videoRef = useRef(null)

	const handleVideoPlay = () => {
		setVideoPlaying(true)
		setVideoPaused(false)
	}

	const handleVideoPause = () => {
		setVideoPlaying(false)
		setVideoPaused(true)
	}

	const handlePlayClick = () => {
		if (videoRef.current) {
			setVideoPlaying(true)
			videoRef.current.play()
		}
	}

	const handleVideoSeeked = () => {
		if (isSeeking && isVideoPaused) {
			setVideoPlaying(true)
			setSeeking(false) 
			videoRef.current.play()
		}
	}

	const handleVideoSeeking = () => {
		setSeeking(true) 
	}

	return (
		<>
			<Section className='mt-0 max-w-[1440px] mx-auto'>
				<div className='relative mb-20'>
					<div className='video-container relative'>
						<div className='video-container relative mt-0 max-w-[1440px] mx-auto'>
							<video
								ref={videoRef}
								width='100%'
								height='100%'
								src='https://res.cloudinary.com/dgkkn62i5/video/upload/v1706166292/test_video.mp4'
								poster='https://res.cloudinary.com/dgkkn62i5/image/upload/v1706174676/111_wlvg1h.png'
								preload='auto'
								onPlay={handleVideoPlay}
								onPause={handleVideoPause}
								onSeeked={handleVideoSeeked}
								onSeeking={handleVideoSeeking}
								autoPlay={isVideoPlaying}
								muted={isVideoPlaying}
								controls={isVideoPlaying}
							></video>
						</div>
						{(isVideoPaused || !isVideoPlaying) && !isSeeking && (
							<div
								className='play-icon absolute inset-0 flex items-center justify-center'
								onClick={handlePlayClick}
							>
								<Image src={Img} width={128} height={171} alt='Play' />
							</div>
						)}
					</div>
				</div>
			</Section>
		</>
	)
}
