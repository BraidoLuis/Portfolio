

export default function Home() {
    return (
        <div className="w-full h-full flex items-center justify-center px-4 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 flex-wrap">
                
                <div className="text-[#030000] max-w-2xl bg-white rounded-2xl shadow-xl p-6">
                    <h1 className="text-3xl font-bold mb-4">Projetos que fiz parte</h1>
                    <p className="mb-4">
                        <strong>PPGCTM</strong> - Programa de pós graduação em ciência dos materiais, projeto feito em WordPress, você pode acessar clicando <a href="https://www.ppgctm.iprj.uerj.br/" target="_blank" rel="noopener noreferrer"><strong>Aqui</strong></a>
                    </p>
                    <p className="mb-4">
                        <strong>Serra Energy</strong> - Site para o Evento Serra Energy do SPE Student Chapter UERJ (Society of Petroleum Engineers), projeto feito utilizando React e Tailwind CSS, você pode acessar clicando <a href="https://www.ppgctm.iprj.uerj.br/" target="_blank" rel="noopener noreferrer"><strong>Aqui</strong></a>
                    </p>
                    <p>
                        <strong>SPA Express Cambucas</strong> - Landing page para SPA familiar feito totalmente utilizando React e Tailwind CSS , você pode acessar clicando <a href="https://www.ppgctm.iprj.uerj.br/" target="_blank" rel="noopener noreferrer"><strong>Aqui</strong></a>
                    </p>
                </div>
            </div>
        </div>
    );
}