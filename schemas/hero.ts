import { defineField } from "sanity";


const hero = {
  name: "hero",
  title: "hero",
  type: "document",
  
  fields: [
    {
        name: "profileImage",
        title: "Profile Image",
        type: "image",
        description: "Upload a profile picture",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      
    },
    {
      name: 'welcomeMessage',
      title: 'Welcome Message',
      type: 'text',
    },
  ],
};

export default hero;