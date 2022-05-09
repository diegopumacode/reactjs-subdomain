import React from 'react'
import { users } from '../App'

type Props = {}

export default function NotFound({ }: Props) {
  return (
    <div className="relative bg-white overflow-hidden h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">404</span>{' '}
                <span className="block text-indigo-600 xl:inline">Not Found</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                The page you are looking for does not exist.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {
                  users.map(user => (
                    <div key={user.username} className="rounded-md shadow mr-3 mt-2">
                      <a
                        href={'http://'+user.username + '.localhost:3000/'}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        {user.username}.localhost:3000
                      </a>
                    </div>
                  ))
                }


              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  )
}