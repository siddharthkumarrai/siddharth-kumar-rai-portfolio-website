import { FileText, Star, GitFork } from "lucide-react";
import { repos } from "@/data/software";

export default function SoftwareSection() {
  return (
    <section className="mt-14 pb-10">
      <h2>
        Software
      </h2>

      {repos.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {repos.map((repo) => (
            <div
              key={repo.name}
              className="min-w-0 rounded-md border-[1.5px] border-gray-200 bg-white p-3"
            >
              <div>
                <FileText
                  className="inline-block align-middle text-gray-600"
                  size={12}
                />
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block align-middle ml-1 text-sm text-blue-700 hover:underline"
                >
                  {repo.owner}
                  <span className="font-semibold">/{repo.repo}</span>
                </a>
                {repo.badge && (
                  <div className="inline-block ml-2 rounded-full border-[1px] border-gray-300 px-1.5 text-xs text-gray-600">
                    {repo.badge}
                  </div>
                )}
              </div>

              <div className="mt-2.5 text-xs text-gray-600">
                {repo.description}
              </div>

              <div className="mt-2.5 text-xs">
                {repo.language && (
                  <span className="inline-block align-middle">
                    <span
                      className={`rounded-full w-3 h-3 inline-block align-middle ${repo.languageColor}`}
                    />
                    <span className="inline-block ml-1 w-12 align-middle text-gray-600">
                    {repo.language}
                    </span>
                  </span>
                )}
                <a
                  href={`${repo.href}/stargazers`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline !text-gray-600 hover:!text-blue-500"
                >
                  <div className="ml-4 inline-block align-middle text-base">
                    <Star size={12} />
                  </div>
                  <div className="inline-block ml-[2px] align-middle">
                    {repo.stars ?? "—"}
                  </div>
                </a>
                <a
                  href={`${repo.href}/network/members`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline !text-gray-600 hover:!text-blue-500"
                >
                  <div className="ml-4 inline-block align-middle text-base">
                    <GitFork size={12} />
                  </div>
                  <div className="inline-block ml-[2px] align-middle">
                    {repo.forks ?? "—"}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
