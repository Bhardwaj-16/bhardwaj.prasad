import Link from 'next/link';
import Navbar from '@/components/Navbar';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

async function getRepos() {
  const res = await fetch('https://api.github.com/users/bhardwaj-16/repos', {
    next: { revalidate: 3600 }, // 1 hour
  });
  if (!res.ok) {
    throw new Error('Failed to fetch repos');
  }
  return res.json() as Promise<Repo[]>;
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  const pinnedRepos = repos.filter(repo => repo.name.toLowerCase().includes('origin'));
  const otherRepos = repos.filter(repo => !repo.name.toLowerCase().includes('origin'));

const renderRepoCard = (repo: Repo) => {
    let cleanDescription = repo.description;
    let tag = null;
    
    if (repo.description) {
      const match = repo.description.match(/\[(.*?)\]/);
      if (match) {
        tag = match[1];
        cleanDescription = repo.description.replace(match[0], '').trim();
      }
    }

    return (
      <a 
        href={repo.html_url} 
        target="_blank" 
        rel="noopener noreferrer" 
        key={repo.id} 
        className="block group"
      >
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full transition-all duration-300 hover:border-gray-600 hover:bg-gray-800/50 hover:-translate-y-1 flex flex-col">
          <div className="flex items-center flex-wrap gap-3 mb-3">
            <h2 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors truncate">
              {repo.name}
            </h2>
            {tag && (
              <span className="px-2 py-0.5 text-xs font-medium tracking-wide text-orange-400 border border-orange-900 rounded bg-orange-950/30 whitespace-nowrap">
                {tag.toUpperCase()}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400 line-clamp-3 mb-4">
            {cleanDescription || 'No description available for this project.'}
          </p>
        <div className="text-xs font-medium tracking-widest text-gray-500 uppercase mt-auto pt-4 flex justify-between items-center">
          <span>View on GitHub</span>
          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </a>
  );
};

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gray-800">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-16">
        {pinnedRepos.length > 0 && (
          <section className="mb-16">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wider mb-8 text-white flex items-center gap-3">
              <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              PINNED PROJECTS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pinnedRepos.map(renderRepoCard)}
            </div>
          </section>
        )}

        <section>
          <h1 className="text-3xl md:text-4xl font-bold tracking-wider mb-8 text-gray-300">
            ALL PROJECTS
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherRepos.map(renderRepoCard)}
          </div>
        </section>
      </main>
    </div>
  );
}
