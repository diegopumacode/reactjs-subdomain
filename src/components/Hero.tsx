type Props = {
  username: string
  age: number,
  hobbies: string[]
}

export default function Hero({ username = 'diego', age = 123, hobbies = [] }: Props) {
  return (
    <div className="relative bg-white overflow-hidden h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="">

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hola soy</span>{' '}
                <span className="block text-indigo-600 xl:inline">{username}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Tengo {age} anios y soy una persona muy creativa.
              </p>

              <div className="mt-2 sm:mt-8 sm:flex lg:justify-start">
                <dl className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-2">
                  {hobbies.map((hobbie) => (
                    <div key={hobbie} className="relative">
                      <dt className="bg-indigo-600 p-2 rounded-lg">
                        <p className="text-lg leading-6 font-medium text-xs text-white">{hobbie}</p>
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </main>
        </div>
      </div>

    </div>
  )
}