export default function DoubleLayerSlimmingThaiAndHeapBellyShaper() {
  return (
    <div>
      {/* section: hero */}
      <section className="mb-6 sm:mb-8">
        <div className="bg-gradient-to-r from-blue-700 to-[#B06AB3] font-sans px-6 py-12">
          <div className="container mx-auto flex flex-col justify-center items-center text-center">
            <h1 className="text-white sm:text-4xl text-3xl font-bold mb-4">
              ডাবল লেয়ার স্লিমিং থাই, হিপ ও বেলী শেপার ১ পিস ৬৮০/- টাকা, ২ পিস
              ১১৮০ টাকা মাত্র
            </h1>

            <button
              type="button"
              className="bg-white text-xl mt-6 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100"
            >
              অর্ডার করতে ক্লিক করুন
            </button>
          </div>
        </div>
      </section>

      {/* section: youtube embeded video */}
      <section className="mb-12 md:max-w-5xl max-w-xl mx-auto">
        <div className="">
          <iframe
            className="w-full h-[500px]"
            src="https://www.youtube.com/embed/vuLeDvHmlHg"
            title="💥ডাবল লেয়ার স্লিমিং থাই, হিপ ও বেলী শেপার💥"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </section>
    </div>
  );
}
