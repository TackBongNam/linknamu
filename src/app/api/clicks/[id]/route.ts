import { links } from "@/data/profile";
import { incrementClickCount } from "@/lib/clicks";

export async function POST(
  _request: Request,
  { params }: RouteContext<"/api/clicks/[id]">,
) {
  const { id } = await params;

  if (!links.some((link) => link.id === id)) {
    return new Response(null, { status: 404 });
  }

  try {
    await incrementClickCount(id);
  } catch (error) {
    console.error("클릭 수 저장 실패:", error);
    return new Response(null, { status: 503 });
  }

  return new Response(null, { status: 204 });
}
