import { Suspense } from "react";

import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions";
import { getCachedContributions } from "@/lib/get-cached-contributions";

const GITHUB_USERNAME = "abdellatif-laghjaj";
const GITHUB_PROFILE_URL = "https://github.com/abdellatif-laghjaj";

export default function GitHubSection() {
  const contributions = getCachedContributions(GITHUB_USERNAME);

  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/20">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
              Curious about my GitHub?
            </p>
          </div>
          <div className="border-t border-primary/20">
            <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
              <Suspense fallback={<GitHubContributionsFallback />}>
                <GitHubContributions
                  contributions={contributions}
                  githubProfileUrl={GITHUB_PROFILE_URL}
                  className={
                    '**:data-[level="0"]:fill-[#eff2f5] dark:**:data-[level="0"]:fill-[#151b23] **:data-[level="1"]:fill-[#f0db3d] dark:**:data-[level="1"]:fill-[#fac68f] **:data-[level="2"]:fill-[#ffd642] dark:**:data-[level="2"]:fill-[#c46212] **:data-[level="3"]:fill-[#f68c41] dark:**:data-[level="3"]:fill-[#984b10] **:data-[level="4"]:fill-[#1f2328] dark:**:data-[level="4"]:fill-[#e3d04f]'
                  }
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
