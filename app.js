document.addEventListener('DOMContentLoaded', () => {
    const fichaFarmaco = document.getElementById('ficha-farmaco');
    const searchInput = document.getElementById('search-input'); 
    const resultsContainer = document.getElementById('results-container');
    const alphabetIndex = document.getElementById('alphabet-index');

    function renderDrugFicha(drugId) {
        const data = drugData[drugId];
        if (!data) return;

        let protocolsHtml = '';
        data.protocols.forEach(p => {
            const icon = p.class === 'critico' ? '🚨' : p.class === 'invalido' ? '❌' : '✅';
            protocolsHtml += `
                <div class="protocolo-box ${p.class}">
                    <h3>${icon} ${p.label} <span class="validity-tag">(${p.validity})</span></h3>
                    <div class="protocolo-content">${p.content}</div>
                </div>`;
        });

        fichaFarmaco.innerHTML = `
            <h2>${data.name}</h2>
            <section class="seccion-reconstitución">
                <h3>🧪 Reconstitución y Estabilidad</h3>
                <p><strong>Presentación:</strong> ${data.reconstitution.presentation}</p>
                <p><strong>Método:</strong> ${data.reconstitution.method}</p>
                <p><strong>Concentración:</strong> ${data.reconstitution.concentration}</p>
                <p><strong>Estabilidad:</strong> ${data.reconstitution.stability}</p>
            </section>
            <section class="seccion-vias">
                <h3>💉 Vías de Administración</h3>
                ${protocolsHtml}
            </section>`;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderResults(filter = '', isAlphabet = false) {
        let resultsHTML = '';
        const lowerCaseFilter = filter.toLowerCase();
        const sortedDrugs = Object.entries(drugData).sort(([, a], [, b]) => a.name.localeCompare(b.name));
        
        for (const [id, data] of sortedDrugs) {
            const matches = isAlphabet ? data.name.toLowerCase().startsWith(lowerCaseFilter) : data.name.toLowerCase().includes(lowerCaseFilter);
            if (matches) {
                resultsHTML += `<button class="result-button" data-drug-id="${id}">${data.name}</button>`;
            }
        }
        
        resultsContainer.innerHTML = resultsHTML;
        document.querySelectorAll('.result-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                renderDrugFicha(e.currentTarget.getAttribute('data-drug-id'));
                resultsContainer.innerHTML = '';
                searchInput.value = drugData[e.currentTarget.getAttribute('data-drug-id')].name;
            });
        });
    }

    function buildIndex() {
        const letters = [...new Set(Object.values(drugData).map(d => d.name[0].toUpperCase()))].sort();
        alphabetIndex.innerHTML = letters.map(l => `<button class="index-button">${l}</button>`).join('');
        document.querySelectorAll('.index-button').forEach(btn => {
            btn.addEventListener('click', () => {
                searchInput.value = '';
                renderResults(btn.innerText, true);
            });
        });
    }

    searchInput.addEventListener('input', (e) => renderResults(e.target.value.trim()));
    buildIndex();
});