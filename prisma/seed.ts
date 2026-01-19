import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash(
    "Withinthesewickedwalls.",
    10
  );

  const admin = await prisma.user.upsert({
    where: { email: "nwankpapeace24@gmail.com" },
    update: {},
    create: {
      email: "nwankpapeace24@gmail.com",
      name: "Peace Nwankpa",
      password: hashedPassword,
    },
  });

  console.log("✅ Admin user seeded successfully:", admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
