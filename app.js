document.addEventListener('DOMContentLoaded', () => {
    // 1. ESTRUCTURA DE DATOS: DEFINICIÓN DE TODOS LOS FÁRMACOS Y SUS PROTOCOLOS (10 FÁRMACOS)
    const drugData = {
        'aciclovir': {
            name: 'Aciclovir Sódico',
            reconstitution: {
                presentation: 'Vial 250 mg',
                method: 'Reconstituir el vial con 10 mL de API o SF.',
                concentration: '25 mg/mL',
                stability: '12 h a TA. Proteger de la luz. No refrigerar (precipita).'
            },
            protocols: [
                {
                    label: 'IV Directa',
                    validity: 'X (No recomendable)',
                    class: 'invalido',
                    content: `
                        <p><strong>Razón de seguridad:</strong> La administración IV muy rápida puede producir incremento de azoemia y creatinina sérica debido a la precipitación del fármaco en los túbulos renales.</p>
                        <p><strong>Concentraciones:</strong> Las soluciones muy concentradas (>7 mg/mL) pueden producir inflamación, dolor y flebitis.</p>
                    `
                },
                {
                    label: 'IV Intermitente',
                    validity: 'Vía de Elección',
                    class: '',
                    content: `
                        <p><strong>Reconstitución:</strong> Reconstituir el vial (250 mg) con <strong>10 mL de API o SF</strong>.</p>
                        <p><strong>Dilución (Dosis 250 mg):</strong> Diluir el reconstituido en un <strong>mínimo de 50 mL de SF o SG5%</strong> (Añadir 50 mL más de SF o SG5% por cada vial de 250 mg).</p>
                        <p><strong>Administración:</strong> Administrar mediante bomba de infusión de ritmo controlado, lentamente en un período <strong>no inferior a 1 hora</strong>.</p>
                        <p class="nota">⚠️ <strong>Nota de Seguridad:</strong> Evitar la extravasación, ya que es muy irritante y puede lesionar los tejidos.</p>
                    `
                }
            ]
        },
        'acetilcisteina': {
            name: 'Acetilcisteína',
            reconstitution: {
                presentation: 'Ampolla 300 mg/3 mL',
                method: 'No procede. (Concentración: 100 mg/mL)',
                concentration: '',
                stability: 'Diluido: 24 h a TA (envases PVC).'
            },
            protocols: [
                {
                    label: 'IV Directa',
                    validity: 'Válida',
                    class: '',
                    content: `
                        <p><strong>Preparación:</strong> Administrar tal como viene presentado (no diluir).</p>
                        <p><strong>Administración:</strong> Inyectar **lentamente en 3-5 minutos**.</p>
                    `
                },
                {
                    label: 'IV Intermitente',
                    validity: 'Vía de Elección',
                    class: '',
                    content: `
                        <p><strong>Dilución:</strong> Diluir la dosis prescrita en **50-100 mL de SG5%**.</p>
                        <p><strong>Administración:</strong> Administrar en **15-30 minutos**.</p>
                        <p class="nota">⚠️ <strong>Nota:</strong> Se dispone de poca información con SF.</p>
                    `
                },
                {
                    label: 'IM',
                    validity: 'Válida (☑️)',
                    class: 'invalido',
                    content: `
                        <p><strong>Preparación:</strong> Administrar vía **IM profunda**.</p>
                        <p class="nota">⚠️ <strong>Nota:</strong> Vía de administración válida, aunque su uso puede variar según protocolo clínico local.</p>
                    `
                }
            ]
        },
        'acetilsalicilato': {
            name: 'Acetilsalicilato de Lisina',
            reconstitution: {
                presentation: 'Vial 900 mg + ampolla 5 mL API',
                method: 'Reconstituir el vial con 5 mL API.',
                concentration: '180 mg/mL',
                stability: 'Reconstituido: Uso inmediato. Diluido: 15 h a TA.'
            },
            protocols: [
                {
                    label: 'IV Directa',
                    validity: 'Válida',
                    class: '',
                    content: `
                        <p><strong>Reconstitución:</strong> Reconstituir el vial con **5 mL API**.</p>
                        <p><strong>Administración:</strong> Administrar **lentamente** en **2-5 minutos**.</p>
                        <p class="nota">⚠️ <strong>Estabilidad:</strong> La solución reconstituida es de **uso inmediato**.</p>
                    `
                },
                {
                    label: 'IV Intermitente',
                    validity: 'Vía de Elección',
                    class: '',
                    content: `
                        <p><strong>Reconstitución:</strong> Reconstituir el vial con **5 mL API**.</p>
                        <p><strong>Dilución:</strong> Diluir el reconstituido en **100-250 mL SF o SG5%**.</p>
                        <p><strong>Administración:</strong> Administrar en un **máximo de 2 horas**.</p>
                    `
                },
                {
                    label: 'IM',
                    validity: 'Válida (☑️)',
                    class: 'invalido',
                    content: `
                        <p><strong>Preparación:</strong> Reconstituir el vial con **5 mL API**. Administrar vía **IM profunda**.</p>
                        <p class="nota">⚠️ <strong>Contraindicación:</strong> Vía contraindicada en infarto con elevación del ST (SCACEST).</p>
                    `
                }
            ]
        },
        'adenosina': {
            name: 'Adenosina',
            reconstitution: {
                presentation: 'Vial 6 mg/2 mL (3 mg/mL)',
                method: 'No procede.',
                concentration: '3 mg/mL',
                stability: 'No procede.'
            },
            protocols: [
                {
                    label: 'IV Directa',
                    validity: 'Vía de Elección',
                    class: 'critico', // Nuevo estilo CRITICO para esta vía
                    content: `
                        <p><strong>Administración:</strong> Inyección **rápida en bolo (1-2 segundos)**.</p>
                        <p><strong>Técnica:</strong> La inyección debe ser lo más **proximal posible** y seguida de un **lavado rápido con SF**.</p>
                        <p class="nota">🚨 <strong>Seguridad Crítica:</strong> Es necesaria la **monitorización continua del ECG**, ya que podrían producirse arritmias.</p>
                    `
                }
            ]
        },
        'vancomicina': {
            name: 'Vancomicina',
            reconstitution: {
                presentation: 'Vial 1 g',
                method: 'Reconstituir el vial de 1 g con 20 mL de API.',
                concentration: '50 mg/mL',
                stability: 'Reconstituido: 24 h en nevera. Diluido: 24 h a TA y en nevera.'
            },
            protocols: [
                {
                    label: 'IV Intermitente (Dosis Estándar)',
                    validity: 'Vía de Elección',
                    class: '',
                    content: `
                        <p><strong>Reconstitución:</strong> Reconstituir el vial de 1 g con <strong>20 mL de API</strong>.</p>
                        <p><strong>Dilución:</strong> Diluir la dosis en **100-250 mL de SF o SG5%** (Concentración máxima: <strong>5 mg/mL</strong>).</p>
                        <p><strong>Administración:</strong> Administrar en **60 minutos** (Velocidad máxima: 10 mg/min).</p>
                        <p class="nota">⚠️ **Seguridad:** La administración rápida puede causar el síndrome del "hombre rojo".</p>
                    `
                },
                {
                    label: 'IV Intermitente (Restricción de Líquidos / IV Central)',
                    validity: 'Alternativa',
                    class: 'critico', // Usaremos el estilo crítico aquí
                    content: `
                        <p><strong>Dilución:</strong> Emplear concentraciones de **10 mg/mL** (ej. 1g en 100 mL de SF o SG5%).</p>
                        <p><strong>Administración:</strong> Administrar a través de un **acceso venoso central** y en un tiempo **≥ 2 horas**.</p>
                        <p class="nota">🚨 **Advertencia:** Riesgo de necrosis tisular en caso de extravasación. Uso de vía central obligatorio para estas concentraciones.</p>
                    `
                }
            ]
        },
        'meropenem': {
            name: 'Meropenem',
            reconstitution: {
                presentation: 'Vial 1 g',
                method: 'Reconstituir el vial 1 g con 20 mL de API.',
                concentration: '50 mg/mL',
                stability: 'Reconstituido: 3 h a TA y 24 h en nevera.'
            },
            protocols: [
                {
                    label: 'IV Directa',
                    validity: 'Válida',
                    class: '',
                    content: `
                        <p><strong>Reconstitución:</strong> Reconstituir el vial 1 g con **20 mL de API**.</p>
                        <p><strong>Administración:</strong> Administrar **lentamente en 5 minutos**.</p>
                    `
                },
                {
                    label: 'IV Intermitente',
                    validity: 'Vía de Elección',
                    class: '',
                    content: `
                        <p><strong>Reconstitución:</strong> Reconstituir el vial 1 g con **20 mL de API**.</p>
                        <p><strong>Dilución:</strong> Diluir la dosis prescrita en **50-1.000 mL de SF o SG5%** (Concentración: 1-20 mg/mL).</p>
                        <p><strong>Administración:</strong> Administrar en **15-30 minutos**.</p>
                        <p class="nota">⚠️ **Estabilidad (Diluido):** 17 h a TA y 24 h en nevera en SF. Uso **inmediato** si es en SG5%.</p>
                    `
                }
            ]
        },
        'cefazolina': {
            name: 'Cefazolina',
            reconstitution: {
                presentation: 'Vial 1 g + ampolla 4 mL API',
                method: 'Reconstituir el vial con su disolvente.',
                concentration: '250 mg/mL',
                stability: 'Reconstituido: 8 h a TA y 24 h en nevera. Diluido: 8 h a TA y 24 h en nevera.'
            },
            protocols: [
                {
                    label: 'IV Directa',
                    validity: 'Válida',
                    class: '',
                    content: `
                        <p><strong>Reconstitución:</strong> Reconstituir el vial con su disolvente (Conc.: 250 mg/mL).</p>
                        <p><strong>Dilución:</strong> Diluir el vial reconstituido de 1 g en un **mínimo de 10 mL de API**.</p>
                        <p><strong>Administración:</strong> Administrar **lentamente en 3-5 minutos** (nunca en un tiempo inferior a 3 minutos).</p>
                    `
                },
                {
                    label: 'IV Intermitente',
                    validity: 'Vía de Elección',
                    class: '',
                    content: `
                        <p><strong>Reconstitución:</strong> Reconstituir el vial con su disolvente (Conc.: 250 mg/mL).</p>
                        <p><strong>Dilución:</strong> Diluir **1 g en 50-100 mL** o **2 g en 100 mL de SF o SG5%**.</p>
                        <p><strong>Administración:</strong> Administrar en **30-60 minutos**.</p>
                    `
                },
                {
                    label: 'IM',
                    validity: 'Válida (☑️)',
                    class: 'invalido',
                    content: `
                        <p><strong>Preparación:</strong> Reconstituir el vial con **1,5 mL API + 1,5 mL de lidocaína 2%**.</p>
                        <p><strong>Administración:</strong> Administrar en una zona de gran masa muscular. **No administrar más de 1 g por punto de inyección**.</p>
                    `
                }
            ]
        },
        'clindamicina': {
            name: 'Clindamicina',
            reconstitution: {
                presentation: 'Ampolla 600 mg/4 mL',
                method: 'No procede. (Concentración: 150 mg/mL)',
                concentration: '150 mg/mL',
                stability: 'Diluido: 24 h a TA.'
            },
            protocols: [
                {
                    label: 'IV Directa',
                    validity: 'X (No Válida)',
                    class: 'invalido',
                    content: `<p>Según la Guía, esta vía no es una opción de administración válida.</p>`
                },
                {
                    label: 'IV Intermitente',
                    validity: 'Vía de Elección',
                    class: '',
                    content: `
                        <p><strong>Dilución:</strong> Diluir la dosis prescrita en **50-100 mL de SF o SG5%**.</p>
                        <p><strong>Concentración Máxima:</strong> No superar una concentración máxima de **12 mg/mL**.</p>
                        <p><strong>Administración:</strong> Administrar en **10-60 minutos**. No se recomienda superar la velocidad de infusión de **30 mg/min** ni administrar más de **1.200 mg** en una sola infusión de 1 hora.</p>
                    `
                },
                {
                    label: 'IM',
                    validity: 'Válida',
                    class: '',
                    content: `
                        <p><strong>Administración:</strong> Inyectar **profundamente** y en zona muscular amplia.</p>
                        <p class="nota">⚠️ **Límite de Dosis:** No administrar **más de 600 mg** en inyección única por esta vía.</p>
                    `
                }
            ]
        },
        'metamizol': {
            name: 'Metamizol Magnésico',
            reconstitution: {
                presentation: 'Ampolla 2 g/5 mL',
                method: 'No procede. (Concentración: 400 mg/mL)',
                concentration: '400 mg/mL',
                stability: 'Diluido: 24 h a TA y en nevera. Proteger de la luz.'
            },
            protocols: [
                {
                    label: 'IV Directa',
                    validity: 'Válida',
                    class: 'critico', // Usamos crítico para el riesgo de shock
                    content: `
                        <p><strong>Administración:</strong> Administrar la dosis prescrita **lentamente, en al menos 5 minutos**.</p>
                        <p class="nota">🚨 **Riesgo:** Si se administra a mayor velocidad, puede producir palpitaciones, náuseas, hipotensión y shock.</p>
                    `
                },
                {
                    label: 'IV Intermitente',
                    validity: 'Vía de Elección',
                    class: '',
                    content: `
                        <p><strong>Dilución:</strong> Diluir la dosis prescrita en **50-100 mL de SF o SG5%**.</p>
                        <p><strong>Administración:</strong> Administrar en **20-60 minutos**.</p>
                    `
                },
                {
                    label: 'IM',
                    validity: 'Válida',
                    class: '',
                    content: `
                        <p><strong>Administración:</strong> Administrar la dosis prescrita en forma de **inyección IM profunda y lenta**.</p>
                    `
                }
            ]
        },
        'amikacina': {
            name: 'Amikacina',
            reconstitution: {
                presentation: 'Vial 500 mg/2 mL',
                method: 'No procede.',
                concentration: '250 mg/mL',
                stability: 'Diluido: 24 h a TA. Proteger de la luz.'
            },
            protocols: [
                {
                    label: 'IV Directa',
                    validity: 'X (No Válida)',
                    class: 'invalido',
                    content: `<p>Según la Guía, esta vía no es una opción de administración válida.</p>`
                },
                {
                    label: 'IV Intermitente',
                    validity: 'Vía de Elección',
                    class: '',
                    content: `
                        <p><strong>Dilución:</strong> Diluir la dosis en **100-200 mL de SF o SG5%** (por norma general en 100 mL).</p>
                        <p><strong>Concentración Máxima:</strong> 1 mg/mL.</p>
                        <p><strong>Administración:</strong> Administrar en **30-60 minutos**.</p>
                    `
                },
                {
                    label: 'IM',
                    validity: 'Válida',
                    class: '',
                    content: `
                        <p><strong>Preparación:</strong> Vía IM da lugar a una absorción completa y buenos niveles plasmáticos.</p>
                        <p class="nota">⚠️ **Contraindicaciones:** No emplear en pacientes en shock, quemados, con hipotensión grave o con deshidratación severa.</p>
                    `
                }
            ]
        }
    };

    const fichaFarmaco = document.getElementById('ficha-farmaco');
    const searchInput = document.getElementById('search-input'); 
    const resultsContainer = document.getElementById('results-container');
    const alphabetIndex = document.getElementById('alphabet-index');

    
    // 2. FUNCIÓN PARA DIBUJAR LA FICHA COMPLETA (Visualización simultánea)
    function renderDrugFicha(drugId) {
        const data = drugData[drugId];
        if (!data) {
            fichaFarmaco.innerHTML = '<p style="text-align: center; color: #555;">Selecciona un fármaco de la lista.</p>';
            return;
        }

        // 2a. Generar el HTML de las secciones de protocolos
        let protocolsHtml = '';
        data.protocols.forEach(p => {
            const icon = p.class === 'critico' ? '🚨' : p.class === 'invalido' ? '❌' : '✅';
            
            protocolsHtml += `
                <div class="protocolo-box ${p.class}">
                    <h3>${icon} ${p.label} <span class="validity-tag">(${p.validity})</span></h3>
                    <div class="protocolo-content">
                        ${p.content}
                    </div>
                </div>
            `;
        });

        // 2b. Insertar todo el contenido en la ficha
        fichaFarmaco.innerHTML = `
            <h2>${data.name}</h2>
            
            <section class="seccion-reconstitución">
                <h3>🧪 Reconstitución y Estabilidad</h3>
                <p><strong>Presentación:</strong> ${data.reconstitution.presentation}</p>
                <p><strong>Método:</strong> ${data.reconstitution.method}</p>
                ${data.reconstitution.concentration ? `<p>Concentración reconstituida: <strong>${data.reconstitution.concentration}</strong></p>` : ''}
                <p class="nota"><strong>Estabilidad (Reconstituido/Diluido):</strong> ${data.reconstitution.stability}</p>
            </section>

            <section class="seccion-vias">
                <h3>💉 Vías de Administración</h3>
                ${protocolsHtml}
            </section>
        `;
    }

    // FUNCIÓN PARA CARGAR LA FICHA AL HACER CLIC EN EL BOTÓN DE RESULTADO
    function loadFichaFromButton(event) {
        const drugId = event.target.getAttribute('data-drug-id');
        
        renderDrugFicha(drugId);
        
        resultsContainer.innerHTML = ''; // Ocultar los botones de resultados
        
        // Rellenar la caja de búsqueda con el nombre completo para confirmación visual
        searchInput.value = drugData[drugId].name;
        
        // Limpiar el índice de selección activa
        document.querySelectorAll('.index-button.active').forEach(btn => btn.classList.remove('active'));
    }


    // 4. FUNCIÓN PRINCIPAL DE RENDERIZADO (Botones de Resultado y Búsqueda)
    function renderResults(filter = '') {
        let resultsHTML = '';
        const lowerCaseFilter = filter.toLowerCase();
        
        // Obtener la lista de fármacos y ordenarla por nombre
        const sortedDrugs = Object.entries(drugData)
            .sort(([, a], [, b]) => a.name.localeCompare(b.name));
        
        for (const [id, data] of sortedDrugs) {
            // Filtrar por el nombre del fármaco (usamos startsWith para el índice/búsqueda precisa)
            if (data.name.toLowerCase().startsWith(lowerCaseFilter)) { 
                // Generar un botón para cada coincidencia
                resultsHTML += `
                    <button class="result-button" data-drug-id="${id}">
                        ${data.name}
                    </button>
                `;
            }
        }
        
        // --- Control de la Interfaz ---
        
        if (filter.length > 0) {
            // MODO BÚSQUEDA O ÍNDICE ACTIVO
            if (resultsHTML) {
                // Resultados: Mostrar botones de selección y la instrucción
                resultsContainer.innerHTML = resultsHTML;
                fichaFarmaco.innerHTML = `
                    <div id="ficha-farmaco" class="ficha">
                        <p style="text-align: center; color: #007bff; font-weight: 600;">👆 Selecciona un fármaco haciendo clic en la opción de arriba.</p>
                    </div>
                `;
            } else {
                // Cero resultados
                resultsContainer.innerHTML = '';
                fichaFarmaco.innerHTML = '<p style="text-align: center; color: #dc3545; font-weight: 600;">No se encontraron fármacos con ese nombre que empiecen por "' + filter.toUpperCase() + '".</p>';
            }
        } else {
            // INICIO DE LA APP (Filtro vacío) - Pantalla de bienvenida
            resultsContainer.innerHTML = '<p style="text-align: center; color: #555;">Busca un fármaco o usa el índice alfabético.</p>';
            fichaFarmaco.innerHTML = '<div id="ficha-farmaco" class="ficha"><p style="text-align: center; color: #555;">La ficha del medicamento aparecerá aquí una vez seleccionado.</p></div>';
        }

        // 5. Asignar el evento click a los nuevos botones de resultado
        document.querySelectorAll('.result-button').forEach(button => {
            button.addEventListener('click', loadFichaFromButton);
        });
    }

    // 6. Lógica de Construcción y Manejo del Índice Alfabético
    function buildAlphabetIndex() {
        const drugInitials = new Set();
        Object.values(drugData).forEach(drug => {
            drugInitials.add(drug.name.charAt(0).toUpperCase());
        });

        const sortedInitials = Array.from(drugInitials).sort();
        let indexHtml = '';

        sortedInitials.forEach(letter => {
            indexHtml += `<button class="index-button" data-letter="${letter}">${letter}</button>`;
        });

        alphabetIndex.innerHTML = indexHtml;

        // Asignar el listener a los botones del índice
        document.querySelectorAll('.index-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const letter = e.target.getAttribute('data-letter');
                
                // Limpiar el campo de búsqueda
                searchInput.value = '';

                // Activar el botón visualmente
                document.querySelectorAll('.index-button.active').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');

                // Usamos la letra como filtro de búsqueda
                renderResults(letter);
            });
        });
    }


    // 7. INICIALIZACIÓN
    
    // Listener para el campo de búsqueda instantánea
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            // Desactivar índice al escribir en la búsqueda
            document.querySelectorAll('.index-button.active').forEach(btn => btn.classList.remove('active'));
            renderResults(e.target.value.trim());
        });
    }
    
    // Construir el índice alfabético al iniciar
    buildAlphabetIndex();

    // Cargar la vista inicial (pantalla de bienvenida)
    renderResults('', false); 
});