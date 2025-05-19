import Foto from "../assets/foto.png";

export default function Home() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-4 py-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-12 flex-wrap">
                <img src={Foto} className="w-64 h-64 sm:w-80 sm:h-80 lg:w-136 lg:h-136 object-cover "  alt="Foto"/>
                <div className="text-[#030000] max-w-2xl bg-white rounded-2xl shadow-xl p-6 mb-6">
                    <h1 className="text-3xl font-bold mb-4">
                        Quem sou eu
                    </h1>
                    <p className="mb-4">
                        Meu nome é Luís Felipe dos Santos Braido, sou estudante de Engenharia da Computação na UERJ, com previsão de formação para o período 2027.1/2027.2. Tenho experiência em desenvolvimento de software, especialmente com <strong>React.js</strong>, <strong>TypeScript</strong>, <strong>JavaScript</strong>, <strong>HTML</strong> e <strong>CSS</strong>, habilidades adquiridas através de projetos realizados enquanto membro da empresa júnior.
                    </p>
                    <p className="mb-4">
                        Durante minha trajetória, desenvolvi dois projetos relevantes utilizando React:
                        <ul className="list-disc pl-6">
                            <li>
                                <strong>Website para o SPE (Society of Petroleum Engineers) da UERJ:</strong> Um site institucional desenvolvido com React, proporcionando uma interface moderna e interativa para a comunidade acadêmica, com informações sobre eventos, membros e atividades da sociedade.
                            </li>
                            <li>
                                <strong>Portfólio Pessoal:</strong> Um site responsivo que apresenta meus trabalhos, habilidades e projetos, com design moderno e integração com redes sociais.
                            </li>
                        </ul>
                    </p>
                    <p className="mb-4">
                        Além disso, participei de um projeto utilizando <strong>WordPress</strong> para o <strong>Programa de Pós-Graduação em Ciência e Tecnologia de Materiais (PPGCTM)</strong> da UERJ. O site institucional foi criado para divulgar informações sobre cursos, pesquisas e eventos, garantindo acessibilidade e responsividade para dispositivos móveis.
                    </p>
                    <p className="mb-4">
                        Também possuo experiência e conhecimento em <strong>Python</strong>, adquiridos durante minha participação na Iniciação Científica intitulada <em>"Estudo e Implementação do Método de Correlação de Imagens Digitais usando Software em Python"</em>. Minha função era corrigir o software já existente, tratando bugs e erros identificados durante os experimentos, garantindo seu funcionamento adequado e contribuindo para a continuidade das pesquisas.
                    </p>
                    <p>
                        Atualmente, estou estudando <strong>SQL</strong> nas horas vagas, buscando aprimorar minhas habilidades na gestão e manipulação de dados.
                    </p>
                </div>
            </div>
        </div>
    );
}
