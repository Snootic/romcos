const CARRO_DATA = [
    {
        id: '1',
        marca: 'Honda',
        modelo: 'Civic',
        ano: 2022,
        motor: '2.0L i-VTEC',
        potencia: 158,
        peso: 1350,
        km100: 8.5,
        max_vel: 210,
        descricao: 'Um carro esportivo e confortável.',
        imagem: require('../../assets/images/honda.png'),
    },
    {
        id: '2',
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2021,
        motor: '1.8L Hybrid',
        potencia: 121,
        peso: 1380,
        km100: 10.0,
        max_vel: 180,
        descricao: 'Um carro confiável e econômico.',
        imagem: require('../../assets/images/nissan.png'),
    },
    {
        id: '3',
        marca: 'Ford',
        modelo: 'Mustang',
        ano: 2023,
        motor: '5.0L V8',
        potencia: 450,
        peso: 1720,
        km100: 4.3,
        max_vel: 250,
        descricao: 'Um carro potente e icônico.',
        imagem: require('../../assets/images/ferrari.png'),
    },
    {
        id: '4',
        marca: 'Chevrolet',
        modelo: 'Camaro',
        ano: 2020,
        motor: '6.2L V8',
        potencia: 455,
        peso: 1700,
        km100: 4.0,
        max_vel: 290,
        descricao: 'Um carro esportivo com design arrojado.',
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

//data de apenas um usuario
const USUARIO_DATA = [
    {
        id: '1',
        nome: 'João Silva',
        email: 'joao.silva@example.com',
        senha: 'senha123',
        cnh: '12345678900',
        telefone: '11987654321',
        historico: ['Interlagos', 'Monza', 'Suzuka'],
        imagem: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
    }
]

const data = {
    CARRO_DATA,
    AUTODROMO_DATA,
    USUARIO_DATA
};
  
export default data;