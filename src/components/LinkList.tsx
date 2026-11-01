import { connection } from "next/server";
import LinkCard from "@/components/LinkCard";
import { links } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";

async function loadClickCounts() {
  try {
    return await getClickCounts();
  } catch (error) {
    // DB 장애가 있어도 링크 자체는 계속 쓸 수 있어야 한다.
    console.error("클릭 수 조회 실패:", error);
    return null;
  }
}

export function LinkListFallback() {
  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} />
        </li>
      ))}
    </>
  );
}

export default async function LinkList() {
  await connection();
  const counts = await loadClickCounts();

  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            initialCount={counts ? (counts[link.id] ?? 0) : undefined}
          />
        </li>
      ))}
    </>
  );
}
