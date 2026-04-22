import { educationData, type EducationItem } from "@/lib/data";

const Education = () => {
  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                Education
              </p>
            </div>
          </div>

          <div className="border-t border-primary/10">
            <div className="relative max-w-3xl mx-auto px-4 sm:px-0 py-10">
              <div className="hidden sm:flex absolute left-5 sm:left-[15.9rem] sm:translate-x-1/2 top-0 bottom-0 w-px bg-primary/10" />

              <div className="relative">
                {educationData.map((item: EducationItem, index: number) => (
                  <div
                    key={index}
                    className={`relative flex flex-col sm:flex-row sm:items-start gap-4 ${
                      index !== educationData.length - 1 ? "mb-8 sm:mb-16" : ""
                    }`}
                  >
                    <div className="relative pl-8 sm:pl-0 sm:w-64 sm:text-right sm:pr-16">
                      <p className="ml-2.5 sm:ml-0 text-base font-normal sm:mb-0 leading-relaxed">
                        {item.date}
                      </p>

                      {/* Bullet Point */}
                      <div className="absolute left-1.5 sm:left-auto sm:-right-3 top-0 z-10 p-1.5 border border-primary/10 rounded-full bg-white">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 flex-1 sm:pl-16 ml-2 sm:ml-0">
                      <h5 className="font-semibold">{item.title}</h5>
                      <p className="text-primary">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
