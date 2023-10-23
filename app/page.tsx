import { getHero } from "@/sanity/sanity.query";
import type { HeroType } from "@/types";

import Header from "@/components/Header";
export default async function Home() {
  const hero: HeroType[] = await getHero();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <Header/>
      
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {hero.map((data) => (
          <div key={data._id} className="lg:max-w-2xl max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              {data.profileImage.alt}
            </h1>
            <p>{data.welcomeMessage}</p>
            <img src={data.profileImage.image} alt={data.profileImage.alt} />
          </div>
        ))}
      </section>
    </main>
  );
}

