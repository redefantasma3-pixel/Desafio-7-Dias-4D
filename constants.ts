
import type { Day, Level } from './types';
import { MageIcon, SageIcon, HeroIcon, MasterIcon } from './components/icons/LevelIcons';

export const DAYS_DATA: Day[] = [
  {
    id: 1,
    title: 'Clareza Mental',
    missions: [
      { id: 1, description: 'Anotar 3 pensamentos do dia' },
      { id: 2, description: 'Respirar profundamente por 3 minutos' },
      { id: 3, description: 'Escrever 1 meta simples para amanhã' },
    ],
  },
  {
    id: 2,
    title: 'Foco e Presença',
    missions: [
      { id: 1, description: 'Fazer uma tarefa sem distrações' },
      { id: 2, description: 'Observar o ambiente por 5 minutos' },
      { id: 3, description: 'Listar 3 coisas pelas quais é grato' },
    ],
  },
  {
    id: 3,
    title: 'Energia e Vitalidade',
    missions: [
      { id: 1, description: 'Fazer 10 minutos de alongamento' },
      { id: 2, description: 'Beber 2 litros de água' },
      { id: 3, description: 'Caminhar por 15 minutos ao ar livre' },
    ],
  },
  {
    id: 4,
    title: 'Conexão e Relacionamentos',
    missions: [
      { id: 1, description: 'Enviar uma mensagem positiva a um amigo' },
      { id: 2, description: 'Elogiar sinceramente alguém' },
      { id: 3, description: 'Ouvir ativamente uma pessoa hoje' },
    ],
  },
  {
    id: 5,
    title: 'Aprendizado e Crescimento',
    missions: [
      { id: 1, description: 'Ler 10 páginas de um livro' },
      { id: 2, description: 'Aprender algo novo por 15 minutos' },
      { id: 3, description: 'Anotar uma ideia ou insight do dia' },
    ],
  },
  {
    id: 6,
    title: 'Disciplina e Consistência',
    missions: [
      { id: 1, description: 'Planejar as tarefas do próximo dia' },
      { id: 2, description: 'Evitar uma distração comum' },
      { id: 3, description: 'Revisar o progresso da semana' },
    ],
  },
  {
    id: 7,
    title: 'Domínio e Visão',
    missions: [
      { id: 1, description: 'Visualizar seu sucesso em uma meta' },
      { id: 2, description: 'Escrever 3 passos para sua próxima grande meta' },
      { id: 3, description: 'Celebrar as conquistas da semana' },
    ],
  },
];

export const LEVELS_CONFIG: Level[] = [
  { level: 1, xpMin: 0, xpMax: 100, title: 'Despertar', Icon: MageIcon },
  { level: 2, xpMin: 101, xpMax: 200, title: 'Clareza', Icon: SageIcon },
  { level: 3, xpMin: 201, xpMax: 400, title: 'Disciplina', Icon: HeroIcon },
  { level: 4, xpMin: 401, xpMax: 700, title: 'Domínio', Icon: MasterIcon },
];

export const MOTIVATIONAL_QUOTES: string[] = [
    "O começo é a parte mais importante do trabalho.",
    "A clareza precede o sucesso.",
    "A disciplina é a ponte entre metas e realizações.",
    "A consistência transforma a média em excelência.",
    "Aprender é o superpoder da mente.",
    "Pequenos passos diários levam a grandes distâncias.",
    "Você é o mestre do seu destino.",
    "Parabéns! Você alcançou o Domínio 4D!"
];
