import React from "react";

function giveAdmin(id){
    fetch("http://localhost:3500/api/users/giveAdmin", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            id: id,
        }),
    })
    .then(alert("El usuario ahora es admin"))
    .then(location.reload())

}
function removeAdmin(id){
    fetch("http://localhost:3500/api/users/removeAdmin", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            id: id,
        }),
    })
    .then(alert("El usuario ya no es admin"))
    .then(location.reload())
}

function TBody(props) {

    return (

        <tbody>
            {
                props.data.map((row, i) => (

                    <tr key={row.title + i}>
                        {props.columns.map((col) => (
                            <td>{col == "detail" ? <a href={`${row[col]}`} target="_new" rel="noopener noreferrer">Detalle producto {row["id"]}</a>: col == "userDetail" && row["idrol"] != 2 ? <button onClick={() => giveAdmin(row["iduser"])}>Dar admin</button>: col == "userDetail" && row["idrol"] == 2 ? <button onClick={() => removeAdmin(row["iduser"])}>Quitar admin</button>: col == "idrol" && row["idrol"] == 2 ? "Sí" : col == "idrol" && row["idrol"] != 2 ? "No" : row[col]}</td>
                        ))}
                    </tr>
                ))
            }


        </tbody>
    )
}

export default TBody;