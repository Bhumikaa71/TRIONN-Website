import Button from "@/my-components/button";
import Heading from "@/my-components/heading";
// import Image from "next/image";

export default function Footer() {
  return (
    <section className="">
      <div className="mx-auto w-full max-w-437 px-8 lg:px-12">
        <Heading
          header={
            <>
              {" "}
              <span className="block">TIME TO</span>{" "}
              <span className="block">ROAR</span>{" "}
            </>
          }
          headstyle=""
        />

        {/* button */}
        <div className="text-end">
          <Button content="Let's talk!" cstyle="" />
        </div>

        {/* border*/}
        <div className="border-t border-gray-700  my-16"></div>

        {/* contact */}
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-sm mb-2">Email</p>
            <p className="text-xl">hello@trionn.com</p>
          </div>

          <div>
            <p className="text-sm mb-2">Call</p>
            <p className="text-xl">+91 98241 82099</p>
          </div>

          <div className="md:text-right">
            <p className="text-sm mb-2">Teams</p>
            <p className="text-xl">Talk to Trionn</p>
          </div>
        </div>

        <div className="border-t border-gray-700 my-16"></div>
        <div className="text-sm">© {new Date().getFullYear()} TRIONN®</div>
      </div>
      {/* images logo */}
      <img
        src="/assets/footer-logo.svg"
        alt="Footer logo"
        className="w-full h-auto py-4"
      />
    </section>
  );
}
