document.addEventListener('DOMContentLoaded', function() {
    // Datos de la malla curricular
    const mallaCurricular = [
        {
            ciclo: "I Ciclo",
            cursos: [
                { codigo: "EIF200", nombre: "Fundamentos de Informática", creditos: 3, categoria: "sistemas", requisitos: [] },
                { codigo: "MAT030", nombre: "Matemática para Informática", creditos: 4, categoria: "matematicas", requisitos: [] },
                { codigo: "GEN001", nombre: "Estudios generales I", creditos: 3, categoria: "general", requisitos: [] },
                { codigo: "GEN002", nombre: "Estudios generales II", creditos: 3, categoria: "general", requisitos: [] },
                { codigo: "LIX410", nombre: "Inglés integrado I", creditos: 4, categoria: "ingles", requisitos: [] }
            ]
        },
        {
            ciclo: "II Ciclo",
            cursos: [
                { codigo: "EIF201", nombre: "Programación I", creditos: 4, categoria: "programacion", requisitos: ["EIF200", "MAT030"] },
                { codigo: "MAT002", nombre: "Cálculo I", creditos: 4, categoria: "matematicas", requisitos: ["MAT030"] },
                { codigo: "GEN003", nombre: "Estudios generales III", creditos: 3, categoria: "general", requisitos: [] },
                { codigo: "GEN004", nombre: "Estudios generales IV", creditos: 3, categoria: "general", requisitos: [] },
                { codigo: "LIX411", nombre: "Inglés integrado II", creditos: 4, categoria: "ingles", requisitos: ["LIX410"] }
            ]
        },
        {
            ciclo: "III Ciclo",
            cursos: [
                { codigo: "EIF202", nombre: "Soporte Técnico", creditos: 3, categoria: "sistemas", requisitos: ["EIF200"] },
                { codigo: "EIF203", nombre: "Estructuras Discretas para Informática", creditos: 3, categoria: "matematicas", requisitos: ["EIF200", "MAT030"] },
                { codigo: "EIF204", nombre: "Programación II", creditos: 4, categoria: "programacion", requisitos: ["EIF201"] },
                { codigo: "MAT005", nombre: "Álgebra Lineal", creditos: 4, categoria: "matematicas", requisitos: ["MAT002"] },
                { codigo: "LIX412", nombre: "Inglés Integrado III", creditos: 4, categoria: "ingles", requisitos: ["LIX411"] }
            ]
        },
        {
            ciclo: "IV Ciclo",
            cursos: [
                { codigo: "EIF205", nombre: "Arquitectura de Computadoras", creditos: 3, categoria: "sistemas", requisitos: ["EIF201"] },
                { codigo: "EIF206", nombre: "Programación III", creditos: 4, categoria: "programacion", requisitos: ["EIF204"] },
                { codigo: "EIF207", nombre: "Estructuras de Datos", creditos: 4, categoria: "programacion", requisitos: ["EIF203"] },
                { codigo: "EIF404", nombre: "La Organización y su Entorno", creditos: 3, categoria: "sistemas", requisitos: ["EIF201"] },
                { codigo: "MAT006", nombre: "Probabilidad y Estadística para Informática", creditos: 3, categoria: "matematicas", requisitos: ["MAT002", "EIF203"] }
            ]
        },
        {
            ciclo: "V Ciclo",
            cursos: [
                { codigo: "EIF208", nombre: "Comunicaciones y redes de Computadores", creditos: 3, categoria: "redes", requisitos: ["EIF205"] },
                { codigo: "EIF209", nombre: "Programación IV", creditos: 4, categoria: "programacion", requisitos: ["EIF206"] },
                { codigo: "EIF210", nombre: "Ingeniería de Sistemas I", creditos: 4, categoria: "sistemas", requisitos: ["EIF206"] },
                { codigo: "EIF211", nombre: "Diseño e Implementación de Bases de Datos", creditos: 4, categoria: "bases-datos", requisitos: ["EIF206", "EIF207"] },
                { codigo: "EIF212", nombre: "Sistemas Operativos", creditos: 3, categoria: "sistemas", requisitos: ["EIF204", "EIF205"] }
            ]
        },
        {
            ciclo: "VI Ciclo",
            cursos: [
                { codigo: "EIF400", nombre: "Paradigmas de Programación", creditos: 4, categoria: "programacion", requisitos: ["EIF206"] },
                { codigo: "EIF401", nombre: "Ingeniería de Sistemas II", creditos: 4, categoria: "sistemas", requisitos: ["EIF210"] },
                { codigo: "EIF402", nombre: "Administración de Bases de Datos", creditos: 4, categoria: "bases-datos", requisitos: ["EIF212", "EIF211"] },
                { codigo: "EIF407", nombre: "Liderazgo y Organización", creditos: 3, categoria: "sistemas", requisitos: ["EIF404"] },
                { codigo: "EIF412", nombre: "Investigación de Operaciones y sus Aplicaciones", creditos: 3, categoria: "matematicas", requisitos: ["EIF206", "MAT005", "MAT006"] }
            ]
        },
        {
            ciclo: "VII Ciclo",
            cursos: [
                { codigo: "EIF406", nombre: "Ingeniería de Sistemas III", creditos: 4, categoria: "sistemas", requisitos: ["EIF401"] },
                { codigo: "EIF411", nombre: "Diseño y Programación de Plataformas Móviles", creditos: 4, categoria: "programacion", requisitos: ["EIF209"] },
                { codigo: "EIF413", nombre: "Métodos de Investigación Científica en Informática", creditos: 3, categoria: "sistemas", requisitos: ["MAT006"] },
                { codigo: "OPT001", nombre: "Optativa I", creditos: 3, categoria: "optativas", requisitos: [] },
                { codigo: "OPT002", nombre: "Optativa II", creditos: 3, categoria: "optativas", requisitos: [] }
            ]
        },
        {
            ciclo: "VIII Ciclo",
            cursos: [
                { codigo: "EIF408", nombre: "Proyectos y su Aplicación en la Organización (PPS)", creditos: 5, categoria: "proyectos", requisitos: ["EIF209", "EIF401", "EIF402"] },
                { codigo: "EIF409", nombre: "Aplicaciones Informáticas Globales", creditos: 4, categoria: "programacion", requisitos: ["EIF209", "EIF401", "EIF402"] },
                { codigo: "EIF410", nombre: "Informática y Sociedad", creditos: 2, categoria: "sistemas", requisitos: ["EIF401"] },
                { codigo: "OPT003", nombre: "Optativa III", creditos: 3, categoria: "optativas", requisitos: [] },
                { codigo: "OPT004", nombre: "Optativa IV", creditos: 3, categoria: "optativas", requisitos: [] }
            ]
        }
    ];

    // Cursos optativos
const optativas = [
    { codigo: "EIF4200", nombre: "Inteligencia Artificial", creditos: 3, categoria: "programacion", requisitos: ["EIF207"] },
    { codigo: "EIF4210", nombre: "Análisis de Algoritmos", creditos: 3, categoria: "programacion", requisitos: ["EIF207", "MAT002"] },
    { codigo: "EIF4220", nombre: "Diseño de Interfaces de Usuario", creditos: 3, categoria: "diseño", requisitos: ["EIF206"] },
    { codigo: "EIF4240", nombre: "Desarrollo de Aplicaciones Educativas", creditos: 3, categoria: "aplicaciones", requisitos: ["EIF204", "EIF206"] },
    { codigo: "EIF4250", nombre: "Diseño de Ambientes Multimediales", creditos: 3, categoria: "diseño", requisitos: ["EIF205", "EIF206"] },
    { codigo: "EIF4260", nombre: "Diseño de Ambientes de Aprendizaje", creditos: 3, categoria: "aplicaciones", requisitos: ["EIF204", "EIF206"] },
    { codigo: "EIF4270", nombre: "Robótica", creditos: 3, categoria: "sistemas", requisitos: ["EIF204"] },
    { codigo: "EIF4280", nombre: "Fundamentos de Programación Web", creditos: 3, categoria: "programacion", requisitos: ["EIF206", "EIF211"] },
    { codigo: "EIF4310", nombre: "Administración de Servidores Basados en Software Libre", creditos: 3, categoria: "sistemas", requisitos: ["EIF212", "EIF402"] },
    { codigo: "EIF4320", nombre: "Introducción a la Programación Paralela en Arquitecturas Multinúcleo", creditos: 3, categoria: "programacion", requisitos: ["EIF207", "EIF212"] },
    { codigo: "EIF4330", nombre: "Contexto, Desarrollo y Aplicación de Software Libre y de Código Abierto", creditos: 3, categoria: "sistemas", requisitos: ["EIF212", "EIF211"] },
    { codigo: "EIF4340", nombre: "Minería de Datos I", creditos: 3, categoria: "datos", requisitos: ["EIF402", "MAT006"] },
    { codigo: "EIF4350", nombre: "Minería de Datos II", creditos: 3, categoria: "datos", requisitos: ["EIF4340"] },
    { codigo: "EIG4160", nombre: "Gestión de Tecnología Educativa", creditos: 3, categoria: "aplicaciones", requisitos: ["EIF4250"] },
    { codigo: "EIF4360", nombre: "Gráficos por Computadora", creditos: 3, categoria: "diseño", requisitos: ["EIF207", "MAT005"] },
    { codigo: "EIF4400", nombre: "Seguridad Informática", creditos: 3, categoria: "redes", requisitos: ["EIF208", "EIF212"] },
    { codigo: "EIF4410", nombre: "Soporte Técnico Avanzado", creditos: 3, categoria: "sistemas", requisitos: ["EIF202"] },
    { codigo: "EIF4420", nombre: "Entornos de Programación para Videojuegos", creditos: 3, categoria: "programacion", requisitos: ["EIF204", "MAT002"] },
    { codigo: "EIF4430", nombre: "Diseño y Programación de Videojuegos en 3D", creditos: 3, categoria: "programacion", requisitos: ["EIF204", "MAT002"] },
    { codigo: "EIF4230", nombre: "Introducción a la Programación de Dispositivos Móviles", creditos: 3, categoria: "programacion", requisitos: ["EIF209"] },
    { codigo: "EIF4390", nombre: "Uso Estratégico del Comercio Electrónico", creditos: 3, categoria: "aplicaciones", requisitos: ["EIF209", "EIF211"] },
    { codigo: "EIF1010", nombre: "Redes Avanzadas I", creditos: 3, categoria: "redes", requisitos: ["EIF208"] },
    { codigo: "EIF4290", nombre: "Introducción a la Creación de Empresas", creditos: 3, categoria: "gestion", requisitos: [] },
    { codigo: "EIF4300", nombre: "Las TIC’S en el Ámbito Jurídico de Costa Rica", creditos: 3, categoria: "gestion", requisitos: [] },
    { codigo: "EIF4370", nombre: "Propiedad Intelectual y su Aplicación Práctica", creditos: 3, categoria: "gestion", requisitos: [] },
    { codigo: "EIF4380", nombre: "Gobierno Electrónico y su Regulación en Costa Rica", creditos: 3, categoria: "gestion", requisitos: [] },
    { codigo: "EIG4170", nombre: "Liderazgo y Organizaciones", creditos: 3, categoria: "gestion", requisitos: [] },
    { codigo: "EIG4180", nombre: "La Organización y su Entorno", creditos: 3, categoria: "gestion", requisitos: [] },
    { codigo: "EIF4440", nombre: "Introducción a la Innovación Tecnológica", creditos: 3, categoria: "gestion", requisitos: [] },
    { codigo: "EIF1020", nombre: "Introducción al Análisis de Datos para Otras Carreras", creditos: 3, categoria: "datos", requisitos: [] }
];

   // Estado de los cursos (completados)
    let cursosCompletados = JSON.parse(localStorage.getItem('cursosCompletados')) || [];
    let notasCursos = JSON.parse(localStorage.getItem('notasCursos')) || {};
    let creditosCompletados = calcularCreditosCompletados();
    const totalCreditos = 140;

    // Elementos del DOM
    const mallaContainer = document.getElementById('malla-curricular');
    const modal = document.getElementById('curso-modal');
    const closeModal = document.querySelector('.close');
    const btnCompletar = document.getElementById('btn-completar');
    const btnDesmarcar = document.getElementById('btn-desmarcar');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const notaInput = document.getElementById('modal-curso-nota');

    // Variables para el curso seleccionado
    let cursoSeleccionado = null;

    // Función para calcular créditos completados
    function calcularCreditosCompletados() {
        let creditos = 0;
        cursosCompletados.forEach(codigo => {
            const curso = encontrarCursoPorCodigo(codigo);
            if (curso) creditos += curso.creditos;
        });
        return creditos;
    }

    // Función para encontrar un curso por su código
    function encontrarCursoPorCodigo(codigo) {
        // Buscar en la malla curricular
        for (const ciclo of mallaCurricular) {
            const curso = ciclo.cursos.find(c => c.codigo === codigo);
            if (curso) return curso;
        }
        // Buscar en las optativas si no se encontró en la malla
        return optativas.find(opt => opt.codigo === codigo) || null;
    }

    // Generar la malla curricular
    // Generar la malla curricular
function generarMalla() {
    mallaContainer.innerHTML = '';
    
    mallaCurricular.forEach(ciclo => {
        const cicloDiv = document.createElement('div');
        cicloDiv.className = 'ciclo';
        
        const cicloTitle = document.createElement('h2');
        cicloTitle.className = 'ciclo-title';
        cicloTitle.textContent = ciclo.ciclo;
        
        const cursosGrid = document.createElement('div');
        cursosGrid.className = 'cursos-grid';
        
        ciclo.cursos.forEach(curso => {
            const cursoDiv = document.createElement('div');
            cursoDiv.className = `curso ${curso.categoria}`;
            cursoDiv.id = `curso-${curso.codigo}`;
            
            // Verificar estado del curso
            const estado = verificarEstadoCurso(curso);
            if (estado === 'completado') {
                cursoDiv.classList.add('completado');
            } else if (estado === 'disponible') {
                cursoDiv.classList.add('disponible');
            } else {
                cursoDiv.classList.add('bloqueado');
            }
            
            cursoDiv.innerHTML = `
                <div class="curso-codigo">${curso.codigo}</div>
                <div class="curso-nombre">${curso.nombre}</div>
                <div class="curso-creditos">${curso.creditos} créditos</div>
                ${curso.requisitos.length > 0 ? `<div class="curso-requisitos">Requisitos: ${curso.requisitos.join(', ')}</div>` : ''}
            `;
            
            // Evento click para mostrar detalles del curso
            cursoDiv.addEventListener('click', () => mostrarDetallesCurso(curso, ciclo.ciclo));
            
            cursosGrid.appendChild(cursoDiv);
        });
        
        cicloDiv.appendChild(cicloTitle);
        cicloDiv.appendChild(cursosGrid);
        mallaContainer.appendChild(cicloDiv);
    });

    // Agregar sección de optativas
    const optativasDiv = document.createElement('div');
    optativasDiv.className = 'ciclo';
    
    const optativasTitle = document.createElement('h2');
    optativasTitle.className = 'ciclo-title';
    optativasTitle.textContent = 'Cursos Optativos';
    optativasDiv.appendChild(optativasTitle);
    
    const optativasGrid = document.createElement('div');
    optativasGrid.className = 'cursos-grid';
    
    optativas.forEach(optativa => {
        const optativaDiv = document.createElement('div');
        optativaDiv.className = `curso ${optativa.categoria}`;
        optativaDiv.id = `curso-${optativa.codigo}`;
        
        // Verificar estado del curso
        const estado = verificarEstadoCurso(optativa);
        if (estado === 'completado') {
            optativaDiv.classList.add('completado');
        } else if (estado === 'disponible') {
            optativaDiv.classList.add('disponible');
        } else {
            optativaDiv.classList.add('bloqueado');
        }
        
        optativaDiv.innerHTML = `
            <div class="curso-codigo">${optativa.codigo}</div>
            <div class="curso-nombre">${optativa.nombre}</div>
            <div class="curso-creditos">${optativa.creditos} créditos</div>
            ${optativa.requisitos.length > 0 ? `<div class="curso-requisitos">Requisitos: ${optativa.requisitos.join(', ')}</div>` : ''}
        `;
        
        // Evento click para mostrar detalles del curso
        optativaDiv.addEventListener('click', () => mostrarDetallesCurso(optativa, 'Optativas'));
        
        optativasGrid.appendChild(optativaDiv);
    });
    
    optativasDiv.appendChild(optativasGrid);
    mallaContainer.appendChild(optativasDiv);
}

    

    // Verificar el estado de un curso (completado, disponible o bloqueado)
    function verificarEstadoCurso(curso) {
        if (cursosCompletados.includes(curso.codigo)) {
            return 'completado';
        }
        
        // Verificar si todos los requisitos están completados
        const requisitosCumplidos = curso.requisitos.every(req => cursosCompletados.includes(req));
        
        return requisitosCumplidos ? 'disponible' : 'bloqueado';
    }

    // Mostrar detalles del curso en el modal
    function mostrarDetallesCurso(curso, ciclo) {
        cursoSeleccionado = curso;
        
        document.getElementById('modal-curso-codigo').textContent = curso.codigo;
        document.getElementById('modal-curso-nombre').textContent = curso.nombre;
        document.getElementById('modal-curso-creditos').textContent = curso.creditos;
        document.getElementById('modal-curso-ciclo').textContent = ciclo;
        document.getElementById('modal-curso-categoria').textContent = obtenerNombreCategoria(curso.categoria);
        
        const requisitosText = curso.requisitos.length > 0 ? 
            curso.requisitos.map(req => {
                const completado = cursosCompletados.includes(req);
                return `<span class="${completado ? 'requisito-cumplido' : 'requisito-pendiente'}">${req}</span>`;
            }).join(', ') : 
            'Ninguno';
        
        document.getElementById('modal-curso-requisitos').innerHTML = requisitosText;
        
        // Encontrar qué cursos desbloquea este curso
        const cursosDesbloqueados = [];
        mallaCurricular.forEach(c => {
            c.cursos.forEach(cur => {
                if (cur.requisitos.includes(curso.codigo)) {
                    cursosDesbloqueados.push(cur.codigo);
                }
            });
        });
        
        optativas.forEach(opt => {
            if (opt.requisitos.includes(curso.codigo)) {
                cursosDesbloqueados.push(opt.codigo);
            }
        });
        
        document.getElementById('modal-curso-desbloquea').textContent = 
            cursosDesbloqueados.length > 0 ? cursosDesbloqueados.join(', ') : 'Ninguno';
        
        // Configurar el botón de completar
        const estado = verificarEstadoCurso(curso);
        btnCompletar.disabled = estado !== 'disponible' && estado !== 'completado';
        btnCompletar.textContent = estado === 'completado' ? 'Curso completado' : 'Marcar como completado';
        
        // Configurar el campo de nota
        notaInput.value = notasCursos[curso.codigo] || '';
        notaInput.disabled = false; 
        
        modal.style.display = 'block';
    }

    // Obtener nombre legible de la categoría
    function obtenerNombreCategoria(categoria) {
        const categorias = {
            'general': 'Estudios Generales',
            'matematicas': 'Matemáticas',
            'programacion': 'Programación',
            'sistemas': 'Ingeniería de Sistemas',
            'bases-datos': 'Bases de Datos',
            'redes': 'Redes',
            'ingles': 'Inglés',
            'optativas': 'Optativas',
            'proyectos': 'Proyectos'
        };
        return categorias[categoria] || categoria;
    }

    // Calcular el promedio ponderado
    function calcularPromedioPonderado() {
        let sumaPonderada = 0;
        let sumaCreditos = 0;
        
        cursosCompletados.forEach(codigo => {
            const curso = encontrarCursoPorCodigo(codigo);
            const nota = notasCursos[codigo] || 0;
            
            if (curso && nota > 0) {
                sumaPonderada += nota * curso.creditos;
                sumaCreditos += curso.creditos;
            }
        });
        
        return sumaCreditos > 0 ? (sumaPonderada / sumaCreditos).toFixed(2) : '0.00';
    }

    // Actualizar progreso
    function actualizarProgreso() {
        creditosCompletados = calcularCreditosCompletados();
        const porcentaje = Math.round((creditosCompletados / totalCreditos) * 100);
        progressFill.style.width = `${porcentaje}%`;
        progressText.textContent = `${porcentaje}% completado (${creditosCompletados}/${totalCreditos} créditos)`;
        
        // Actualizar promedio ponderado
        const promedio = calcularPromedioPonderado();
        document.getElementById('promedio-ponderado').textContent = `Promedio ponderado: ${promedio}`;
    }

    // Guardar datos en localStorage
    function guardarDatos() {
        localStorage.setItem('cursosCompletados', JSON.stringify(cursosCompletados));
        localStorage.setItem('notasCursos', JSON.stringify(notasCursos));
    }

    // Evento para cerrar el modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Evento para marcar curso como completado
    btnCompletar.addEventListener('click', () => {
        if (!cursoSeleccionado) return;
        
        const cursoCodigo = cursoSeleccionado.codigo;
        const index = cursosCompletados.indexOf(cursoCodigo);
        const nota = parseFloat(notaInput.value);
        
        // Validar que la nota sea mayor o igual a 70 si se ingresó
    if (notaInput.value) {
        if (isNaN(nota) || nota < 70 || nota > 100) {
            alert('Para aprobar el curso debe ingresar una nota válida entre 70 y 100');
            return;
        }
    }
        
        if (index === -1) {
            // Marcar como completado
            cursosCompletados.push(cursoCodigo);
            // Guardar la nota solo si se ingresó un valor
            if (notaInput.value) {
                notasCursos[cursoCodigo] = nota;
            }
            
            // Aplicar animación
            const cursoElement = document.getElementById(`curso-${cursoCodigo}`);
            cursoElement.classList.add('unlock-animation');
            setTimeout(() => {
                cursoElement.classList.remove('unlock-animation');
            }, 500);
        } else if (notaInput.value) {
            // Actualizar nota si el curso ya estaba completado
            notasCursos[cursoCodigo] = nota;
    }
        
        // Guardar datos y actualizar la interfaz
        guardarDatos();
        generarMalla();
        actualizarProgreso();
        
        // Deshabilitar el botón después de marcar
       btnCompletar.textContent = 'Curso completado';
        btnCompletar.disabled = true;
    });

    // Evento para desmarcar curso como completado
    btnDesmarcar.addEventListener('click', () => {
        if (!cursoSeleccionado) return;

        const cursoCodigo = cursoSeleccionado.codigo;

        // Verificar si el curso es requisito de otros cursos
        const esRequisito = mallaCurricular.some(ciclo =>
            ciclo.cursos.some(curso =>
                curso.requisitos.includes(cursoCodigo) && cursosCompletados.includes(curso.codigo)
            )
        );

        if (esRequisito) {
            alert('No puedes desmarcar este curso porque es un requisito para otros cursos.');
            return;
        }

        // Desmarcar el curso
        const index = cursosCompletados.indexOf(cursoCodigo);
        if (index !== -1) {
            cursosCompletados.splice(index, 1);
            delete notasCursos[cursoCodigo];
            
            // Guardar datos y actualizar la interfaz
            guardarDatos();
            generarMalla();
            actualizarProgreso();

            // Actualizar el botón de completar y el campo de nota
            btnCompletar.disabled = false;
            btnCompletar.textContent = 'Marcar como completado';
            notaInput.disabled = false;
            notaInput.value = '';
        }
    });

    // Evento para actualizar nota cuando cambia el input
    notaInput.addEventListener('change', function() {
        if (!cursoSeleccionado) return;
        
        const nota = parseFloat(this.value);
        const cursoCodigo = cursoSeleccionado.codigo;
        
        if (isNaN(nota)) {
            delete notasCursos[cursoCodigo];
        } else if (nota >= 0 && nota <= 100) {
            notasCursos[cursoCodigo] = nota;
        } else {
            this.value = '';
            delete notasCursos[cursoCodigo];
        }
        
        guardarDatos();
        actualizarProgreso();
    });

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Inicializar la malla
    generarMalla();
    actualizarProgreso();
});