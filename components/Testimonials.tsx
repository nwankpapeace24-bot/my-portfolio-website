import { getTestimonials } from "@/lib/actions";
import TestimonialsClient from "./TestimonialClient";

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return <TestimonialsClient testimonials={testimonials} />;
}
