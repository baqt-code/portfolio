import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const firstName = DATA.name?.split(" ")[0] || "User";

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      {/* Hero Section */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${firstName} 👋`}
              />
              {DATA.description && (
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              )}
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials || "?"}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About Section */}
      {DATA.summary && (
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
      )}

      {/* Work Experience */}
      {DATA.work?.length > 0 && (
        <section id="work">
          <div className="flex flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade key={`work-${id}`} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end || "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {DATA.education?.length > 0 && (
        <section id="education">
          <div className="flex flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((edu, id) => (
              <BlurFade key={`edu-${id}`} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <ResumeCard
                  href={edu.href}
                  logoUrl={edu.logoUrl}
                  altText={edu.school}
                  title={edu.school}
                  subtitle={edu.degree}
                  period={`${edu.start} - ${edu.end}`}
                  description={edu.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {DATA.skills?.length > 0 && (
        <section id="skills">
          <div className="flex flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={`skill-${id}`} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects */}
      {DATA.projects?.length > 0 && (
        <section id="projects" className="w-full py-12 space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple websites to
                  complex web applications. Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade key={`project-${id}`} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
