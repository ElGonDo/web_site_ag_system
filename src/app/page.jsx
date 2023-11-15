"use client"
import Section_Principal from "./Components/Section_Home/Section_Principal";
import SectionProducto from "./Components/Producto/Section_Producto";
import ProfileCards from "./Components/Nosotros/ProfileCards";
import Info from "./Components/MisionVision/Info";
export default function Home() {
  return (
    <div >
      <Section_Principal/>
      <SectionProducto/>

    <div className="border-t-2  border-blue-500 mb-12">
    <div class="flex flex-col justify-center items-center ">
  <h1 class="text-4xl text-white font-semibold mb-4 transition-transform duration-500 transform hover:scale-110 mt-8">
    ¿Quiénes somos?
  </h1>
  <p class="text-white mb-5">Somos una empresa....</p>
    </div>
        <div className="flex flex-wrap justify-center">
      <ProfileCards
        imgSrc="/img/Equipo/jerry.png"
        name="Ivan Sepulveda"
        role="Desarrollador de software"
        portfolioLink=""
        githubLink=""
        linkedinLink=""
      />
      <ProfileCards
        imgSrc="/img/Equipo/joseph.png"
        name="Joseph Lopez"
        role="CEO-Director ejecutivo"
        portfolioLink=""
        githubLink=""
        linkedinLink=""
      />
      <ProfileCards
        imgSrc="/img/Equipo/KarenP.jpeg"
        name="Karen Perez"
        role="Gerente de producto"
        portfolioLink=""
        githubLink="https://github.com/Karen908"
        linkedinLink="https://www.linkedin.com/in/karenperez135/"
      />
      <ProfileCards
        imgSrc="/img/Equipo/andres.png"
        name="Andres Matuk"
        role="Director de proyecto"
        portfolioLink=""
        githubLink=""
        linkedinLink=""
      />
      <ProfileCards
        imgSrc="/img/Equipo/armando1.png"
        name="Armando Torrez"
        role="Director de desarrollo"
        portfolioLink=""
        githubLink=""
        linkedinLink=""
      />
       </div>
    </div>
    <div className="mis flex flex-col sm:flex-row">
      <div >
        <div className="aspect-w-1 aspect-h-1 w-96 h-96 mx-auto mt-8 md:ml-8 lg:ml-8 xl:ml-8 ">
          <img
            src='/img/Logos_Empresa/logo_cir.png'
            alt="Logo"
            className='object-cover w-full h-full'
          />
        </div>
      </div>
      <div className="mt-8 sm:ml-8 md:ml-12 lg:ml:12 lx:ml:12">
        <Info />
      </div>
    </div>
    </div>
  );
}


