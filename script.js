document.addEventListener("DOMContentLoaded", () => {

  // =====================================
  // CONFIGURACIÓN GENERAL
  // =====================================

  const numeroWhatsApp = "573001640580";

  function crearEnlaceWhatsApp(mensaje) {
    return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  }

  // =====================================
  // MENÚ DE PRODUCTOS
  // =====================================

  const productos = {

    // =====================================
    // CAFÉS
    // =====================================

    cafes: [
      {
        nombre: "Espresso Clásico",
        descripcion: "Café concentrado de sabor intenso y aroma irresistible.",
        precio: "$5.000",
        imagen: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Cappuccino",
        descripcion: "Espresso con leche cremosa y una delicada capa de espuma.",
        precio: "$8.500",
        imagen: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Latte Frío",
        descripcion: "Café con leche fría, hielo y un sabor suave y refrescante.",
        precio: "$9.000",
        imagen: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Mocaccino",
        descripcion: "La combinación perfecta de café, leche y chocolate.",
        precio: "$9.500",
        imagen: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Americano",
        descripcion: "Café tradicional de sabor equilibrado y aroma especial.",
        precio: "$6.000",
        imagen: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Chocolate Caliente",
        descripcion: "Bebida cremosa de chocolate, ideal para una tarde especial.",
        precio: "$8.000",
        imagen: "https://images.unsplash.com/photo-1542990253-0b8be7e8f4f4?auto=format&fit=crop&w=700&q=80"
      }
    ],

    // =====================================
    // BEBIDAS FRÍAS
    // =====================================

    frias: [
      {
        nombre: "Frappé de Café",
        descripcion: "Café frío mezclado con hielo y una textura cremosa.",
        precio: "$11.000",
        imagen: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Limonada Natural",
        descripcion: "Refrescante limonada preparada con limón natural, hielo y un delicioso toque cítrico.",
        precio: "$7.000",
        imagen: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Frappé de Chocolate",
        descripcion: "Deliciosa bebida fría de chocolate, con una textura cremosa y un irresistible toque dulce.",
        precio: "$12.000",
        imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Cold Brew",
        descripcion: "Café de extracción en frío con sabor suave y refrescante.",
        precio: "$10.000",
        imagen: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Jugo Natural de Maracuyá",
        descripcion: "Jugo de maracuyá preparado con fruta natural, de sabor tropical y ligeramente cítrico.",
        precio: "$8.000",
        imagen: "https://comidasboricuas.com/assets/images/2026/01/jugo-de-parcha_800x534.webp"
      },
      {
        nombre: "Jugos Naturales",
        descripcion: "Deliciosos jugos preparados con frutas naturales, frescos y llenos de sabor.",
        precio: "$10.000",
        imagen: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=700&q=80"
      }
    ],

    // =====================================
    // PANADERÍA
    // =====================================

    panaderia: [
      {
        nombre: "Croissant de Mantequilla",
        descripcion: "Hojaldre dorado, suave y recién horneado.",
        precio: "$6.500",
        imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Roll de Canela",
        descripcion: "Masa esponjosa con canela y cubierta dulce.",
        precio: "$7.000",
        imagen: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Muffin de Chocolate",
        descripcion: "Bizcocho esponjoso con trocitos de chocolate.",
        precio: "$6.000",
        imagen: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Tostadas Francesas",
        descripcion: "Pan dorado con miel, frutas y un toque de canela.",
        precio: "$10.000",
        imagen: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Galletas Artesanales",
        descripcion: "Galletas horneadas con mantequilla y chocolate.",
        precio: "$5.000",
        imagen: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=700&q=80"
      }
    ],

    // =====================================
    // DESAYUNOS
    // =====================================

    desayunos: [
      {
        nombre: "Desayuno Campesino",
        descripcion: "Huevos preparados al gusto, arepa, queso fresco y bebida caliente.",
        precio: "$16.000",
        imagen: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Tostadas con Aguacate",
        descripcion: "Pan artesanal, aguacate fresco y huevo.",
        precio: "$17.000",
        imagen: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Pancakes con Frutas",
        descripcion: "Pancakes esponjosos con frutas frescas y miel.",
        precio: "$15.000",
        imagen: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Sándwich Especial",
        descripcion: "Pan artesanal con jamón, queso y vegetales.",
        precio: "$14.000",
        imagen: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Huevos al Gusto",
        descripcion: "Huevos preparados a tu elección, acompañados de arepa y queso fresco.",
        precio: "$12.000",
        imagen: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=700&q=80"
      },
      {
        nombre: "Desayuno Americano",
        descripcion: "Huevos, tostadas, pancakes y café de la casa.",
        precio: "$20.000",
        imagen: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=700&q=80"
      }
    ]
  };

  // =====================================
  // MOSTRAR PRODUCTOS
  // =====================================

  const menuGrid = document.getElementById("menuGrid");
  const tabs = document.querySelectorAll(".tab");

  function mostrarProductos(categoria) {

    if (!productos[categoria] || !menuGrid) return;

    menuGrid.innerHTML = "";

    productos[categoria].forEach(producto => {

      const tarjeta = document.createElement("article");
      tarjeta.className = "menu-card";

      const imagen = document.createElement("img");
      imagen.src = producto.imagen;
      imagen.alt = producto.nombre;
      imagen.loading = "lazy";

      imagen.onerror = () => {
        imagen.onerror = null;
        imagen.src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80";
      };

      const contenido = document.createElement("div");
      contenido.className = "menu-card-content";

      const nombre = document.createElement("h3");
      nombre.textContent = producto.nombre;

      const descripcion = document.createElement("p");
      descripcion.textContent = producto.descripcion;

      const precio = document.createElement("span");
      precio.className = "menu-price";
      precio.textContent = producto.precio;

      contenido.append(nombre, descripcion, precio);
      tarjeta.append(imagen, contenido);

      menuGrid.appendChild(tarjeta);

    });
  }

  tabs.forEach(tab => {

    tab.addEventListener("click", () => {

      tabs.forEach(item => item.classList.remove("active"));

      tab.classList.add("active");

      mostrarProductos(tab.dataset.tab);

    });

  });

  mostrarProductos("cafes");

  // =====================================
  // MENÚ PARA CELULARES
  // =====================================

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

      navMenu.classList.toggle("show");

      menuToggle.textContent =
        navMenu.classList.contains("show") ? "✕" : "☰";

    });

    navMenu.querySelectorAll("a").forEach(enlace => {

      enlace.addEventListener("click", () => {

        navMenu.classList.remove("show");
        menuToggle.textContent = "☰";

      });

    });
  }

  // =====================================
  // HORARIOS DE ATENCIÓN
  // =====================================

  const horarios = {
    0: { apertura: 8, cierre: 14 },
    1: { apertura: 7, cierre: 20 },
    2: { apertura: 7, cierre: 20 },
    3: { apertura: 7, cierre: 20 },
    4: { apertura: 7, cierre: 20 },
    5: { apertura: 7, cierre: 20 },
    6: { apertura: 7, cierre: 20 }
  };

  const indicador = document.getElementById("statusIndicator");
  const statusText = document.getElementById("statusText");

  function actualizarEstado() {

    if (!indicador || !statusText) return;

    const ahora = new Date();

    const horaColombia = new Date(
      ahora.toLocaleString("en-US", {
        timeZone: "America/Bogota"
      })
    );

    const dia = horaColombia.getDay();
    const hora = horaColombia.getHours();
    const minutos = horaColombia.getMinutes();

    const horario = horarios[dia];

    const horaActual = hora + minutos / 60;

    const estaAbierto =
      horaActual >= horario.apertura &&
      horaActual < horario.cierre;

    if (estaAbierto) {

      indicador.className = "status open";

      statusText.textContent =
        "Abierto ahora · Cerramos a las " +
        (horario.cierre > 12
          ? (horario.cierre - 12) + ":00 p. m."
          : horario.cierre + ":00 a. m.");

    } else {

      indicador.className = "status closed";

      if (horaActual < horario.apertura) {

        statusText.textContent =
          "Cerrado · Abrimos a las " +
          (horario.apertura > 12
            ? (horario.apertura - 12) + ":00 p. m."
            : horario.apertura + ":00 a. m.");

      } else {

        statusText.textContent = "Cerrado por hoy";

      }
    }
  }

  actualizarEstado();
  setInterval(actualizarEstado, 30000);

  // =====================================
  // FECHA MÍNIMA DE RESERVA
  // =====================================

  const fechaInput = document.getElementById("fecha");
  const horaInput = document.getElementById("hora");

  function fechaColombia() {

    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Bogota",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(new Date());

  }

  if (fechaInput) {
    fechaInput.min = fechaColombia();
  }

  // =====================================
  // VALIDAR HORARIO DE RESERVA
  // =====================================

  function validarHorarioReserva(fecha, hora) {

    const partesFecha = fecha.split("-").map(Number);
    const partesHora = hora.split(":").map(Number);

    if (partesFecha.length !== 3 || partesHora.length !== 2) {
      return "Selecciona una fecha y hora válidas.";
    }

    const fechaSeleccionada = new Date(
      Date.UTC(
        partesFecha[0],
        partesFecha[1] - 1,
        partesFecha[2]
      )
    );

    const dia = fechaSeleccionada.getUTCDay();
    const horaSeleccionada = partesHora[0];
    const minutos = partesHora[1];

    const horario = horarios[dia];

    if (
      horaSeleccionada < horario.apertura ||
      horaSeleccionada >= horario.cierre
    ) {

      return dia === 0
        ? "El domingo atendemos de 8:00 a. m. a 2:00 p. m."
        : "De lunes a sábado atendemos de 7:00 a. m. a 8:00 p. m.";

    }

    const fechaHoraSeleccionada = new Date(
      partesFecha[0],
      partesFecha[1] - 1,
      partesFecha[2],
      horaSeleccionada,
      minutos
    );

    const ahora = new Date();

    const diferencia =
      fechaHoraSeleccionada.getTime() - ahora.getTime();

    if (diferencia < 60 * 60 * 1000) {

      return "La reserva debe realizarse con al menos una hora de anticipación.";

    }

    return null;
  }

  // =====================================
  // FORMULARIO DE RESERVAS
  // =====================================

  const formulario = document.getElementById("reservationForm");

  if (formulario) {

    formulario.addEventListener("submit", (evento) => {

      evento.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const fecha = fechaInput.value;
      const hora = horaInput.value;
      const personas = document.getElementById("personas").value;

      if (!nombre || !correo || !fecha || !hora || !personas) {

        alert("Por favor, completa todos los campos.");
        return;

      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {

        alert("Por favor, escribe un correo electrónico válido.");
        return;

      }

      if (fecha < fechaColombia()) {

        alert("No puedes reservar en una fecha pasada.");
        return;

      }

      const errorHorario = validarHorarioReserva(fecha, hora);

      if (errorHorario) {

        alert(errorHorario);
        return;

      }

      const mensaje =
        "¡Hola Aroma y Grano! ☕🤎\n\n" +
        "Quiero solicitar una reserva:\n\n" +
        "👤 Nombre: " + nombre + "\n" +
        "📧 Correo: " + correo + "\n" +
        "📅 Fecha: " + fecha + "\n" +
        "🕒 Hora: " + hora + "\n" +
        "👥 Personas: " + personas + "\n\n" +
        "Quedo pendiente de la confirmación. ¡Muchas gracias!";

      window.open(crearEnlaceWhatsApp(mensaje), "_blank");

      formulario.reset();

      fechaInput.min = fechaColombia();

    });
  }

  // =====================================
  // BOTONES DE WHATSAPP
  // =====================================

  const mensajeContacto =
    "Hola Aroma y Grano ☕🤎. Me gustaría recibir información sobre sus productos y servicios.";

  const enlaceContacto = crearEnlaceWhatsApp(mensajeContacto);

  const botonContacto = document.getElementById("contactWhats");
  const botonFlotante = document.getElementById("whatsappFloat");

  if (botonContacto) {
    botonContacto.href = enlaceContacto;
    botonContacto.target = "_blank";
  }

  if (botonFlotante) {
    botonFlotante.href = enlaceContacto;
    botonFlotante.target = "_blank";
  }

});