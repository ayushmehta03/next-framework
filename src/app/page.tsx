import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black  bg-cover bg-center bg-home-img  ">
      <main className="flex flex-col  justify-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96  mx-auto text-white sm:text-2xl ">
          <h1 className="text-4xl font-bold ">Dan's Computer <br />Repair Shop</h1>
          <address>
            555 GateWay Lane <br />
            Kansas City,KS 55555
          </address>
          <p>Open Daily: 9am to 5pm</p>
          <Link  href="tel:5555555" className="hover:underline">
          55555555
          </Link>
        </div>
      </main>
    </div>
  );
}