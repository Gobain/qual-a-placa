import './App.css';
import TableContent from './components/TableContent';
import gpuList from './assets/gpus.json';


function App() {

  return (
    <>
      <img src="./img/logo.png" alt="logo do 'qual a placa?'" className="logo-img" />
      <p id="subtitle">O Qual é a placa é um projeto focado em apresentar para o público os dados das principais
        placas
        de vídeo de forma rápida e fácil, assim o usuário consegue achar o que é melhor para si só de
        bater o olho. Conheça de onde tiramos os <a href="#explanation">dados</a>.
      </p>
      <h2>Veja o custo-benefício das placas de vídeo de acordo com a resolução</h2>
      <main>
        <section className="data-table">
          <table id='1080p-table' className="tablecontent active-tab">
            <thead>
              <tr>
                <th className="table-th table-th-gpu">GPU</th>
                <th className="table-th">Média FPS 1080 (Full HD)</th>
                <th className="table-th">Média FPS 1440 (Quad HD)</th>
                <th className="table-th">Média FPS 2160 (4K)</th>
                <th className="table-th">Preço</th>
                <th className="table-th">Custo Por Frame</th>
              </tr>
            </thead>

            {/* Inserting data to the table */}
            <tbody>
              {
                gpuList.map(gpu => <TableContent gpu={gpu} key={gpu.name} />)
              }
            </tbody>
          </table>

        </section>
      </main>
      <section className="data-explanation">
        <h2 id="explanation" className="explanation-h2">De onde retiramos os dados?</h2>
        <p>
          Os dados de performance usados neste site são retirados do <a href='https://www.tomshardware.com/reviews/gpu-hierarchy,4388.html' target='blank'>Tom's Hardware</a>.
          Usamos a tabela de rasterização pura (sem Ray Tracing ou DLSS). Todos os dados de
          performance consideram as colunas na qualidade "Ultra", ignorando a coluna "Medium" do Tom's
          Hardware.
          <br />
          <br />
          O preço de cada placa é medido através de uma média entre as 3 principais lojas gamers do
          mercado brasileiro, a Kabum (somente para placas Intel ARC), Pichau e Terabyte.
          <br />
          <br />
          As atualizações de preço ocorrem entre uma a duas vezes por mês, dependendo da movimentação
          de preços do mercado. Já as atualizações de performance ocorrem com menos frequência, dependendo
          da atualização por parte do Tom's Hardware.
        </p>
      </section>

      <section className='changelog'>
        <h2 id="explanation" className="explanation-h2">Changelog</h2>
        <h3>16/10/2023</h3>
        <ul>
          <li>Criação do 'changelog' no site;</li>
          <li>
            Remoção da Kabum! como fonte (exceto para placas Intel ARC). O website se tranformou em um
            marketplace genérico, então não conseguimos garantir que as ofertas de parceiros realmente
            entregam o que prometem;
          </li>
          <li>
            As seguintes placas tiveram suas performances atualizadas: Intel ARC A770 16GB, Intel
            ARC A770 8GB e Intel ARC A750;
          </li>
          <li>As seguintes placas foram adicionadas: Nvidia RTX 4060 e Nvidia RTX 4060TI;</li>
          <li>
            As seguintes placas foram removidas devido falta de dados e/ou disponibilidade: AMD RX 6950
            XT, Nvidia RTX 3090 TI, AMD RX 6900 XT, Nvidia RTX 3090, AMD RX 6800 XT, Nvidia RTX 3080,
            AMD RX 6600 XT, AMD RX 6400 e Nvidia GTX 1630.
          </li>
        </ul>
      </section>
      <footer>
        <img src="./img/logo.png" alt="logo do 'qual a placa?'" className="footer-img" />
      </footer>
    </>
  )
}

export default App
