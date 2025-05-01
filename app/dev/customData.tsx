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
      localizacao: 'São Paulo, Brasil',
      descricao: 'Um dos autódromos mais famosos do mundo, palco de corridas de Fórmula 1.',
      imagem: require('../../assets/images/interlagos.png'),
    },
    {
      id: '2',
      nome: 'Monza',
      localizacao: 'Monza, Itália',
      descricao: 'Conhecido como o "Templo da Velocidade", é um dos circuitos mais rápidos.',
      imagem: require('../../assets/images/interlagos.png'),
    },
    {
      id: '3',
      nome: 'Silverstone',
      localizacao: 'Northamptonshire, Reino Unido',
      descricao: 'O berço da Fórmula 1, com curvas icônicas como Maggots e Becketts.',
      imagem: require('../../assets/images/interlagos.png'),
    },
    {
      id: '4',
      nome: 'Suzuka',
      localizacao: 'Suzuka, Japão',
      descricao: 'Um circuito técnico e desafiador, famoso pela curva em "S".',
      imagem: require('../../assets/images/interlagos.png'),
    },
];

const data = {
    CARRO_DATA,
    AUTODROMO_DATA,
};
  
export default data;