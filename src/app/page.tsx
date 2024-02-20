export default function Home() {
  return (
    <div className="p-4 bg-slate-900 text-slate-100 h-screen">
      <h1 className="font-bold flex items-center gap-3
       text-5xl before:w-0.5 before:h-8
        before:bg-sky-500 before:flex">Hello tailwind</h1>
      <h2>Hello tailwind</h2>
      <p>Hello tailwind</p>
      <button disabled className="bg-sky-500
       px-4 py-2 rounded-md 
       font-semibold mt-4
       enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">Sign in</button>
    </div>
  );
}
 