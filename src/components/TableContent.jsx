import React from "react";
import './TableContent.css'

let BRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

function TableContent({ gpu }) {
    return (
        <tr>
            <th className={gpu.brand + '-line'}>{gpu.name}</th>
            <td className="gpu-data">{gpu.fps_1080}</td>
            <td className="gpu-data">{gpu.fps_1440}</td>
            <td className="gpu-data">{gpu.fps_2160}</td>
            <td className="gpu-data">{BRL.format(gpu.price)}</td>
            <td className="gpu-data">{(gpu.price / gpu.fps_1080).toFixed(2)}</td>
        </tr>
    )
}

export default TableContent;