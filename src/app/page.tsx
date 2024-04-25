import Gpa from "./_component/gpa";

// import GpaEstimator from "./_component/clad";

export default function HomePage() {
  return (
    <main className=" min-h-screen bg-slate-300 text-zinc-500">
      <nav className="fixed flex h-20 w-screen items-center justify-center bg-slate-300">
        <h1 className="px-4 py-2 text-center text-4xl font-bold">🧮CalCGP</h1>
      </nav>
      <div className="flex h-screen items-center justify-center">
        <Gpa />
        {/* <GpaEstimator /> */}
      </div>
    </main>
  );
}
