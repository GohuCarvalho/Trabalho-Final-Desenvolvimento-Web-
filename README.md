Documentação do Projeto: PopcornTv

Página home:

Página de Login/ Cadastro
Página Filmes Populares
Página Séries Populares

<h2>Maratonas</h2>
<h3>a. Componente: CardMaratonas</h3>
O componente CardMaratonas é projetado para apresentar uma categoria de conteúdo (maratona) em um formato de cartão compacto e visualmente atraente, destacando o tempo total e a quantidade de itens, e exibindo as miniaturas dos filmes em uma sobreposição estilizada.<br>
<br>O componente mapeia os primeiros cinco filmes (filmes.slice(0, 5)) para gerar as miniaturas (<Miniatura />).<br>

A URL da miniatura é construída a partir de uma URL base (TMDB_IMAGE_BASE_URL) concatenada com a propriedade filme.backdrop_path.<br><br>


| Detalhe da Dinâmica de Miniaturas  |
| :------------ |
| O estilo da Miniatura usa uma função css para posicionamento em cascata, baseado no índice ($index) do filme no array:  |
| Posicionamento (left): As miniaturas são distribuídas horizontalmente (0%, 20%, 40%, 60%, 80%).  |
| Rotação (rotate): Cada miniatura recebe uma rotação diferente (ex: -10deg, -15deg, 10deg, etc.) para um visual mais orgânico e empilhado.  |
| Camada (z-index): O z-index é decrescente (5 - $index), garantindo que a primeira miniatura ($index=0) fique no topo da pilha.  |



<h2>Lancamentos</h2>
<h3>a. Componente: CardLancamento</h3>
Este é um componente de apresentação usado para exibir detalhes do lançamento em destaque.<br><br>

|  Propriedade | Tipo  | Descrição  |
| :------------ | :------------ | :------------ |
|  imagemUrl | string  | URL da imagem/pôster do lançamento.  |
| titulo  | string  | Título principal.  |
|  tagline |  string | Subtítulo ou slogan curto.  |
| sinopse  |  string | Texto de resumo da trama ou descrição.  |

<h3>b. Página Lançamento</h3>
A página de Lançamento (index.jsx) é estruturada para centralizar o conteúdo e serve como o contêiner principal para o componente de destaque, o CardLancamento. Seus estilos, definidos em style.jsx, foram pensados para serem responsiva, otimizando a visualização em dispositivos móveis.

```
const dadosFilme = {
  titulo: "A Era do React",
  tagline: "O fim está próximo. O Estado da Arte nunca foi tão volátil.",
  sinopse: "Em um mundo onde frameworks nascem e morrem em semanas..."
};
```
Nota: Em produção, esses dados seriam buscados de uma API.
