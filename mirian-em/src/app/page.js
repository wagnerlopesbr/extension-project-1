import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 relative">
      <div className="absolute top-16">
        <Image
          src="/images/logo3.svg"
          alt="Logo"
          width={700}
          height={100}
        />
      </div>
      <div className="flex items-center justify-center h-screen">
        {/* div produtos */}
        <div className="mb-32 text-center lg:max-w-2xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <div
            className="group rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-2 text-6xl font-semibold`}>
              Embalagens{" "}{"📦"}
            </h2>
            <p className={`m-0 max-w-[30ch] text-2xl text-sm opacity-70`}>
              Para sua casa, alimentos, comércio, empresa, eventos, festas e muito mais.
            </p>
          </div>
          <div
            className="group rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-2 text-6xl font-semibold`}>
              Mercadinho{" "}{"🏪"}
            </h2>
            <p className={`m-0 max-w-[30ch] text-2xl text-sm opacity-70`}>
              Alimentos frescos ou congelados, bebidas, produtos de limpeza, utensílios e muito mais.
            </p>
          </div>
        </div>
        
        {/* div contato */}
        <div
          className="min-w-[400px] min-h-[380px] group rounded-lg border border-transparent px-6 py-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <div className="mb-12 text-6xl font-semibold">
            {"📞 "}Contato:<br></br>
          </div>
          <div className="mb-4 text-3xl m-8">
            <ul>
              <li>
                (22) 2141-6573
              </li>
              <li>
                (22) 99955-7336
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </main>
  );
}
