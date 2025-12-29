document.addEventListener('DOMContentLoaded', () => {
    const ficha = document.getElementById('ficha-farmaco');
    const input = document.getElementById('search-input'); 
    const results = document.getElementById('results-container');
    const index = document.getElementById('alphabet-index');
    const sideMenu = document.getElementById('side-menu');
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    
    // Elementos de navegación
    const seccionBusqueda = document.getElementById('seccion-busqueda');
    const btnIrBuscador = document.getElementById('btn-ir-buscador');
    const btnVO = document.getElementById('btn-via-oral-menu');
    const btnAviso = document.getElementById('btn-aviso-legal'); 

    function norm(t) { return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }

    // --- MANEJO DEL MENÚ (ABRIR/CERRAR) ---
    openMenuBtn.onclick = () => { sideMenu.style.width = "280px"; };
    closeMenuBtn.onclick = () => { sideMenu.style.width = "0"; };

    // --- FUNCIÓN 1: VOLVER AL BUSCADOR ---
    btnIrBuscador.onclick = () => {
        sideMenu.style.width = "0"; 
        seccionBusqueda.style.display = "block"; 
        input.value = ""; 
        results.innerHTML = ""; 
        buildIndex(); 
        ficha.innerHTML = `
            <p style="text-align: center; color: #555;">Selecciona un fármaco o usa el menú lateral.</p>
            <p style="text-align: center; color: #555;">Última actualización online: 29/12/2025</p>
        `;
        window.scrollTo(0,0);
    };

    // --- FUNCIÓN 2: VER LA TABLA V.O. ---
    btnVO.onclick = () => {
        sideMenu.style.width = "0"; 
        seccionBusqueda.style.display = "none"; 
        
        ficha.innerHTML = `
            <h2>Formas Parenterales por Vía Oral</h2>
            <p style="font-size:0.8em; color:gray; text-align:center;">Presentaciones parenterales que pueden administrarse vía oral (bebibles)</p>
            <div class="tabla-vo-container">
                <table class="tabla-vo">
                    <thead><tr><th>Fármaco</th><th>Presentación</th></tr></thead>
                    <tbody>
                        <tr><td>Acetilcisteína</td><td>amp 300 mg/3mL</td></tr>
                        <tr><td>Ácido ascórbico</td><td>amp 1.000 mg/5 mL</td></tr>
                        <tr><td>Ácido tranexámico</td><td>amp 500 mg/5 mL</td></tr>
                        <tr><td>Atropina</td><td>amp 1 mg/1 mL</td></tr>
                        <tr><td>Bicarbonato sódico</td><td>amp 8.4%, 1 M/10 mL</td></tr>
                        <tr><td>Butilescopolamina</td><td>amp 20 mg/1 mL</td></tr>
                        <tr><td>Butilescopolamina + metamizol</td><td>amp 20 mg+2,5g/5 mL</td></tr>
                        <tr><td>Cafeína citrato</td><td>amp 20 mg/1 mL</td></tr>
                        <tr><td>Cianocobalamina</td><td>amp 1 mg/2 mL</td></tr>
                        <tr><td>Ciclofosfamida</td><td>vial 1 g</td></tr>
                        <tr><td>Clonazepam</td><td>amp 1 mg/1 mL</td></tr>
                        <tr><td>Cloruro sódico</td><td>amp 20% 10 mL</td></tr>
                        <tr><td>Desferoxamina</td><td>vial 500 mg</td></tr>
                        <tr><td>Dexametasona</td><td>amp 40 mg/5 mL y 4 mg/mL</td></tr>
                        <tr><td>Diazepam</td><td>amp 10 mg/2 mL</td></tr>
                        <tr><td>Digoxina</td><td>amp 0,5 mg/2 mL</td></tr>
                        <tr><td>Fitomenadiona</td><td>amp 10 mg/1 mL</td></tr>
                        <tr><td>Folinato cálcico</td><td>vial 350 mg</td></tr>
                        <tr><td>Furosemida</td><td>amp 20 mg/2 mL y 250 mg/25 mL</td></tr>
                        <tr><td>Hidralazina</td><td>amp 20 mg</td></tr>
                        <tr><td>Hidrocortisona</td><td>vial 75 mg</td></tr>
                        <tr><td>Ketamina</td><td>vial 500 mg/10 mL</td></tr>
                        <tr><td>Labetalol</td><td>amp 100 mg/20 mL</td></tr>
                        <tr><td>Magnesio sulfato</td><td>amp 1,5 g/10 mL</td></tr>
                    </tbody>
                </table>
            </div>`;
        window.scrollTo(0,0);
    };

    // --- FUNCIÓN 3: VER AVISO LEGAL (CON LISTADO COMPLETO DE AUTORES) ---
    btnAviso.onclick = () => {
        sideMenu.style.width = "0"; 
        seccionBusqueda.style.display = "none"; 
        
        ficha.innerHTML = `
            <div style="text-align: justify; line-height: 1.6; color: #333; padding: 10px;">
                <h2 style="color: #444; border-bottom: 2px solid #eee; padding-bottom: 10px; text-align: center;">Aviso Legal</h2>
                <p>Los autores han hecho todos los esfuerzos posibles para asegurarse de que la información contenida en esta guía sea correcta y corresponde con la literatura médica y las autoridades sanitarias, en el momento de la publicación de la guía.</p>
                <p>Sin embargo, queremos advertir a los lectores que deben consultar las recomendaciones y las informaciones que, de forma periódica, proporcionan las autoridades sanitarias y los fabricantes de los medicamentos, y que no podemos hacernos responsables de las consecuencias que pudieran derivarse de cualquier error de texto que haya podido pasar inadvertido.</p>
                <p>Finalmente, cuando para el manejo o tratamiento de una determinada situación haya más de una opción admitida, las recomendaciones del libro representan exclusivamente las preferencias de los autores, sin que ello indique que otras opciones no puedan ser igualmente eficaces o recomendables.</p>
                
                <div style="margin-top: 25px; border-top: 1px solid #eee; padding-top: 15px; background: #fff;">
                    <h3 style="font-size: 1.1em; color: #007bff; margin-bottom: 10px;">Autores:</h3>
                    <ul style="list-style: none; padding-left: 5px; font-size: 0.95em; color: #444; line-height: 1.5;">
                        <li>• Sarah Myles Velasco</li>
                        <li>• Juan Campillo López</li>
                        <li>• Gregorio Sanz Tamargo</li>
                        <li>• José Marco del Río</li>
                        <li>• Rosa María Fuster Ruiz de Apodaca</li>
                        <li>• Iván Beltrá Picó</li>
                        <li>• Mª Ángeles Cia Barrio</li>
                        <li>• María Pomares Bernabeu</li>
                        <li>• Vanesa María Castro Granell</li>
                        <li style="margin-top: 10px; color: #666; font-weight: 600;">Servicio de Farmacia Hospitalaria - Hospital Marina Baixa</li>
                    </ul>
                </div>

                <p style="font-style: italic; color: #666; border-top: 1px solid #eee; padding-top: 15px; margin-top: 20px; font-size: 0.85em;">
                    Cualquier forma de reproducción, distribución, comunicación pública o transformación de esta obra, sólo puede ser realizada con la autorización de sus titulares, salvo excepciones previstas por ley.
                </p>

                <div style="margin-top: 40px; padding: 20px; background: #f1f3f5; border-radius: 10px; font-size: 0.85em; color: #666; border: 1px solid #e9ecef; text-align: center;">
                    <strong>Servicio de Farmacia Hospitalaria</strong><br>
                    Hospital Marina Baixa<br>
                    <em>Guía de Administración Parenteral - Edición 2024</em>
                </div>
            </div>`;
        window.scrollTo(0,0);
    };

    // --- LOGICA DE RENDERIZADO DE FÁRMACOS ---
    function renderDrugFicha(id) {
        const d = drugData[id];
        let protocolsHtml = "";
        d.protocols.forEach(p => {
            const icon = p.class === 'critico' ? '🚨' : p.class === 'invalido' ? '❌' : '✅';
            protocolsHtml += `<div class="protocolo-box ${p.class}"><h3>${icon} ${p.label}</h3><div>${p.content}</div></div>`;
        });
        ficha.innerHTML = `<h2>${d.name}</h2>
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