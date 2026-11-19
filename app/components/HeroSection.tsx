import { AnimatedTextSlider } from "@/components/animated-text-slider";
import { CodeXmlIcon, Mail, MapPin } from "lucide-react";
import { EMAIL, GMAIL_COMPOSE } from "@/lib/data";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-muted p-6 sm:p-8">
      {/* handwritten annotation */}
      <div className="pointer-events-none absolute right-6 top-6 hidden rotate-[-6deg] font-script text-[28px] leading-[30px] text-accent sm:block">
        hey there!
        <svg className="ml-2 mt-1 h-8 w-12" viewBox="0 0 48 32" fill="none" aria-hidden>
          <path d="M44 2C36 14 24 22 6 26m0 0 8-7m-8 7 9 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex items-center gap-4">
        <img
          className="size-16 rounded-2xl border-2 border-paper object-cover"
          src="https://i.pinimg.com/1200x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg"
          alt="Mohammad Saad"
        />
        <span className="chip">
          <span className="size-2 animate-pulse rounded-full bg-accent" />
          Available for work
        </span>
      </div>

      <h1 className="headline-display mt-8 max-w-lg text-ink">
        Mohammad Saad builds <em className="text-accent">thoughtful</em> web experiences.
      </h1>
      <AnimatedTextSlider
        texts={["Full-Stack Developer", "UX/UI Designer", "Web Designer", "Tech Enthusiast"]}
        className="mt-3 text-[21px] leading-[25px] text-stone"
      />

      <ul className="mt-8 flex flex-col gap-2 text-sm text-stone sm:flex-row sm:flex-wrap sm:gap-x-6">
        <li className="flex items-center gap-2">
          <CodeXmlIcon className="size-4" /> Full-Stack Developer
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="size-4" /> New Delhi, India
        </li>
        <li>
          <a href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ink">
            <Mail className="size-4" /> {EMAIL}
          </a>
        </li>
      </ul>
    </section>
  );
};

export default HeroSection;
