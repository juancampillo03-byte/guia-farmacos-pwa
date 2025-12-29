// BASE DE DATOS DE FÁRMACOS
const drugData = {
    'acetilcisteina': {
        name: 'ACETILCISTEÍNA',
        reconstitution: {
            presentation: 'Flumil® ampolla 300 mg/3 mL (100 mg/mL)',
            method: 'No procede',
            stability: 'Diluido: 24 h a TA (envases PVC)'
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente en 3-5 minutos.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL de SG5% y administrar en 15-30 minutos.</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Diluir en 500 mL de SG5%.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Administrar vía IM profunda.</p>' }
        ]
    },
    'acetilcisteina-antidoto': {
        name: 'ACETILCISTEÍNA (ANTÍDOTO)',
        reconstitution: {
            presentation: 'Hidonac antídoto® 20% vial 5 g/25 mL (200 mg/mL)',
            method: 'No procede',
            stability: 'Diluido: 24 h a TA (envases PVC). Proteger de la luz.'
        },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: 'critico', content: '<p>Ciclo de 3 perfusiones consecutivas (300 mg/Kg en 21h):</p><ul><li><strong>1ª dosis:</strong> 150 mg/Kg en 200 mL SG5% en 1 h (200 mL/h).</li><li><strong>2ª dosis:</strong> 50 mg/Kg en 500 mL SG5% en 4 h (125 mL/h).</li><li><strong>3ª dosis:</strong> 100 mg/Kg en 500 mL SG5% en 16 h (62 mL/h).</li></ul>' }
        ]
    },
    'acetilsalicilato-lisina': {
        name: 'ACETILSALICILATO DE LISINA',
        reconstitution: {
            presentation: 'Inyesprin® vial 900 mg (eq. 500 mg AAS) + amp 5 mL API',
            method: 'Reconstituir el vial con 5 mL API.',
            stability: 'Reconstituido: Uso inmediato. Diluido: 15 h a TA.'
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente (2-5 minutos).</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 100-250 mL SF o SG5%. Administrar en un máximo de 2 horas.</p>' },
            { label: 'Intramuscular', validity: '✓', class: 'invalido', content: '<p>Vía profunda. Contraindicada en infarto con elevación del ST (SCACEST).</p>' }
        ]
    },
    'aciclovir': {
        name: 'ACICLOVIR SÓDICO',
        reconstitution: {
            presentation: 'Aciclovir EFG vial 250 mg',
            method: 'Reconstituir con 10 mL de API o SF (Conc: 25 mg/mL).',
            stability: '12 h a TA. Proteger de la luz. No refrigerar (precipita).'
        },
        protocols: [
            { label: 'IV directa', validity: 'No recomendable', class: 'invalido', content: '<p>Riesgo de daño renal por precipitación del fármaco. Soluciones >7 mg/mL causan inflamación y flebitis.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir dosis (250mg) en mín. 50 mL SF o SG5%. Administrar mediante bomba en período ≥ 1 hora. Evitar extravasación (muy irritante).</p>' }
        ]
    },
    'adenosina': {
        name: 'ADENOSINA',
        reconstitution: {
            presentation: 'Adenocor® vial 6 mg/2 mL (3 mg/mL)',
            method: 'No procede',
            stability: 'No procede'
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: 'critico', content: '<p>Administración rápida en bolus (1-2 segundos). En catéter: inyección proximal seguida de lavado rápido con SF. Monitorización continua ECG obligatoria (arritmias).</p>' }
        ]
    },
    'adrenalina': {
        name: 'ADRENALINA (EPINEFRINA)',
        reconstitution: {
            presentation: 'Amp 1 mg/1 mL (1 mg/mL) y jga precargada 1 mg/10 mL (0,1 mg/mL)',
            method: 'No procede',
            stability: 'Diluido: Uso inmediato.'
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: 'critico', content: '<p>Diluir dosis en 9 mL SF, SG5% o API (0,1 mg/mL) y administrar bolus rápido. Solo en parada cardíaca o shock anafiláctico excepcional.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir 1 mg en 250 mL SG5% (4 mcg/mL). Velocidad: 1-10 mcg/min.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía de elección en anafilaxia severa y ataques de asma. Evitar nalgas.</p>' },
            { label: 'Subcutánea', validity: '✓', class: '', content: '<p>Válida para anafilaxia severa y ataques agudos de asma.</p>' }
        ]
    },
    'albumina': {
        name: 'ALBÚMINA',
        reconstitution: {
            presentation: 'Albutein® 20% vial 10 g/50 mL (200 g/L)',
            method: 'No procede',
            stability: 'Utilizar inmediatamente'
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Sin diluir. En emergencia administrar tan rápido como sea necesario.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Sin diluir o diluir en SF/SG5%. Administrar en 30-60 min. No usar API (hemólisis).</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Diluir dosis en 250-500 mL de SF o SG5%.</p>' }
        ]
    },
    'alprostadil-cardio': {
        name: 'ALPROSTADIL (ARTERIOPATÍA)',
        reconstitution: {
            presentation: 'Alprostadil EFG amp 0,5 mg/1 mL y vial 20 mcg',
            method: 'No procede',
            stability: 'Diluido: 24 h a TA. Proteger de la luz.'
        },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir dosis en 50-250 mL SF y administrar en 2-3 horas.</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Vía válida de administración.</p>' }
        ]
    },
    'alprostadil-erectil': {
        name: 'ALPROSTADIL (DISFUNCIÓN ERÉCTIL)',
        reconstitution: {
            presentation: 'Caverject® vial 20 mcg',
            method: 'Reconstituir con 1 mL del disolvente de la jga precargada.',
            stability: 'Reconstituido: Uso inmediato.'
        },
        protocols: [
            { label: 'Intracavernosa', validity: '✓', class: '', content: '<p>Inyección intracavernosa directa. Usar aguja de 27-30 G.</p>' }
        ]
    },
    'alteplasa': {
        name: 'ALTEPLASA',
        reconstitution: {
            presentation: 'Actilyse® vial 20 mg y 50 mg (+ API)',
            method: 'Diluir con API (Conc: 1 mg/mL o 2 mg/mL). Evitar espuma.',
            stability: 'Reconstituido/Diluido: 8 h a TA / 24 h en nevera. Proteger luz.'
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Bolus IV lento (1-2 minutos).</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 100-250 mL SF (Conc mín 0,2 mg/mL). Dilución máx 1:5.</p>' }
        ]
    },
    'amfotericina-b': {
        name: 'AMFOTERICINA B LIPOSOMAL',
        reconstitution: {
            presentation: 'Ambisome® vial 50 mg',
            method: 'Reconstituir con 12 mL API (4 mg/mL) y agitar 30 segundos.',
            stability: 'Reconstituido/Diluido: 24 h en nevera. Proteger luz.'
        },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en SG5% con filtro de 5 micras (Conc: 0,2-2 mg/mL). Lavar vía previa con SG5%. Infundir en 30-60 min (120 min para dosis ≥5mg/Kg).</p>' }
        ]
    },
    'amikacina': {
        name: 'AMIKACINA',
        reconstitution: {
            presentation: 'Amikacina EFG vial 500 mg/2 mL (250 mg/mL)',
            method: 'No procede',
            stability: 'Diluido: 24 h a TA. Proteger luz.'
        },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Vía de elección. Diluir en 100-200 mL SF o SG5%. Infundir en 30-60 min.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Absorción completa. No usar en shock, quemados o deshidratación grave.</p>' }
        ]
    },
    'amiodarona': {
        name: 'AMIODARONA',
        reconstitution: {
            presentation: 'Trangorex® ampolla 150 mg/3 mL (50 mg/mL)',
            method: 'No procede',
            stability: 'Diluido: 24 h a TA (vidrio o PE). Proteger luz.'
        },
        protocols: [
            { label: 'IV directa', validity: 'No recomendable', class: 'invalido', content: '<p>Riesgo hemodinámico. Si es necesario: diluir en 10-20 mL SG5% en ≥3 min.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Ataque: diluir en 250 mL SG5% (Conc mín 0,6 mg/mL) en 30 min-2 h. Vía central obligatoria si Conc >2 mg/mL.</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Mantenimiento: 250 mL SG5% en 12-24 h. Medicamento irritante (evitar extravasación). No usar PVC (adsorción).</p>' }
        ]
    },
    'amoxicilina-clavulanico': {
        name: 'AMOXICILINA / ÁCIDO CLAVULÁNICO',
        reconstitution: {
            presentation: 'EFG vial 1 g/200 mg y 2 g/200 mg',
            method: 'Reconstituir con 20 mL de API.',
            stability: 'Reconstituido: Máximo 20 min. Diluido: <1 h a TA.'
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Lentamente (mín. 3 min). Máximo 1g/200mg por esta vía.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 100 mL SF y administrar en 30 min. Máximo 2g/200mg por perfusión.</p>' }
        ]
    },
    'ampicilina': {
        name: 'AMPICILINA',
        reconstitution: {
            presentation: 'Gobemicina® vial 250 mg, 500 mg y 1 g',
            method: 'Reconstituir con API (125-250 mg/mL).',
            stability: 'Reconstituido: <1 h a TA. Diluido: 8 h TA / 24 h Nevera.'
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Diluir con API a máx 100 mg/mL. Infundir en 5-10 min (Riesgo de convulsiones si es rápido).</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en SF (máx 30 mg/mL). Administrar en 15-30 min. (1g en 50-100mL SF).</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía de administración válida.</p>' }
        ]
    },
    'anidulafungina': {
        name: 'ANIDULAFUNGINA',
        reconstitution: {
            presentation: 'Ecalta® vial 100 mg',
            method: 'Reconstituir con 30 mL API (3,33 mg/mL). Tarda 5 min.',
            stability: 'Reconstituido/Diluido: 24 h a TA.'
        },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>100mg en 100mL (o 200mg en 200mL) SF o SG5%. Conc: 0,77 mg/mL. Infundir en 90-180 min.</p>' }
        ]
    },
    'anticuerpos-antidigoxina': {
        name: 'ANTICUERPOS ANTIDIGOXINA',
        reconstitution: {
            presentation: 'DigiFab® vial 40 mg',
            method: 'Reconstituir con 4 mL API (10 mg/mL). Mezclar suave.',
            stability: 'Reconstituido: 4 h nevera. Diluido: Uso inmediato.'
        },
        protocols: [
            { label: 'IV directa', validity: 'No recomendable', class: 'invalido', content: '<p>Solo en caso de parada cardíaca o taquicardia ventricular.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir dosis en 50-100 mL SF. Infundir en 30 min con filtro de 0,22 micras.</p>' }
        ]
    },
    'atenolol': {
        name: 'ATENOLOL',
        reconstitution: {
            presentation: 'Tenormin® ampolla 5 mg/10 mL (0,5 mg/mL)',
            method: 'No procede',
            stability: 'Diluido: 24 h a TA. Proteger luz.'
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Bolo lento sin diluir a 1 mg/min (2 mL/min).</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir dosis en 50-100 mL SF o SG5%. Infundir en 20 min.</p>' }
        ]
    },
    'atropina': {
        name: 'ATROPINA SULFATO',
        reconstitution: {
            presentation: 'EFG ampolla 1 mg/1 mL',
            method: 'No procede',
            stability: 'Diluido: Uso inmediato.'
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Diluir en mín. 10 mL SF. Administrar bolus en aprox. 2 minutos. (Tratamiento bradicardia/asistolia).</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía habitual preanestesia.</p>' },
            { label: 'Subcutánea', validity: '✓', class: '', content: '<p>Vía habitual preanestesia.</p>' }
        ]
    },
    'azitromicina': {
        name: 'AZITROMICINA',
        reconstitution: {
            presentation: 'Zitromax® vial 500 mg',
            method: 'Reconstituir con 4,8 mL API (100 mg/mL).',
            stability: 'Reconstituido: 24 h nevera. Diluido: 24 h TA/Nevera.'
        },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir dosis en SF o SG5% hasta Conc 2 mg/mL. Infundir en 1 hora. No superar esta Conc (reacciones locales).</p>' }
        ]
    },
    'aztreonam': {
        name: 'AZTREONAM',
        reconstitution: {
            presentation: 'Azactam® vial 1 g (+ amp 3 mL API)',
            method: 'Reconstituir con 3 mL API (Conc: 250 mg/mL).',
            stability: 'Reconstituido/Diluido: 24 h TA/Nevera.'
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Diluir dosis en 6-10 mL API. Infundir en 3-5 min.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL SF o SG5% (máx 20 mg/mL). Infundir en 20-60 min.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Mín. 3 mL disolvente/gramo. Vía profunda. No mezclar con anestésicos locales.</p>' }
        ]
    },
    'azul-metileno': {
        name: 'AZUL DE METILENO',
        reconstitution: {
            presentation: 'Ampolla 100 mg/10 mL (10 mg/mL)',
            method: 'No procede',
            stability: 'Utilizar inmediatamente.'
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar sin diluir en 5 minutos.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Metahemoglobinemia: 1-2 mg/Kg en 50-100 mL SG5% en 5-15 min.</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Cirugía paratiroides: 5 mg/Kg en 500 mL SG5% 1 h antes intervención.</p>' }
        ]
    }
};