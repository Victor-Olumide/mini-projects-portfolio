import React from "react";
import GroupLink from "./GroupLink";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-10 bg-[#182239] text-white">
      <div className="m-10">
      <div className="flex gap-10 justify-evenly">
        <div className="text-3xl font-bold md:w-1/2">
          <Image src="/logo.png" alt="VO logo" width={100} height={100}/>
        </div>

        <div className="flex gap-5 md:gap-50">
          <div>
            <ul>
              <div className="font-bold mb-4">
                <h2>Sitemap</h2>
              </div>
              <GroupLink title="Home" link="/" />
              <GroupLink title="About" link="/about" />
              <GroupLink title="Projects" link="/projects" />
              <GroupLink title="contact" link="/contact" />
            </ul>
          </div>

          <div>
            <ul>
              <div className="font-bold mb-4">
                <h2>Socials</h2>
              </div>
              <GroupLink title="Facebook" link="https://www.facebook.com/share/19vz7JKxo9/" />
              <GroupLink title="Threads" link="https://www.threads.com/@official_victor_olumide" />
              <GroupLink title="Instagram" link="https://instagram.com/official_victor_olumide" />
              <GroupLink title="LinkedIn" link="https://linkedin.com/in/victor-olumide" />
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between pt-10 text-lg">
        <p>
          &copy; {new Date().getFullYear()} Victor Olumide. All rights reserved.
        </p>
        <p>
          Made by Victor Olumide - Powered by Volts
        </p>
      </div>
      </div>
    </footer>
  );
}
