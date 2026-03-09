import { Briefcase, Award, Zap } from "lucide-react";

export default function AboutMe() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto flex flex-col gap-16">
                <section className="flex felx-col gap-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight inline-block neu-flat px-8 py-4 rounded-3xl self-start">
                        About <span className="text-[var(--primary)]">Me</span>
                    </h1>
                    <p className="text-xl text-foreground/80 leading-relaxed font-medium mt-4">
                        I am Bhardwaj Prasad Sutara, an AI, Robotics and Technology Enthusiast based in New Delhi, India.
                    </p>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                        I'm a highschool student with a vision to build AI that transforms the way we live and work. I love AI, Robotics and IoT. I am the founder of ORIGIN AI-a personal AI designed to run organically on your own infrastructure.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3"><Briefcase className="text-[var(--primary)]" /> Experience</h2>
                    <div className="grid grid-cols-1 gap-8">
                        <div className="p-8 rounded-[2rem] neu-flat flex flex-col  gap-3 group">
                            <div className="flex justify-between items-start flex-wrap gap-4">
                                <h3 className="text-xl font-bold group-hover:text-[var(--primary)] transition-colors">Founder / Creator</h3>
                                <span className="text-sm font-semibold bg-[var(--primary)]/10 text-[var(--primary)] px-4 py=1.5 rounded-full neu-pressed">ORIGIN AI</span>
                            </div>
                            <p className="text-sm text-foreground/50 font-medium">June 2024 - Present</p>
                            <p className="text-foreground/70 leading-relaxed mt-2">
                            Developing ORIGIN AI, an Artificial Intelligence having all accepts which power Human Intelligence that integrates with your preferred chat apps, autonomously executes tasks, writes code, controls you calendar, and orchaestrates other AI agents. The core innovation is persistent memory, an external skill system, and running on local infra.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] neu-flat flex flex-col gap-3 group">
                            <div className="flex justify-between  items-start flex-wrap gap-4">
                                <h3 className="text-xl font-bold group-hover:text-[var(--primary)] transition-colors">Artificial Intelligence Intern</h3>
                                <span className="text-sm font-semibold bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1.5 rounded-full neu-pressed">sortmyprep</span>
                            </div>
                            <p className="text-sm text-foreground/50 font-medium">February 2026 - Present</p>
                            <p className="text-foreground/70 leading-relaxed mt-2">
                                Lead AI Architect at sortmyprep, an AI-powered EdTech platform for IGCSE, A levels prep.I helped in designing systems that gave access to personalized AI Tutors and unlimited dynamic questions.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] neu-flat flex flex-col gap-3 group">
                            <div className="flex justify-between items-start flex-wrap gap-4">
                                <h3 className="text-xl font-bold group-hover:text-[var(--primary)] transition-colors">Director of Product Development</h3>
                                <span className="text-sm font-semibold bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1.5 rounded-full neu-pressed">STEM for Change</span>
                            </div>
                            <p className="text-sm text-foreground/50 font-medium">April 2024 - February 2025</p>
                            <p className="text-foreground/70 leading-relaxed mt-2">
                                Led product development at a early stage nonprofit, shipping 100+ solar-powered DIY fans for underserved communities.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] neu-flat flex flex-col gap-3 group">
                            <div className="flex justify-between items-start flex-wrap gap-4">
                                <h3 className="text-xl font-bold group-hover:text-[var(--primary)] transition-colors">Research Team lead</h3>
                                <span className="text-sm font-semibold bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1.5 rounded-full neu-pressed">InsightX Research</span>
                            </div>
                            <p className="text-sm text-foreground/50 font-medium">October 2023 - July 2024</p>
                            <p className="text-foreground/70 leading-relaxed mt-2">
                            Research lead for the Astronomy Division. Published 3 papers and developed skills in organization, storytelling and research.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-[2rem] neu-flat flex flex-col gap-6">
                        <h2 className="text-xl font-bold flex items-center gap-3"><Zap className="text-[var(--primary)]" /> Top Skills</h2>
                        <div className="flex flex-wrap gap-3">
                            {['Artificial Intelligence', 'Gen AI', 'Python', 'Machine Learning', 'Next.js', 'React', 'TypeScript', 'Node.js', 'PyTorch', 'Robotics'].map((skill) => (
                                <span key={skill} className="px-4 py-2 rounded-xl neu-btn text-sm font-semibold text-foreground/80 hover:text-[var(--primary)] transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 rounded-[2rem] neu-flat flex flex-col gap-6">
                        <h2 className="text-xl font-bold flex items-center gap-3"><Award className="text-[var(--primary)]" /></h2>
                        <ul className="flex flex-col gap-4 text-foreground/70 text-sm">
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                            <span className="leading-relaxed">Certified by NASA (AI for Earth Observations)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                            <span className="leading-relaxed">Certified by ISRO (Space Science & Applications)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                            <span className="leading-relaxed">Certificate of Participation in India's Biggest AI Hackathon</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                            <span className="leading-relaxed">Led impactful STEM initiatives for clean energy</span>
                        </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
}