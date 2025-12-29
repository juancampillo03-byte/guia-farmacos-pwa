document.addEventListener('DOMContentLoaded', () => {
    const fichaFarmaco = document.getElementById('ficha-farmaco');
    const searchInput = document.getElementById('search-input'); 
    const resultsContainer = document.getElementById('results-container');
    const alphabetIndex = document.getElementById('alphabet-index');
    const btnViaOral = document.getElementById('btn-via-oral');

    // Función para normalizar texto (quitar tildes y diéresis)
    function normalizeText(text) {
        return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // Función para dibujar la ficha de cada fármaco
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

        let viaOralHtml = data.viaOral ? `
            <section class="seccion-vo">
                <h3>🔄 Alternativa Vía Oral</h3>
                <div class="vo-box">${data.viaOral}</div>
            </section>` : '';

        fichaFarmaco.innerHTML = `
            <h2>${data.name}</h2>
            <section class="seccion-reconstitución">
                <h3>🧪 Reconstitución y Estabilidad</h3>
                <p><strong>Presentación:</strong> ${data.reconstitution.presentation}</p>
                <p><strong>Método:</strong> ${data.reconstitution.method}</p>
                <p><strong>Estabilidad:</strong> ${data.reconstitution.stability}</p>
            </section>
            ${viaOralHtml}
            <section class="seccion-vias">
                <h3>💉 Vías de Administración</h3>
                ${protocolsHtml}
            </section>`;
        
        resultsContainer.innerHTML = ''; 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Botón para la tabla de conversión a vía oral
    if (btnViaOral) {
        btnViaOral.addEventListener('click', () => {
            fichaFarmaco.innerHTML = `
                <h2>🔄 Conversión a Vía Oral</h2>
                <div class="protocolo-box">
                    <p><strong>Fármacos con Biodisponibilidad >90%:</strong> Linezolid, Metronidazol, Levofloxacino, Ciprofloxacino, Fluconazol.</p>
                    <hr>
                    <p><strong>Presentaciones Parenterales administrables V.O.:</strong></p>
                    <ul>
                        <li>Acetilcisteína amp 300 mg/3mL</li>
                        <li>Bicarbonato sódico 8.4%</li>
                        <li>Clonazepam amp 1 mg/1 mL</li>
                        <li>Diazepam amp 10 mg/2 mL</li>
                        <li>Digoxina amp 0,5 mg/2 mL</li>
                        <li>Furosemida amp 20 mg/2 mL</li>
                        <li>Vitamina K1 (Konakion) amp 10 mg/1 mL</li>
                    </ul>
                </div>`;
            resultsContainer.innerHTML = '';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Lógica de búsqueda y filtrado
    function renderResults(filter = '', isAlphabet = false) {
        let resultsHTML = '';
        const filterNorm = normalizeText(filter);
        
        // ORDENACIÓN: Compara nombres normalizados
        const sortedDrugs = Object.entries(drugData).sort(([, a], [, b]) => {
            return normalizeText(a.name).localeCompare(normalizeText(b.name));
        });
        
        for (const [id, data] of sortedDrugs) {
            const nameNorm = normalizeText(data.name);
            const matches = isAlphabet 
                ? nameNorm.startsWith(filterNorm) 
                : nameNorm.includes(filterNorm);
            
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

    // Construcción del índice
    function buildIndex() {
        if (!drugData) return;
        const letters = [...new Set(Object.values(drugData).map(d => 
            normalizeText(d.name[0]).toUpperCase()
        ))].sort();
        
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