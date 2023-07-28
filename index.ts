import { app } from "app";
import { checkPrismaConnection } from "config/prisma-client";

const PORT = process.env.PORT || 5050;

const startApp = async () => {
  await checkPrismaConnection();

  app.listen(PORT, () => console.log(`App running on PORT ${PORT}`));
};

startApp();
