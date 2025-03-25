const Home = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-blue-600">Bienvenido a esta app de prueba</h1>
                <p className="mt-4 text-gray-700">Explora las funcionalidades y disfruta de la experiencia.</p>
            </header>
            <main className="mt-8">
                <button className="px-6 py-3 text-blue-600 bg-blue-500 rounded-lg hover:bg-blue-600">
                    Ejemplo de navegacion
                </button>
            </main>
        </div>
    );
};

export default Home;