'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const danceSchoolTestimonials = [
    {
      quote:
        'Joining the dance school transformed my understanding of dance and helped me to truly discover my own style. The instructors are world-class!',
      name: 'Alex Johnson',
      title: 'Ballet Student',
    },
    {
      quote:
        "The community and support at this school are unmatched. I've grown not just as a hip-hop dancer, but also as a performer, thanks to their comprehensive approach.",
      name: 'Samantha Lee',
      title: 'Hip-Hop Student',
    },
    {
      quote:
        "This school offered me the tools and confidence to take my contemporary dance to the next level. I'm endlessly grateful for the personalized coaching.",
      name: 'Michael Chen',
      title: 'Contemporary Dance Student',
    },
    {
      quote:
        'As a salsa dancer, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
      name: 'Emily Taylor',
      title: 'Salsa Student',
    },
    {
      quote:
        'The tap dance courses here opened my eyes to the intricacies of rhythm and technique. Highly recommend for any aspiring tap dancers!',
      name: 'Chris Morales',
      title: 'Tap Dance Student',
    },
  ];
  

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">United by Achievement: Hear the collective voices</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={danceSchoolTestimonials}
                direction="left"
                speed="slow"
                pauseOnHover={true}
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials