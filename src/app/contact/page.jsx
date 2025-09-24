import HeroText from "../components/HeroText";
import SocialLinks from "../components/SocialLinks";

export default function Contact() {
  return (
    <main className="min-h-screen relative p-4">
      <HeroText
        title="Say Hi! and tell me what you think"
        description="I'm always open to new opportunities, collaborations, or just a friendly chat. Whether you have a project in mind, need advice on development, or want to share feedback, feel free to reach out. Let's connect and build something amazing together!"
      />

      <div className="max-w-3xl mx-auto bg-white p-10">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="max-w-md mx-auto mb-8"
        >
          <input
            type="hidden"
            name="access_key"
            value="2e15357e-0433-4f56-934e-5418732608d0"
          />
          <input type="hidden" name="subject" value="Contact Form Submission" />
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className=" w-full p-3 rounded-3xl border-2 border-gray-200 focus:outline-none  focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 rounded-3xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="bg-gray-100 w-full p-3 rounded-3xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded-3xl cursor-pointer hover:bg-blue-800 transition-colors w-full"
          >
            Send Message
          </button>
        </form>

        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Connect with me</h2>
          <SocialLinks />
        </div>
      </div>
    </main>
  );
}
