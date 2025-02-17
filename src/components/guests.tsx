import React from "react";
import "./guestlist.css"; // Import the CSS file

// Interface to represent a team member's data
interface Guest {
  id: string;
  name: string;
  role: string;
  description: string;
  image: {
    src: string;
    alt: string;
    srcSet: string;
    sizes: string;
  };
}

// Data for team members based on the provided HTML content
const guests: Guest[] = [
  {
    id: "f8ebc998-2ebd-bf05-a881-4ee8637bfe75",
    name: "Jane",
    role: "Founder & Creative Director",
    description:
      "A purveyor of quality, Jane manages every branding project down to the details.",
    image: {
      src: "https://cdn.prod.website-files.com/63bd78f5e994911214b69c64/63bea40aee57324d1ee561cf_unsplash_HD8KlyWRYYM.jpg",
      alt: "Team member",
      srcSet:
        "https://assets-global.website-files.com/63bd78f5e994911214b69c64/63bea40aee57324d1ee561cf_unsplash_HD8KlyWRYYM-p-500.jpg 500w, https://assets-global.website-files.com/63bd78f5e994911214b69c64/63bea40aee57324d1ee561cf_unsplash_HD8KlyWRYYM.jpg 534w",
      sizes: "(max-width: 1439px) 262px, 320px",
    },
  },
  {
    id: "8801eb76-448b-a63c-2cfe-13cda917502c",
    name: "Matteo",
    role: "Copywriter & Strategist",
    description:
      "A creative and analytical thinker, Matteo crafts concepts, branding and communication strategies.",
    image: {
      src: "https://cdn.prod.website-files.com/63bd78f5e994911214b69c64/63bea5720c562929d4f741f1_unsplash_sjLG3DBOJSI%20(2).jpg",
      alt: "Team member",
      srcSet:
        "https://assets-global.website-files.com/63bd78f5e994911214b69c64/63bea5720c562929d4f741f1_unsplash_sjLG3DBOJSI%20(2)-p-500.jpg 500w, https://assets-global.website-files.com/63bd78f5e994911214b69c64/63bea5720c562929d4f741f1_unsplash_sjLG3DBOJSI%20(2).jpg 528w",
      sizes: "(max-width: 1439px) 262px, 320px",
    },
  },
  {
    id: "5def087e-90be-c3eb-087c-964a57bbed75",
    name: "Anna",
    role: "Producer & Set Designer",
    description:
      "An expert in designing props and sets at every degree of complexity, Anna gives ideas a shape & volume.",
    image: {
      src: "https://cdn.prod.website-files.com/63bd78f5e994911214b69c64/63bea40a17f71c22653bdfd1_unsplash_3TLl_97HNJo.jpg",
      alt: "Team member",
      srcSet:
        "https://assets-global.website-files.com/63bd78f5e994911214b69c64/63bea40a17f71c22653bdfd1_unsplash_3TLl_97HNJo-p-500.jpg 500w, https://assets-global.website-files.com/63bd78f5e994911214b69c64/63bea40a17f71c22653bdfd1_unsplash_3TLl_97HNJo.jpg 640w",
      sizes: "(max-width: 1439px) 262px, 320px",
    },
  },
  {
    id: "5def087e-90be-c3eb-087c-964a57bbed75",
    name: "Anna",
    role: "Producer & Set Designer",
    description:
      "An expert in designing props and sets at every degree of complexity, Anna gives ideas a shape & volume.",
    image: {
      src: "https://cdn.prod.website-files.com/63bd78f5e994911214b69c64/63bea40a17f71c22653bdfd1_unsplash_3TLl_97HNJo.jpg",
      alt: "Team member",
      srcSet:
        "https://assets-global.website-files.com/63bd78f5e994911214b69c64/63bea40a17f71c22653bdfd1_unsplash_3TLl_97HNJo-p-500.jpg 500w, https://assets-global.website-files.com/63bd78f5e994911214b69c64/63bea40a17f71c22653bdfd1_unsplash_3TLl_97HNJo.jpg 640w",
      sizes: "(max-width: 1439px) 262px, 320px",
    },
  },
];

// A React component that renders the team members' information
const guestsList: React.FC = () => {
  return (
    <div className="wrapper">
      <h1 className="heading-h1">
        <b>Chief Guests</b>
      </h1>

      {/* Add the welcoming paragraph here */}
      <p className="chief-guest-paragraph">
        We are deeply honored to feature our distinguished Chief Guests. Their
        esteemed presence and unwavering support are instrumental in ensuring
        the success and lasting prestige of this hackathon.
      </p>

      <div className="team-wrap ">
        {guests.map((member) => (
          <div key={member.id} className="team_member-wrap">
            <div className="team_memeber-image">
              <img
                src={member.image.src}
                alt={member.image.alt}
                srcSet={member.image.srcSet}
                sizes={member.image.sizes}
                loading="lazy"
                className="image"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="team_member-info">
              <h2 className="heading-h2">{member.name}</h2>
              <p className="paragraph-opacity">{member.role}</p>
              <p className="paragraph">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default guestsList;
