import { ProjectsList, type Repo } from "@/components/projects-list";
import { GITHUB_API_URL } from "@/lib/constants";

interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  topics: string[];
  fork: boolean;
  language: string | null;
}

async function getRepos(): Promise<Repo[]> {
  const url = new URL(`${GITHUB_API_URL}/repos`);
  url.searchParams.set("sort", "stars");
  url.searchParams.set("direction", "desc");
  url.searchParams.set("per_page", "30");
  url.searchParams.set("type", "owner");

  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github.v3+json" },
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];

  const data: GitHubRepo[] = await res.json();

  return data
    .filter(repo => !repo.fork)
    .map(repo => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description ?? "",
      stars: repo.stargazers_count,
      topics: repo.topics,
      language: repo.language,
    }));
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <main className="max-w-2xl mx-auto flex flex-col px-6 pt-6 sm:pt-12 relative container font-mono">
      <ProjectsList repos={repos} />
    </main>
  );
}
