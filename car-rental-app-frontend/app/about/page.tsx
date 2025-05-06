export default function AboutPage() {
    return (
      <div className="bg-gradient-to-br from-blue-100 via-white to-yellow-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">About <span className="text-yellow-300">Ally's Auto Rentals</span></h1>
          <p className="text-xl max-w-3xl mx-auto">
            Reliable, affordable, and stylish cars for every journey. Your road trip begins with us.
          </p>
        </section>
  
        {/* Company Info */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-gray-800">
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-blue-200">
            <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">Our Story</h2>
            <p className="text-lg mb-4 leading-relaxed">
              At <span className="font-semibold text-blue-600">Ally's Auto Rentals</span>, we aim to revolutionize car rentals by offering a seamless, tech-enabled experience
              with a human touch. We started in 2020 with a vision to make transportation easier for everyone — from solo adventurers to family travelers.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Our handpicked fleet features everything from eco-friendly compacts to premium SUVs. All vehicles are meticulously maintained for your safety and comfort.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Whether it’s a weekend getaway or a cross-country adventure, <span className="text-orange-500 font-semibold">Ally's</span> gets you there — hassle-free.
            </p>
          </div>
        </section>
  
        {/* Highlights Section */}
        <section className="bg-white py-12 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-100 p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">🚗 Diverse Fleet</h3>
              <p className="text-gray-700">From economy to luxury, find a car for every occasion.</p>
            </div>
            <div className="bg-orange-100 p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-800 mb-2">📱 Easy Booking</h3>
              <p className="text-gray-700">Book in minutes with our intuitive web and mobile apps.</p>
            </div>
            <div className="bg-yellow-100 p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">🛠️ 24/7 Support</h3>
              <p className="text-gray-700">Our friendly support team is always ready to assist.</p>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="text-center py-16 bg-gradient-to-r from-yellow-100 via-white to-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to Ride?</h2>
          <p className="text-lg text-gray-600 mb-6">Join thousands of happy drivers who trust Ally’s Auto Rentals every day.</p>
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition shadow-lg"
          >
            Book Your Car Now
          </a>
        </section>
      </div>
    );
  }
  
  