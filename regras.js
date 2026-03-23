// ============================================================================
// NOTEQUEST - LIVRO DE REGRAS MUNDO EXPANDIDO (regras.js)
// ============================================================================

window.REGRAS = {
    // ==========================================
    // 1. PERSONAGENS (Raças, Classes e Magias)
    // ==========================================
    racas: {
        "Humano": { pv: 4, magias: 0, vantagem: "Nenhuma" },
        "Anao": { pv: 5, magias: 0, vantagem: "Visão no Escuro (Não gasta tochas em corredores)" },
        "Elfo": { pv: 3, magias: 1, vantagem: "+1 Magia Inicial" },
        "Halfling": { pv: 3, magias: 0, vantagem: "Tochas duram o dobro" },
        "Meio-Orc": { pv: 6, magias: 0, vantagem: "Força Bruta" },
        "Vagalóide": { pv: 4, magias: 0, vantagem: "Luz Própria (+1 Tocha passiva)" }
    },
    classes: {
        "Aventureiro": { pv: 0, arma: "Adaga", dano: "1d4", magias: 0 },
        "Guerreiro": { pv: 5, arma: "Espada", dano: "1d6", magias: 0 },
        "Ladrao": { pv: 3, arma: "Adaga", dano: "1d4", magias: 0 },
        "Clerigo": { pv: 4, arma: "Maça", dano: "1d6", magias: 1 },
        "Mago": { pv: 2, arma: "Cajado", dano: "1d4", magias: 3 }
    },
    magias_basicas: [
        { nome: "Cura", desc: "Recupera 5 PV", usos: 1 },
        { nome: "Luz", desc: "Cria um globo de luz (+1 Tocha)", usos: 3 },
        { nome: "Teletransporte", desc: "Foge de um combate para a sala anterior", usos: 1 },
        { nome: "Raio de Gelo", desc: "Dano 4, inimigo perde o próximo ataque", usos: 1 },
        { nome: "Relâmpago", desc: "Ataque mágico: 6 de Dano automático", usos: 1 },
        { nome: "Bola de Fogo", desc: "Causa 5 de dano em TODOS os inimigos na sala", usos: 1 }
    ],

    // ==========================================
    // 2. MUNDO E EXPLORAÇÃO DE HEXES
    // ==========================================
    mundo: {
        geracao_terreno: {
            1: "Planície", 2: "Montanha", 3: "Floresta", 
            4: "Pântano",  5: "Deserto",  6: "Tundra"
        },
        // Mapeamento de Terrenos (Emojis e Custo de Provisões para Viagem)
        terrenos_info: {
            "Cidade Humana": { emoji: "🏰", custo: 1, desc: "Sua base segura." },
            "Planície":      { emoji: "🌾", custo: 1, desc: "Viagem rápida (1 dia)." },
            "Montanha":      { emoji: "⛰️", custo: 3, desc: "Terreno díficil (3 dias)." },
            "Floresta":      { emoji: "🌲", custo: 2, desc: "Mata fechada (2 dias)." },
            "Pântano":       { emoji: "🐊", custo: 2, desc: "Lama e perigos (2 dias)." },
            "Deserto":       { emoji: "🏜️", custo: 2, desc: "Calor escaldante (2 dias)." },
            "Tundra":        { emoji: "❄️", custo: 2, desc: "Frio congelante (2 dias)." },
            "Água":          { emoji: "🌊", custo: 2, desc: "Requer um barco." }
        },
        cidade_acoes: {
            "Taverna": "Gaste 1 Moeda para ouvir boatos. Role 1d6. (4-6: Revela uma Masmorra).",
            "Estalagem": "Gaste 1 Moeda para recuperar todos os PVs.",
            "Mercado": "Compra Tochas (1g) e Provisões (1g)."
        }
    },

    // ==========================================
    // 3. GERAÇÃO DE MASMORRAS POR TERRENO
    // ==========================================
    // Ao encontrar uma masmorra no Hex, rola-se 1d6 cruzando com o Terreno do Hex
    tabela_terrenos_masmorra: {
        "Planície": ["Palácio", "Cripta", "Tumba", "Santuário", "Templo", "Calabouço"],
        "Montanha": ["Cripta", "Santuário", "Calabouço", "Cidadela", "Mina", "Caverna"],
        "Floresta": ["Tumba", "Templo", "Palácio", "Zigurate", "Laboratório", "Caverna"],
        "Pântano":  ["Cripta", "Tumba", "Santuário", "Templo", "Calabouço", "Necrópole"],
        "Deserto":  ["Calabouço", "Palácio", "Santuário", "Templo", "Pirâmide", "Pirâmide"],
        "Tundra":   ["Calabouço", "Palácio", "Cripta", "Tumba", "Zigurate", "Zigurate"]
    },

    // ==========================================
    // 4. ESTRUTURA DA MASMORRA E PORTAS
    // ==========================================
    segmentos: {
        "Escadaria": [
            { min: 1, max: 1, tipo: "Corredor", portas: 1, desc: "Corredor com uma porta." },
            { min: 2, max: 4, tipo: "Corredor", portas: 2, desc: "Corredor com duas portas." },
            { min: 5, max: 6, tipo: "Corredor", portas: 3, desc: "Corredor com três portas." }
        ],
        "Corredor": [
            { min: 1, max: 2, tipo: "Sala", portas: 1, desc: "Sala mediana." },
            { min: 3, max: 3, tipo: "Sala", portas: 1, desc: "Sala comprida." },
            { min: 4, max: 4, tipo: "Sala", portas: 2, desc: "Sala comprida." },
            { min: 5, max: 5, tipo: "Sala", portas: 2, desc: "Grande salão." },
            { min: 6, max: 6, tipo: "Escadaria", portas: 1, desc: "Escadaria descendo." }
        ],
        "Sala": [
            { min: 1, max: 1, tipo: "Sala", portas: 0, desc: "Pequena sala." },
            { min: 2, max: 3, tipo: "Sala", portas: 0, desc: "Sala mediana." },
            { min: 4, max: 4, tipo: "Sala", portas: 0, desc: "Salão comprido." },
            { min: 5, max: 5, tipo: "Sala", portas: 0, desc: "Grande salão." },
            { min: 6, max: 6, tipo: "Escadaria", portas: 1, desc: "Escadaria descendo." }
        ]
    },
    // Regra de Portas: Rolada toda vez que o jogador interage com uma porta inexplorada
    estado_porta: {
        1: { status: "aberta", msg: "⚠️ ARMADILHA NA PORTA! (Role na tabela de Armadilhas). A porta abriu." },
        2: { status: "trancada", msg: "🔒 A porta está Trancada. Gaste 1 Tocha para queimar a fechadura ou arrombe." },
        3: { status: "trancada", msg: "🔒 A porta está Trancada. Gaste 1 Tocha para queimar a fechadura ou arrombe." },
        4: { status: "aberta", msg: "A porta abriu facilmente." },
        5: { status: "aberta", msg: "A porta abriu facilmente." },
        6: { status: "aberta", msg: "A porta abriu facilmente." }
    },

    // A REGRAS DE FIM DE JOGO (BOSS)
    // Uma masmorra chega ao fim quando o jogador desce a Escadaria para o Nível 3, 
    // ou quando ele esgota todas as portas da masmorra no Nível 2.
    // Nessa hora, o Segmento gerado vira automaticamente a "Sala do Chefe".

    // ==========================================
    // 5. ENCONTROS E CHEFES
    // ==========================================
    encontros: {
        "Padrao": { 2: "Fungóide", 3: "Rato Gigante", 4: "Goblin", 5: "Orc", 6: "Goblin", 9: "Aranha Gigante", 10: "Esqueleto", 11: "Limo Vivo", 12: "Gárgula" },
        "Palácio": { 2: "Minotauro", 3: "Orc", 4: "Orc", 5: "Rato Gigante", 6: "Goblin", 9: "Sentinela de Aço", 10: "Fungóide", 11: "Golem de Ossos", 12: "Limo Vivo" },
        "Caverna": { 2: "Fungóide", 3: "Fungóide", 4: "Fungóide", 5: "Goblin", 6: "Morcego", 9: "Urso Pardo", 10: "Aranha Gigante", 11: "Bandido", 12: "Aranha Gigante" },
        "Tumba": { 2: "Fantasma do Príncipe", 3: "Golem de Ossos", 4: "Esqueleto Soldado", 5: "Sentinela de Aço", 6: "Goblin", 9: "Escorpião", 10: "Sentinela de Aço", 11: "Fungóide", 12: "Aranha Gigante" }
        // ... [As demais podem ser espelhadas no Padrão via código para poupar espaço, ou preenchidas depois]
    },
    chefes: {
        "Padrao": ["Rei Goblin (15 PV; Dano 3)", "Ogro (20 PV; Dano 7)", "Aranha Rainha (25 PV; Dano 4)", "Lich (22 PV; Dano 6)", "Dragão (28 PV; Dano 7)", "Lorde Demônio (30 PV; Dano 6)"],
        "Palácio": ["Barão Zumbi (30 PV; Dano 4; Morto-Vivo)", "Rei Louco (22 PV; Dano 2; Explosivo)", "Dama Fantasma (13 PV; Dano 3; Intangível)", "2 Gárgulas Profanas (12 PV; Dano 3; Pedra)", "Necromante (16 PV; Dano 7; Necromancia)", "Rei Orc (24 PV; Dano 5; Horda)"],
        "Caverna": ["Urso Pardo (30 PV; Dano 5)", "Monstro de Magma (30 PV; Dano 3; Fogo)", "Aranha Gigante Rainha (25 PV; Dano 4; Veneno)", "Troll (20 PV; Dano 6; Regeneração)", "Dragão (30 PV; Dano 7; Fogo)", "Rei Goblin (15 PV; Dano 3; Explosivo)"]
    },

    // ==========================================
    // 6. ARMADILHAS (1d6)
    // ==========================================
    armadilhas: {
        "Padrao": {
            1: { msg: "Pedra cai do teto! (2 Dano)", dano: 2 },
            2: { msg: "Dardos na parede! (3 Dano)", dano: 3 },
            3: { msg: "Fosso simples! (4 Dano)", dano: 4 },
            4: { msg: "Gás Venenoso!", status: "Envenenado" },
            5: { msg: "Explosão de Pó! Perdeu 1 Tocha na confusão.", tocha: -1 },
            6: { msg: "Teto desaba! (5 Dano)", dano: 5 }
        },
        "Cripta": {
            1: { msg: "Esporos de Fungos! (2 Dano + Envenenado)", dano: 2, status: "Envenenado" },
            2: { msg: "Maldição da Tumba! Você se sente azarado.", status: "Amaldiçoado" },
            3: { msg: "Dardos de Osso envenenados! (3 Dano)", dano: 3 },
            4: { msg: "Desabamento de Ossos! (4 Dano)", dano: 4 },
            5: { msg: "Gás Necrótico! (1 Dano)", dano: 1 },
            6: { msg: "Espírito Vingativo! Ele rouba seu ouro.", ouro: -10 }
        }
    },

    // ==========================================
    // 7. LOOT E TESOUROS (1d6)
    // ==========================================
    loot: {
        "Padrao": {
            tesouro: [
                { nome: "Moedas Antigas", desc: "Vale 1d6 moedas" },
                { nome: "Poção de Vida", desc: "Recupera todos PV" },
                { nome: "Tocha", desc: "+1 Tocha" },
                { nome: "Provisão", desc: "+1 Provisão" },
                { nome: "MARAVILHA", desc: "Role na tabela de maravilhas" },
                { nome: "ITEM MÁGICO", desc: "Role na tabela de itens mágicos" }
            ],
            maravilha: [
                { nome: "Poção de Força", desc: "+1 Dano na masmorra" },
                { nome: "Pedra de Afiar", desc: "+1 Dano no próximo ataque" },
                { nome: "Corda", desc: "Item de utilidade" },
                { nome: "Gazua", desc: "Abre portas sem gastar tocha" },
                { nome: "Mapa do Tesouro", desc: "Revela uma sala secreta" },
                { nome: "Chave Mestra", desc: "Abre qualquer porta" }
            ],
            magico: [
                { nome: "Espada Mágica", desc: "+1 Dano" },
                { nome: "Escudo Mágico", desc: "Absorve dano mágico" },
                { nome: "Anel de Invisibilidade", desc: "Status Invisível" },
                { nome: "Botas de Velocidade", desc: "Foge de combate sem falha" },
                { nome: "Elmo da Visão", desc: "Vê no escuro (não gasta tocha)" },
                { nome: "Armadura de Mitril", desc: "Leve e resistente" }
            ]
        }
    },
    
    // ==========================================
    // 8. REGRAS ESPECÍFICAS DE MASMORRA (Navegação Excepcional)
    // ==========================================
    especificidades: {
        "Mina": "Se for Túnel Largo, há um trilho de carrinho. Pode ser usado para atacar monstros no caminho (1d6+3 Dano).",
        "Caverna Aquática": "Com 9+ na tabela de Monstro, aparece um Polvo Assassino (50 PV). Se derrotado, concede 2 Baús.",
        "Caverna Vulcânica": "Com 4- na tabela de Monstro, aparece Monstro de Magma (30 PV; Fogo). Derrotá-lo concede 2 Baús."
    }
};

