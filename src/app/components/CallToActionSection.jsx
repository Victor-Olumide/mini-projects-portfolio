import Link from "next/link";

export default function CallToActionSection({
  title,
  description,
  buttonLink,
  buttonText,
}) {
  return (
    <section className="py-16 px-4 text-center bg-[#182239] text-white">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">{description}</p>
      <Link href={buttonLink}>
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg cursor-pointer transition-colors">
          {buttonText}
        </button>
      </Link>
    </section>
  );
}
