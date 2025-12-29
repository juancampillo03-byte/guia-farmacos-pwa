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
        name: 'COTRIMOXAZOL (Trimetoprim + Cotrimoxazol)',
        reconstitution: { presentation: 'Soltrim® (800mg SMZ + 160mg TMP en 5mL)', method: 'Reconstituir vial polvo con su ampolla (Vol final 6 mL).', stability: 'Reconstituido: 24h TA. Diluido: 6h TA.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir cada vial en 250 mL de SF o SG5%. Administrar en 60-90 min.</p>' }
        ]
    },
    'dalbavancina': {
        name: 'DALBAVANCINA',
        reconstitution: { 
            presentation: 'Xydalba® vial 500 mg', 
            method: 'Reconstituir el vial con 25 mL de API exclusivamente. No agitar (evitar espuma). Invertir y mover suavemente.', 
            stability: 'Reconstituido: 24 h en nevera. Diluido: 24 h en nevera.' 
        },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir la dosis en 250-500 mL de SG5% (conc: 1-5 mg/mL). Administrar en 30 minutos.</p>' }
        ]
    },
    'dantroleno': {
        name: 'DANTROLENO',
        reconstitution: { 
            presentation: 'Dantrium® vial 20 mg + aguja filtro 5 micras', 
            method: 'Reconstituir cada vial con 60 mL de API. Agitar hasta que sea clara. Usar aguja filtro para extraer.', 
            stability: 'Reconstituido: 6 h a TA. Proteger de la luz.' 
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Transferir a bolsa de plástico estéril de gran volumen. Administrar en 15 minutos.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Transferir a bolsa de plástico estéril de gran volumen. Administrar en 1 hora.</p>' }
        ]
    },
    'daptomicina': {
        name: 'DAPTOMICINA',
        reconstitution: { 
            presentation: 'EFG vial 350 mg / 500 mg', 
            method: '350mg con 7 mL de SF; 500mg con 10 mL de SF. Reposo 10 min. Tarda 15 min en disolverse.', 
            stability: 'Reconstituido: 12 h TA / 24 h nevera. Diluido: 12 h TA / 24 h nevera.' 
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar la dosis lentamente durante 2 minutos.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir la dosis en 50 mL de SF y administrar en 30 minutos.</p>' }
        ]
    },
    'deferoxamina': {
        name: 'DEFEROXAMINA',
        reconstitution: { 
            presentation: 'Desferin® vial 500 mg', 
            method: 'Reconstituir con 2 mL API (IM) o 5 mL API (IV/SC). Agitar enérgicamente.', 
            stability: 'Reconstituido: 24 h a TA. Diluido: 24 h a TA.' 
        },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 100-250 mL SF/SG5% (máx 10%). Velocidad: 15 mg/Kg/h. Evitar perfusión rápida (hipotensión).</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Diluir en 1.000 mL SF/SG5% (máx 10%). Velocidad: 15 mg/Kg/h (máx 80 mg/Kg en 24h).</p>' },
            { label: 'Subcutánea', validity: '✓', class: '', content: '<p>Diluir en SF/SG5% (máx 10%). Administrar lento en 8-24 h mediante bomba.</p>' },
            { label: 'Intramuscular', validity: '✓', class: 'invalido', content: '<p>No recomendable (menor eficacia). Solo si la vía SC no es posible.</p>' }
        ]
    },
    'desmopresina': {
        name: 'DESMOPRESINA',
        reconstitution: { 
            presentation: 'Minurin® ampolla 4 mcg/1 mL', 
            method: 'No procede', 
            stability: 'Diluido: Uso inmediato.' 
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar en un minuto. Puede provocar rubor facial.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL de SF y administrar en 15-30 minutos.</p>' },
            { label: 'Subcutánea', validity: '✓', class: '', content: '<p>Vía de administración válida.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Uso en test diagnóstico (concentración renal).</p>' }
        ]
    },
    'dexametasona': {
        name: 'DEXAMETASONA',
        reconstitution: { 
            presentation: 'EFG amp 4 mg/1 mL y Fortecortin® amp 40 mg/5 mL', 
            method: 'No procede', 
            stability: 'Diluido: 24 h a TA. Proteger de la luz.' 
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente. Dosis 4mg en ≥1 min; dosis 40mg en 2-3 min.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL de SF o SG5% y administrar en 30-60 minutos.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía válida (absorción más lenta).</p>' }
        ]
    },
    'dexclorfeniramina': {
        name: 'DEXCLORFENIRAMINA',
        reconstitution: { 
            presentation: 'EFG ampolla 5 mg/1 mL', 
            method: 'No procede', 
            stability: 'No procede.' 
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente, sin diluir y en al menos un minuto.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Administrar vía IM profunda.</p>' }
        ]
    },
    'dexketoprofeno': {
        name: 'DEXKETOPROFENO',
        reconstitution: { 
            presentation: 'Enantyum® amp 50 mg/2 mL', 
            method: 'No procede', 
            stability: 'Diluido: 24 h a TA/nevera. Proteger de la luz.' 
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar lentamente en al menos 15 segundos.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 30-100 mL de SF o SG5%. Administrar en 10-30 min. Proteger de la luz.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Lenta y profunda inmediatamente tras extraer de la ampolla.</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Vía de administración válida.</p>' }
        ]
    },
    'diazepam': {
        name: 'DIAZEPAM',
        reconstitution: { 
            presentation: 'Valium® ampolla 10 mg/2 mL (5 mg/mL)', 
            method: 'No procede', 
            stability: 'Diluido: 24 h a TA.' 
        },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Lento, sin diluir, en vena de gran calibre. Máx 5 mg/min (1 mL/min). Riesgo de apnea.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL de SF/SG5% (máx 0,1 mg/mL). Administrar en 15-30 min. Menos volumen puede precipitar.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía profunda si es necesario.</p>' }
        ]
    },
    'diclofenaco': {
        name: 'DICLOFENACO',
        reconstitution: { 
            presentation: 'EFG ampolla 75 mg/3 mL', 
            method: 'No procede', 
            stability: 'Proteger de la luz.' 
        },
        protocols: [
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía de elección. Inyección intraglútea profunda (cuadrante superior externo). Máx 75mg por punto. Máx 2 días.</p>' }
        ]
    },
    'digoxina': {
        name: 'DIGOXINA',
        reconstitution: { 
            presentation: 'EFG ampolla 0,5 mg/2 mL', 
            method: 'No procede', 
            stability: 'Diluido: 24 h a TA/nevera. Proteger de la luz.' 
        },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Vía de elección. Diluir en 50-250 mL de SF o SG5%. Administrar en 15-30 minutos.</p>' },
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Sin diluir o diluido (mín 4 veces volumen). Muy lento (mín 5 min) para evitar precipitación.</p>' }
        ]
    },
    'dobutamina': {
        name: 'DOBUTAMINA',
        reconstitution: { 
            presentation: 'EFG ampolla 250 mg/20 mL (MAR)', 
            method: 'No procede', 
            stability: 'Diluido: 24 h a TA/nevera. Puede presentar color rosa (oxidación).' 
        },
        protocols: [
            { label: 'IV continua', validity: '✓', class: 'critico', content: '<p>Diluir en 500 mL de SF o SG5% (máx 5 mg/mL). Usar bomba de infusión. Ajustar según respuesta.</p>' }
        ]
    },
    'dopamina': {
        name: 'DOPAMINA',
        reconstitution: { 
            presentation: 'EFG ampolla 200 mg/5 mL (MAR)', 
            method: 'No procede', 
            stability: 'Diluido: 24 h a TA/nevera. Proteger de la luz.' 
        },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: 'critico', content: '<p>Diluir en 250-500 mL SF/SG5% (800 o 400 mcg/mL). Usar bomba. Muy irritante (evitar extravasación).</p>' }
        ]
    },
    'doxiciclina': {
        name: 'DOXICICLINA',
        reconstitution: { 
            presentation: 'Vibravenosa® ampolla 100 mg/5 mL', 
            method: 'No procede. Conservar en nevera.', 
            stability: 'Diluido: 24 h a TA/nevera. Proteger de la luz.' 
        },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 100-250 mL SF/SG5%. Administrar en 1-4 h (máx 100 mg/h). Muy irritante.</p>' },
            { label: 'IV directa', validity: 'No recomendable', class: 'invalido', content: '<p>Si es necesario: diluir con 10-20 mL SF/API y muy lento (mín 2 min por 100 mg).</p>' }
        ]
    },
    'edta-calcico': {
        name: 'EDTA CÁLCICO DE SODIO',
        reconstitution: { presentation: 'Ampolla 500 mg/10 mL', method: 'No procede', stability: 'Diluido: Uso inmediato.' },
        protocols: [
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía de elección en encefalopatía. Dilución estándar: 250mg (5mL) + 1,6 mL lidocaína 2% (conc final 5 mg/mL).</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Diluir 2 amp en 500 mL SF/SG5% (máx 5 mg/mL). En 6h por vía central (muy irritante).</p>' }
        ]
    },
    'enoxaparina': {
        name: 'ENOXAPARINA',
        reconstitution: { presentation: 'EFG jeringas (varias dosis)', method: 'No procede', stability: 'No procede.' },
        protocols: [
            { label: 'Subcutánea', validity: '✓', class: '', content: '<p>Vía de elección.</p>' },
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Uso en IAMCEST. Inicialmente bolo seguido de SC. Limpiar con SF/SG5% antes y después.</p>' }
        ]
    },
    'eritropoyetina-beta': {
        name: 'ERITROPOYETINA BETA',
        reconstitution: { presentation: 'Neorecormon® jeringa 500 UI/0,3 mL', method: 'No procede', stability: 'Conservar nevera. Proteger luz.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Elección en diálisis. Administrar en 2 min al final de la sesión.</p>' },
            { label: 'Subcutánea', validity: '✓', class: '', content: '<p>Elección en pacientes no dializados.</p>' }
        ]
    },
    'eritropoyetina-zeta': {
        name: 'ERITROPOYETINA ZETA',
        reconstitution: { presentation: 'Retacrit® jeringas (varias dosis)', method: 'No procede', stability: 'Atemperar 15-30 min. No agitar.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Administrar en 1-5 min. En diálisis, por puerto venoso o al final seguido de 10 mL SF.</p>' },
            { label: 'Subcutánea', validity: '✓', class: '', content: '<p>Vía válida (máx 1 mL por zona).</p>' }
        ]
    },
    'ertapenem': {
        name: 'ERTAPENEM',
        reconstitution: { 
            presentation: 'EFG vial 1 g', 
            method: '10 mL API o SF. Agitar bien.', 
            stability: 'Reconstituido: Inmediato. Diluido: 6 h TA / 24 h nevera (usar en 4h tras sacar de nevera).' 
        },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50 mL SF (No usar SG5%). Administrar en 30 minutos.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>3,2 mL lidocaína 1%. Vía profunda. Administrar en máx 1 h tras reconstituir.</p>' }
        ]
    },
    'esmolol': {
        name: 'ESMOLOL',
        reconstitution: { presentation: 'Brevibloc® vial 100 mg/10 mL', method: 'No procede', stability: 'No procede.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: 'critico', content: '<p>Dosis de carga. Inyección muy rápida (30-60 seg).</p>' },
            { label: 'IV continua', validity: '✓', class: 'critico', content: '<p>Mantenimiento sin dilución previa. Velocidad según respuesta.</p>' }
        ]
    },
    'etanol': {
        name: 'ETANOL',
        reconstitution: { presentation: 'Alcohol absoluto ampolla 10 mL', method: 'No procede', stability: 'Diluido: Uso inmediato.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: 'critico', content: '<p>Diluir 50 mL en 500 mL SG5% (conc 0,078 g/mL). Carga: 8 mL/Kg en 60 min. Usar vía central.</p>' },
            { label: 'IV continua', validity: '✓', class: 'critico', content: '<p>Mantenimiento: No alcohólicos 0,83 mL/Kg/h; Alcohólicos 1,96 mL/Kg/h.</p>' }
        ]
    },
    'etecalcetida': {
        name: 'ETECALCETIDA',
        reconstitution: { presentation: 'Parsabiv® vial 2,5mg/0,5mL y 5mg/1mL', method: 'No procede', stability: 'Nevera. Proteger luz.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Sin diluir. En línea venosa al final de diálisis durante lavado con SF. Lavado posterior con ≥150 mL SF.</p>' }
        ]
    },
    'etomidato': {
        name: 'ETOMIDATO',
        reconstitution: { presentation: 'Hypnomidate® amp 20 mg/10 mL', method: 'No procede', stability: 'Uso inmediato tras abrir.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Lento (aprox 30 seg) en vaso mediano/grande. Evitar inyección intraarterial (necrosis).</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Perfusiones cortas 10-20 min o mantenimiento en anestesia.</p>' }
        ]
    },
    'fenitoina': {
        name: 'FENITOÍNA (MAR / Peligroso G2)',
        reconstitution: { presentation: 'EFG ampolla 100 mg/2 mL', method: 'No procede', stability: 'Diluido: 2 h a TA.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: 'critico', content: '<p>Muy lento (máx 50 mg/min adultos; 25 mg/min ancianos). Lavar vía con 10-30 mL SF tras uso.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 25-250 mL SF (conc 1-10 mg/mL). En 5-10 min. Lavar con SF antes y después.</p>' }
        ]
    },
    'fenobarbital': {
        name: 'FENOBARBITAL',
        reconstitution: { presentation: 'Luminal® ampolla 200 mg/1 mL', method: 'No procede', stability: 'Diluido: Uso inmediato (máx 30 min).' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Diluir 0,25-1 mL en 10 mL API. Velocidad 60 mg/min.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía de administración válida.</p>' }
        ]
    },
    'fentanilo': {
        name: 'FENTANILO',
        reconstitution: { presentation: 'Fentanest® ampolla 0,15 mg/3 mL', method: 'No procede', stability: 'Diluido: 24 h a TA. Proteger luz.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Lento (mín 1 min).</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 100-500 mL SF/SG5%.</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Diluir en 100-1.000 mL SF/SG5%.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía de administración válida.</p>' }
        ]
    },
    'fibrinogeno': {
        name: 'FIBRINÓGENO',
        reconstitution: { presentation: 'Riastap® vial 1 g', method: '50 mL API. Agitar suave. Atemperar. Reposo 15 min.', stability: 'Reconstituido: 8 h TA. No refrigerar reconstituido.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Velocidad máxima 5 mL/min (300 mL/h).</p>' }
        ]
    },
    'filgrastim': {
        name: 'FILGRASTIM',
        reconstitution: { presentation: 'Nivestim® jga precargada 300 mcg', method: 'No procede', stability: 'Diluido: 24 h en nevera.' },
        protocols: [
            { label: 'Subcutánea', validity: '✓', class: '', content: '<p>Vía de elección.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 20 mL SG5% (mín 15 mcg/mL) en 30 min. Si conc < 2 mcg/mL añadir albúmina 20% (conc final 2 mg/mL).</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Igual que intermitente, en 24 h.</p>' }
        ]
    },
    'fitomenadiona': {
        name: 'FITOMENADIONA (Vit K1)',
        reconstitution: { presentation: 'Konakión® ampolla 10 mg/1 mL', method: 'No procede', stability: 'Proteger luz. No usar si hay turbidez.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Solo hemorragia mortal. Muy lento (mín 30 seg; máx 1 mg/min).</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Hemorragias leves. Contraindicada en pacientes anticoagulados (riesgo hematomas y efecto depot).</p>' }
        ]
    },
    'flecainida': {
        name: 'FLECAINIDA',
        reconstitution: { presentation: 'Apocard® ampolla 150 mg/15 mL', method: 'No procede', stability: 'Diluido: Uso inmediato.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: 'critico', content: '<p>Urgencia: lento sin diluir (2 mg/Kg; máx 150mg) en ≥10 min (o 30 min si hay historia IC). Monitorizar ECG.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir 150 mg en 50-100 mL SG5%. Iniciar con 2 mg/Kg en 30 min y seguir pauta prescrita.</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Vía de administración válida.</p>' }
        ]
    },
    'fluconazol': {
        name: 'FLUCONAZOL (Peligroso G3)',
        reconstitution: { presentation: 'EFG vial 100mg/50mL y 200mg/100mL', method: 'No procede', stability: 'Uso inmediato.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>No diluir (ya viene en SF). Velocidad máx 10 mL/min. Vial 100mg en 30 min; vial 200mg en 60 min.</p>' }
        ]
    },
    'flufenazina': {
        name: 'FLUFENAZINA DECANOATO',
        reconstitution: { presentation: 'EFG ampolla 25 mg/1 mL', method: 'No procede', stability: 'No procede.' },
        protocols: [
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Preparado depot. Vía profunda con jeringa seca y aguja ≥ 21G.</p>' },
            { label: 'Subcutánea', validity: '✓', class: '', content: '<p>Vía de administración válida.</p>' }
        ]
    },
    'flumazenilo': {
        name: 'FLUMAZENILO',
        reconstitution: { presentation: 'EFG ampolla 0,5 mg/5 mL', method: 'No procede', stability: 'Diluido: 24 h TA/nevera.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: 'critico', content: '<p>Dosis inicial rápida (mín 15 seg). Repetir cada 1 min hasta máx 4-6 bolos.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-100 mL SF/SG5%.</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Diluir en 500 mL SF/SG5%. Ritmo 0,1-0,4 mg/h (aprox 6h).</p>' }
        ]
    },
    'folinato-calcico': {
        name: 'FOLINATO CÁLCICO',
        reconstitution: { presentation: 'EFG vial 350 mg', method: '17,5 mL API (20 mg/mL).', stability: 'Reconstituido: 8h TA / 24h nevera. Diluido: 24h TA.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Inyectar lento (máx 160 mg/min por el calcio).</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 100-250 mL SF/SG5% en 15-30 min.</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Vía válida (ojo restricción volumen).</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Vía de administración válida.</p>' }
        ]
    },
    'fosaprepitant': {
        name: 'FOSAPREPITANT',
        reconstitution: { presentation: 'Ivemend® vial 150 mg', method: '5 mL SF (30 mg/mL).', stability: '24 h TA / nevera.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Pasar reconstituido a 145 mL SF (vol final 150 mL; conc 1 mg/mL). En 20-30 min. Incompatible con calcio/magnesio/RL.</p>' }
        ]
    },
    'fosfato-monosodico': {
        name: 'FOSFATO MONOSÓDICO 1 M',
        reconstitution: { presentation: 'EFG ampolla 1200 mg/10 mL', method: 'No procede', stability: 'Diluido: Uso inmediato.' },
        protocols: [
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Diluir en 100-500 mL SF/SG5%. Administrar en 4-6 horas.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Vía de administración válida.</p>' }
        ]
    },
    'fosfato-dipotasico': {
        name: 'FOSFATO DIPOTÁSICO 1 M',
        reconstitution: { presentation: 'EFG ampolla 10 mL', method: 'No procede', stability: 'Diluido: Uso inmediato.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: 'critico', content: '<p>Diluir al menos con mismo volumen. Máx 20 mEq K+/h.</p>' },
            { label: 'IV continua', validity: '✓', class: 'critico', content: '<p>Máx 20 mEq K+/h.</p>' }
        ]
    },
    'fosfomicina': {
        name: 'FOSFOMICINA',
        reconstitution: { presentation: 'Fosfocina® vial 1 g + amp 10 mL API', method: 'Reconstituir 1g con 10 mL API (reacción exotérmica).', stability: 'Reconstituido: 24h TA. Diluido: 24h TA/nevera.' },
        protocols: [
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir dosis en 50 mL SG5% en 30-60 min.</p>' }
        ]
    },
    'furosemida': {
        name: 'FUROSEMIDA',
        reconstitution: { presentation: 'Seguril® amp 20mg/2mL y 250mg/25mL', method: 'No procede', stability: 'Diluido: 24h TA/nevera. Ojo: ampolla uso inmediato.' },
        protocols: [
            { label: 'IV directa', validity: '✓', class: '', content: '<p>Lento 20-40 mg en 1-2 min. Ampolla 250mg NO por esta vía.</p>' },
            { label: 'IV intermitente', validity: '✓', class: '', content: '<p>Diluir en 50-250 mL SF/SG5%. Máx 4 mg/min (2,5 mg/min si IR grave).</p>' },
            { label: 'IV continua', validity: '✓', class: '', content: '<p>Dosis > 250 mg. Diluir en 250-500 mL SF/SG5% con bomba (≥ 1 h).</p>' },
            { label: 'Intramuscular', validity: '✓', class: '', content: '<p>Solo si la vía oral/IV no es posible.</p>' },
            { label: 'Subcutánea', validity: '✓', class: '', content: '<p>Cuidados paliativos bolo/continua SC.</p>' }
        ]
    }
};