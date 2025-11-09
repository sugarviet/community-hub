import { Icon } from "@/components/_share";
import { IconName } from "@/components/_share/Icon/iconsMap";
import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Community />
      <ReadyToJoin />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row background-transparent md:min-h-[80vh] items-center gap-12 px-6">
          <section className="md:flex-1/2 flex flex-col gap-6 justify-center">
            <h1 className="text-6xl font-bold">Where <span className="text-secondary">communities</span> connect</h1>
            <p className="text-xl">Share ideas, discover trends, and engage with communities that matter to you. A modern platform combining the best of social discovery.</p>

            <div className="flex gap-3 item-center">
            <Button variant="secondary" className="cursor-pointer p-6 font-semibold">Enter Community <Icon name="arrowRight"/></Button>
            <Button className="cursor-pointer p-6 font-semibold">Learn More</Button>
            </div>

            <div className="flex gap-2">
              <div className="fit-content p-4 border-r">
                <p className="font-bold">50K+</p>
                <span>Active Members</span>
              </div>
              <div className="fit-content p-4">
                <p className="font-bold">100K+</p>
                <span>Daily Posts</span>
              </div>
            </div>
          </section>
          <section className="flex md:flex-1/2 justify-center">
            <Image alt="collab" src='/images/hero-image.png' width={800} height={350} className="rounded-2xl" priority/>
          </section>
      </section>
  )
}

interface Feature {
  name: IconName;
  title: string;
  description: string;
}

function Features() {
  const data: Feature[] = [
    { name: "messageSquare", title: "Seamless Conversations", description: "Create posts, reply, and discuss topics with real-time interactions and threaded replies."},
    { name: "trendingUp", title: "Trending Discovery", description: "Discover what's trending across communities and stay updated with real-time insights."},
    { name: "zap", title: "Fast & Responsive", description: "Lightning-fast performance with a modern interface that works on any device."},
    { name: "users", title: "Community Driven", description: "Join communities based on your interests and connect with like-minded people."},
    { name: "shield", title: "Safe & Secure", description: "Built with privacy and security at the core, your data is always protected."},
    { name: "arrowRight", title: "Discover More", description: "Explore new perspectives and ideas from communities around the world."},
  ]

  return (
    <section id="features" className="container mx-auto px-6 py-20 flex flex-col justify-between items-center gap-12">
    <div className="flex flex-col gap-6 text-center">
      <h2 className="font-bold text-5xl text-secondary">Powerful Features</h2>
      <p className="font-semibold">Everything you need to engage, discover, and grow your community</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {data.map((feature) => {
        return (
          <div key={feature.name} className="border rounded-2xl py-4 px-6 flex flex-col gap-2 hover:shadow-lg transition-shadow">
            <Icon name={feature.name} />
            <p className="font-semibold">{feature.title}</p>
            <span>{feature.description}</span>
          </div>
        )
      })}
     
    </div>
  </section>
  )
}

function Benefits() {
  const data = [
    {
      number: 1,
      title: "Real-time Engagement",
      description: "Connect instantly with thousands of active members discussing topics you care about"
    },
    {
      number: 2,
      title: "Curated Content",
      description: "See trending topics and personalized recommendations based on your interests"
    },
    {
      number: 3,
      title: "Build Your Network",
      description: "Follow members, save posts, and grow your influence within the community"
    },
    {
      number: 4,
      title: "24/7 Availability",
      description: "Access the platform anytime, anywhere with our responsive design"
    },
  ]
  return (
    <section id="benefits" className="container mt-20 mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
      <div className="flex md:flex-1/2 flex-col gap-6 justify-center">
        <h2 className="text-5xl font-semibold text-secondary">Why Join Community?</h2>

        <ul className="flex flex-col gap-6">
          {data.map((benefit) => (
          <li key={benefit.number}>
            <div className="flex gap-4">
              <div className="h-14 w-14 rounded-sm border bg-secondary/20 text-secondary flex justify-center items-center font-bold">
                {benefit.number}
              </div>

              <div>
                <p className="font-semibold text-secondary text-lg">{benefit.title}</p>
                <span>{benefit.description}</span>
              </div>
            </div>
          </li>
          ))}
        </ul>
      </div>

      <div className="flex md:flex-1/2 justify-center">
            <Image alt="collab" src='/images/hero-image.png' width={800} height={350} className="rounded-2xl"/>
        </div>
    </section>
  )
}

function Community(){
  const data = [
    {
      title: "Active Members",
      value: "50K+"
    },
    {
      title: "Daily Posts",
      value: "100K+"
    },
    {
      title: "Communities",
      value: "1.2K+"
    },
    {
      title: "Interactions",
      value: "1M+"
    },
  ]
  return (
    <section id="community" className="container mx-auto flex justify-center items-center flex-col gap-12 px-6 py-20 mt-20">
      <div className="flex flex-col gap-6 justify-center text-center">
        <h2 className="text-5xl text-secondary font-semibold">Our Growing Community</h2>
        <p className="text-lg">Join thousands of members actively sharing and discovering</p>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 w-full">
        {data.map((item) => (
          <div key={item.title} className="flex flex-col justify-center items-center px-8 py-4 border rounded-2xl m-2 h-40">
            <p className="font-bold text-3xl text-secondary">{item.value}</p>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function ReadyToJoin() {
  return (
    <section className="w-180 mx-auto flex flex-col md:flex-row justify-center items-center gap-12 px-6 py-20 bg-secondary/10 rounded-2xl mb-20">
      <div className="flex flex-col gap-6 justify-center">
        <h2 className="text-5xl font-semibold text-secondary text-center">Ready to Join?</h2>
        <p className="text-lg text-center">Become part of a vibrant community where your voice matters. Sign up today and start connecting!</p>
        <Button variant="secondary" className="cursor-pointer p-6 font-semibold w-fit mx-auto">Get Started</Button>
      </div>
    </section>
  )
}