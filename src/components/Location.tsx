import { Helmet } from "react-helmet-async";
import logo from "../images/rathinamlogo.png";
import campus1 from "../images/mokkacollege1.jpg";
import campus2 from "../images/mokkacollege2.jpg";
import campus3 from "../images/mokkacollege3.jpg";
import { MapPin } from "lucide-react";

const LocationDetails = () => (
  <div className="text-center mb-8 relative">
    {/* SEO Metadata */}
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Rathinam College of Arts and Science - Location & Overview</title>
      <meta
        name="description"
        content="Discover Rathinam College of Arts and Science in Coimbatore, India, accredited with A++ Grade by NAAC. Explore our campus, courses, and top facilities."
      />
      <meta
        name="keywords"
        content="Rathinam College, Best College in Coimbatore, Tamil Nadu, Rathinam Techzone, Bharathiar University, Arts and Science, UG, PG, Top Colleges in India"
      />
      <meta name="author" content="Rathinam College of Arts and Science" />
      <meta
        property="og:title"
        content="Rathinam College of Arts and Science - Campus & Location"
      />
      <meta
        property="og:description"
        content="Explore Rathinam College in Coimbatore - A++ NAAC Accredited, offering UG & PG courses. Check campus images, facilities, and location."
      />
      <meta
        property="og:image"
        content="https://www.hackbeyondlimits.tech/images/rathinamlogo.png"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.hackbeyondlimits.tech/location"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Rathinam College of Arts and Science",
          url: "https://www.hackbeyondlimits.tech",
          logo: "https://www.hackbeyondlimits.tech/images/rathinamlogo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Pollachi Main Road, Eachanari",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            postalCode: "641021",
            addressCountry: "India",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "10.9501",
            longitude: "76.9648",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-422-XXXXXXX",
            contactType: "Admissions",
          },
          sameAs: [
            "https://www.facebook.com/RathinamCollege",
            "https://twitter.com/RathinamCollege",
            "https://www.instagram.com/rathinamcollege",
          ],
        })}
      </script>
    </Helmet>

    {/* College Logo */}
    <div className="flex justify-center mb-4">
      <img
        src={logo}
        alt="Rathinam College Logo"
        className="w-96 h-auto"
        loading="lazy"
      />
    </div>

    {/* Event Location tag */}
    <h2 className="text-lg font-semibold text-gray-300 flex justify-center items-center gap-2 mb-8 mt-2 text-center">
      <MapPin size={20} className="text-red-500" /> Event Location
    </h2>

    {/* College Heading */}
    <h1 className="text-4xl font-bold text-white mb-4">
      Rathinam College of Arts and Science
    </h1>

    {/* College Description */}
    <p className="text-gray-400 mb-6 px-6 md:px-16 text-justify">
      Rathinam College of Arts and Science, a premier co-educational institution
      in Coimbatore, is affiliated with Bharathiar University and recognized by
      the University Grants Commission (UGC). Established in 2001, the college
      is accredited by NAAC with an A++ Grade and offers a wide range of
      undergraduate and postgraduate programs.{" "}
      <a
        href="https://www.rathinamcollege.edu.in/"
        className="text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to know more
      </a>
    </p>

    {/* Image Gallery */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-16 mb-8">
      {[campus1, campus2, campus3].map((image, index) => (
        <div key={index} className="flex justify-center">
          <img
            src={image}
            alt={`Rathinam College Campus - View ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
);

export const Location = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-8 md:px-16">
        {/* Added heavy padding on left and right */}
        <LocationDetails />
        <div className="mt-8 relative" style={{ zIndex: 10 }}>
          <iframe
            title="Rathinam College Location"
            width="100%"
            height="600"
            className="rounded-lg shadow-lg"
            loading="lazy"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rathinam%20College%20of%20Arts%20and%20Science%20,Echanari,%20Coimbatore,Tamilnadu+(Rathinam%20College%20Of%20Arts%20And%20Science)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
