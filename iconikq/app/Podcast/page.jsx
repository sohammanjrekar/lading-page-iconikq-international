import React from 'react'

const page = () => {
  return (
    <>
  {/* component */}
  <div className="flex bg-zinc-900 text-zinc-50 flex-col">
    <div className="flex flex-1 h-[calc(100vh-97px)]">
      <aside className="flex flex-col w-72 bg-zinc-950 text-zinc-100 p-2 gap-2">
        <nav className="p-4 bg-zinc-900/80 space-y-5 rounded-md">
          <a className="flex items-center gap-3 text-sm font-semibold">
            <svg
              className="w-4 h-4 text-current fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z" />
            </svg>
            Início
          </a>
          <a className="flex items-center gap-3 text-sm font-semibold">
            <svg
              className="w-4 h-4 text-current fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z" />
            </svg>
            Buscar
          </a>
        </nav>
        <div className="p-4 bg-zinc-900/80 text-zinc-100 space-y-5 rounded-md">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <svg
                className="w-4 h-4 text-current fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z" />
              </svg>
              Sua biblioteca
            </div>
            <div className="flex flex-row items-center text-zinc-400 gap-4">
              <button>
                <svg
                  className="w-4 h-4 text-current fill-current"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z" />
                </svg>
              </button>
              <button>
                <svg
                  className="w-4 h-4 text-current fill-current"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 bg-zinc-900">
        <div className="group/item bg-transparent">
          <div className="p-6 bg-gradient-to-b from-green-500/50">
            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="flex w-8 h-8 items-center justify-center rounded-full bg-myblue/40 p-1">
                  <svg
                    className="w-4 h-4 text-current fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z" />
                  </svg>
                </button>
                <button className="flex w-8 h-8 items-center justify-center rounded-full bg-myblue/40 p-1">
                  <svg
                    className="w-4 h-4 text-current fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z" />
                  </svg>
                </button>
              </div>
              <div>
                <button className="flex w-8 h-8 items-center justify-center rounded-full bg-myblue/40 p-1">
                  <svg
                    className="w-4 h-4 text-current fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z" />
                  </svg>
                </button>
              </div>
            </div>
            <h1 className="mt-10 text-3xl font-semibold">Boa tarde</h1>
            <div className="mt-4 grid grid-cols-4 gap-2">
              <div className="group flex items-center justify-between gap-4 rounded-md bg-white/5 overflow-hidden transition-colors cursor-pointer hover:bg-white/10">
                <div className="flex flex-row items-center gap-2">
                  <img
                    className="w-12 h-12"
                    src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
                    alt="Foto do álbum"
                  />
                  <span className="font-semibold text-sm">Stone Preacher</span>
                </div>
                <button className="invisible flex h-8 w-8 mr-3 items-center justify-center rounded-full bg-green-400 text-black transition-opacity group-hover:visible">
                  <svg
                    className="w-4 h-4 text-current fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" />
                  </svg>
                </button>
              </div>
              <div className="group flex items-center justify-between gap-4 rounded-md bg-white/5 overflow-hidden transition-colors cursor-pointer hover:bg-white/10">
                <div className="flex flex-row items-center gap-2">
                  <img
                    className="w-12 h-12"
                    src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
                    alt="Foto do álbum"
                  />
                  <span className="font-semibold text-sm">Stone Preacher</span>
                </div>
                <button className="invisible flex h-8 w-8 mr-3 items-center justify-center rounded-full bg-green-400 text-black transition-opacity group-hover:visible">
                  <svg
                    className="w-4 h-4 text-current fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" />
                  </svg>
                </button>
              </div>
              <div className="group flex items-center justify-between gap-4 rounded-md bg-white/5 overflow-hidden transition-colors cursor-pointer hover:bg-white/10">
                <div className="flex flex-row items-center gap-2">
                  <img
                    className="w-12 h-12"
                    src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
                    alt="Foto do álbum"
                  />
                  <span className="font-semibold text-sm">Stone Preacher</span>
                </div>
                <button className="invisible flex h-8 w-8 mr-3 items-center justify-center rounded-full bg-green-400 text-black transition-opacity group-hover:visible">
                  <svg
                    className="w-4 h-4 text-current fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" />
                  </svg>
                </button>
              </div>
              <div className="group flex items-center justify-between gap-4 rounded-md bg-white/5 overflow-hidden transition-colors cursor-pointer hover:bg-white/10">
                <div className="flex flex-row items-center gap-2">
                  <img
                    className="w-12 h-12"
                    src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
                    alt="Foto do álbum"
                  />
                  <span className="font-semibold text-sm">Stone Preacher</span>
                </div>
                <button className="invisible flex h-8 w-8 mr-3 items-center justify-center rounded-full bg-green-400 text-black transition-opacity group-hover:visible">
                  <svg
                    className="w-4 h-4 text-current fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" />
                  </svg>
                </button>
              </div>
              <div className="group flex items-center justify-between gap-4 rounded-md bg-white/5 overflow-hidden transition-colors cursor-pointer hover:bg-white/10">
                <div className="flex flex-row items-center gap-2">
                  <img
                    className="w-12 h-12"
                    src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
                    alt="Foto do álbum"
                  />
                  <span className="font-semibold text-sm">Stone Preacher</span>
                </div>
                <button className="invisible flex h-8 w-8 mr-3 items-center justify-center rounded-full bg-green-400 text-black transition-opacity group-hover:visible">
                  <svg
                    className="w-4 h-4 text-current fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" />
                  </svg>
                </button>
              </div>
              <div className="group flex items-center justify-between gap-4 rounded-md bg-white/5 overflow-hidden transition-colors cursor-pointer hover:bg-white/10">
                <div className="flex flex-row items-center gap-2">
                  <img
                    className="w-12 h-12"
                    src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
                    alt="Foto do álbum"
                  />
                  <span className="font-semibold text-sm">Stone Preacher</span>
                </div>
                <button className="invisible flex h-8 w-8 mr-3 items-center justify-center rounded-full bg-green-400 text-black transition-opacity group-hover:visible">
                  <svg
                    className="w-4 h-4 text-current fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" />
                  </svg>
                </button>
              </div>
              <div className="group flex items-center justify-between gap-4 rounded-md bg-white/5 overflow-hidden transition-colors cursor-pointer hover:bg-white/10">
                <div className="flex flex-row items-center gap-2">
                  <img
                    className="w-12 h-12"
                    src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
                    alt="Foto do álbum"
                  />
                  <span className="font-semibold text-sm">Stone Preacher</span>
                </div>
                <button className="invisible flex h-8 w-8 mr-3 items-center justify-center rounded-full bg-green-400 text-black transition-opacity group-hover:visible">
                  <svg
                    className="w-4 h-4 text-current fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" />
                  </svg>
                </button>
              </div>
              <div className="group flex items-center justify-between gap-4 rounded-md bg-white/5 overflow-hidden transition-colors cursor-pointer hover:bg-white/10">
                <div className="flex flex-row items-center gap-2">
                  <img
                    className="w-12 h-12"
                    src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
                    alt="Foto do álbum"
                  />
                  <span className="font-semibold text-sm">Stone Preacher</span>
                </div>
                <button className="invisible flex h-8 w-8 mr-3 items-center justify-center rounded-full bg-green-400 text-black transition-opacity group-hover:visible">
                  <svg
                    className="w-4 h-4 text-current fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold">Tocados recentemente</h2>
            <span className="text-sm text-zinc-400">Mostrar tudo</span>
          </div>
          <div className="mt-4 -ml-3 grid grid-cols-5 gap-2">
            <div className="flex flex-col p-3 cursor-pointer gap-2 rounded-md hover:bg-white/5">
              <img
                className="w-48 h-48 rounded-md"
                src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
                width="{120}"
                height="{120}"
                alt="Foto do álbum"
              />
              <div>
                <span className="font-semibold">Stone Preacher</span>
                <span className="text-sm text-zinc-400">Understone</span>
              </div>
            </div>
            <div className="flex flex-col p-3 cursor-pointer gap-2 rounded-md hover:bg-white/5">
              <img
                className="w-48 h-48 rounded-md"
                src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
                width="{120}"
                height="{120}"
                alt="Foto do álbum"
              />
              <div>
                <span className="font-semibold">Stone Preacher</span>
                <span className="text-sm text-zinc-400">Understone</span>
              </div>
            </div>
            <div className="flex flex-col p-3 cursor-pointer gap-2 rounded-md hover:bg-white/5">
              <img
                className="w-48 h-48 rounded-md"
                src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
                width="{120}"
                height="{120}"
                alt="Foto do álbum"
              />
              <div>
                <span className="font-semibold">Stone Preacher</span>
                <span className="text-sm text-zinc-400">Understone</span>
              </div>
            </div>
            <div className="flex flex-col p-3 cursor-pointer gap-2 rounded-md hover:bg-white/5">
              <img
                className="w-48 h-48 rounded-md"
                src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
                width="{120}"
                height="{120}"
                alt="Foto do álbum"
              />
              <div>
                <span className="font-semibold">Stone Preacher</span>
                <span className="text-sm text-zinc-400">Understone</span>
              </div>
            </div>
            <div className="flex flex-col p-3 cursor-pointer gap-2 rounded-md hover:bg-white/5">
              <img
                className="w-48 h-48 rounded-md"
                src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
                width="{120}"
                height="{120}"
                alt="Foto do álbum"
              />
              <div>
                <span className="font-semibold">Stone Preacher</span>
                <span className="text-sm text-zinc-400">Understone</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <footer className="flex items-center justify-between border-t border-zinc-700 bg-myblue px-6 py-4">
      <div className="flex items-center gap-3">
        <img
          className="w-14 h-14"
          src="https://i.scdn.co/image/ab67616d00001e023562c44947cd0b7696f95178"
          width="{56}"
          height="{56}"
          alt="Foto do álbum"
        />
        <div className="flex flex-col">
          <span className="font-normal">The Wheel Spins</span>
          <span className="text-xs text-zinc-400">Understone</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <button className="text-zinc-400">
            <svg
              className="w-4 h-4 text-current fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z" />
              <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z" />
            </svg>
          </button>
          <button className="text-zinc-400">
            <svg
              className="w-4 h-4 text-current fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z" />
            </svg>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white pl-1 text-black">
            <svg
              className="w-4 h-4 text-current fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" />
            </svg>
          </button>
          <button className="text-zinc-400">
            <svg
              className="w-4 h-4 text-current fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z" />
            </svg>
          </button>
          <button className="text-zinc-400">
            <svg
              className="w-4 h-4 text-current fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z" />
            </svg>
          </button>
          <repeat1
            className="cursor-pointer text-zinc-200 hover:text-zinc-400"
            size="{20}"
          ></repeat1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">2:43</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="h-1 w-40 rounded-full bg-zinc-200" />
          </div>
          <span className="text-xs text-zinc-400">5:00</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-zinc-400">
          <svg
            className="w-4 h-4 text-current fill-current"
            viewBox="0 0 16 16"
          >
            <path d="M11.196 8 6 5v6l5.196-3z" />
            <path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z" />
          </svg>
        </button>
        <button className="text-zinc-400">
          <svg
            className="w-4 h-4 text-current fill-current"
            viewBox="0 0 16 16"
          >
            <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z" />
          </svg>
        </button>
        <button className="text-zinc-400">
          <svg
            className="w-4 h-4 text-current fill-current"
            viewBox="0 0 16 16"
          >
            <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z" />
            <path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-current fill-current"
            viewBox="0 0 16 16"
          >
            <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" />
            <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z" />
          </svg>
          <div className="h-1 w-24 rounded-full bg-zinc-600">
            <div className="h-1 w-10 rounded-full bg-zinc-200" />
          </div>
        </div>
        <button className="text-zinc-400">
          <svg
            className="w-4 h-4 text-current fill-current"
            viewBox="0 0 16 16"
          >
            <path d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z" />
            <path d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z" />
          </svg>
        </button>
        <button className="text-zinc-400">
          <svg
            className="w-4 h-4 text-current fill-current"
            viewBox="0 0 16 16"
          >
            <path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z" />
          </svg>
        </button>
      </div>
    </footer>
  </div>
</>

  )
}

export default page