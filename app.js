document.addEventListener('DOMContentLoaded', () => {
    const ficha = document.getElementById('ficha-farmaco');
    const input = document.getElementById('search-input'); 
    const results = document.getElementById('results-container');
    const index = document.getElementById('alphabet-index');
    const sideMenu = document.getElementById('side-menu');
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const btnVO = document.getElementById('btn-via-oral-menu');

    function norm(t) { return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }

    // --- MANEJO DEL MENÚ ---
    openMenuBtn.onclick = () => sideMenu.style.width = "280px";
    closeMenuBtn.onclick = () => sideMenu.style.width = "0";

// --- TABLA PÁGINA 218 (LISTADO EXACTO SUMINISTRADO) ---
    btnVO.onclick = () => {
        sideMenu.style.width = "0"; 
        input.value = "";
        ficha.innerHTML = `
            <h2>Formas Parenterales por Vía Oral</h2>
            <p style="font-size:0.8em; color:gray;">Presentaciones parenterales que pueden administrarse vía oral (bebibles)</p>
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
        results.innerHTML = "";
    };

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
        // Limpiar ficha si el usuario busca algo nuevo
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
        const lets = [...new Set(Object.values(drugData).map(d => norm(d.name[0]).toUpperCase()))].sort();
        index.innerHTML = lets.map(l => `<button class="index-button">${l}</button>`).join('');
        document.querySelectorAll('.index-button').forEach(b => {
            b.onclick = () => { input.value = ""; renderResults(b.innerText, true); };
        });
    }

    input.oninput = (e) => renderResults(e.target.value);
    buildIndex();
});