import React from 'react';

const ContactDetails = () => (
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-white mb-2">Contact Us</h2>
    <p className="text-gray-400">
      If you have any questions or need assistance regarding the event, please feel free to reach out to us.
    </p>
    <p className="text-gray-400">Email: contact@eventorganizers.com</p>
    <p className="text-gray-400">Phone: +1 (234) 567-8901</p>
  </div>
);

const ContactUs = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <ContactDetails />
      </div>
    </section>
  );
};

export default ContactUs; 