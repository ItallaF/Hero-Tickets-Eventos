import { BannerPrimary } from "@/app/components/BannerPrimary";
import { BannerSecundary } from "@/app/components/BannerSecondary";
import { categories } from "@/app/utils/categories";

export default function Dashboard() {
  return (
    <div className="container mx-auto">
      <BannerPrimary />
      <div>
        <div className="p-2 text-blue ml-4">
          <p className="text-2xl font-medium">Eventos em Destaques</p>
          <p className="text-base font-light">Se divirta com os principais eventos de Minas Gerais e do Brasil!</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4 w-[1160px]">
          <BannerSecundary />
          <BannerSecundary />
          <BannerSecundary />
        </div>
      </div>
      <div className="p-2 text-blue ml-4">
        <p className="text-2xl font-medium">Navegue por tipo de evento</p>
        <p className="text-base font-light">Vá ao evento que é a sua cara :D</p>
      </div>
      <div className=""></div>
      <div className="grid md:grid-cols-7 grid-cols-2 lg:gap-2  sm:gap-1 w-[1196px]">
        {categories.map((categorie) => {
          return (
            <div className="flex flex-col gap-0 items-center justify-center cursor-pointer">
              <img src={categorie.icon} alt="" className="rounded-full" />
              <p>{categorie.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
