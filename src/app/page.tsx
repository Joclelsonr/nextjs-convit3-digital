"use client";

import { Logo } from "@/components/logo";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Home() {
  return (
    <div className="text-white bg-black">
      {/* Header */}
      <header className="text-white body-font">
        <div className="container mx-auto flex justify-between p-5 md:flex-row">
          <Logo />
          <div className="md:flex flex-grow items-end justify-end">
            <Link
              href="/auth"
              className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-600 transition duration-500 ease-in-out transform rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Crie seu evento
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="text-black body-font lg:pt-20">
        <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
          <div className="flex flex-col w-full mb-2 text-left md:text-center ">
            <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
              <span>
                Gerencie <span className="text-blue-500">eventos</span>
              </span>
              <br className="hidden lg:block"></br>
              de forma simples
            </h1>
            <br></br>
            <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              Convit3 digital é uma ferramenta de modelo gratuito para gerenciar
              eventos de forma simples e eficiente.
            </p>
          </div>
        </div>
        <div className="container flex items-center justify-center py-8 mx-auto rounded-lg">
          <Image
            src="/example.png"
            alt="Example"
            width={800}
            height={800}
            className="rounded-lg shadow-2xl shadow-blue-500 "
          />
        </div>

        <section className="text-gray-600 body-font">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
                    <CountUp end={623} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h2>
                  <p className="leading-relaxed">Usuários</p>
                </div>
                <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
                    <CountUp end={956} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h2>
                  <p className="leading-relaxed">Eventos</p>
                </div>
                <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                    <CountUp end={999} prefix="+" redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h2>
                  <p className="leading-relaxed">Convidados</p>
                </div>
              </div>
            </div>
          </section>

          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <Image
                src="/example2.png"
                alt="feature"
                width={500}
                height={600}
                // className="object-cover object-center h-full w-full"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-2xl title-font font-medium mb-3">
                    Gratís
                  </h2>
                  <p className="leading-relaxed text-lg">
                    Nossa aplicação será sempre gratuita.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-2xl title-font font-medium mb-3">
                    Responsiva
                  </h2>
                  <p className="leading-relaxed text-lg">
                    Nossa aplicação é responsiva, ou seja, se adapta a qualquer
                    tamanho de tela.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-2xl title-font font-medium mb-3">
                    SEO Friendly
                  </h2>
                  <p className="leading-relaxed text-lg">
                    Nossa plataforma têm as melhores práticas de SEO, garantindo
                    que você chegue ao topo.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-2xl title-font font-medium mb-3">
                    Rápida
                  </h2>
                  <p className="leading-relaxed text-lg">
                    Nossa plataforma é rápida, ou seja, você não vai ter
                    problemas para acessar.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-2xl title-font font-medium mb-3">
                    Segura
                  </h2>
                  <p className="leading-relaxed text-lg">
                    Nossa plataforma é segura, ou seja, você não vai ter
                    problemas com seus dados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-5xl font-medium title-font text-white mb-4">
                Nosso Time
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Nossa equipe é composta por pessoas que amam o que fazem e estão
                sempre buscando melhorar.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
              </div>
              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 lg:w-1/2 md:w-1/2">
                    <div className="h-full flex flex-col items-center text-center">
                      {/* <Image
                        src="/images/placeholder.png"
                        alt="team"
                        width={56}
                        height={56}
                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      /> */}
                      <User width={56} height={56} />
                      <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-white">
                          Joclelson
                        </h2>
                        <h3 className="text-gray-500 mb-3">
                          Full Stack Developer
                        </h3>
                        <p className="mb-4">
                          Joclelson é um desenvolvedor full stack que ama o que
                          faz.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/2 md:w-1/2">
                    <div className="h-full flex flex-col items-center text-center">
                      {/* <Image
                        src="/images/placeholder.png"
                        alt="team"
                        width={56}
                        height={56}
                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      /> */}
                      <User width={56} height={56} />
                      <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-white">
                          Chris
                        </h2>
                        <h3 className="text-gray-500 mb-3">Web Developer</h3>
                        <p className="mb-4">
                          Chris é um desenvolvedor web que ama o que faz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="text-white body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            className="flex title-font font-medium items-center md:justify-start justify-center"
            href="/"
          >
            <Logo />
          </Link>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="https://facebook.com/">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link className="ml-3" href="https://twitter.com/">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link className="ml-3" href="https://instagram.com/joclelsonr">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link
              className="ml-3"
              href="https://www.linkedin.com/in/joclelson-rodrigues/"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
