import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800 bg-[url('/assets/blog/images/footer1.png')] bg-cover bg-center ">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center ">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            HOLA
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2 ">
            <a
              href=""
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              procsimamente
            </a>
            <a
              href={``}
              className="mx-3 font-bold hover:underline"
            >
              View on...
            </a>
          </div>
          <div>
            <iframe  src="https://open.spotify.com/embed/playlist/5tHLi307wjZY2ePmVQSgkG?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
