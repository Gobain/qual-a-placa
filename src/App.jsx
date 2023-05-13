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

          {/* <div id="table-header">
            <div className="resolution-selection">
              <button id="tab-button1" className="tabs active-button" onClick="showTab('tab1')">1080p (Full
                HD)</button>
              |
              <button id="tab-button2" className="tabs" onClick="showTab('tab2')">1440 (Quad HD)</button>
              |
              <button id="tab-button3" className="tabs" onClick="showTab('tab3')">2160 (4K)</button>
            </div>
          </div> */}

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

          <div className="legend">
            <p>Legenda:</p>
            <p className="label-p">CPF (Custo por frame)</p>
          </div>
        </section>
      </main>
      <section className="data-explanation">
        <h2 id="explanation" className="explanation-h2">De onde retiramos os dados?</h2>
        <p>
          Os dados de performance usados neste site são retirados do <a href='https://www.tomshardware.com/reviews/gpu-hierarchy,4388.html'>Tom's Hardware</a>.
          Usamos a tabela de rasterização pura (sem Ray Tracing ou DLSS). Todos os dados de
          performance consideram as colunas na qualidade "Ultra", ignorando a coluna "Medium" do Tom's
          Hardware.
          <br />
          <br />
          O preço de cada placa é medido através de uma média entre as 3 principais lojas gamers do
          mercado brasileiro, a Kabum, Pichau e Terabyte.
          <br />
          <br />
          As atualizações de preço ocorrem entre uma a duas vezes por mês, dependendo da movimentação
          de preços do mercado. Já as atualizações de performance ocorrem com menos frequência, dependendo
          da atualização por parte do Tom's Hardware.
        </p>
      </section>
      <footer>
        <img src="./img/logo.png" alt="logo do 'qual a placa?'" className="footer-img" />
      </footer>
    </>
  )
}

export default App
