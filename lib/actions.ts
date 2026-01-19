"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// --- PORTFOLIO ACTIONS ---

export async function getPortfolioItems() {
  return await prisma.portfolioItem.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function upsertPortfolioItem(data: any) {
  const { id, ...rest } = data;
  const targetId = id || "00000000-0000-0000-0000-000000000000";

  // 1. Sanitize: Only keep fields that exist in the PortfolioItem schema
  const schemaValidData = {
    title: rest.title,
    category: rest.category || "General",
    type: rest.type,
    client: rest.client,
    description: rest.description,
    image: rest.image,
    link: rest.link,
    tags: rest.tags || [],
    featured: rest.featured || false,
    rating: parseFloat(rest.rating.toString()) || 5.0,
    isHidden: rest.isHidden || false,
    color: rest.color || null,
    icon: rest.icon || null,
  };

  const item = await prisma.portfolioItem.upsert({
    where: { id: targetId },
    update: schemaValidData,
    create: schemaValidData,
  });

  revalidatePath("/");
  revalidatePath("/admin");
  return item;
}

// --- TESTIMONIALS ACTIONS ---

export async function getTestimonials() {
  return await prisma.testimonial.findMany({
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });
}

export async function upsertTestimonial(data: any) {
  const { id, ...rest } = data;
  const targetId = id || "00000000-0000-0000-0000-000000000000";

  // REMOVED 'image' because your schema doesn't have it for Testimonials
  const { image, ...schemaValidData } = rest; 

  const testimonial = await prisma.testimonial.upsert({
    where: { id: targetId },
    update: schemaValidData,
    create: schemaValidData,
  });

  revalidatePath("/");
  revalidatePath("/admin");
  return testimonial;
}

export async function deletePortfolioItem(id: string) {
  await prisma.portfolioItem.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deleteTestimonial(id: string) {
  await prisma.testimonial.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin");
}