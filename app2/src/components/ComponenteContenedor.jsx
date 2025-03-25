import React from "react";

const CatBio = () => {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-xl p-8 space-y-8">
        {/* Foto de Gato */}
        <div className="w-full rounded-lg overflow-hidden">
          <img
            src="https://th.bing.com/th/id/OIP.CV4Y3WlyczOsJ_XJlsf-sgHaEK?rs=1&pid=ImgDetMain"
            alt="Foto de un gato"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Datos del Gato */}
        <div className="space-y-4">
          {/* Nombre */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl font-bold">Nombre:</h2>
            <p className="text-gray-600 text-sm md:text-base">Whiskers</p>
          </div>

          {/* Edad */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl font-bold">Edad:</h2>
            <p className="text-gray-600 text-sm md:text-base">3 años</p>
          </div>

          {/* Información adicional */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl font-bold">Información adicional:</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Los gatos son conocidos por su agilidad y gracia. Son animales
              independientes, pero también pueden ser muy cariñosos. Los gatos
              tienen una excelente visión nocturna y un agudo sentido del oído.
              Además, tienen un sentido del olfato muy desarrollado, mucho más
              fuerte que el de los humanos. Los gatos son crepusculares, lo que
              significa que son más activos al amanecer y al atardecer.
            </p>
          </div>

          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="https://th.bing.com/th/id/OIP.SJZ4dgkuzHtCLPt6IFKN1AHaFj?w=245&h=184&c=7&r=0&o=5&pid=1.7"
              alt="Gato durmiendo"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl font-bold">Curiosidades:</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Los gatos pueden dormir hasta 16 horas al día. Tienen cinco dedos en las patas delanteras y cuatro en las traseras. Los gatos ronronean para expresar satisfacción y también como mecanismo de autocuración.
            </p>
          </div>

          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/03/29/841328423-gato-siames-1.jpg"
              alt="Gato siames"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl font-bold">Razas comunes:</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Siamese, Maine Coon, Persian, Ragdoll, British Shorthair.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatBio;