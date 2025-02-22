import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Stephen',
          from_email: form.email,
          to_email: 'stev3npy@gmail.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        toast.success('Message sent successfully');

        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        toast.error('Your message did not go through');
      });
  };

  return (
    <div id="contact" className="w-full px-[12%] py-16 scroll-mt-20">
      <h2 className="text-center text-5xl font-Poppins">Get in Touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 font-Poppins">
        Feel free to reach out for collaborations, opportunities, or just to say hello. I'm always open to connecting.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-12 max-w-2xl mx-auto space-y-6">
        {/* Name & Email Fields in One Row */}
        <div className="flex flex-col md:flex-row gap-6">
          <label className="flex-1">
            <span className="block font-medium">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Your name"
            />
          </label>

          <label className="flex-1">
            <span className="block font-medium">Email Address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Your email eg., example@gmail.com"
            />
          </label>
        </div>

        <label className="block">
          <span className="block font-medium">Your Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="input-field"
            placeholder="How can I assist?"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="contact-button"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
