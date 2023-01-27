import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

// https://app.rocketseat.com.br/plus/lesson/iniciando-o-projeto-de-ponta-a-ponta-or-trilha-ignite-nlw-copa
// 00:35

const prisma = new PrismaClient({
  log: ["query", "error"],
});

async function bootstrap() {
  const fastify = Fastify({ logger: true });

  await fastify.register(cors, { origin: true });

  fastify.get("/pools/count", async () => {
    const count = await prisma.pool.count();

    return { count };
  });

  // config for mobile lolcahost -> host: "0.0.0.0"
  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
