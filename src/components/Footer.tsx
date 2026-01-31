export default function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/10 py-20 flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
                Vote Sweet & Salty
            </h2>
            <p className="text-gray-500 text-lg mb-10 tracking-widest uppercase">
                Avilés, Asturias
            </p>
            <button className="px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors hover:scale-105 active:scale-95 duration-300">
                Vota Ahora
            </button>

            <div className="mt-20 text-gray-700 text-sm">
                &copy; 2026 Sweet & Salty Burger Concept.
            </div>
        </footer>
    );
}
