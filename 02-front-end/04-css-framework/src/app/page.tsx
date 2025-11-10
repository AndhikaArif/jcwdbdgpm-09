import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#080808] min-h-screen grid place-items-center">
        {/* Intro */}
        <div className="flex w-fit">
          {/* Text */}
          <div className="w-[538px] text-white">
            <h1 className="text-[44px] font-raleway font-extrabold">
              Andhika Arif Gilang
            </h1>
            <p>
              Intro text: Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Vel harum enim, amet quod ab ad? Velit quibusdam maiores
              optio magni a omnis nam, quas asperiores odit repudiandae, sequi
              accusamus atque.
            </p>
            <Link href="/">Let&quot;s get started</Link>
          </div>

          {/* Foto Profile */}
          <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/photo-profile.jpg"
              alt="A man standing in front of the camera wearing glasses"
              // width={100}
              // height={100}
              fill
            ></Image>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section></section>
    </main>
  );
}
