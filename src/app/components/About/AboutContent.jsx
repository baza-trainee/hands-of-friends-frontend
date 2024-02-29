import Container from "@/app/components/Container";
import { useHttp } from "@/app/hooks/useHttp";
import { ULCLASS } from "@/app/helpers/consts";
import { useEffect, useState } from "react";

function AboutContent({ activeTab }) {
  const [aboutData] = useHttp("about-us/");
  const [formattedData, setFormattedData] = useState(null);

  useEffect(() => {
    if (aboutData && aboutData[0]) {
      const formatted = {
        ...aboutData[0],
        history: aboutData[0]?.history.replace(
          /<ul/g,
          `<ul class="${ULCLASS}"`
        ),
        principles: aboutData[0]?.principles.replace(
          /<ul/g,
          `<ul class="list-disc pl-5 text-xl"`
        ),
        values: aboutData[0]?.values.replace(
          /<ul/g,
          `<ul class="list-disc pl-5"`
        ),
      };
      setFormattedData(formatted);
    }
  }, [aboutData]);

  return (
    <Container>
      <div className="">
        {activeTab === "mission" && (
          <div className="mt-[32px] md:mt-[56px] mb-[64px] sm:mb-[72px] md:mb-[112px] xl:mb-[144px] 2xl:mb-[160px] text-lg md:max-w-[688px] xl:max-w-[820px] 2xl:max-w-[912px]">
            <div dangerouslySetInnerHTML={{ __html: formattedData?.history }} />
          </div>
        )}
        {activeTab === "principles" && (
          <div className="mt-[32px] md:mt-[56px] mb-[64px] sm:mb-[72px] md:mb-[112px] xl:mb-[144px] md:max-w-[688px] xl:max-w-[820px] 2xl:max-w-[792px]">
            <div
              style={{ fontSize: "16px" }}
              dangerouslySetInnerHTML={{ __html: formattedData?.principles }}
            />
          </div>
        )}
        {activeTab === "values" && (
          <div className="mt-[32px] md:mt-[56px] mb-[160px] md:max-w-[688px] xl:max-w-[740px] 2xl:max-w-[740px]">
            <div dangerouslySetInnerHTML={{ __html: formattedData?.values }} />
          </div>
        )}
      </div>
    </Container>
  );
}

export default AboutContent;
