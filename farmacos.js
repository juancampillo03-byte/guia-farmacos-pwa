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
    },
    'betametasona': {
        name: 'BETAMETASONA ACETATO/FOSFATO',
        reconstitution: {
            presentation: 'Celestone Cronodose® vial 12 mg/2 mL (6 mg fosfato + 6 mg acetato)',
            method: 'No procede. Agitar antes de usar.',
            stability: 'No procede.'
        },
        protocols: [
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía profunda en glúteo para evitar atrofia tisular local. No utilizar si hay aglomeración o precipitación.</p>' }
        ]
    },
    'bicarbonato-1-6m': {
        name: 'BICARBONATO SÓDICO 1/6 M (1,4%)',
        reconstitution: { presentation: 'Frasco 500 mL (0,167 mEq/mL)', method: 'No procede', stability: 'Uso inmediato tras abrir.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente. Velocidad según prescripción médica.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Administrar directamente sin diluir.</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Administrar directamente sin diluir.</p>' }
        ]
    },
    'bicarbonato-1m': {
        name: 'BICARBONATO SÓDICO 1 M (8,4%)',
        reconstitution: { presentation: 'Vial 10 mL y Frasco 250 mL (1 mEq/mL)', method: 'No procede', stability: 'Uso inmediato tras abrir.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente. Riesgo de alcalosis si la administración es rápida.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Se puede administrar directo o diluir hasta isotonicidad (1,5%) en API, SF o SG5% (aprox. 50 mL disolvente por cada 10 mL).</p>' }
        ]
    },
    'biperideno': {
        name: 'BIPERIDENO',
        reconstitution: { presentation: 'Akineton® ampolla 5 mg/1 mL', method: 'No procede', stability: 'Proteger de la luz.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente en al menos 2 minutos.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía de administración válida.</p>' }
        ]
    },
    'bupivacaina': {
        name: 'BUPIVACAÍNA',
        reconstitution: { presentation: 'Bupivacaína 0,5% EFG ampolla 50 mg/10 mL', method: 'No procede', stability: 'No procede.' },
        protocols: [
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Inyectar lentamente con varias aspiraciones en dos planos. Usar la dosis más baja posible.</p>' },
            { label: 'Subcutánea', validity: '✓', class: '', content: '<p>Vía de administración válida.</p>' }
        ]
    },
    'butilescopolamina': {
        name: 'BUTILESCOPOLAMINA, BROMURO',
        reconstitution: { presentation: 'Butilescopolamina EFG ampolla 20 mg/mL', method: 'No procede', stability: 'No procede.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente (velocidad de 1 mL/min).</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía de administración válida.</p>' },
            { label: 'Subcutánea', validity: '✓', class: '', content: '<p>Vía de administración válida.</p>' }
        ]
    },
    'butilescopolamina-metamizol': {
        name: 'BUTILESCOPOLAMINA BROMURO / METAMIZOL',
        reconstitution: { presentation: 'Buscapina Compositum® amp 5 mL (20mg/2,5g)', method: 'No procede', stability: 'No procede.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Muy lento (mín. 5 min) con paciente en decúbito supino. Riesgo de hipotensión grave.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía profunda en cuadrante superior externo de la nalga, orientada hacia cresta ilíaca.</p>' }
        ]
    },
    'calcio-cloruro': {
        name: 'CALCIO CLORURO',
        reconstitution: { presentation: 'Calcio cloruro EFG amp 1 g/10 mL (9,13 mEq Ca2+)', method: 'No procede', stability: 'Uso inmediato.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: 'critico', content: '<p>Solo en hipocalcemia aguda. Muy lento (máx 1 mL/min). Muy irritante: riesgo de necrosis y calcificación.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 100 mL de SF o SG5%. Administrar en 10-15 min.</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Diluir en 500-1.000 mL de SF o SG5%. Administrar en 24 horas.</p>' }
        ]
    },
    'calcio-gluconato': {
        name: 'CALCIO, GLUCONATO',
        reconstitution: { presentation: 'Suplecal Mini-Plasco® amp 10 mL (4,6 mEq Ca2+)', method: 'No procede', stability: 'Diluido: 24 h en nevera.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: 'critico', content: '<p>Lento (máx 2 mL/min). Una administración rápida causa vasodilatación, arritmias y paro cardíaco. Muy irritante.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 100 mL de SF o SG5%. Administrar en 15-30 min.</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Diluir en 500-1.000 mL de SF o SG5% en 24h. Máx 36 horas de perfusión.</p>' }
        ]
    },
    'carbetocina': {
        name: 'CARBETOCINA',
        reconstitution: { presentation: 'Duratobal® vial 100 mcg/1 mL', method: 'No procede', stability: 'No procede.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Lento (mín. 1 min) tras la extracción del niño y preferiblemente antes de la placenta.</p>' }
        ]
    },
    'carboprost': {
        name: 'CARBOPROST',
        reconstitution: { presentation: 'Hemabate® amp 250 mcg/1 mL', method: 'No procede', stability: 'No procede.' },
        protocols: [
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Administrar vía IM profunda.</p>' }
        ]
    },
    'caspofungina': {
        name: 'CASPOFUNGINA',
        reconstitution: { presentation: 'EFG vial 50/70 mg', method: 'Atemperar vial. Reconstituir con 10,5 mL de API (5,2 o 7,2 mg/mL).', stability: 'Reconstituido: 24h TA. Diluido: 24h TA/nevera.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 250 mL de SF (no usar glucosa). Administrar en 60-90 min. En restricción de líquidos: dosis ≤50 mg en 100 mL SF.</p>' }
        ]
    },
    'cefazolina': {
        name: 'CEFAZOLINA',
        reconstitution: { presentation: 'EFG vial 1 g + amp 4 mL API', method: 'Reconstituir con disolvente (250 mg/mL).', stability: '8h TA / 24h nevera.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Diluir 1g en mín. 10 mL API. Administrar lento en 3-5 min (nunca < 3 min).</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>1g en 50-100 mL o 2g en 100 mL SF/SG5%. Administrar en 30-60 min.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Reconstituir con 1,5 mL API + 1,5 mL lidocaína 2%. Máx 1g por punto de inyección.</p>' }
        ]
    },
    'cefotaxima': {
        name: 'CEFOTAXIMA',
        reconstitution: { presentation: 'EFG vial 500mg/1g/2g', method: 'Reconstituir con disolvente amp (250 mg/mL o 200 mg/mL).', stability: '24h TA/nevera.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Solo 500mg y 1g. Lento en 3-5 min.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL SF/SG5%. Administrar en 30-60 min.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>1g con 2 mL API + 2 mL lidocaína 2% vía intraglútea profunda. Si dosis >2g usar vía IV.</p>' }
        ]
    },
    'ceftazidima': {
        name: 'CEFTAZIDIMA',
        reconstitution: { presentation: 'EFG vial 1g/2g', method: '1g con 10 mL API (100 mg/mL). 2g con 10 mL API (200 mg/mL). Puede liberar CO2.', stability: '24h TA/nevera.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Lento en 3-5 min.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Vía recomendada. Diluir en 50-100 mL SF/SG5% en 15-30 min. Permite perfusión extendida (3h).</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>1,5 mL API + 1,5 mL lidocaína 2%. Solo si no es posible vía IV.</p>' }
        ]
    },
    'ceftazidima-avibactam': {
        name: 'CEFTAZIDIMA/AVIBACTAM',
        reconstitution: { presentation: 'Zavicefta® vial 2 g/0,5 g', method: 'Reconstituir con 10 mL de API.', stability: 'Reconstituido: Inmediato. Diluido: 12h TA / 24h nevera.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-250 mL de SF o SG5%. Administrar en 120 min.</p>' }
        ]
    },
    'ceftriaxona': {
        name: 'CEFTRIAXONA',
        reconstitution: { presentation: 'EFG vial 1g/2g y 250mg (IM)', method: '1g con 10 mL API (100 mg/mL). 2g con 40 mL API/SF (50 mg/mL).', stability: '8h TA / 24h nevera.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Lento en 2-4 minutos.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Dosis ≥50 mg/Kg en 50-100 mL SF/SG5% en 30-60 min. No mezclar con calcio.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>1g con 1,5 mL lidocaína 2% + 2 mL API. Vía profunda. Dosis >1g en dos puntos.</p>' }
        ]
    },
    'cefuroxima': {
        name: 'CEFUROXIMA',
        reconstitution: { presentation: 'EFG vial 750 mg + amp 6 mL API', method: 'Reconstituir con disolvente (125 mg/mL).', stability: '5h TA / 24h nevera.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente en 3-5 minutos.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL de SF o SG5%. Administrar en 30-60 minutos.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Reconstituir con 3 mL API (suspensión opaca). Vía profunda.</p>' }
        ]
    },
    'cianocobalamina': {
        name: 'CIANOCOBALAMINA (Vit B12)',
        reconstitution: { presentation: 'Optovite® B12 amp 1.000 mcg/2 mL', method: 'No procede', stability: 'No procede.' },
        protocols: [
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía de elección. Masa muscular amplia.</p>' },
            { label: 'Subcutánea', validity: '✓', class: '', content: '<p>Subcutánea profunda en pacientes gastrectomizados.</p>' },
            { label: 'IV directa', validity: 'No recomendable', class: 'invalido', content: '<p>Riesgo de reacciones anafilácticas.</p>' }
        ]
    },
    'ciclosporina': {
        name: 'CICLOSPORINA',
        reconstitution: { presentation: 'Sandimmun® ampolla 50 mg/1 mL (MAR/Peligroso G2)', method: 'No procede', stability: 'Diluido: 24 h en nevera.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir 50 mg en 20-100 mL SF/SG5%. Administrar lento en 2-6h (máx 50 mg/h). Usar vidrio/PE (se adsorbe a PVC).</p>' }
        ]
    },
    'ciprofloxacino': {
        name: 'CIPROFLOXACINO',
        reconstitution: { presentation: 'EFG bolsa perfusión 200 mg/100 mL', method: 'No procede', stability: 'No procede.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Vena de gran tamaño. Administrar en 30 minutos.</p>' }
        ]
    },
    'cisatracurio': {
        name: 'CISATRACURIO',
        reconstitution: { presentation: 'EFG amp 10mg/5mL y 150mg/30mL', method: 'No procede', stability: 'Diluido: 24h TA. Proteger luz.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Bolo en 5-10 segundos.</p>' },
            { label: 'IV continua', validity: '✓', class: 'critico', content: '<p>Diluir en SF/SG5% (0,1-2 mg/mL) o sin diluir. Velocidad según peso y respuesta.</p>' }
        ]
    },
    'claritromicina': {
        name: 'CLARITROMICINA',
        reconstitution: { presentation: 'Klacid® vial 500 mg', method: '10 mL de API (50 mg/mL). Girar suavemente.', stability: 'Reconstituido: 24h TA/nevera. Diluido: 6h TA / 24h nevera.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir vial en 250 mL SF/SG5%. Administrar en 60 min. Vena proximal de gran tamaño.</p>' }
        ]
    },
    'clindamicina': {
        name: 'CLINDAMICINA',
        reconstitution: { presentation: 'EFG amp 600 mg/4 mL (150 mg/mL)', method: 'No procede', stability: 'Diluido: 24 h TA.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Vía de elección. Diluir en 50-100 mL SF/SG5% (máx 12 mg/mL). En 10-60 min (máx 30 mg/min). Máx 1.200 mg/infusión.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía profunda. Máximo 600 mg por pinchazo único.</p>' }
        ]
    },
    'clonazepam': {
        name: 'CLONAZEPAM',
        reconstitution: { presentation: 'Rivotril® amp 1 mg/1 mL + amp API (Peligroso G3)', method: 'Reconstituir con ampolla API (0,5 mg/mL).', stability: 'Reconstituido: Inmediato. Diluido: 24h TA.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Vena gran calibre. Lento (0,25-0,5 mg/min). Usar vidrio/PE (se adsorbe a PVC).</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Solo si vía IV es impracticable.</p>' }
        ]
    },
    'clorazepato': {
        name: 'CLORAZEPATO DIPOTÁSICO',
        reconstitution: { presentation: 'Tranxilium® vial 20 mg + amp diluyente 2 mL', method: 'Reconstituir con su ampolla (10 mg/mL).', stability: 'Uso inmediato.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Lento (2-4 min) en vena gran calibre. Necesario equipo reanimación.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía profunda.</p>' }
        ]
    },
    'clorpromazina': {
        name: 'CLORPROMAZINA',
        reconstitution: { presentation: 'Largactil® amp 25 mg/5 mL', method: 'No procede', stability: 'Diluido: 24 h TA. Proteger luz.' },
        protocols: [
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía de elección. Lenta y profunda. Masa muscular grande. Vigilar TA.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL SF/SG5%. En al menos 30 min. Máx 1 mg/min.</p>' }
        ]
    },
    'cloruro-sodico-20': {
        name: 'CLORURO SÓDICO 20%',
        reconstitution: { presentation: 'EFG ampolla 10 mL', method: 'No procede', stability: 'Uso inmediato.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: 'critico', content: '<p>Nunca directo sin diluir (alta osmolaridad). Para salino al 3%: 60 mL ClNa 20% en 500 mL SF 0,9%.</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Añadir a solución de perfusión según prescripción.</p>' }
        ]
    },
    'cloxacilina': {
        name: 'CLOXACILINA',
        reconstitution: { presentation: 'EFG vial 1 g', method: '20 mL API (50 mg/mL).', stability: 'Reconstituido: 24h TA/nevera. Diluido: 24h TA.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Lento en 3-4 minutos.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL SF/SG5%. Administrar en 60 minutos.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Máx 500 mg por punto. Reconstituir 1g en 7 mL API e inyectar 3,5 mL.</p>' }
        ]
    },
    'colistimetato': {
        name: 'COLISTIMETATO DE SODIO',
        reconstitution: { presentation: 'EFG vial 1 MUI (80 mg colistina)', method: '10 mL API.', stability: '8h TA / 24h nevera.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Máx 2 MUI en 10 mL SF/SG5%. En mín. 5 minutos.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL SF/SG5%. Administrar en 30-60 min.</p>' }
        ]
    },
    'complejo-protrombina': {
        name: 'COMPLEJO DE PROTROMBINA HUMANO',
        reconstitution: { presentation: 'Prothromplex® vial 600 UI + 20 mL API', method: 'Usar equipo transferencia. Disolver suave sin espuma.', stability: 'Uso inmediato (máx 3h TA).' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: 'critico', content: '<p>Máximo 2 mL/min (60 UI/min). Riesgo de trombosis a altas velocidades.</p>' }
        ]
    },
    'cotrimoxazol': {
        name: 'COTRIMOXAZOL (Soltrim)',
        reconstitution: { presentation: 'Soltrim® (800mg SMZ + 160mg TMP en 5mL)', method: 'Reconstituir vial polvo con su ampolla (Vol final 6 mL).', stability: 'Reconstituido: 24h TA. Diluido: 6h TA.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir cada vial en 250 mL de SF o SG5%. Administrar en 60-90 min.</p>' }
        ]
    }
};