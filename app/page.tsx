import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TemplateSection from "@/components/TemplateSection";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="from-green-100 to-white/90 bg-gradient-to-b">
          <Hero />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:w-4/5 w-11/12 mx-auto">
          <div className="grid col-span-1">
            <Categories />
          </div>
          <div className="grid lg:col-span-3 md:col-span-2 ">
            <TemplateSection />
          </div>
        </div>
      </div>
    </>
  );
}
