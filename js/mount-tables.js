let gpuList

const gpus = fetch('./js/gpus.json')
    .then(response => { return response.json() })



const getGPUData = async () => {
    const data = await gpus

    gpuList = data

    print1080p()
    print1440p()
    print2160p()
}

const print1080p = () => {
    const table = document.getElementById("1080p-table")

    console.log(gpuList)

    gpuList.nvidia.forEach(gpu => {
        table.innerHTML += `<tr>
                                <th class="nvidia-line">${gpu.name}</th>
                                <td class="gpu-data">${gpu.fps_1080}</td>
                                <td class="gpu-data">R$ ${gpu.jan_5},00</td>
                                <td class="gpu-data">R$ ${gpu.jan_25},00</td>
                                <td class="gpu-data">R$ ${gpu.fev_11},00</td>
                                <td class="gpu-data ${(((gpu.fev_11 * 100) / gpu.jan_25) - 100) >= 0 ? 'positive-difference' : 'negative-difference'}">${(((gpu.fev_11 * 100) / gpu.jan_25) - 100).toFixed(2)}</td>
                                <td class="gpu-data">${(gpu.jan_5 / gpu.fps_1080).toFixed(2)}</td>
                                <td class="gpu-data">${(gpu.jan_25 / gpu.fps_1080).toFixed(2)}</td>
                                <td class="gpu-data">${(gpu.fev_11 / gpu.fps_1080).toFixed(2)}</td>
                            </tr>`
    });

    gpuList.amd.forEach(gpu => {
        table.innerHTML += `<tr>
                                <th class="amd-line">${gpu.name}</th>
                                <td class="gpu-data">${gpu.fps_1080}</td>
                                <td class="gpu-data">R$ ${gpu.jan_5},00</td>
                                <td class="gpu-data">R$ ${gpu.jan_25},00</td>
                                <td class="gpu-data">R$ ${gpu.fev_11},00</td>
                                <td class="gpu-data ${(((gpu.fev_11 * 100) / gpu.jan_25) - 100) >= 0 ? 'positive-difference' : 'negative-difference'}">${(((gpu.fev_11 * 100) / gpu.jan_25) - 100).toFixed(2)}</td>
                                <td class="gpu-data">${(gpu.jan_5 / gpu.fps_1080).toFixed(2)}</td>
                                <td class="gpu-data">${(gpu.jan_25 / gpu.fps_1080).toFixed(2)}</td>
                                <td class="gpu-data">${(gpu.fev_11 / gpu.fps_1080).toFixed(2)}</td>
                            </tr>`
    });
}

const print1440p = () => {
    const table = document.getElementById("1440p-table")

    console.log(gpuList)

    gpuList.nvidia.forEach(gpu => {
        table.innerHTML += `<tr>
                                <th class="nvidia-line">${gpu.name}</th>
                                <td class="gpu-data">${gpu.fps_1440}</td>
                                <td class="gpu-data">R$ ${gpu.jan_5},00</td>
                                <td class="gpu-data">R$ ${gpu.jan_25},00</td>
                                <td class="gpu-data">R$ ${gpu.fev_11},00</td>
                                <td class="gpu-data ${(((gpu.fev_11 * 100) / gpu.jan_25) - 100) >= 0 ? 'positive-difference' : 'negative-difference'}">${(((gpu.fev_11 * 100) / gpu.jan_25) - 100).toFixed(2)}</td>
                                <td class="gpu-data">${(isNaN(gpu.fps_1440) ? 0 : (gpu.jan_5 / gpu.fps_1440).toFixed(2))}</td>
                                <td class="gpu-data">${(isNaN(gpu.fps_1440) ? 0 : (gpu.jan_25 / gpu.fps_1440).toFixed(2))}</td>
                                <td class="gpu-data">${(isNaN(gpu.fps_1440) ? 0 : (gpu.fev_11 / gpu.fps_1440).toFixed(2))}</td>
                            </tr>`
    });

    gpuList.amd.forEach(gpu => {
        table.innerHTML += `<tr>
                                <th class="amd-line">${gpu.name}</th>
                                <td class="gpu-data">${gpu.fps_1440}</td>
                                <td class="gpu-data">R$ ${gpu.jan_5},00</td>
                                <td class="gpu-data">R$ ${gpu.jan_25},00</td>
                                <td class="gpu-data">R$ ${gpu.fev_11},00</td>
                                <td class="gpu-data ${(((gpu.fev_11 * 100) / gpu.jan_25) - 100) >= 0 ? 'positive-difference' : 'negative-difference'}">${(((gpu.fev_11 * 100) / gpu.jan_25) - 100).toFixed(2)}</td>
                                <td class="gpu-data">${(isNaN(gpu.fps_1440) ? 0 : (gpu.jan_5 / gpu.fps_1440).toFixed(2))}</td>
                                <td class="gpu-data">${(isNaN(gpu.fps_1440) ? 0 : (gpu.jan_25 / gpu.fps_1440).toFixed(2))}</td>
                                <td class="gpu-data">${(isNaN(gpu.fps_1440) ? 0 : (gpu.fev_11 / gpu.fps_1440).toFixed(2))}</td>
                            </tr>`
    });
}

