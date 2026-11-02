import { Suspense } from "react";
import LinkList, { LinkListFallback } from "@/components/LinkList";
import Profile from "@/components/Profile";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-7 py-16 sm:py-24">
      <Profile {...profile} />
      <ul className="mt-12 flex flex-col gap-5">
        <Suspense fallback={<LinkListFallback />}>
          <LinkList />
        </Suspense>
      </ul>
    </main>
  );
}
