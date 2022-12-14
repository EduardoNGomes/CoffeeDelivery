import Americano from '../assets/images/Type=Americano.png'
import CafeGelado from '../assets/images/Type=Café Gelado.png'
import CafecomLeite from '../assets/images/Type=Café com Leite.png'
import ChocolateQuente from '../assets/images/Type=Chocolate Quente.png'
import Capuccino from '../assets/images/Type=Capuccino.png'
import Cubano from '../assets/images/Type=Cubano.png'
import ExpressoCremoso from '../assets/images/Type=Expresso Cremoso.png'
import Expresso from '../assets/images/Type=Expresso.png'
import Havaiano from '../assets/images/Type=Havaiano.png'
import Irlandes from '../assets/images/Type=Irlandês.png'
import Latte from '../assets/images/Type=Latte.png'
import Macchiato from '../assets/images/Type=Macchiato.png'
import Mochaccino from '../assets/images/Type=Mochaccino.png'
import Arabe from '../assets/images/Type=Árabe.png'

import { v4 as uuidv4 } from 'uuid'

export const data = [
  {
    id: uuidv4(),
    img: Expresso,
    type: [{ id: uuidv4(), name: 'tradicional' }],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
  {
    id: uuidv4(),
    img: Americano,
    type: [{ id: uuidv4(), name: 'tradicional' }],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
  },
  {
    id: uuidv4(),
    img: ExpressoCremoso,
    type: [{ id: uuidv4(), name: 'tradicional' }],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
  },
  {
    id: uuidv4(),
    img: CafeGelado,
    type: [
      { id: uuidv4(), name: 'tradicional' },
      { id: uuidv4(), name: 'gelado' },
    ],

    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
  },
  {
    id: uuidv4(),
    img: CafecomLeite,
    type: [
      { id: uuidv4(), name: 'tradicional' },
      { id: uuidv4(), name: 'com leite' },
    ],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
  },
  {
    id: uuidv4(),
    img: Latte,
    type: [
      { id: uuidv4(), name: 'tradicional' },
      { id: uuidv4(), name: 'com leite' },
    ],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
  },
  {
    id: uuidv4(),
    img: Capuccino,
    type: [
      { id: uuidv4(), name: 'tradicional' },
      { id: uuidv4(), name: 'com leite' },
    ],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
  },
  {
    id: uuidv4(),
    img: Macchiato,
    type: [
      { id: uuidv4(), name: 'tradicional' },
      { id: uuidv4(), name: 'com leite' },
    ],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
  },
  {
    id: uuidv4(),
    img: Mochaccino,
    type: [
      { id: uuidv4(), name: 'tradicional' },
      { id: uuidv4(), name: 'com leite' },
    ],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
  },
  {
    id: uuidv4(),
    img: ChocolateQuente,
    type: [
      { id: uuidv4(), name: 'especial' },
      { id: uuidv4(), name: 'com leite' },
    ],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
  },
  {
    id: uuidv4(),
    img: Cubano,
    type: [
      { id: uuidv4(), name: 'especial' },
      { id: uuidv4(), name: 'alcoólico' },
      { id: uuidv4(), name: 'gelado' },
    ],

    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
  },
  {
    id: uuidv4(),
    img: Havaiano,
    type: [{ id: uuidv4(), name: 'especial' }],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
  },
  {
    id: uuidv4(),
    img: Arabe,
    type: [{ id: uuidv4(), name: 'especial' }],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
  },
  {
    id: uuidv4(),
    img: Irlandes,
    type: [
      { id: uuidv4(), name: 'especial' },
      { id: uuidv4(), name: 'alcoólico' },
    ],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
  },
]
