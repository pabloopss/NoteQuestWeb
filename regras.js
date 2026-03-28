// regras.js - As Leis do Universo NoteQuest
window.REGRAS = {
    racas: {
        "Humano": { pv: 4, magias: 1 },
        "Elfo": { pv: 2, magias: 2 },
        "Anão": { pv: 6, magias: 0 },
        "Halfling": { pv: 3, magias: 1 }
    },
    classes: {
        "Guerreiro": { pv: 6, arma: "Espada Longa", dano: "1d6+1", magias: 0 },
        "Mago": { pv: 2, arma: "Cajado", dano: "1d6-1", magias: 3 },
        "Ladino": { pv: 4, arma: "Adagas", dano: "1d6", magias: 0 },
        "Clérigo": { pv: 5, arma: "Maça", dano: "1d6", magias: 1 }
    },
    magias_basicas: [
        { nome: "Míssil Mágico", usos: 3 },
        { nome: "Cura Menor", usos: 2 },
        { nome: "Bola de Fogo", usos: 1 },
        { nome: "Escudo Arcano", usos: 2 },
        { nome: "Luz", usos: 5 }
    ],
    mundo: {
        geracao_terreno: {
            1: "Planície", 2: "Floresta", 3: "Montanha", 4: "Pântano", 5: "Deserto", 6: "Ruínas Antigas"
        },
        terrenos_info: {
            "Cidade Humana": { emoji: "🏰", custo: 1 },
            "Cidade Élfica": { emoji: "🧝", custo: 1 },
            "Cidade Anã": { emoji: "⛰️", custo: 1 },
            "Planície": { emoji: "🌾", custo: 1 },
            "Floresta": { emoji: "🌲", custo: 2 },
            "Montanha": { emoji: "⛰️", custo: 3 },
            "Pântano": { emoji: "🐸", custo: 2 },
            "Deserto": { emoji: "🐪", custo: 3 },
            "Ruínas Antigas": { emoji: "🏛️", custo: 1 }
        }
    },
    tabela_terrenos_masmorra: {
        "Planície": ["Covil de Goblins", "Túmulo Esquecido", "Caverna Natural", "Torre em Ruínas", "Mina Abandonada", "Acampamento Orc"],
        "Floresta": ["Templo Élfico Caído", "Covil de Aranhas", "Caverna de Urso Coruja", "Acampamento de Bandidos", "Árvore Oca Gigante", "Ruínas Cobertas de Musgo"],
        "Montanha": ["Forte Anão Arruinado", "Ninho de Grifo", "Caverna de Gelo", "Templo do Culto do Dragão", "Mina de Ouro Amaldiçoada", "Pico dos Trolls"],
        "Pântano": ["Templo Submerso", "Covil de Homens-Lagarto", "Cabana da Bruxa", "Catacumbas Alagadas", "Ninho de Hidra", "Aldeia Fantasma"],
        "Deserto": ["Pirâmide Perdida", "Templo do Sol Negro", "Oásis Amaldiçoado", "Tumba do Faraó Louco", "Covil da Esfinge", "Cidade Subterrânea"],
        "Ruínas Antigas": ["Templo dos Deuses Antigos", "Laboratório do Mago Louco", "Cofre Real Arrombado", "Prisão de Demónios", "Catacumbas dos Heróis", "Santuário Profanado"],
        "Cidade Humana": ["Esgotos da Cidade", "Culto Secreto", "Guilda de Ladrões", "Cripta do Cemitério", "Mansão Abandonada", "Arena Clandestina"],
        "Cidade Élfica": ["Catacumbas Antigas", "Santuário Corrompido", "Prisão Mágica", "Templo Esquecido", "Biblioteca Secreta", "Torre Negra"],
        "Cidade Anã": ["Minas Profundas", "Fornalha Abandonada", "Cofre Arrombado", "Salões dos Reis Mortos", "Covil do Dragão Menor", "Acampamento Drow"]
    },
    eventos: {
        "Planície": { 2: "1d3 Lobos (PV 3; Dano 1)", 3: "Bandidos (PV 4; Dano 1)", 4: "Mercador viajante", 5: "Achaste ervas (+1 🍖)", 6: "Calmaria." },
        "Floresta": { 2: "Emboscada de 1d3 Goblins (PV 3; Dano 1)", 3: "Aranha Gigante (PV 6; Dano 2; teia)", 4: "Acampamento abandonado (+1 🔥)", 5: "Fonte de água limpa (+2 🍖)", 6: "Calmaria." },
        "Montanha": { 2: "1 Troll (PV 8; Dano 3; regen)", 3: "Deslizamento de pedras (perde 2 PV)", 4: "Frio extremo (perde 1 🍖)", 5: "Filão de Ouro (+1g)", 6: "Calmaria." },
        "Pântano": { 2: "Enxame de Insetos (PV 4; Dano 1; voador)", 3: "Gás tóxico (perde 2 PV)", 4: "Comida estragou (perde 2 🍖)", 5: "Poção estranha (+1 🍖)", 6: "Calmaria." },
        "Deserto": { 2: "Escorpião Gigante (PV 5; Dano 2; veneno)", 3: "Tempestade de areia (perde 2 PV)", 4: "Calor exaustivo (perde 2 🍖)", 5: "Oásis escondido (+2 🍖)", 6: "Calmaria." },
        "Ruínas Antigas": { 2: "1d3 Esqueletos (PV 3; Dano 1; morto-vivo)", 3: "Armadilha antiga (perde 2 PV)", 4: "Runa mágica brilha", 5: "Moedas antigas (+2g)", 6: "Calmaria." }
    },
    // REGRAS OFICIAIS PARA CORREDORES E SALAS
    segmentos: {
        "Corredor": [
            { min: 1, max: 2, tipo: "Corredor (Frente)", portas: 1, desc: "A passagem segue reto pelas sombras" },
            { min: 3, max: 3, tipo: "Corredor (Direita)", portas: 1, desc: "A passagem curva subitamente à direita" },
            { min: 4, max: 4, tipo: "Corredor (Esquerda)", portas: 1, desc: "A passagem curva subitamente à esquerda" },
            { min: 5, max: 5, tipo: "Interseção em T", portas: 2, desc: "O corredor divide-se em duas direções" },
            { min: 6, max: 6, tipo: "Cruzamento", portas: 3, desc: "Quatro caminhos cruzam-se aqui" }
        ],
        "Sala": [
            { min: 1, max: 3, tipo: "Sala Quadrada", portas: 1, desc: "Uma câmara pequena e claustrofóbica" },
            { min: 4, max: 5, tipo: "Sala Retangular", portas: 2, desc: "Um salão longo com pilares desgastados" },
            { min: 6, max: 6, tipo: "Sala Redonda", portas: 3, desc: "Uma sala imensa com um teto abobadado" }
        ]
    },
    estado_porta: {
        1: { status: "trancada", msg: "A porta está fortemente trancada. Precisas queimar a fechadura (Gastar 1 Tocha) ou recuar." },
        2: { status: "trancada", msg: "A porta está presa pela ferrugem e não cede facilmente. Precisas de 1 Tocha para a abrir." },
        3: { status: "aberta", msg: "A porta range ao ser empurrada. Está destrancada." },
        4: { status: "aberta", msg: "A porta já se encontra entreaberta. O que estará do outro lado?" },
        5: { status: "aberta", msg: "A porta não tem fechadura e abre com um empurrão." },
        6: { status: "aberta", msg: "A porta desfaz-se em pó quando lhe tocas. Caminho livre." }
    },
    // REGRAS OFICIAIS DE ESPÓLIOS (LOOT)
    espolios: {
        1: "Nada de valor. Apenas teias e pó.",
        2: "Restos apodrecidos. Nada de útil.",
        3: "Algumas moedas espalhadas pelo chão.",
        4: "Um pequeno saco contendo moedas de ouro.",
        5: "Um baú escondido com ouro e equipamento.",
        6: "Uma joia preciosa brilha na escuridão!"
    },
    encontros: {
        "Padrao": {
            2: "1 Rato Gigante (PV 2; Dano 1)",
            3: "2 Goblins (PV 3; Dano 1; furtivo)",
            4: "1 Orc (PV 5; Dano 2)",
            5: "1 Esqueleto (PV 4; Dano 1; morto-vivo)",
            6: "1 Zumbi (PV 6; Dano 1; morto-vivo; lento)",
            9: "1 Aranha Gigante (PV 6; Dano 2; teia)",
            10: "1 Cubo Gelatinoso (PV 10; Dano 1; ácido)",
            11: "1 Mímico (PV 8; Dano 2; furtivo)",
            12: "1 Fantasma (PV 4; Dano 2; imaterial; morto-vivo)"
        }
    },
    chefes: {
        "Padrao": [
            "Lorde Esqueleto (PV 12; Dano 2; morto-vivo)",
            "Rei Goblin (PV 10; Dano 2; convoca goblins)",
            "Ogro Furioso (PV 15; Dano 3)",
            "Lich Menor (PV 10; Dano 3; feitiçaria)",
            "Vampiro (PV 12; Dano 2; regen; morto-vivo)",
            "Dragão Jovem (PV 20; Dano 3; sopro de fogo; espólio grande)"
        ]
    }
};