// Adicione isso no final do seu regras.js
window.REGRAS.eventos = {
    "Planície": { 2: "Wyvern (12 PV; Dano 6; Fogo)", 3: "Orc (6 PV; Dano 3; Espólios)", 4: "Orc (6 PV; Dano 3; Espólios)", 5: "Chuva (perde 1 🍖)", 6: "Chuva (perde 1 🍖)" },
    "Montanha": { 2: "Dragão (30 PV; Dano 7; Fogo)", 3: "2 Orcs (6 PV; Dano 3; Espólios)", 4: "2 Orcs (6 PV; Dano 3; Espólios)", 5: "Avalanche (perde 2 PV)", 6: "Avalanche (perde 2 PV)" },
    "Floresta": { 2: "Troll (10 PV; Dano 6; Regeneração)", 3: "1d6 Goblins (3 PV; Dano 1; Explosivo)", 4: "1d6 Goblins (3 PV; Dano 1; Explosivo)", 5: "Chuva (perde 1 🍖)", 6: "Chuva (perde 1 🍖)" },
    "Pântano": { 2: "Gigante de Musgo (20 PV; Dano 2)", 3: "Chuva (perde 1 🍖)", 4: "Chuva (perde 1 🍖)", 5: "Tempestade (perde 2 🍖)", 6: "Tempestade (perde 2 🍖)" },
    "Deserto": { 2: "Verme Gigante (30 PV; Dano 10)", 3: "Tempestade Areia (perde 2 🍖)", 4: "Tempestade Areia (perde 2 🍖)", 5: "Tempestade Areia (perde 2 🍖)", 6: "Tempestade Areia (perde 2 🍖)" },
    "Tundra": { 2: "Yeti (20 PV; Dano 5)", 3: "Nevasca (perde 2 🍖)", 4: "Nevasca (perde 2 🍖)", 5: "Nevasca (perde 2 🍖)", 6: "Nevasca (perde 2 🍖)" },
    "Água": { 2: "Kraken (50 PV; Dano 10)", 3: "4 Piratas (5 PV; Dano 2; Espólios)", 4: "4 Piratas (5 PV; Dano 2; Espólios)", 5: "Tempestade (mova 1 hex aleatório)", 6: "Tempestade (mova 1 hex aleatório)" },
    "Cidade Humana": {} // Cidades são seguras
};

// Mapeamentos automáticos para herdar tabelas caso não sejam especificadas 
// (Mantém o código leve)
window.REGRAS.encontros["Mina"] = window.REGRAS.encontros["Caverna"];
window.REGRAS.encontros["Cripta"] = window.REGRAS.encontros["Padrao"];
window.REGRAS.armadilhas["Tumba"] = window.REGRAS.armadilhas["Cripta"];
window.REGRAS.armadilhas["Templo"] = window.REGRAS.armadilhas["Padrao"];
window.REGRAS.armadilhas["Mina"] = window.REGRAS.armadilhas["Padrao"];
window.REGRAS.loot["Caverna"] = window.REGRAS.loot["Padrao"];
window.REGRAS.loot["Palácio"] = window.REGRAS.loot["Padrao"];