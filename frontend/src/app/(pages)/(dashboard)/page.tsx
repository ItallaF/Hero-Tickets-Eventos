export default function Dashboard() {
  return (
    <div className="container mx-auto">
      <div className="rounded p-5">
        <div className="w-[1175px] h-[280px] relative bg-black bg-opacity-25 rounded-3xl shadow">
          <div className="p-5 text-white pb-5 absolute bottom-0">
            <h3 className="text-5xl pb-4 font-bold">Jorge & Mateus</h3>
            <div className="flex">
              <div className="mr-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>

                <p>08/07/2023</p>
              </div>
              <div className="mr-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <p>Mineirão - Belo Horizonte</p>
              </div>
              <div className="mr-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>14h</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-blue p-4 mr-14">
          <div>
            <p>desasdfasdf</p>
          </div>
          <div>
            {/* <FormWrapper /> */}
          </div>
        </div>
      </div>

      <div>
        <div className="p-2 text-blue ml-4">
          <p className="text-2xl font-medium">Eventos em Destaques</p>
          <p className="text-base font-light">Se divirta com os principais eventos de Minas Gerais e do Brasil!</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4 w-[1160px]">
          <div className="rounded p-5">
            <div className="w-[382px] h-[150px] relative bg-black bg-opacity-30 rounded-3xl shadow">
              <div className="p-5 text-white pb-5 absolute">
                <div className="flex">
                  <h3 className="text-stone-50 text-2xl font-semibold">MPB Sessions</h3>
                </div>
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <p>08/07/2023</p>
                  <div className="mr-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>14h</p>
                  </div>
                </div>
              </div>
              <div className="flex p-5 text-white pb-5 absolute bottom-0">
                <div className="mr-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  <p>Mineirão - Belo Horizonte</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded p-5">
            <div className="w-[382px] h-[150px] relative bg-black bg-opacity-30 rounded-3xl shadow">
              <div className="p-5 text-white pb-5 absolute">
                <div className="flex">
                  <h3 className="text-stone-50 text-2xl font-semibold">MPB Sessions</h3>
                </div>
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <p>08/07/2023</p>
                  <div className="mr-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>14h</p>
                  </div>
                </div>
              </div>
              <div className="flex p-5 text-white pb-5 absolute bottom-0">
                <div className="mr-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  <p>Mineirão - Belo Horizonte</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded p-5">
            <div className="w-[382px] h-[150px] relative bg-black bg-opacity-30 rounded-3xl shadow">
              <div className="p-5 text-white pb-5 absolute">
                <div className="flex">
                  <h3 className="text-stone-50 text-2xl font-semibold">MPB Sessions</h3>
                </div>
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <p>08/07/2023</p>
                  <div className="mr-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>14h</p>
                  </div>
                </div>
              </div>
              <div className="flex p-5 text-white pb-5 absolute bottom-0">
                <div className="mr-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  <p>Mineirão - Belo Horizonte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-2 text-blue ml-4">
          <p className="text-2xl font-medium">Navegue por tipo de evento</p>
          <p className="text-base font-light">Vá ao evento que é a sua cara :D</p>
        </div>
        <div className="grid md:grid-cols-7 grid-cols-2 lg:gap-2  sm:gap-1">
          
        </div>
      </div>
    </div>
  );
}
