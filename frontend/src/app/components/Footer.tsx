import Image from "next/image";

export const Footer = () => {
  return(
    <footer className="w-full h-[26px] fixed bottom-0 items-center bg-blue flex justify-end text-white pr-32">
      <p>Hero Tickets ® {new Date().getFullYear()} | </p>
      <p> Todos os Direitos Reservados</p>
    </footer>
  );
}