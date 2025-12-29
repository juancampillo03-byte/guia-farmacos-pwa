document.addEventListener('DOMContentLoaded', () => {
    // Selectores principales
    const ficha = document.getElementById('ficha-farmaco');
    const input = document.getElementById('search-input'); 
    const results = document.getElementById('results-container');
    const index = document.getElementById('alphabet-index');
    const sideMenu = document.getElementById('side-menu');
    const seccionBusqueda = document.getElementById('seccion-busqueda');
    
    // Selectores de botones del menú
    const btnIrBuscador = document.getElementById('btn-ir-buscador');
    const btnVO = document.getElementById('btn-via-oral-menu');
    const btnAviso = document.getElementById('btn-aviso-legal'); 
    const btnAbreviaturas = document.getElementById('btn-abreviaturas');

    function norm(t) { return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }

    // --- FUNCIÓN MAESTRA DE NAVEGACIÓN ---
    const navegarA = (htmlContenido, mostrarBuscador = false) => {
        sideMenu.style.width = "0"; 
        seccionBusqueda.style.display = mostrarBuscador ? "block" : "none";
        ficha.innerHTML = htmlContenido;
        if (mostrarBuscador) {
            input.value = "";
            results.innerHTML = "";
            buildIndex();
        }
        window.scrollTo(0,0);
    };

    // --- MANEJO DEL MENÚ (BOTONES HAMBURGUESA) ---
    document.getElementById('open-menu').onclick = () => { sideMenu.style.width = "280px"; };
    document.getElementById('close-menu').onclick = () => { sideMenu.style.width = "0"; };

    // --- EVENTOS DE NAVEGACIÓN ---

    btnIrBuscador.onclick = () => navegarA(`
        <p style="text-align: center; color: #555; margin-top: 40px;">Selecciona un fármaco o usa el menú lateral.</p>
        <p style="text-align: center; color: #888; font-size: 0.8em;">Última actualización online: 29/12/2025</p>
    `, true);

    btnVO.onclick = () => navegarA(`
        <h2>Formas Parenterales por Vía Oral</h2>
        <p style="font-size:0.85em; color:gray; text-align:center; margin-bottom:15px;">Presentaciones bebibles</p>
        <div class="lista-vo-container">
            <div class="tarjeta-vo"><div class="nombre-farmaco">Acetilcisteína</div><div class="dosis-presentacion">amp 300 mg/3mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Ácido ascórbico</div><div class="dosis-presentacion">amp 1.000 mg/5 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Ácido tranexámico</div><div class="dosis-presentacion">amp 500 mg/5 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Atropina</div><div class="dosis-presentacion">amp 1 mg/1 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Bicarbonato sódico</div><div class="dosis-presentacion">amp 8.4%, 1 M/10 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Butilescopolamina</div><div class="dosis-presentacion">amp 20 mg/1 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Butilescopolamina + metamizol</div><div class="dosis-presentacion">amp 20 mg+2,5g/5 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Cafeína citrato</div><div class="dosis-presentacion">amp 20 mg/1 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Cianocobalamina</div><div class="dosis-presentacion">amp 1 mg/2 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Ciclofosfamida</div><div class="dosis-presentacion">vial 1 g</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Clonazepam</div><div class="dosis-presentacion">amp 1 mg/1 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Cloruro sódico</div><div class="dosis-presentacion">amp 20% 10 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Desferoxamina</div><div class="dosis-presentacion">vial 500 mg</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Dexametasona</div><div class="dosis-presentacion">amp 40 mg/5 mL y 4 mg/mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Diazepam</div><div class="dosis-presentacion">amp 10 mg/2 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Digoxina</div><div class="dosis-presentacion">amp 0,5 mg/2 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Fitomenadiona</div><div class="dosis-presentacion">amp 10 mg/1 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Folinato cálcico</div><div class="dosis-presentacion">vial 350 mg</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Furosemida</div><div class="dosis-presentacion">amp 20 mg/2 mL y 250 mg/25 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Hidralazina</div><div class="dosis-presentacion">amp 20 mg</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Hidrocortisona</div><div class="dosis-presentacion">vial 75 mg</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Ketamina</div><div class="dosis-presentacion">vial 500 mg/10 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Labetalol</div><div class="dosis-presentacion">amp 100 mg/20 mL</div></div>
            <div class="tarjeta-vo"><div class="nombre-farmaco">Magnesio sulfato</div><div class="dosis-presentacion">amp 1,5 g/10 mL</div></div>
        </div>
    `);

    btnAbreviaturas.onclick = () => navegarA(`
        <h2>Índice de Abreviaturas</h2>
        <div style="background: white; padding: 10px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <div class="abreviatura-fila"><span class="abr-sigla">adm.</span><span class="abr-significado">Administración</span></div>
            <div class="abreviatura-fila"><span class="abr-sigla">amp</span><span class="abr-significado">Ampolla</span></div>
            <div class="abreviatura-fila"><span class="abr-sigla">API</span><span class="abr-significado">Agua para inyectables</span></div>
            <div class="abreviatura-fila"><span class="abr-sigla">conc.</span><span class="abr-significado">Concentración</span></div>
            <div class="abreviatura-fila"><span class="abr-sigla">GS</span><span class="abr-significado">Suero glucosalino</span></div>
            <div class="abreviatura-fila"><span class="abr-sigla">IM</span><span class="abr-significado">Vía Intramuscular</span></div>
            <div class="abreviatura-fila"><span class="abr-sigla">IV</span><span class="abr-significado">Vía Intravenosa</span></div>
            <div class="abreviatura-fila"><span class="abr-sigla">reconst.</span><span class="abr-significado">Reconstitución</span></div>
            <div class="abreviatura-fila"><span class="abr-sigla">SF</span><span class="abr-significado">Suero Fisiológico (0,9% NaCl)</span></div>
            <div class="abreviatura-fila"><span class="abr-sigla">SG5%</span><span class="abr-significado">Suero Glucosado 5%</span></div>
            <div class="abreviatura-fila"><span class="abr-sigla">v.o.</span><span class="abr-significado">Vía oral</span></div>
            <div class="abreviatura-fila"><span class="abr-sigla">vial</span><span class="abr-significado">Vial</span></div>
        </div>
    `);

    btnAviso.onclick = () => navegarA(`
        <div style="text-align: justify; line-height: 1.6; color: #333; padding: 10px;">
            <h2 style="color: #444; border-bottom: 2px solid #eee; padding-bottom: 10px; text-align: center;">Aviso Legal</h2>
            <p>Los autores han hecho todos los esfuerzos posibles para asegurarse de que la información contenida en esta guía sea correcta y corresponde con la literatura médica y las autoridades sanitarias, en el momento de la publicación de la guía.</p>
            <p>Sin embargo, queremos advertir a los lectores que deben consultar las recomendaciones y las informaciones que, de forma periódica, proporcionan las autoridades sanitarias y los fabricantes de los medicamentos, y que no podemos hacernos responsables de las consecuencias que pudieran derivarse de cualquier error de texto que haya podido pasar inadvertido.</p>
            <p>Finalmente, cuando para el manejo o tratamiento de una determinada situación haya más de una opción admitida, las recomendaciones de la guía representan exclusivamente las preferencias de los autores, sin que ello indique que otras opciones no puedan ser igualmente eficaces o recomendables.</p>
            <div style="margin-top: 25px; border-top: 1px solid #eee; padding-top: 15px; background: #fff;">
                <h3 style="font-size: 1.1em; color: #007bff; margin-bottom: 10px;">Autores:</h3>
                <ul style="list-style: none; padding-left: 5px; font-size: 0.95em; color: #444; line-height: 1.5;">
                    <li>• Sarah Myles Velasco</li><li>• Juan Campillo López</li><li>• Gregorio Sanz Tamargo</li><li>• José Marco del Río</li><li>• Rosa María Fuster Ruiz de Apodaca</li><li>• Iván Beltrá Picó</li><li>• Mª Ángeles Cia Barrio</li><li>• María Pomares Bernabeu</li><li>• Vanesa María Castro Granell</li>
                    <li style="margin-top: 10px; color: #666; font-weight: 600;">Servicio de Farmacia Hospitalaria - Hospital Marina Baixa</li>
                </ul>
            </div>
            <p style="font-style: italic; color: #666; border-top: 1px solid #eee; padding-top: 15px; margin-top: 20px; font-size: 0.85em;">
                Cualquier forma de reproducción, distribución, comunicación pública o transformación de esta obra, sólo puede ser realizada con la autorización de sus titulares, salvo excepciones previstas por ley.
            </p>
            <div style="margin-top: 40px; padding: 20px; background: #f1f3f5; border-radius: 10px; font-size: 0.85em; color: #666; border: 1px solid #e9ecef; text-align: center;">
                <strong>Servicio de Farmacia Hospitalaria</strong><br>Hospital Marina Baixa<br><em>Edición 2024</em>
            </div>
        </div>
    `);

    // --- LÓGICA DE FÁRMACOS Y BUSCADOR (CON COLORES RESTAURADOS) ---
    function renderDrugFicha(id) {
        const d = drugData[id];
        let protocolsHtml = "";
        
        d.protocols.forEach(p => {
            const icon = p.class === 'critico' ? '🚨' : p.class === 'invalido' ? '❌' : '✅';
            // RESTAURAMOS LA CLASE 'protocolo-box' Y LA CLASE ESPECÍFICA (critico/invalido/etc)
            protocolsHtml += `
                <div class="protocolo-box ${p.class}">
                    <h3>${icon} ${p.label}</h3>
                    <div>${p.content}</div>
                </div>`;
        });

        ficha.innerHTML = `
            <h2>${d.name}</h2>
            <div class="seccion-reconstitución">
                <p><strong>Presentación:</strong> ${d.reconstitution.presentation}</p>
                <p><strong>Método:</strong> ${d.reconstitution.method}</p>
                <p><strong>Estabilidad:</strong> ${d.reconstitution.stability}</p>
            </div>
            ${protocolsHtml}`;
            
        results.innerHTML = "";
        window.scrollTo(0,0);
    }

    function renderResults(filter, isAlpha = false) {
        let html = "";
        const fNorm = norm(filter);
        if(filter !== "") ficha.innerHTML = '<p style="text-align:center; color:gray;">Resultados...</p>';
        const sorted = Object.entries(drugData).sort(([,a],[,b]) => norm(a.name).localeCompare(norm(b.name)));
        for (const [id, d] of sorted) {
            const nNorm = norm(d.name);
            if (isAlpha ? nNorm.startsWith(fNorm) : nNorm.includes(fNorm)) {
                html += `<button class="result-button" data-id="${id}">${d.name}</button>`;
            }
        }
        results.innerHTML = html;
        document.querySelectorAll('.result-button').forEach(b => {
            b.onclick = () => {
                renderDrugFicha(b.dataset.id);
                input.value = drugData[b.dataset.id].name;
            };
        });
    }

    function buildIndex() {
        if (!index) return;
        const lets = [...new Set(Object.values(drugData).map(d => norm(d.name[0]).toUpperCase()))].sort();
        index.innerHTML = lets.map(l => `<button class="index-button">${l}</button>`).join('');
        document.querySelectorAll('.index-button').forEach(b => {
            b.onclick = () => { 
                input.value = ""; 
                renderResults(b.innerText, true); 
            };
        });
    }

    input.oninput = (e) => renderResults(e.target.value);
    buildIndex();
});