// app/page.tsx

import { getHero } from "@/sanity/sanity.query";
import type { HeroType } from "@/types";


export default async function Home() {
  const profile: HeroType[] = await getHero();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <p className=" text-red-900">
                {data.welcomeMessage}
              </p>
              
             <img  src={data.profileImage.image} alt={data.profileImage.alt}/>
            </div>
          ))}
     
      </section>
    </main>
  );
}