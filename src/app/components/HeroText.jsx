export default function HeroText({ title, description }) {
  return (
    <div className="text-center mt-[52px] mb-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">{title}</h1>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
