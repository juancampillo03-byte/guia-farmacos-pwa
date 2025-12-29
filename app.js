document.addEventListener('DOMContentLoaded', () => {
    const fichaFarmaco = document.getElementById('ficha-farmaco');
    const searchInput = document.getElementById('search-input'); 
    const resultsContainer = document.getElementById('results-container');
    const alphabetIndex = document.getElementById('alphabet-index');
    const btnViaOral = document.getElementById('btn-via-oral');

    function normalizeText(text) {
        return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function renderDrugFicha(drugId) {
        const data = drugData[drugId];
        if (!data) return;

        let protocolsHtml = '';
        data.protocols.forEach(p => {
            const icon = p.class === 'critico' ? '🚨' : p.class === 'invalido' ? '❌' : '✅';
            protocolsHtml += `
                <div class="protocolo-box ${p.class}">
                    <h3>${icon} ${p.label}</h3>
                    <div class="protocolo-content">${p.content}</div>
                </div>`;
        });

        fichaFarmaco.innerHTML = `
            <h2>${data.name}</h2>
            <section class="seccion-reconstitución">
                <h3>🧪 Reconstitución y Estabilidad</h3>
                <p><strong>Presentación:</strong> ${data.reconstitution.presentation}</p>
                <p><strong>Método:</strong> ${data.reconstitution.method}</p>
                <p><strong>Estabilidad:</strong> ${data.reconstitution.stability}</p>
            </section>
            <section class="seccion-vias">
                <h3>💉 Vías de Administración</h3>
                ${protocolsHtml}
            </section>`;
        
        resultsContainer.innerHTML = ''; 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (btnViaOral) {
        btnViaOral.addEventListener('click', () => {
            fichaFarmaco.innerHTML = `
                <h2>Administración de Parenterales por V.O.</h2>
                <p class="nota-guia">Según página 218 de la Guía 2024. [cite: 25, 499]</p>
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
                            <tr><td>Cianocobalamina</td><td>amp 1 mg/2 mL</td></tr>
                            <tr><td>Clonazepam</td><td>amp 1 mg/1 mL</td></tr>
                            <tr><td>Diazepam</td><td>amp 10 mg/2 mL</td></tr>
                            <tr><td>Digoxina</td><td>amp 0,5 mg/2 mL</td></tr>
                            <tr><td>Fitomenadiona</td><td>amp 10 mg/1 mL</td></tr>
                            <tr><td>Furosemida</td><td>amp 20 mg/2 mL y 250 mg/25 mL</td></tr>
                            <tr><td>Ketamina</td><td>vial 500 mg/10 mL</td></tr>
                            <tr><td>Magnesio sulfato</td><td>amp 1,5 g/10 mL</td></tr>
                        </tbody>
                    </table>
                </div>`;
            resultsContainer.innerHTML = '';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function renderResults(filter = '', isAlphabet = false) {
        let resultsHTML = '';
        const filterNorm = normalizeText(filter);
        const sortedDrugs = Object.entries(drugData).sort(([, a], [, b]) => normalizeText(a.name).localeCompare(normalizeText(b.name)));
        for (const [id, data] of sortedDrugs) {
            const nameNorm = normalizeText(data.name);
            const matches = isAlphabet ? nameNorm.startsWith(filterNorm) : nameNorm.includes(filterNorm);
            if (matches) {
                resultsHTML += `<button class="result-button" data-drug-id="${id}">${data.name}</button>`;
            }
        }
        resultsContainer.innerHTML = resultsHTML || '<p style="padding:10px;">No se encontraron fármacos</p>';
        document.querySelectorAll('.result-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-drug-id');
                renderDrugFicha(id);
                searchInput.value = drugData[id].name;
            });
        });
    }

    function buildIndex() {
        if (!drugData) return;
        const letters = [...new Set(Object.values(drugData).map(d => normalizeText(d.name[0]).toUpperCase()))].sort();
        alphabetIndex.innerHTML = letters.map(l => `<button class="index-button">${l}</button>`).join('');
        document.querySelectorAll('.index-button').forEach(btn => {
            btn.addEventListener('click', () => {
                searchInput.value = '';
                renderResults(btn.innerText, true);
            });
        });
    }

    searchInput.addEventListener('input', (e) => renderResults(e.target.value));
    buildIndex();
    renderResults(''); 
});