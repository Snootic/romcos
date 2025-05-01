const CARRO_DATA = [
    {
        id: '1',
        marca: 'Honda',
        modelo: 'Civic',
        ano: 2022,
        desc: 'Um carro esportivo e confortável.',
        imagem: require('../../assets/images/honda.png'),
    },
    {
        id: '2',
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2021,
        desc: 'Um carro confiável e econômico.',
        imagem: require('../../assets/images/nissan.png'),
    },
    {
        id: '3',
        marca: 'Ford',
        modelo: 'Mustang',
        ano: 2023,
        desc: 'Um carro potente e icônico.',
        imagem: require('../../assets/images/honda.png'),
    },
    {
        id: '4',
        marca: 'Chevrolet',
        modelo: 'Camaro',
        ano: 2020,
        desc: 'Um carro esportivo com design arrojado.',
        imagem: require('../../assets/images/honda.png'),
    }
];

const AUTODROMO_DATA = [
    {
        id: '1',
        nome: 'Interlagos',
        tamanho: 4309,
        tipo_pista: 'Asfalto',
        principais_eventos: ['Fórmula 1', 'Stock Car', 'Endurance'],
        infraestrutura: ['Arquibancadas', 'Boxes', 'Estacionamento', 'Restaurantes'],
        localizacao: 'São Paulo, Brasil',
        destaque: 'Palco de corridas de Fórmula 1',
        imagem: require('../../assets/images/interlagos.png'),
        descricao: 'Um dos autódromos mais famosos do mundo, palco de corridas de Fórmula 1.',
    },
    {
        id: '2',
        nome: 'Monza',
        tamanho: 5793,
        tipo_pista: 'Asfalto',
        principais_eventos: ['Fórmula 1', 'DTM', 'GT World Challenge'],
        infraestrutura: ['Arquibancadas', 'Boxes', 'Museu', 'Restaurantes'],
        localizacao: 'Monza, Itália',
        destaque: 'Conhecido como o "Templo da Velocidade"',
        imagem: require('../../assets/images/interlagos.png'),
        descricao: 'Conhecido como o "Templo da Velocidade", é um dos circuitos mais rápidos.',
    },
    {
        id: '3',
        nome: 'Silverstone',
        tamanho: 5891,
        tipo_pista: 'Asfalto',
        principais_eventos: ['Fórmula 1', 'MotoGP', 'WEC'],
        infraestrutura: ['Arquibancadas', 'Boxes', 'Centro de visitantes', 'Restaurantes'],
        localizacao: 'Northamptonshire, Reino Unido',
        destaque: 'O berço da Fórmula 1',
        imagem: require('../../assets/images/interlagos.png'),
        descricao: 'O berço da Fórmula 1, com curvas icônicas como Maggots e Becketts.',
    },
    {
        id: '4',
        nome: 'Suzuka',
        tamanho: 5807,
        tipo_pista: 'Asfalto',
        principais_eventos: ['Fórmula 1', 'Super GT', '8 Horas de Suzuka'],
        infraestrutura: ['Arquibancadas', 'Boxes', 'Parque temático', 'Restaurantes'],
        localizacao: 'Suzuka, Japão',
        destaque: 'Famoso pela curva em "S"',
        imagem: require('../../assets/images/interlagos.png'),
        descricao: 'Um circuito técnico e desafiador, famoso pela curva em "S".',
    },
];

const data = {
    CARRO_DATA,
    AUTODROMO_DATA,
};
  
export default data;