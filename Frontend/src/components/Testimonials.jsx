const testimonials = [
  { name: "Yash Ghatge", review: "The mock tests boosted my confidence. Band 8.0!", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "riya Sharma", review: "Speaking practice was a game-changer. Band 7.5!", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Chirag Gupta", review: "Flexible batches made prep easy. Band 7.5!", image: "https://randomuser.me/api/portraits/men/54.jpg" },
  { name: "Meera Kapoor", review: "AI feedback helped me identify weak areas. Band 8.5!", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Vikas Yadav",  review: "Great mentorship and vocabulary sessions. Band 7.0!",  image: "https://randomuser.me/api/portraits/men/76.jpg" },
  { name: "Neha Singh", review: "The speaking practice and mock tests were extremely helpful. Band 8.0!", image: "https://randomuser.me/api/portraits/women/52.jpg" },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="min-h-screen bg-black text-white flex items-center justify-center py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">What Our Students Say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg hover:bg-gray-700 transition text-center"
            >
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mx-auto" />
              <p className="mt-4 text-gray-300 italic">"{t.review}"</p>
              <h3 className="mt-2 font-semibold text-white">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
