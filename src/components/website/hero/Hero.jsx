import React from 'react'

function Hero() {
  return (
    <section className="min-h-[90vh] bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black leading-none">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-2xl text-gray-300 max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105">
                Converter Agora
              </button>
              <button className="text-amber-600 hover:text-amber-700 underline underline-offset-4 px-6 py-3 font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2">
                Saiba Mais
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Coluna 2: Espaço vazio para mostrar background */}
          <div className="hidden lg:block">
            {/* Espaço reservado para futura implementação */}
            <div className="h-96"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero