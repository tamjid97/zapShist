import React from "react";
import img1 from '../../../assets/live-tracking.png'
import img2 from '../../../assets/safe-delivery.png'
import img3 from '../../../assets/safe-delivery.png'  

const data = [
  {
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    img: img1
  },
  {
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: img2
  },
  {
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: img3  
  },
];

export default function Etra1() {
  return (
    <div className="py-12 ">
      <div className="max-w-6xl mx-auto px-4 space-y-6">

        {data.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 bg-white rounded-2xl shadow-sm p-8 border"
          >
            {/* Image */}
            <div className="w-40 h-40 flex items-center justify-center">
              <img src={item.img} alt="" className="w-32 h-32 object-contain" />
            </div>

            {/* Divider */}
            <div className="border-l-2 border-gray-300 h-28"></div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 max-w-2xl">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
