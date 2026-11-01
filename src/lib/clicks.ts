import { getDb } from "@/lib/mongodb";

type ClickDocument = {
  _id: string;
  count: number;
};

async function getCollection() {
  const db = await getDb();
  return db.collection<ClickDocument>("clicks");
}

export async function getClickCounts(): Promise<Record<string, number>> {
  const collection = await getCollection();
  const documents = await collection.find().toArray();
  return Object.fromEntries(documents.map(({ _id, count }) => [_id, count]));
}

export async function incrementClickCount(linkId: string) {
  const collection = await getCollection();
  await collection.updateOne(
    { _id: linkId },
    { $inc: { count: 1 } },
    { upsert: true },
  );
}
