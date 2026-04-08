import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Page not found</p>
        <h1 className="mt-6 text-6xl font-bold">404</h1>
        <p className="mt-4 text-lg text-slate-400">
          The page you were looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
