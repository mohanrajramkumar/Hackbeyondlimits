import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Trophy, Award, Gift } from "lucide-react";

const prizes = [
  {
    icon: Trophy,
    place: "1st Place",
    prize: "₹20,000",
    perks: ["Startup Mentorship", "Gift Vouchers", "Certificate"],
  },
  {
    icon: Award,
    place: "2nd Place",
    prize: "₹15,000",
    perks: ["Idea Development Support", "AI Credits", "Certificate"],
  },
  {
    icon: Gift,
    place: "3rd Place",
    prize: "₹5,000",
    perks: ["AI Credits", "Swag Pack", "Certificate"],
  },
];

export const Prizes = () => {
  return (
    <>
      {/* ✅ SEO Optimized Meta Tags */}
      <Helmet>
        <title>HACK BEYOND LIMIT$</title>
        <meta
          name="description"
          content="Compete in our tech competition and win cash prizes, mentorship, AI credits, and certificates. Boost your innovation today!"
        />
        <meta
          name="keywords"
          content="tech competition prizes, cash rewards, startup mentorship, AI credits, innovation contest"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tech Competition Prizes & Rewards" />
        <meta
          property="og:description"
          content="Participate in the tech competition and win exciting prizes including ₹20,000 cash, mentorship, AI credits, and more!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/prizes" />
      </Helmet>

      {/* ✅ Main Section */}
      <section
        className="py-20 relative overflow-hidden px-6 sm:px-12 lg:px-24"
        id="prizes"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl font-extrabold mb-6">Prizes & Rewards</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Compete for exciting prizes and opportunities to take your project
              to the next level
            </p>
          </motion.div>

          {/* ✅ Increased Gap Between Cards & Reduced Card Height */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group h-auto min-h-[280px] md:min-h-[320px]"
              >
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity" />

                {/* Prize Card */}
                <div className="relative bg-black/50 backdrop-blur-xl p-10 md:p-12 w-[95%] md:w-[100%] lg:w-[110%] mx-auto rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <prize.icon
                    className="w-20 h-20 text-purple-500 mb-6 mx-auto"
                    aria-hidden="true"
                  />
                  <h2 className="text-3xl font-bold text-center mb-2">
                    {prize.place}
                  </h2>
                  <p className="text-4xl font-extrabold text-center text-purple-400 mb-6">
                    {prize.prize}
                  </p>
                  <ul className="space-y-2 text-center">
                    {prize.perks.map((perk, i) => (
                      <li key={i} className="text-gray-300">
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
