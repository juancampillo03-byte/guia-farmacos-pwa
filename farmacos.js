// BASE DE DATOS DE FÁRMACOS
const drugData = {
    'acetilcisteina': {
        name: 'Acetilcisteína',
        reconstitution: { presentation: 'Flumil® amp 300 mg/3 mL (100 mg/mL) [cite: 89]', method: 'No procede [cite: 89]', stability: 'Diluido: 24 h a TA (envases PVC) [cite: 89]' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente en 3-5 minutos[cite: 89].</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL de SG5% y administrar en 15-30 minutos[cite: 89].</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Diluir en 500 mL de SG5%[cite: 89].</p>' },
            { label: 'IM', validity: '✓', class: '', content: '<p>Administrar vía IM profunda[cite: 89].</p>' }
        ]
    },
    'acetilcisteina-antidoto': {
        name: 'Acetilcisteína (Antídoto)',
        reconstitution: { presentation: 'Hidonac antídoto® 20% vial 5 g/25 mL (200 mg/mL) [cite: 91]', method: 'No procede [cite: 91]', stability: 'Diluido: 24 h a TA. Proteger de la luz [cite: 91]' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: 'critico', content: '<p>Ciclo de 21h (3 perfusiones): 150 mg/Kg en 1h; 50 mg/Kg en 4h; 100 mg/Kg en 16h. Usar SG5%[cite: 91].</p>' }
        ]
    },
    'acetilsalicilato': {
        name: 'Acetilsalicilato de Lisina',
        reconstitution: { presentation: 'Inyesprin® vial 900 mg + amp 5 mL API [cite: 93]', method: 'Reconstituir el vial con 5 mL API [cite: 93]', stability: 'Reconstituido: Uso inmediato. Diluido: 15 h a TA [cite: 93]' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente (2-5 minutos)[cite: 93].</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 100-250 mL SF o SG5%. Administrar en máx 2h[cite: 93].</p>' },
            { label: 'IM', validity: '✓', class: 'invalido', content: '<p>Vía profunda. Contraindicada en SCACEST[cite: 93].</p>' }
        ]
    },
    'aciclovir': {
        name: 'Aciclovir Sódico',
        reconstitution: { presentation: 'Aciclovir EFG vial 250 mg [cite: 95]', method: 'Reconstituir con 10 mL de API o SF (25 mg/mL) [cite: 95]', stability: 'Reconstituido: 12 h a TA. No refrigerar [cite: 95]' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en mín. 50 mL SF o SG5% por vial. Administrar en ≥ 1h con bomba[cite: 95].</p>' },
            { label: 'IV directa', validity: 'No recomendable', class: 'invalido', content: '<p>Riesgo de daño renal por precipitación[cite: 95].</p>' }
        ]
    },
    'adenosina': {
        name: 'Adenosina',
        reconstitution: { presentation: 'Adenocor® vial 6 mg/2 mL [cite: 97]', method: 'No procede [cite: 97]', stability: 'No procede [cite: 97]' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: 'critico', content: '<p>Bolo rápido (1-2 seg) seguido de lavado con SF. Monitorizar ECG[cite: 97].</p>' }
        ]
    },
    'adrenalina': {
        name: 'Adrenalina (Epinefrina)',
        reconstitution: { presentation: 'Amp 1 mg/1 mL y jga 1 mg/10 mL [cite: 99]', method: 'No procede [cite: 99]', stability: 'Diluido: Uso inmediato [cite: 99]' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: 'critico', content: '<p>Diluir 1 mg en 9 mL SF (0,1 mg/mL). Bolo rápido en parada[cite: 99].</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir 1 mg en 250 mL SG5% (4 mcg/mL). Velocidad 1-10 mcg/min[cite: 99].</p>' },
            { label: 'IM', validity: '✓', class: '', content: '<p>Vía de elección en anafilaxia severa[cite: 99].</p>' },
            { label: 'SC', validity: '✓', class: '', content: '<p>Válida en anafilaxia y asma agudo[cite: 99].</p>' }
        ]
    },
    'albumina': {
        name: 'Albúmina',
        reconstitution: { presentation: 'Albutein® 20% vial 50 mL [cite: 101]', method: 'No procede [cite: 101]', stability: 'Diluido: Uso inmediato [cite: 101]' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Directamente sin diluir. En emergencia, tan rápido como sea necesario[cite: 101].</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Sin diluir o en SF/SG5%. Administrar en 30-60 min[cite: 101].</p>' }
        ]
    },
    'alteplasa': {
        name: 'Alteplasa',
        reconstitution: { presentation: 'Actilyse® vial 20/50 mg [cite: 107]', method: 'Reconstituir con API (1 mg/mL o 2 mg/mL). Evitar espuma [cite: 107]', stability: '8 h TA / 24 h Nevera. Proteger luz [cite: 107]' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Bolus IV lento (1-2 min)[cite: 107].</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 100-250 mL SF (mín. 0,2 mg/mL)[cite: 107].</p>' }
        ]
    },
    'amikacina': {
        name: 'Amikacina',
        reconstitution: { presentation: 'Amikacina EFG vial 500 mg/2 mL [cite: 111]', method: 'No procede [cite: 111]', stability: 'Diluido: 24 h TA. Proteger luz [cite: 111]' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Vía de elección. Diluir en 100-200 mL SF/SG5%. Administrar en 30-60 min[cite: 111].</p>' },
            { label: 'IM', validity: '✓', class: '', content: '<p>Absorción completa. Evitar en shock o quemados[cite: 111].</p>' }
        ]
    },
    'amoxicilina-clavulanico': {
        name: 'Amoxicilina / Ácido Clavulánico',
        reconstitution: { presentation: 'Vial 1g/200mg o 2g/200mg [cite: 115]', method: 'Reconstituir con 20 mL API [cite: 115]', stability: 'Uso inmediato (máx 20 min) [cite: 115]' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Lento (mín 3 min). Máx 1g/200mg[cite: 115].</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>1g/200mg en 100 mL SF. Administrar en 30 min[cite: 115].</p>' }
        ]
    },
    'ampicilina': {
        name: 'Ampicilina',
        reconstitution: { presentation: 'Gobemicina® vial 250mg/500mg/1g [cite: 117]', method: 'Reconstituir con API (125-250 mg/mL) [cite: 117]', stability: 'Uso inmediato (<1h TA) [cite: 117]' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Diluir a máx 100 mg/mL. Administrar en 5-10 min[cite: 117].</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en SF (máx 30 mg/mL). Administrar en 15-30 min[cite: 117].</p>' },
            { label: 'IM', validity: '✓', class: '', content: '<p>Administrar vía IM profunda[cite: 117].</p>' }
        ]
    },
    'atropina': {
        name: 'Atropina Sulfato',
        reconstitution: { presentation: 'Atropina EFG amp 1 mg/1 mL [cite: 125]', method: 'No procede [cite: 125]', stability: 'Uso inmediato [cite: 125]' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Diluir en mín. 10 mL SF. Administrar en bolo (aprox 2 min)[cite: 125].</p>' },
            { label: 'IM/SC', validity: '✓', class: '', content: '<p>Uso habitual como preanestesia[cite: 125].</p>' }
        ]
    },
    'aztreonam': {
        name: 'Aztreonam',
        reconstitution: { presentation: 'Azactam® vial 1 g + amp 3 mL API [cite: 129]', method: 'Reconstituir con 3 mL API (250 mg/mL) [cite: 129]', stability: '24 h TA/Nevera [cite: 129]' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Diluir en 6-10 mL API. Administrar en 3-5 min[cite: 129].</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL SF/SG5%. Administrar en 20-60 min[cite: 129].</p>' },
            { label: 'IM', validity: '✓', class: '', content: '<p>Vía profunda. Mín 3 mL disolvente por gramo. No mezclar con anestésicos[cite: 129].</p>' }
        ]
    },
    'bicarbonato-sodico': {
        name: 'Bicarbonato Sódico',
        reconstitution: { presentation: '1/6 M (1,4%) y 1 M (8,4%) [cite: 136]', method: 'No procede [cite: 136]', stability: 'Diluido: 24 h TA [cite: 136]' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>1/6 M: Directo sin diluir. 1 M: Diluir a isotonicidad (1,5%) en API/SF/SG5%[cite: 136].</p>' },
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente según prescripción[cite: 136].</p>' }
        ]
    },
    'cefazolina': {
        name: 'Cefazolina',
        reconstitution: { presentation: 'Vial 1 g + amp 4 mL API [cite: 156]', method: 'Reconstituir con disolvente (250 mg/mL) [cite: 156]', stability: '8 h TA / 24 h Nevera [cite: 156]' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Diluir 1g en mín 10 mL API. Administrar en 3-5 min (mín 3 min)[cite: 156].</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>1g en 50-100 mL o 2g en 100 mL SF/SG5%. Administrar en 30-60 min[cite: 156].</p>' },
            { label: 'IM', validity: '✓', class: '', content: '<p>Reconstituir con 1,5 mL API + 1,5 mL lidocaína 2%. Máx 1g por punto[cite: 156].</p>' }
        ]
    },
    'ceftriaxona': {
        name: 'Ceftriaxona',
        reconstitution: { presentation: 'Vial 1 g / 2 g [cite: 164]', method: '1g con 10 mL API (100 mg/mL) [cite: 164]', stability: '8 h TA / 24 h Nevera [cite: 164]' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente en 2-4 minutos[cite: 164].</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL SF/SG5%. Administrar en 30-60 min[cite: 164].</p>' },
            { label: 'IM', validity: '✓', class: '', content: '<p>1g con 1,5 mL lidocaína 2% + 2 mL API. Vía profunda[cite: 164].</p>' }
        ]
    },
    'clindamicina': {
        name: 'Clindamicina',
        reconstitution: { presentation: 'Amp 600 mg/4 mL (150 mg/mL) [cite: 178]', method: 'No procede [cite: 178]', stability: 'Diluido: 24 h TA [cite: 178]' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Vía de elección. Diluir en 50-100 mL SF/SG5% (máx 12 mg/mL). Administrar en 10-60 min (máx 30 mg/min)[cite: 178].</p>' },
            { label: 'IM', validity: '✓', class: '', content: '<p>Vía profunda. Máximo 600 mg por pinchazo[cite: 178].</p>' }
        ]
    }
};