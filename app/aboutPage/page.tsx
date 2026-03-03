import Heading from "@/my-components/heading";
import Button from "@/my-components/button";
import Award from "../awardCard/page";

export default function About() {
  return (
    <section className="pt-20 ">
      <Heading
        header={
          <>
            <span className="block">WHO</span>
            <span className="block"> WE ARE</span>
          </>
        }
        headstyle="tracking-widest text-4xl md:text-5xl lg:text-6xl"
        subheading={
          <>
            <span className="block">As an award-winning agency within</span>
            <span className="block">
              the digital jungle, TRIONN® transcends
            </span>
            <span className="block">
              aesthetics, crafting your vision into a
            </span>
            <span>legacy that endures.</span>
          </>
        }
        substyle="mt-4 tracking-widest text-sm md:text-base lg:text-lg"
      />
      {/* next section */}
      <div className="flex flex-col mt-10 max-w-xl ml-auto">
        <div className="text-right text-sm md:text-base leading-relaxed">
          <p>
            We roar with creativity, staying updated with the <br />
            latest tech to make your brand a formidable force <br />
            in the digital wilderness and deliver exceptional <br />
            website and app experiences.
          </p>
        </div>

        <div className="text-right py-6">
          <Button content="Explore Work" cstyle="w-fit sm:w-auto" />
        </div>
      </div>
      {/* second page */}
      <Award />
    </section>
  );
}