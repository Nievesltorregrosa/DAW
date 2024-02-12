function almacenarItem() {
    var itemName = document.querySelector(".taskContent").value.trim();

    if (itemName !== "") {
        var items = JSON.parse(localStorage.getItem("items")) || [];
        items.push(itemName);
        localStorage.setItem("items", JSON.stringify(items));
        mostrarContenido();
        document.querySelector(".taskContent").value = "";
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

function mostrarContenido() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";
    
    var items = JSON.parse(localStorage.getItem("items")) || [];
    items.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        
        var button = document.createElement("button");
        button.textContent = "Eliminar";
        button.className = "btn_eliminar";
        button.onclick = function() {
            eliminarItem(item);
        };
        
        li.appendChild(button);
        lista.appendChild(li);
    });
}

function eliminarItem(item) {
    var items = JSON.parse(localStorage.getItem("items")) || [];
    var index = items.indexOf(item);
    if (index !== -1) {
        items.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(items));
        mostrarContenido();
    }
}

function limpiarContenido() {
    localStorage.removeItem("items");
    mostrarContenido();
}