'use client'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export default function Home() {

  // https://la28mzl.vercel.app/item=Valvula&reference=Check+en+bronce+vertical+3"&brand=&price=165000
  //            localhost:3000/?item=Valvula&reference=Check+en+bronce+vertical+3"&brand=&price=165000


  const searchParams = useSearchParams()
  const item = searchParams.get('item')
  const reference = searchParams.get('reference')
  const brand = searchParams.get('brand')
  const price = searchParams.get('price')

  console.log(item);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p> */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            // href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            La 28 Ferreteria,<br />
            Barrio la Enea,<br /> Manizales, Caldas
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
          </a>
        </div>
      </div>
      <h2 className={`text-2xl font-semibold`}>Ficha técnica de producto</h2>
      <div className='bg-slate-700'>
        <div className="mb-32 grid text-left lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 text-1xl font-semibold`}>
              Item:{' '}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-80`}>
              {item}
            </p>
          </a>

          <a
            // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 text-1xl font-semibold`}>
              Referencia:{' '}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-80`}>
              {reference}
            </p>
          </a>

          <a
            // href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 text-1xl font-semibold`}>
              Marca:{' '}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-80`}>
              {brand ? brand : 'n/a'}
            </p>
          </a>

          <a
            // href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 text-1xl font-semibold`}>
              Precio:{' '}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-80`}>
              {`$${price}`}
            </p>
          </a>
        </div>
      </div>
    </main>
  )
}
