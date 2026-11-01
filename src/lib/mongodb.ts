import { MongoClient } from "mongodb";

// 개발 모드의 핫 리로드에서도 연결을 재사용하도록 globalThis에 보관한다.
const globalForMongo = globalThis as typeof globalThis & {
  mongoClient?: Promise<MongoClient>;
};

export async function getDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI가 설정되지 않았습니다.");
  }

  globalForMongo.mongoClient ??= new MongoClient(uri).connect().catch((error) => {
    globalForMongo.mongoClient = undefined;
    throw error;
  });

  const client = await globalForMongo.mongoClient;
  return client.db("linknamu");
}
