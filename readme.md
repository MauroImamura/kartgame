## Mario Kart.JS (desafio dio.me)
### Objetivo:

Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.

---

🕹️ Regras & mecânicas:
Jogadores:

O Computador deve receber dois personagens para disputar a corrida em um objeto cada
Pistas:

Os personagens irão correr em uma pista aleatória de 5 rodadas
A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto
Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto
Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto
Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto
Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)
Condição de vitória:

Ao final, vence quem acumulou mais pontos

Baseado no projeto de Felipe Aguiar: https://github.com/digitalinnovationone/formacao-nodejs/tree/main/03-projeto-mario-kart
