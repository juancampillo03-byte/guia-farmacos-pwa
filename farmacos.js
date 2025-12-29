// BASE DE DATOS DE FÁRMACOS
const drugData = {
    'aciclovir': {
        name: 'Aciclovir Sódico',
        reconstitution: {
            presentation: 'Vial 250 mg',
            method: 'Reconstituir el vial con 10 mL de API o SF.',
            concentration: '25 mg/mL',
            stability: '12 h a TA. Proteger de la luz. No refrigerar.'
        },
        protocols: [
            { label: 'IV Directa', validity: 'X (No recomendable)', class: 'invalido', content: '<p>Riesgo de precipitación renal si se administra rápido.</p>' },
            { label: 'IV Intermitente', validity: 'Vía de Elección', class: '', content: '<p>Diluir en 50-100 mL de SF. Administrar en 1 hora.</p>' }
        ]
    },
    'acetilcisteina': {
        name: 'Acetilcisteína',
        reconstitution: { presentation: 'Ampolla 300 mg/3 mL', method: 'No procede.', concentration: '100 mg/mL', stability: 'Diluido: 24 h a TA.' },
        protocols: [
            { label: 'IV Directa', validity: 'Válida', class: '', content: '<p>Administrar lentamente en 3-5 min.</p>' },
            { label: 'IV Intermitente', validity: 'Vía de Elección', class: '', content: '<p>Diluir en 50-100 mL de SG5%. Administrar en 15-30 min.</p>' }
        ]
    },
    'adenosina': {
        name: 'Adenosina',
        reconstitution: { presentation: 'Vial 6 mg/2 mL', method: 'No procede.', concentration: '3 mg/mL', stability: 'No procede.' },
        protocols: [
            { label: 'IV Directa', validity: 'Vía de Elección', class: 'critico', content: '<p>Inyección rápida en bolo (1-2 seg). Lavado rápido posterior con SF. Monitorizar ECG.</p>' }
        ]
    },
    'vancomicina': {
        name: 'Vancomicina',
        reconstitution: { presentation: 'Vial 1 g', method: 'Reconstituir con 20 mL de API.', concentration: '50 mg/mL', stability: '24 h en nevera.' },
        protocols: [
            { label: 'IV Intermitente', validity: 'Vía de Elección', class: '', content: '<p>Diluir en 100-250 mL de SF. Administrar en 60 min. Evitar administración rápida (Hombre Rojo).</p>' },
            { label: 'Restricción Líquidos', validity: 'Vía Central', class: 'critico', content: '<p>Concentración máx 10 mg/mL. Solo vía central. Administrar en ≥ 2 horas.</p>' }
        ]
    },
    'meropenem': {
        name: 'Meropenem',
        reconstitution: { presentation: 'Vial 1 g', method: 'Reconstituir con 20 mL de API.', concentration: '50 mg/mL', stability: '3 h TA / 24 h nevera.' },
        protocols: [
            { label: 'IV Directa', validity: 'Válida', class: '', content: '<p>Administrar lentamente en 5 min.</p>' },
            { label: 'IV Intermitente', validity: 'Vía de Elección', class: '', content: '<p>Diluir en 50-100 mL de SF. Administrar en 15-30 min.</p>' }
        ]
    },
    'acetilsalicilato': {
        name: 'Acetilsalicilato de Lisina',
        reconstitution: { presentation: 'Vial 900 mg', method: 'Reconstituir con 5 mL API.', concentration: '180 mg/mL', stability: 'Uso inmediato.' },
        protocols: [
            { label: 'IV Directa', validity: 'Válida', class: '', content: '<p>Administrar en 2-5 min.</p>' },
            { label: 'IM', validity: 'Válida', class: 'invalido', content: '<p>Vía profunda. Contraindicado en SCACEST.</p>' }
        ]
    },
    'cefazolina': {
        name: 'Cefazolina',
        reconstitution: { presentation: 'Vial 1 g', method: 'Reconstituir con 4 mL API.', concentration: '250 mg/mL', stability: '24 h nevera.' },
        protocols: [
            { label: 'IV Directa', validity: 'Válida', class: '', content: '<p>Diluir vial reconstituido en 10 mL API. Inyectar en 3-5 min.</p>' },
            { label: 'IV Intermitente', validity: 'Vía de Elección', class: '', content: '<p>Diluir en 50-100 mL SF. Administrar en 30-60 min.</p>' }
        ]
    },
    'clindamicina': {
        name: 'Clindamicina',
        reconstitution: { presentation: 'Ampolla 600 mg/4 mL', method: 'No procede.', concentration: '150 mg/mL', stability: 'Diluido: 24 h TA.' },
        protocols: [
            { label: 'IV Intermitente', validity: 'Vía de Elección', class: '', content: '<p>Diluir en 50-100 mL SF. Máximo 30 mg/min.</p>' },
            { label: 'IM', validity: 'Válida', class: '', content: '<p>Inyección profunda. Máximo 600 mg por pinchazo.</p>' }
        ]
    },
    'metamizol': {
        name: 'Metamizol Magnésico',
        reconstitution: { presentation: 'Ampolla 2 g/5 mL', method: 'No procede.', concentration: '400 mg/mL', stability: '24 h TA protegido de luz.' },
        protocols: [
            { label: 'IV Directa', validity: 'Válida', class: 'critico', content: '<p>Inyectar muy lento (mínimo 5 min). Riesgo de shock hipotensivo.</p>' },
            { label: 'IV Intermitente', validity: 'Vía de Elección', class: '', content: '<p>Diluir en 50-100 mL SF. Administrar en 30-60 min.</p>' }
        ]
    },
    'amikacina': {
        name: 'Amikacina',
        reconstitution: { presentation: 'Vial 500 mg/2 mL', method: 'No procede.', concentration: '250 mg/mL', stability: '24 h TA.' },
        protocols: [
            { label: 'IV Intermitente', validity: 'Vía de Elección', class: '', content: '<p>Diluir en 100 mL SF. Administrar en 30-60 min.</p>' },
            { label: 'IM', validity: 'Válida', class: '', content: '<p>Absorción completa. No usar en shock o grandes quemados.</p>' }
        ]
    }
};