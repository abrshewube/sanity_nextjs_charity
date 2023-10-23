// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getHero() {
  return client.fetch(
    groq`*[_type == "hero"]{
      _id,
      profileImage {
        alt, "image": asset->url
      },
      welcomeMessage
      }`
      
  );
}
