import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import FormattedDate from "@/components/FormattedDate";
import { featuredProjects } from "@/lib/projects";

export default async function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-black/5 px-3 py-1 text-sm">
              Full Stack Developer
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Building Intuitive Digital Solutions
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[600px]">
              Crafting modern web applications with a focus on user experience,
              security and performance.
            </p>
            <div className="flex gap-4">
              <Link
                href="/#projects"
                className="transition-opacity flex items-center text-sm font-medium gap-2 text-white bg-black hover:bg-black/90 h-10 rounded-md px-8"
              >
                View Projects
              </Link>
              <Link
                href="/#contact"
                className="transition-opacity flex items-center text-xs font-medium gap-2 bg-white hover:bg-white/90 hover:text-accent-foreground h-10 rounded-md px-8"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="relative aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent rounded-lg transform rotate-3"></div>
            <img
              src="/ghibli-avatar.png"
              alt=""
              className="select-none drag-none grayscale-[50%] w-full max-w-[32rem] aspect-square rounded-lg object-cover transform -rotate-3 transition-transform hover:rotate-0"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              About Me
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Full-stack developer with a passion for building sleek, scalable,
              and high-performance web applications. Skilled in modern
              technologies, I thrive on solving complex problems and crafting
              seamless user experiences. Everywhere across the stack, I bring
              creativity, precision, and a user-first mindset to every project.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Vue",
              "TailwindCSS",
              "Node.js",
              "Python",
              "Docker",
              "AWS",
              "SQL",
              "MongoDB",
              "API Dev't",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="justify-center py-3 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-black/5 py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">
            Featured Personal Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.title} className="group overflow-hidden">
                <div className="relative max-h-56 overflow-hidden rounded-lg">
                  <img
                    src={project?.imageSrc}
                    alt={`Project ${project.title}`}
                    className="rounded-[inherit] w-full h-auto transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-bold text-xl">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="flex items-center text-xs font-medium gap-2 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="flex items-center text-xs font-medium gap-2 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="container py-16 md:py-20">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Latest Posts
            </h2>
            <Link href="/blog">
              <span className="flex items-center gap-2">
                View All Posts
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex justify-between items-center py-4 border-b"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xl font-semibold hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
                <time className="text-sm text-muted-foreground">
                  <FormattedDate
                    date={new Date(post.date)}
                    formatTemplate="MMM DD, YYYY"
                  />
                </time>
              </div>
            ))}
            {posts.length === 0 && <p>Coming soon...</p>}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Get In Touch
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Whether you have a project in mind or just want to connect, I&apos;m
            open to discussing new opportunities and ideas.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="mailto:dopewevmond@gmail.com"
              className="border border-input flex items-center text-sm font-medium gap-2 bg-background hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href="https://github.com/dopewevmond"
              target="_blank"
              className="border border-input flex items-center text-sm font-medium gap-2 bg-background hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/wevmond"
              className="border border-input flex items-center text-sm font-medium gap-2 bg-background hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
