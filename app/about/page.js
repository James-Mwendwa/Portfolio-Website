import Experience from "@/app/components/Experience/Experience";

export default function About() {
  return (
    <div className="px-10 pt-20 font-sans">
      <h2 className="text-slate-300 text-7xl font-extrabold">About James</h2>

      <p className="text-slate-300 mt-8">
        Hey, I&apos;m James! a{" "}
        <span className="text-orange-500">Full Stack Software Developer</span>{" "}
        with <span className="text-orange-500">2+ years of experience</span>. I
        specialize in building custom <br /> web applications that leverage
        modern technologies to solve real-world problems. I&apos;m passionate
        about technology <br /> and its power to create innovative solutions. I
        enjoy working on projects that challenge me to think creatively and push{" "}
        <br />
        the boundaries of what&apos;s possible.
      </p>

      <p className="text-slate-300 mt-4">
        As a strong communicator and collaborator, I excel in working closely
        with clients to understand their needs and
        <br /> deliver tailored solutions that exceed expectations. I believe in
        the importance of clear communication and collaboration <br />{" "}
        throughout the development process to ensure project success. If
        you&apos;re a technical recruiter or a potential client <br /> looking
        to collaborate on exciting projects, I&apos;d love to hear from you!
        Feel free to reach out to me to discuss how we can <br /> work together
        to bring your ideas to life.
      </p>

      <Experience />
    </div>
  );
}
