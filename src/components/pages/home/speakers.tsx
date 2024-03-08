import { SpeakerCard } from '@/components/cards/speaker'

export const HomeSpeakers = () => {
	return (
		<div className="container px-5">
			<h1 className="text-4xl mb-4">Team</h1>
			<p className="md:w-1/2 w-ful text-gray-600 font-semibold mb-20">
				Meet the Visionaries Behind the Cloud Revolution! Our Distinguished Team Bring Expertise and Innovation to
				the Stage. Get Inspired by the Faces Shaping the Future of Cloud Technology.
			</p>
			<div className="grid md:grid-cols-4 grid-cols-1 gap-10 mb-20">
				<SpeakerCard
					name="Syed Asad Raza"
					role="Head Organizer | CNCF Ambassador"
					img="/images/speakers/syed-asad-raza.png"
					socials={{ linkedin: 'https://www.linkedin.com/in/syedasadrazadevops/' }}
				/>
				<SpeakerCard
					name="Adil Shahzad"
					role="Head Organizer | Senior DevOps Lead"
					img="/images/speakers/adil-shahzad.png"
					socials={{ linkedin: 'https://www.linkedin.com/in/adilshehzad7//' }}
				/>
				<SpeakerCard
					name="Moez Mustafa"
					role="Head Organizer | AR Expert"
					img="/images/speakers/moez-mustafa.png"
					socials={{ linkedin: 'https://www.linkedin.com/in/moeezmustafa/' }}
				/>
				<SpeakerCard
					name="Zaid Bari"
					role="Organizer | Development Lead, Turkey"
					img="/images/speakers/zaid-bari.jpeg"
					socials={{ linkedin: 'https://www.linkedin.com/in/itszbari/' }}
				/>
				<SpeakerCard
					name="Daanyal (Rahila) Memon"
					role="Organizer | Web Development Lead"
					img="/images/speakers/daanyal-rahila-memon.png"
					socials={{ linkedin: 'https://www.linkedin.com/in/daanyal-rahila-memon/' }}
				/>
				<SpeakerCard
					name="Afnan Tasawar"
					role="Content Writer | Canada Ontario"
					img="/images/speakers/afnan-sheikh.jpeg"
					socials={{ linkedin: 'https://www.linkedin.com/in/afnan-sheikh-34611a19a/' }}
				/>
				<SpeakerCard
					name="Muhammad Bilal"
					role="Web Development Co-Lead"
					img="/images/speakers/bilal.png"
					socials={{ linkedin: 'https://www.linkedin.com/in/mbilal56/' }}
				/>
				<SpeakerCard
					name="Waleed"
					role="Development Team Member"
					img=""
					socials={{ linkedin: 'https://www.linkedin.com/in/waleedzafar68/' }}
				/>
				<SpeakerCard
					name="Haris"
					role="Email Marketing Team Member"
					img=""
					socials={{ linkedin: 'https://www.linkedin.com/in/talvasto/' }}
				/>
			</div>
		</div>
	)
}
