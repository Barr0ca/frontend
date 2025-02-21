import { ref } from 'vue'

export const perguntas = ref([
  {
    id: 1,
    pergunta: 'Qual é o maior planeta do Sistema Solar?',
    respostas: ['Terra', 'Júpiter', 'Saturno', 'Marte'],
    indiceRespostaCorreta: 1,
  },
  {
    id: 2,
    pergunta: "Quem pintou a obra 'Mona Lisa'?",
    respostas: ['Leonardo da Vinci', 'Michelangelo', 'Vincent van Gogh', 'Pablo Picasso'],
    indiceRespostaCorreta: 0,
  },
  {
    id: 3,
    pergunta: "Qual é o elemento químico representado pelo símbolo 'O'?",
    respostas: ['Oxigênio', 'Ouro', 'Ozônio', 'Ósmio'],
    indiceRespostaCorreta: 0,
  },
  {
    id: 4,
    pergunta: 'Qual país é conhecido como a terra do sol nascente?',
    respostas: ['China', 'Coreia do Sul', 'Japão', 'Tailândia'],
    indiceRespostaCorreta: 2,
  },
  {
    id: 5,
    pergunta: 'Quem foi o primeiro homem a pisar na Lua?',
    respostas: ['Yuri Gagarin', 'Buzz Aldrin', 'Neil Armstrong', 'Michael Collins'],
    indiceRespostaCorreta: 2,
  },
])
