import { Mail, Github, Linkedin, MapPin, Youtube, Instagram } from "lucide-react";

export default function WorkWithMe() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 inline-block neu-flat px-8 py-4 rounded-3xl">
                    Work With <span className="text-[var(--primary)]">Me</span>
                </h1>
                <p className="text-xl text-foreground/70 mb-16 ml-4 max-w-2xl">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Lets connect!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-8 rounded-[2rem] neu-flat flex flex-col gap-8">
                        <h2 className="text-2xl font-bold border-b border-foreground/10 pb-4">Contact Information</h2>

                        <a href="mailto:bhardwaj.14.mit@gmail.com" className="flex items-center gap-6 p-4 rounded-2xl hover:neu-pressed transition-all group cursor-pointer border border-transparent hover:border-foreground/5">
                            <div className="w-12 h-12 rounded-xl neu-flat flex items-center justify-center text-[var(--primary)] group-hover:scale-110 transition-transform">
                                <Mail size={24}/>
                            </div>
                            <div>
                                <p className="text-sm text-foreground/50 font-medium">Email Me At</p>
                                <p className="text-lg font-semibold text-foreground">bhardwaj.14.mit@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-6 p-4 rounded-2xl border border-transparent">
                            <div className="w-12 h-12 rounded-xl neu-flat flex items-center justify-center text-[var(--primary)]">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-foreground/50 font-medium">Location</p>
                                <p className="text-lg font-semibold text-foreground">New Delhi, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-[2rem] neu-flat flex flex-col gap-8">
                        <h2 className="text-2xl font-bold border-b border-foreground/10 pb-4">Social Profiles</h2>
                        <p className="text-foreground/70">Connect with me on social media to see my latest projects.</p>

                        <div className="grid grid-cols-2 gap-6 mt-2">
                            <a href="https://github.com/Bhardwaj-16" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-6 rounded-2xl neu-btn group">
                                <Github size={32} className="group-hover:text-[var(--primary)] transition-colors"/>
                                <span className="font-semibold">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/bhardwaj-s-origin/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-6 rounded-2xl neu-btn group">
                                <Linkedin size={32} className="group-hover:text-[#0077b5] transition-colors"/>
                                <span className="font-semibold">LinkedIn</span>
                            </a>
                            <a href="https://www.youtube.com/@bhardwaj_prasad" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-6 rounded-2xl neu-btn group">
                                <Youtube size={32} className="group-hover:text-[#FF0000] transition-colors"/>
                                <span className="font-semibold">YouTube</span>
                            </a>
                            <a href="https://instagram.com/bhardwaj_prasad" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-6 rounded-2xl neu-btn group">
                                <Instagram size={32} className="group-hover:text-[#E1306C] transition-colors"/>
                                <span className="font-semibold">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
