import { Helmet } from "react-helmet-async";
import cccLogo from "../images/ccc.png";
import cdxLogo from "../images/cdx.png";
import ustLogo from "../images/ust.png";
import xyzLogo from "../images/xyzlogo.png";
import navanLogo from "../images/navan.png";
import nvLogo from "../images/nv.png";
import sailyLogo from "../images/saily.png";
import nordLogo from "../images/nord.png";
import hvrrLogo from "../images/hvrr.png";
import techhub from "../images/techhub.png";
import incogni from "../images/incogni.png";
import hacktour from "../images/hacktour.png";
import devdocks from "../images/devdocks.jpg";
export const Sponsors = () => {
  const sponsorCategories = [
    {
      title: "Community Partner",
      description:
        "Here are our Community Partners who foster innovation and collaboration. Their dedication bridges the gap between technology and community.",
      sponsors: [
        {
          name: "TechHub",
          logo: techhub,
          description:
            "We extend our sincere gratitude to Tech Hub for their esteemed partnership as our community partner.",
          link: "#",
        },
        { name: "Coming Soon", logo: hacktour, description: "We extend our sincere gratitude to Hack Tour India for their esteemed partnership as our community partner.", link: "#" },
      ],
    },
    {
      title: "Promotion Partner",
      description:
        "Promotion Partners ensure our message reaches far and wide. Their support helps us connect with audiences and amplify our vision.",
      sponsors: [
        {
          name: "Coin Checkup",
          logo: cccLogo,
          description:
            "Thanks to CoinCheckup, our Promotional Partner, for helping us expand our reach with real-time crypto insights!",
          link: "https://www.coincheckup.com",
        },
        {
          name: "Coin Codex",
          logo: cdxLogo,
          description:
            "Grateful to CoinCodex, our Promotional Partner, for supporting our mission and connecting us with the crypto community!",
          link: "https://www.coincodex.com",
        },
      ],
    },
    {
      title: "Hosting Partner",
      description:
        "Our Hosting Partner provides the backbone of our event. Their infrastructure ensures a smooth and seamless experience.",
      sponsors: [
        {
          name: "Unstop",
          logo: ustLogo,
          description:
            "A heartfelt thanks to Unstop, our Hosting Partner, for powering this event with reliable infrastructure and support!",
          link: "#",
        },
      ],
    },
    {
      title: "Event Partner",
      description:
        "Event Partners bring expertise and collaboration to make this event a success. Their contributions ensure a memorable experience for everyone.",
      sponsors: [
        {
          name: "Gen.XYZ",
          logo: xyzLogo,
          description:
            "Thank you to gen.xyz, our Silver Sponsor, for your support!",
          link: "#",
        },
        {
          name: "Navan",
          logo: navanLogo,
          description:
            "Thank you to Navan AI, our Silver Sponsor, for your valuable support!",
          link: "#",
        },
        {
          name: "Nord Vpn",
          logo: nvLogo,
          description:
            "A big thank you to NordVPN, our Gold Sponsor, for your exceptional support!",
          link: "#",
        },
        {
          name: "Saily",
          logo: sailyLogo,
          description:
            "A heartfelt thank you to Saily, our Gold Sponsor, for your generous support and partnership!",
          link: "#",
        },
        {
          name: "Nord Pass",
          logo: nordLogo,
          description:
            "A special thank you to NordPass, our Gold Sponsor, for your invaluable support and collaboration!",
          link: "#",
        },
        {
          name: "HoverRobotix",
          logo: hvrrLogo,
          description:
            "Thank you to HoverRobotix, our Platinum Sponsor, for your exceptional support!",
          link: "#",
        },
        {
          name: "Incogni",
          logo: incogni,
          description:
            "A heartfelt thank you to Incogni, our Gold Sponsor, for your generous support and partnership!",
          link: "#",
        },
        { name: "devdocks",
         logo: devdocks,
          description: "Thank you to devdocks, our Platinum Sponsor, for your exceptional support!", link: "#"
         },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Explore our sponsor categories: Community Partner, Promotion Partner, Hosting Partner, Event Partner. Find more details about each sponsor and how to get involved."
        />
        <meta
          name="keywords"
          content="Sponsors, Event Sponsors, Promotion Partners, Hosting Partners, Event Partners, Coin Checkup, Coin Codex, Gen.XYZ, Navan, Nord VPN, Saily, Nord Pass, HoverRobotics"
        />
        <meta name="author" content="Your Company Name" />
        <title>Sponsors | Event Title</title>
      </Helmet>

      <section className="w-full py-20 bg-black text-white" id="sponsors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {sponsorCategories.map(
            ({ title, description, sponsors }, categoryIndex) => (
              <div key={categoryIndex} className="mb-16 relative z-10">
                <h2 className="text-5xl font-bold text-center mb-8 text-white relative z-20">
                  {title}
                </h2>

                <p
                  className="text-center text-gray-400 mb-12 text-sm md:text-base leading-relaxed px-4 relative z-20"
                  style={{ maxWidth: "600px", margin: "0 auto" }}
                >
                  {description}
                </p>

                <div className="flex flex-wrap justify-center gap-8 relative z-10">
                  {sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-start border border-gray-700 rounded-xl bg-gradient-to-t from-gray-900 to-black shadow-lg hover:scale-105 transition-transform relative z-10"
                      style={{
                        width: "300px",
                        height: "450px",
                        padding: "20px",
                        gap: "20px",
                        marginTop: "20px",
                      }}
                    >
                      <h3 className="text-xl font-semibold text-center mb-4 text-white relative z-20">
                        {sponsor.name}
                      </h3>
                      <div className="flex items-center justify-center w-full h-[60%] mb-6">
                        <a
                          href={sponsor.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {sponsor.logo ? (
                            <img
                              src={sponsor.logo}
                              alt={`${sponsor.name} logo`}
                              className="object-contain h-full"
                            />
                          ) : (
                            <p className="text-center text-gray-400 text-sm md:text-base relative z-20">
                              Coming Soon
                            </p>
                          )}
                        </a>
                      </div>
                      {sponsor.description && (
                        <p className="text-gray-400 text-center text-sm md:text-base leading-relaxed relative z-20">
                          {sponsor.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}

          {/* Become a Sponsor Section */}
          <div
            className="text-center p-8 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg border border-gray-700 relative z-20"
            style={{
              width: "100%", // Keep same width as before
              maxWidth: "1300px", // Limit width for readability
              margin: "10px auto", // Increased margin for more spacing
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 relative z-20">
              Want to become our sponsor?
            </h3>

            <p className="text-gray-400 leading-relaxed text-center mb-6 relative z-20">
              Join us in making this event extraordinary. Support innovation and
              be part of something great.
            </p>

            <a
              href="mailto:techhub@rathinam.in?subject=Interested%20in%20Sponsorship"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all shadow-md relative z-20">
                Join Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
