import React, { useState, useEffect } from "react";
import lakshan from "../images/lakshan.jpeg";
import arun from "../images/arun.jpeg";
import aasil from "../images/aasil.jpeg";
import ansar from "../images/ansar.jpeg";
import praveen from "../images/praveen.jpeg";
import irfan from "../images/irfan.jpeg";
import mohan from "../images/mohan.jpeg";
import pareekshith from "../images/pareekshith.jpeg";
import pozhilan from "../images/pozhilan.jpeg";
import naseem from "../images/naseem.jpeg";
import mayur from "../images/mayur.jpeg";
import nashva from "../images/nashva.jpeg";
import varsha from "../images/varsha.jpeg";
import safna from "../images/safna.jpeg";
import vasnika from "../images/Vasnika.jpeg";
import mani from "../images/mani.jpeg";
import rithish from "../images/rithesh.jpeg";
import joshwa from "../images/joshva.png";
import { Helmet } from "react-helmet-async";

type Organizer = {
  name: string;
  title: string;
  photo: string;
  socialLinks: {
    twitter: string;
    instagram: string;
    linkedin: string;
  };
};

const organizers: Organizer[] = [
  {
    name: "Lakshan G",
    title: "HBL | Lead Organizer | Head of TechHub",
    photo: lakshan,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Arun Kumar K",
    title: "HBL | Event Manager | TechHub Event Organizer ",
    photo: arun,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Aasil Ahammed S",
    title: "HBL | Event Coordinator| TechHub Event Coordinator ",
    photo: aasil,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Ansar Hussain",
    title: "HBL | Management Lead | Head Of TechHub",
    photo: ansar,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Praveen R",
    title: "HBL | Management Control | TechHub Event management",
    photo: praveen,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mohammed Irfan",
    title: "HBL | Management Control | TechHub Event Management",
    photo: irfan,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mohanraj R",
    title: "HBL | Management Control | TechHub Event Associate",
    photo: mohan,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Pareekshith P",
    title: "HBL | Technical Lead | TechHub Technical Lead",
    photo: pareekshith,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Pozhilan A",
    title: "HBL | Technical Director | TechHub Technical Assistant",
    photo: pozhilan,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mohammed Nazeem M",
    title: "HBL | Technical Director | TechHub Technical Organizer",
    photo: naseem,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mayur Karthik",
    title: "HBL | Technical Director | TechHub Technical Organizer",
    photo: mayur,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Nashva A",
    title: "HBL | Support Team Lead | TechHub media Lead",
    photo: nashva,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Varsha K",
    title: "HBL | Support Team | TechHub Media Manager",
    photo: varsha,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Safna M",
    title: "HBL| Support Team | TechHub Media Manager",
    photo: safna,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Vasnika S",
    title: "HBL| Support Team | TechHub Media Manager",
    photo: vasnika,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "ManiPrashath K S",
    title: "HBL| Support Team | TechHub Media Manager",
    photo: mani,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Rithish B",
    title: "HBL | Design Director | TechHub Visual Designer",
    photo: rithish,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Joshwa Sanjay",
    title: "HBL | Event Designer | Techhub Visual Designer",
    photo: joshwa,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  // Add all other organizers similarly
];

const OrganizerPage: React.FC = () => {
  const [hoveredOrganizer, setHoveredOrganizer] = useState<Organizer | null>(
    null
  );
  const [clickedOrganizer, setClickedOrganizer] = useState<Organizer | null>(
    null
  );
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle window resizing to check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOrganizerClick = (organizer: Organizer) => {
    if (clickedOrganizer?.name === organizer.name) {
      setClickedOrganizer(null);
    } else {
      setClickedOrganizer(organizer);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".organizer-card")) {
      setClickedOrganizer(null); // Close image if clicked outside
    }
  };

  useEffect(() => {
    // Add event listener to close image if clicked outside
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: organizers.map((organizer, index) => ({
      "@type": "Person",
      name: organizer.name,
      jobTitle: organizer.title,
      image: organizer.photo,
      sameAs: [
        organizer.socialLinks.twitter,
        organizer.socialLinks.instagram,
        organizer.socialLinks.linkedin,
      ],
      position: index + 1,
    })),
  };

  return (
    <div style={styles.background}>
      <Helmet>
        <title>HACKBEYONDLIMIT$</title>
        <meta
          name="description"
          content="Meet the hardworking organizers behind the HBL TechHub event."
        />
        <meta property="og:title" content="Meet the Organizers - HBL TechHub" />
        <meta
          property="og:description"
          content="Meet the hardworking organizers behind the HBL TechHub event."
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div style={styles.container}>
        <h1 style={styles.heading}>Our Powerhouse Team</h1>

        <p style={styles.motivationalParagraph}>
          Meet the event organizers who are the backbone of this hackathon,
          tirelessly working behind the scenes to create a platform that fosters
          innovation, collaboration, and growth. Their commitment and hard work
          make this event possible.
        </p>

        <div
          style={{
            ...styles.gridWrapper,
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          <div style={styles.gridColumn}>
            {organizers
              .slice(0, Math.ceil(organizers.length / 2))
              .map((organizer, index) => (
                <div
                  className="organizer-card"
                  style={{
                    ...styles.card,
                    opacity:
                      hoveredOrganizer &&
                      hoveredOrganizer.name !== organizer.name
                        ? 0.3
                        : 1,
                  }}
                  key={index}
                  onMouseEnter={() =>
                    !isSmallScreen && setHoveredOrganizer(organizer)
                  }
                  onMouseLeave={() => setHoveredOrganizer(null)}
                  onClick={() =>
                    isSmallScreen && handleOrganizerClick(organizer)
                  }
                >
                  <h2 style={styles.name}>{organizer.name}</h2>
                  <p style={styles.title}>{organizer.title}</p>
                  {!isSmallScreen &&
                    hoveredOrganizer?.name === organizer.name && (
                      <img
                        src={hoveredOrganizer.photo}
                        alt={`${organizer.name} - Organizer`}
                        style={styles.hoverImageLeft}
                      />
                    )}
                  {isSmallScreen &&
                    clickedOrganizer?.name === organizer.name && (
                      <img
                        src={clickedOrganizer.photo}
                        alt={`${clickedOrganizer.name} - Organizer`}
                        style={styles.clickedImage}
                      />
                    )}
                </div>
              ))}
          </div>
          {!isSmallScreen && <div style={styles.divider}></div>}
          <div style={styles.gridColumn}>
            {organizers
              .slice(Math.ceil(organizers.length / 2))
              .map((organizer, index) => (
                <div
                  className="organizer-card"
                  style={{
                    ...styles.card,
                    opacity:
                      hoveredOrganizer &&
                      hoveredOrganizer.name !== organizer.name
                        ? 0.3
                        : 1,
                  }}
                  key={index}
                  onMouseEnter={() =>
                    !isSmallScreen && setHoveredOrganizer(organizer)
                  }
                  onMouseLeave={() => setHoveredOrganizer(null)}
                  onClick={() =>
                    isSmallScreen && handleOrganizerClick(organizer)
                  }
                >
                  <h2 style={styles.name}>{organizer.name}</h2>
                  <p style={styles.title}>{organizer.title}</p>
                  {!isSmallScreen &&
                    hoveredOrganizer?.name === organizer.name && (
                      <img
                        src={hoveredOrganizer.photo}
                        alt={`${organizer.name} - Organizer`}
                        style={styles.hoverImageRight}
                      />
                    )}
                  {isSmallScreen &&
                    clickedOrganizer?.name === organizer.name && (
                      <img
                        src={clickedOrganizer.photo}
                        alt={`${clickedOrganizer.name} - Organizer`}
                        style={styles.clickedImage}
                        loading="lazy"
                      />
                    )}
                </div>
              ))}
          </div>
        </div>

        <div style={{ height: "150px" }}></div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "170vh",
    backgroundColor: "transparent",
    color: "#fff",
    fontFamily: "Georgia, serif",
    position: "relative" as const,
  },
  container: {
    textAlign: "center" as const,
    padding: "2rem",
    maxWidth: "800px",
    width: "100%",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    fontWeight: "bold" as const,
    color: "#fff",
  },
  motivationalParagraph: {
    fontSize: "1.1rem",
    color: "#A020F0",
    marginBottom: "2rem",
    textAlign: "justify" as const,
    lineHeight: "1.6",
    padding: "0 1rem",
  },
  gridWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    gap: "1.5rem",
  },
  gridColumn: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
    flex: 1,
  },
  divider: {
    width: "6px",
    backgroundColor: "#A020F0",
    flexShrink: 0,
  },
  card: {
    padding: "1.5rem",
    position: "relative" as const,
    border: "none",
    transition: "transform 0.2s ease, opacity 0.2s ease",
    cursor: "pointer",
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: "bold" as const,
    marginBottom: "0.5rem",
    color: "#fff",
  },
  title: {
    fontSize: "1rem",
    color: "#A020F0",
  },
  hoverImageLeft: {
    position: "absolute" as const,
    top: "0",
    left: "-120%",
    marginLeft: "100px",
    width: "250px",
    height: "250px",
    borderRadius: "8px",
    objectFit: "cover" as const,
    border: "2px solid #fff",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
    transition: "opacity 0.5s ease-in-out",
  },
  hoverImageRight: {
    position: "absolute" as const,
    top: "0",
    right: "-120%",
    marginRight: "100px",
    width: "250px",
    height: "250px",
    borderRadius: "8px",
    objectFit: "cover" as const,
    border: "2px solid #fff",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
    transition: "opacity 0.5s ease-in-out",
  },
  clickedImage: {
    position: "relative" as const,
    margin: "0 auto",
    width: "200px",
    height: "200px",
    borderRadius: "8px",
    objectFit: "cover" as const,
    border: "2px solid #fff",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
    transition: "opacity 0.5s ease-in-out",
  },
};

export default OrganizerPage;
