import Tile from "../../components/tile";

export default function Blog() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="text-center">
            <h1 className="text-4xl mb-6">Welcome to the Dojo Blog</h1>
        </div>
        <Tile />
        </main>
    );
}