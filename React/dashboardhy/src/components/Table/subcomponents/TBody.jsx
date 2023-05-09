import React from "react";

function TBody(props) {

    return (

        <tbody>
            {
                props.data.map((row, i) => (

                    <tr key={row.title + i}>
                        {props.columns.map((col) => (
                            <td>{col == "detail" ? <a href="http://localhost:3500{!row[col]}" target="_new" rel="noopener noreferrer">Detalle producto {row["id"]}</a>: row[col]}</td>
                        ))}
                    </tr>
                ))
            }


        </tbody>
    )
}

export default TBody;