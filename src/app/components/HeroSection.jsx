import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  buttonLink,
  buttonText,
}) {
  return (
    <div className="flex flex-col md:flex-row mt-[52px] justify-center items-center gap-10 bg-[#182239] w-full rounded-b-3xl p-10 text-white border-t border-t-white/30">
      <Image
        src={imageSrc}
        alt={imageAlt}
        height={300}
        width={300}
        className="rounded-full border-4 border-gray-600/60"
      />

      <header className="flex flex-col justify-center items-start w-full md:max-w-xl gap-y-6">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className="text-2xl font-semibold">{subtitle}</h2>
        <p className="text-lg leading-relaxed">{description}</p>
        <Link href={buttonLink}>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors">
            {buttonText}
          </button>
        </Link>
      </header>
    </div>
  );
}
