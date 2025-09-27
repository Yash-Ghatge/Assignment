const features = [
  { title: "Speaking Practice", desc: "Interactive sessions to improve fluency.", icon: "🗣️" },
  { title: "Mock Tests", desc: "Exam-like practice with instant feedback.", icon: "📄" },
  { title: "AI Band Score", desc: "AI-powered evaluation & tips.", icon: "🤖" },
  { title: "Flexible Batches", desc: "Morning & evening options.", icon: "📅" },
  { title: "Personal Mentorship", desc: "One-on-one guidance from expert trainers.", icon: "👨‍🏫" },
{ title: "Grammar Workshops", desc: "Improve accuracy with focused grammar sessions.", icon: "✍️" },
{ title: "Vocabulary Builder", desc: "Daily word lists & quizzes to boost vocabulary.", icon: "📚" },
{ title: "24/7 Support", desc: "Get doubts cleared anytime via chat & email.", icon: "💬" },
];

export default function Features() {
  return (
    <section
      id="features"
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-16"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Our Key Features</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg hover:bg-gray-700 transition"
            >
              <div className="text-4xl">{f.icon}</div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-300 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
