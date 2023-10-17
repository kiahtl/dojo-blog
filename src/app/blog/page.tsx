"use client";
import { Header } from "@/components/header";
import { Gallery } from "@/components/gallery";
import { default as content } from "../../content/blog-gallery.json";

export default function Blog() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-12">
        <Header {...content.header} />
        <Gallery
          articles={content.articles}
          toggleOptions={content.toggleButton.options}
        />
      </main>
    </>
  );
}
