import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

const timelineEvents = [
  {
    date: "Jan 10, 2025",
    title: "Enrollment Begins",
    description: "Start your journey by registering your team",
  },
  {
    date: "Feb 10, 2025",
    title: "Final Call for Registration",
    description: "Last day to secure your spot",
  },
  {
    date: "Feb 22, 2025",
    title: "Event Kickoff",
    description: "Kickoff and team briefing",
  },
  {
    date: "Feb 22, 2025",
    title: "Coding Marathon Starts",
    description: "24 hours of intense coding and creation",
  },
  {
    date: "Feb 23, 2025",
    title: "Packup Of HackBeyondLimit$",
    description: "Ending of 24hrs of coding and hacking",
  },
];

export const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* ✅ SEO Optimized Meta Tags */}
      <Helmet>
        <title>{`<HACK BEYOND LIMIT$>`}</title>
        <meta
          name="description"
          content="Explore the exciting timeline for Hack Beyond Limit$ competition, including event kickoffs, deadlines, and coding marathons!"
        />
        <meta
          name="keywords"
          content="Hack Beyond Limit$, coding competition, event timeline, hackathon schedule"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="<HACK BEYOND LIMIT$>" />
        <meta
          property="og:description"
          content="Join the Hack Beyond Limit$ event! Check out the full timeline with all key dates and activities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/timeline" />
      </Helmet>

      {/* ✅ Main Timeline Section */}
      <section className="py-20 bg-black/40" id="timeline">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl font-bold text-center text-white mb-20"
          >
            Event Timeline
          </motion.h2>

          <div ref={ref} className="relative">
            {/* Line on desktop */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600" />

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                } items-center justify-center mb-12 sm:mb-16`}
              >
                {/* Left padding for alignment */}
                <div className="w-full sm:w-5/12" />

                {/* Breakpoint for mobile line */}
                <div className="sm:hidden flex justify-center mb-4 sm:mb-0">
                  {/* Violet line break in mobile view */}
                  <div className={`w-1 h-12 bg-purple-600`} />
                </div>

                <div className="w-full sm:w-2/12 flex justify-center mb-4 sm:mb-0">
                  <div className="w-4 h-4 bg-purple-600 rounded-full" />
                </div>
                <div className="w-full sm:w-5/12 bg-gray-900/60 p-6 rounded-lg">
                  <h3 className="text-purple-500 font-semibold">
                    {event.date}
                  </h3>
                  <h4 className="text-white text-xl font-bold">
                    {event.title}
                  </h4>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
