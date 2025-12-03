import img from '../../../assets/service.png'

export default function OurServices() {
  const services = [
    {
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      bg: "bg-[#FFFFFF]",
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      bg: "bg-lime-300", // highlighted card
    },
    {
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      bg: "bg-[#FFFFFF]",
    },
    {
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      bg: "bg-[#FFFFFF]",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
      bg: "bg-[#FFFFFF]",
    },
    {
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      bg: "bg-[#FFFFFF]",
    },
  ];

  return (
    <div className="bg-[#063A38] text-white py-16 px-4 rounded-3xl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`${service.bg} rounded-2xl p-6 text-gray-800 shadow-md`}
            >
              {/* Image Placeholder */}
              <div className="flex justify-center rounded-full  mb-4">
                <img
                  src={img}
                  className="w-8 h-8"
                  alt="icon"
                />
              </div>

              <h3 className="text-lg font-semibold text-center mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
