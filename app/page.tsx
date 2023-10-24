import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TemplateSection from "@/components/TemplateSection";

export default function Home() {
  return (
    <>
    <div className="from-green-100 to-white/90 bg-gradient-to-b ">
      <Hero />
    </div>
      <div className="grid grid-cols-4 w-4/5 mx-auto">
        <div className="grid col-span-1 ">
          <Categories />
        </div>
        <div className="grid col-span-3">
          <TemplateSection />
        </div>
      </div>
    </>
  );
}
