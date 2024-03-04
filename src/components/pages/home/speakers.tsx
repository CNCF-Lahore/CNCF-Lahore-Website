import { SpeakerCard } from '@/components/cards/speaker'

export const HomeSpeakers = () => {
	return (
		<div className="container md:px-0">
			<h1 className="text-4xl mb-4">Speakers</h1>
			<p className="md:w-1/2 w-ful text-gray-600 font-semibold mb-20">
				Meet the Visionaries Behind the Cloud Revolution! Our Distinguished Speakers Bring Expertise and Innovation to
				the Stage. Get Inspired by the Faces Shaping the Future of Cloud Technology.
			</p>
			<div className="grid grid-cols-4 gap-10 mb-20">
				<SpeakerCard
					name="Annie Talvasto"
					role="VSHN_ch"
					img="/images/speakers/annie.png"
					socials={{ linkedin: 'https://www.linkedin.com/in/talvasto/' }}
				/>
				<SpeakerCard
					name="Annie Talvasto"
					role="VSHN_ch"
					img="/images/speakers/annie.png"
					socials={{ linkedin: 'https://www.linkedin.com/in/talvasto/' }}
				/>
				<SpeakerCard
					name="Annie Talvasto"
					role="VSHN_ch"
					img="/images/speakers/annie.png"
					socials={{ linkedin: 'https://www.linkedin.com/in/talvasto/' }}
				/>
				<SpeakerCard
					name="Annie Talvasto"
					role="VSHN_ch"
					img="/images/speakers/annie.png"
					socials={{ linkedin: 'https://www.linkedin.com/in/talvasto/' }}
				/>
			</div>
		</div>
	)
}
