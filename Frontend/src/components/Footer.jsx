export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-white">IELTS Academy</h2>
          <p className="text-gray-400 max-w-sm">
            Helping students achieve their dream IELTS scores with expert guidance, AI feedback, and personalized mentorship.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-white font-medium">
          <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#features" className="hover:text-blue-400 transition">Courses</a></li>
          <li><a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-gray-400">
          <p>Email: contact@ieltsacademy.com</p>
          <p>Phone: +91 98765 43210</p>
          <p className="text-sm">&copy; 2025 IELTS Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
