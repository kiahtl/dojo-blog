export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl mb-6">Welcome to the Dojo Blog</h1>
        <p className="text-xl">
          Navigate to <a href="/blog" className="text-blue-600 hover:underline">/blog</a> to view the blog gallery.
        </p>
      </div>
    </main>
  );
}