import { Suspense } from "react";
import LinkList, { LinkListFallback } from "@/components/LinkList";
import Profile from "@/components/Profile";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-md flex-1 px-4 py-12 sm:py-16">
      <Profile {...profile} />
      <ul className="mt-10 flex flex-col gap-6">
        <Suspense fallback={<LinkListFallback />}>
          <LinkList />
        </Suspense>
      </ul>
    </main>
  );
}
