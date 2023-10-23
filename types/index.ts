import { PortableTextBlock } from "sanity";

export type HeroType = {
  _id: string,
  welcomeMessage:string,
  profileImage : {
    alt: string,
    image: string
  },
  
};