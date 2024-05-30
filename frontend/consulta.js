document.addEventListener("DOMContentLoaded", async () => {
    var id2 = document.getElementById("input_id");
    var nombre2 = document.getElementById("input_nom");
    const insertar = document.getElementById("btn_ins");
    const consultar = document.getElementById("btn_cons");
    const actualizar = document.getElementById("btn_act");
    const eliminar = document.getElementById("btn_elim");
    const tbl = document.getElementById("tbl_body");
    const tabla = document.getElementById("div_tbl");
    const btn_ocult = document.getElementById("ocult");
    const URL = "https://api-topicos-1.onrender.com";
    const limpiarTabla = () => {
        while (tbl.firstChild) {
            tbl.removeChild(tbl.firstChild);
        }
    }
    const extraerDat = async () => {
        const datos = await fetch(URL);
        const datos2 = await datos.json();
        limpiarTabla();
        for (let i = 0; i < datos2.length; i++) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            td1.textContent = datos2[i].id;
            td2.textContent = datos2[i].nombre;
            td1.classList.add("td-custom");
            tr.appendChild(td1);
            tr.appendChild(td2);
            tbl.appendChild(tr);
        }
    }
    btn_ocult.addEventListener("click", (e) => {
        e.preventDefault();
        tabla.style.display = "none";
    });
    insertar.addEventListener("click", async (e) => {
        e.preventDefault();
        var lista = {
            nombre: nombre2.value
        };
        const lista2 = JSON.stringify(lista)
        const option = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: lista2
        }
        const res = await fetch(URL, option)
        const respuesta = await res.json()
        if (respuesta.value == 1) {
            icon2 = 'success'
        } else {
            icon2 = 'warning'
        }
        Swal.fire({
            title: respuesta.message,
            icon: icon2,
            confirmButtonText: 'OK',
            customClass: {
                title: 'swal2-title-custom',
                popup: 'swal2-box-shadow',
                confirmButton: 'swal2-confirm-button-custom'
            }
        });
    });
    consultar.addEventListener("click", async (e) => {
        e.preventDefault();
        tabla.style.display = "block";
        extraerDat();
    });
    actualizar.addEventListener("click", async (e) => {
        e.preventDefault();
        var lista = {
            id: id2.value,
            nombre: nombre2.value
        };
        const lista2 = JSON.stringify(lista)
        const option = {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: lista2
        }
        const res = await fetch(URL, option);
        const respuesta = await res.json();
        if (respuesta.value == 1) {
            icon2 = 'success'
        } else {
            icon2 = 'warning'
        }
        Swal.fire({
            title: respuesta.message,
            icon: icon2,
            confirmButtonText: 'OK',
            customClass: {
                title: 'swal2-title-custom',
                popup: 'swal2-box-shadow',
                confirmButton: 'swal2-confirm-button-custom'
            }
        });
    });
    eliminar.addEventListener("click", async (e) => {
        e.preventDefault();
        var lista = {
            id: id2.value
        };
        const lista2 = JSON.stringify(lista)
        const option = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: lista2
        }
        const res = await fetch(URL, option);
        const respuesta = await res.json();
        if (respuesta.value == 1) {
            icon2 = 'success'
        } else {
            icon2 = 'warning'
        }
        Swal.fire({
            title: respuesta.message,
            icon: icon2,
            confirmButtonText: 'OK',
            customClass: {
                title: 'swal2-title-custom',
                popup: 'swal2-box-shadow',
                confirmButton: 'swal2-confirm-button-custom'
            }
        });
    });
});