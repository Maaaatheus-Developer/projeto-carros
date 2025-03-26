import { Container } from "../../components/container";
import { useState, useEffect } from "react";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export function Home() {
  interface CarsProps {
    id: string;
    name: string;
    year: string;
    uid: string;
    price: string | number;
    city: string;
    km: string;
    images: CarImageProps[];
  }

  interface CarImageProps {
    name: string;
    uid: string;
    url: string;
  }

  const [cars, setCars] = useState<CarsProps[]>([]);

  useEffect(() => {
    function loadCars() {
      const carsRef = collection(db, "cars");
      const queryRef = query(carsRef, orderBy("created", "desc"));
      getDocs(queryRef).then((snapshot) => {
        console.log(snapshot.docs);
      });
    }
    loadCars();
  }, []);

  return (
    <Container>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          className="w-full border-2 rounded-lg h-9 px-3"
          placeholder="Digite o nome do carro"
        />
        <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg">
          Buscar
        </button>
      </section>

      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Carros novos e usados em todo o brasil
      </h1>
      <main className="grid gird-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full ronded-lg mb-2 max-h-72 hover:scale-105"
            src="https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/pulse.webp"
            alt="Carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">BMW 320i</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Ano 2016/2016 | 23.000</span>
            <strong className="text-black font-medium text-xl">
              R$ 190.000
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>
          <div className="px-2 pb-2">
            <span className="text-zinc-700">Três de maio - RS</span>
          </div>
        </section>
      </main>
    </Container>
  );
}