const print2160p = () => {
    const table = document.getElementById("2160p-table")

    console.log(gpuList)

    gpuList.nvidia.forEach(gpu => {
        table.innerHTML += `<tr>
                                <th class="nvidia-line">${gpu.name}</th>
                                <td class="gpu-data">${gpu.fps_2160}</td>
                                <td class="gpu-data">R$ ${gpu.jan_5},00</td>
                                <td class="gpu-data">R$ ${gpu.jan_25},00</td>
                                <td class="gpu-data">R$ ${gpu.fev_11},00</td>
                                <td class="gpu-data ${(((gpu.fev_11 * 100) / gpu.jan_25) - 100) >= 0 ? 'positive-difference' : 'negative-difference'}">${(((gpu.fev_11 * 100) / gpu.jan_25) - 100).toFixed(2)}</td>
                                <td class="gpu-data">${(isNaN(gpu.fps_2160) ? 0 : (gpu.jan_5 / gpu.fps_2160).toFixed(2))}</td>
                                <td class="gpu-data">${(isNaN(gpu.fps_2160) ? 0 : (gpu.jan_25 / gpu.fps_2160).toFixed(2))}</td>
                                <td class="gpu-data">${(isNaN(gpu.fps_2160) ? 0 : (gpu.fev_11 / gpu.fps_2160).toFixed(2))}</td>
                            </tr>`
    });

    gpuList.amd.forEach(gpu => {
        table.innerHTML += `<tr>
                                <th class="amd-line">${gpu.name}</th>
                                <td class="gpu-data">${gpu.fps_2160}</td>
                                <td class="gpu-data">R$ ${gpu.jan_5},00</td>
                                <td class="gpu-data">R$ ${gpu.jan_25},00</td>
                                <td class="gpu-data">R$ ${gpu.fev_11},00</td>
                                <td class="gpu-data ${(((gpu.fev_11 * 100) / gpu.jan_25) - 100) >= 0 ? 'positive-difference' : 'negative-difference'}">${(((gpu.fev_11 * 100) / gpu.jan_25) - 100).toFixed(2)}</td>
                                <td class="gpu-data">${(isNaN(gpu.fps_2160) ? 0 : (gpu.jan_5 / gpu.fps_2160).toFixed(2))}</td>
                                <td class="gpu-data">${(isNaN(gpu.fps_2160) ? 0 : (gpu.jan_25 / gpu.fps_2160).toFixed(2))}</td>
                                <td class="gpu-data">${(isNaN(gpu.fps_2160) ? 0 : (gpu.fev_11 / gpu.fps_2160).toFixed(2))}</td>
                            </tr>`
    });
}

getGPUData()