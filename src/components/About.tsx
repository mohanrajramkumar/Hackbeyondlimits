import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Heart } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Features array to display
const features = [
  {
    icon: Code2,
    title: "Web3 Innovation",
    description:
      "Create solutions that address real-world challenges using decentralized technologies, focusing on enhancing blockchain scalability, privacy, security, or interoperability.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Develop innovative solutions that leverage artificial intelligence to solve complex real-world problems. Focus on areas like machine learning, data analysis, automation, or AI-driven insights to create impactful and scalable applications.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Create solutions that harness technology to improve healthcare outcomes. Focus on areas like patient care, health data management, diagnostics, or telemedicine, aiming to enhance accessibility, efficiency, and quality in the healthcare industry.",
  },
  {
    icon: Rocket,
    title: "Open Track",
    description:
      "Explore innovative solutions across any domain or industry. This track allows participants to tackle unique challenges of their choice, encouraging creativity and out-of-the-box thinking. Build impactful solutions using technology to address a problem that excites you!",
  },
];

// About Section Component
export const About = () => {
  return (
    <>
      {/* ✅ SEO Optimized Meta Tags */}
      <Helmet>
        <title>{`<HACK BEYOND LIMIT$>`}</title>
        <meta
          name="description"
          content="Join Hack Beyond Limit$ for an immersive hackathon event featuring tracks like Web3, AI, Healthcare, and Open Track. Build impactful solutions and win prizes!"
        />
        <meta
          name="keywords"
          content="Hack Beyond Limit$, Web3, AI, Healthcare, Open Track, hackathon, technology solutions, innovation"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="<HACK BEYOND LIMIT$>" />
        <meta
          property="og:description"
          content="Participate in Hack Beyond Limit$ and explore tracks like Web3, AI, and Healthcare, building innovative solutions in this dynamic 24-hour hackathon!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
      </Helmet>

      {/* ✅ Main About Section */}
      <section className="py-10 sm:py-14 relative overflow-hidden" id="about">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

        <div className="container mx-auto sm:px-12 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About the Event</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-justify">
              Join us for Hack Beyond Limits, an immersive 24-hour hackathon
              where innovation meets technology! Hosted at Rathinam College,
              Coimbatore, this exciting event invites you to build
              groundbreaking solutions, learn from industry experts, and compete
              for amazing prizes. Network with fellow developers, showcase your
              skills, and make an impact in domains like Web3, AI, Healthcare,
              and more. Don’t miss this chance to collaborate, create, and bring
              your ideas to life in a vibrant and inspiring environment. 🚀
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all hover:-translate-y-2"
              >
                <div className="mb-4">
                  <feature.icon className="w-12 h-12 text-purple-500 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
