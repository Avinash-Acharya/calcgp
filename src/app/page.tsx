import Gpa from "./_component/gpa";

export default function HomePage() {
  return (
    <main className=" min-h-screen bg-slate-500 text-white">
      <h1 className="bg-slate-600 text-center text-4xl font-bold">CalCGP</h1>
      <div>
        <Gpa />
      </div>
    </main>
  );
}
