let BRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});


async function createTable() {
    const gpuList = '../assets/gpus.json';
    let table = document.getElementById('gpu-table');

    await fetch(gpuList)
        .then(gpu => {
            return gpu.json();
        })
        .then(gpu => {

            for (let i = 0; i < gpu.length; i++) {
                const tr = table.insertRow();

                function createCellWithClassAndContent(content, className) {
                    const cell = tr.insertCell();
                    cell.textContent = content;
                    cell.classList.add(className);
                }

                createCellWithClassAndContent(gpu[i].name, (gpu[i].brand + "-line"));
                createCellWithClassAndContent(gpu[i].fps_1080, "gpu-data");
                createCellWithClassAndContent(gpu[i].fps_1440, "gpu-data");
                createCellWithClassAndContent(gpu[i].fps_2160, "gpu-data");
                createCellWithClassAndContent(BRL.format(gpu[i].price), "gpu-data");
                createCellWithClassAndContent((gpu[i].price / gpu[i].fps_1080).toFixed(2), "gpu-data");


            }


        })
}

createTable();