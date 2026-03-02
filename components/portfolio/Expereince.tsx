import { WORK_EXPERIENCE, EDUCATION } from "@/constants";
import TimelineItem from "../common/TimelineItem";
import { CERTIFICATIONS } from "@/constants";
import CertificationItem from "../common/CertificationItem";

export default function Experience() {
  return (
    <main className="mw-full mx-auto lg:px-0 py-30 space-y-20">
      {/* Work Experience */}
      <section>
        <h2 className="text-5xl font-bold border-b-2 border-gray-900 pb-3 mb-12">
          Work Experience
        </h2>
        <div className="relative">
          {WORK_EXPERIENCE.map((item, i) => (
            <TimelineItem
              key={`${item.company}-${item.period}`}
              delay={i * 120}
              {...item}
            />
          ))}
        </div>
      </section>

      {/* Education*/}
      <section>
        <h2 className="text-5xl font-bold pb-3 mb-12">Education</h2>

        <section className="space-y-2">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationItem
              key={index}
              label={cert.label}
              issuer={cert.issuer}
              period={cert.period}
              link={cert.link}
              description={cert.description}
              delay={index * 80} 
            />
          ))}
        </section>
      </section>
    </main>
  );
}
