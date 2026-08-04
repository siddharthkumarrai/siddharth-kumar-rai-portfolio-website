// Optional: fetch live stars/forks for a repo from the GitHub REST API.
// Not called anywhere by default (keeps the site fast + build-time static).
// To use it, call this from a Server Component, e.g.:
//
//   const stats = await getRepoStats("siddharthkumarrai", "LMS");
//
export type RepoStats = {
  stars: number;
  forks: number;
  language: string | null;
  description: string | null;
};

export async function getRepoStats(
  owner: string,
  repo: string
): Promise<RepoStats | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      // Revalidate once an hour so the homepage stays static and fast.
      next: { revalidate: 3600 }
    });

    if (!res.ok) return null;

    const data = await res.json();
    return {
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      language: data.language ?? null,
      description: data.description ?? null
    };
  } catch {
    return null;
  }
}
