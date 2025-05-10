actividades = [];

function agregar_evento() {
    const titulo = document.getElementById("titulo").value;
    const informacion = document.getElementById("informacion").value;
    const horario = document.getElementById("horario").value;

    if (titulo && informacion && horario) {
        const evento = {
            que: titulo,
            como: informacion,
            cuando: horario
        };
        actividades.push(evento);
        document.getElementById("titulo").value = "";
        document.getElementById("informacion").value = "";
        document.getElementById("horario").value = "";
        mostrar_evento();
        localStorage.setItem("datoguardado", JSON.stringify(actividades));;
    } else {
        alert("Por favor, llena los datos solicitados.");
    }
}

function mostrar_evento() {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
    actividades.forEach((evento, index) => {
        itemList.innerHTML += `
            <li>
                <blockquote>
                <h3>${index+1}.- ${evento.que}<br/>
                < ${evento.cuando} > </h3>
                <p>${evento.como}</p>
                <button onclick="quitar_evento(${index})">Eliminar</button>
                <button onclick="editar_evento(${index})">Editar</button>
                </blockquote>
            </li>
        `;
    });
}

function editar_evento(index) {
    const evento = actividades[index];
    document.getElementById("titulo").value = evento.que;
    document.getElementById("informacion").value = evento.como;
    document.getElementById("horario").value = evento.horario;
    actividades.splice(index, 1);
    localStorage.setItem("datoguardado", JSON.stringify(actividades));;
}

function quitar_evento(index) {
    actividades.splice(index, 1);
    mostrar_evento();
    localStorage.setItem("datoguardado", JSON.stringify(actividades));;
}
