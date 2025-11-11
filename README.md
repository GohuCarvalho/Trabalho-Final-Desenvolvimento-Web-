<h1>Documentação do Projeto: 🍿PopcornTv </h1>

<h2>🔑 Login e Cadastro: Resumo Unificado</h2>

Ambas as páginas utilizam um conjunto comum de componentes estilizados (importados de ./style.jsx) para manter a identidade visual.

a. Página de Login
Utiliza o hook useAuth() para realizar o login com e-mail e senha.<br>
Vibe Selector: Apresenta três botões ("Relaxar", "Rir", "Me inspirar") que, ao serem selecionados, alteram dinamicamente o gradiente de fundo do Container e a mensagem de boas-vindas.<br>


b. Página de Cadastro
Permite o registro de um novo usuário com um formulário de quatro campos.<br>
Inputs: Nome, E-mail, Senha e Confirmação de Senha.<br>
Validação: Executa verificações essenciais antes da API, como preenchimento de todos os campos e confirmação de que a Senha e a Confirmação de Senha são idênticas.<br>
API (MockAPI): Antes de criar a conta, faz uma requisição para verificar se o e-mail já existe. Se for único, envia um POST para registrar o novo usuário.<br>
Fluxo: Em caso de sucesso, notifica o usuário e o redireciona para a página de /login.<br>


<h2> 🎬 Filmes Populares</h2>

A página FilmesPopulares é uma página de rota simples que exibe uma lista de filmes populares e suporta busca.

Estrutura e Função: O componente renderiza o contêiner centralizado (<MainContent>) e o título da página (<PageTitle>). O conteúdo principal é o componente <MovieList />, que é responsável por buscar e exibir os filmes populares, podendo filtrar os resultados através da propriedade searchTerm.

<img width="1890" height="915" alt="image" src="https://github.com/user-attachments/assets/1d25d019-af95-46dd-ab0d-43ba7157f009" />


<h2> 📺 Séries Populares</h2>

A página SeriesPopulares é uma página de rota simples que exibe uma lista de séries filtráveis.<br>

Estrutura e Função: O componente renderiza um contêiner principal (<MainContent>) que centraliza o conteúdo em até 1200px de largura. O objetivo é apresentar o título da página e o componente <SeriesList />, que é responsável por buscar e exibir as séries populares, potencialmente filtradas por um termo de busca (searchTerm).<br>

<img width="1885" height="836" alt="image" src="https://github.com/user-attachments/assets/e7d2f41d-dff3-40aa-98ec-ee2348def03f" />


<h2> 💟 Maratonas</h2>
A página Maratonas é o hub de planejamento de visualização do usuário, onde ele pode visualizar um resumo de suas watchlists de filmes e séries e calcular o tempo que levará para completá-las.<br><br>
<img width="1891" height="847" alt="image" src="https://github.com/user-attachments/assets/da40f1ea-5803-4b6d-a8a7-ae5acd699b13" />



|  Funcionalidade Principal |  Descrição |
| :------------ | :------------ |
| Fonte de Dados:  | Obtém as listas de filmes (movieList) e séries (tvList) do WatchListContext.  |
| Cálculo de Tempo:  |  A função calculateTotalRuntime soma a duração de todos os itens em cada lista (movieList e tvList). Para séries ('tv'), ela estima o tempo multiplicando a duração média de um episódio pelo número total de episódios.  |
| Visualização Resumida:  |   Renderiza dois <CardMaratonas /> que exibem o total de itens e o tempo total em minutos para Filmes e Séries. |
| Navegação:   | O clique nos cards leva o usuário para a visualização detalhada da watchlist (/maratonar-filmes ou /maratonar-series) via handleCardClick.  |

<h3>a. Componente: Calculadora</h3>
O componente CalculadoraModal é um modal interativo projetado para estimar o tempo necessário para o usuário maratonar todo o conteúdo de sua watchlist com base em seus hábitos de visualização.<br><br>
<img width="1893" height="588" alt="image" src="https://github.com/user-attachments/assets/0517f078-30e9-4919-a1aa-9ed643cbdea4" />


|  Funcionalidade |  Descrição |
| :------------ | :------------ |
|  Cálculo:  | O modal recebe o totalMinutes da lista do usuário e, com base nas horas por dia (hoursPerDay, padrão: 2) e dias por semana (daysPerWeek, padrão: 7) definidos pelo usuário, calcula o tempo estimado para completar a maratona.  |
|  Tempo de Conclusão: |   O resultado é formatado para ser exibido em dias, semanas ou meses, dependendo da duração total (totalDays). |
|  Reatividade:  |  O cálculo é refeito automaticamente (usando useEffect) sempre que o modal é aberto ou quando o usuário altera as entradas de horas/dias. |
|  Props:  |   Recebe isOpen (booleano), onClose (função para fechar), totalMinutes (número) e mediaType (string: "movie" ou "series") para personalizar o título. |

<h3>b. Componente: CardMaratonas</h3>
O componente CardMaratonas é projetado para apresentar uma categoria de conteúdo (maratona) em um formato de cartão compacto e visualmente atraente, destacando o tempo total e a quantidade de itens, e exibindo as miniaturas dos filmes em uma sobreposição estilizada.<br>
<br>O componente mapeia os primeiros cinco filmes (filmes.slice(0, 5)) para gerar as miniaturas (<Miniatura />).<br>

A URL da miniatura é construída a partir de uma URL base (TMDB_IMAGE_BASE_URL) concatenada com a propriedade filme.backdrop_path.<br>


| Detalhe da Dinâmica de Miniaturas  |
| :------------ |
| O estilo da Miniatura usa uma função css para posicionamento em cascata, baseado no índice ($index) do filme no array:  |
| Posicionamento (left): As miniaturas são distribuídas horizontalmente (0%, 20%, 40%, 60%, 80%).  
| Rotação (rotate): Cada miniatura recebe uma rotação diferente (ex: -10deg, -15deg, 10deg, etc.) para um visual mais orgânico e empilhado.  |
| Camada (z-index): O z-index é decrescente (5 - $index), garantindo que a primeira miniatura ($index=0) fique no topo da pilha.  |


<h3>c. Componente: WatchlistMovie</h3>
O componente WatchlistMovie é o componente de visualização responsável por renderizar a lista de filmes salvos pelo usuário (a watchlist).

| Seção  | Descrição  | Detalhes  |
| :------------ | :------------ | :------------ |
|  Contexto | A lista de filmes (movieList) é obtida diretamente do WatchListContext, garantindo que a visualização seja reativa às mudanças do usuário (adição/remoção).  | Utiliza o hook useContext(WatchListContext) para acessar movieList.  |
| Renderização  | Mapeia o array movieList e renderiza um componente <Moviecard /> para cada filme  |  O key é definido como movie.id. |
| Interatividade |  O estado local selectedItem controla qual filme está sendo visualizado no modal de detalhes. | A função handleCardClick define o item selecionado e abre o modal.  |
| Modal  | Quando um filme é selecionado (selectedItem não é null), o <DetailsModal /> é renderizado para exibir informações detalhadas.  | O modal é fechado pela função handleCloseModal.  |

<img width="auto" height="450" alt="image" src="https://github.com/user-attachments/assets/1bd74d6a-5dfa-4daf-bbb2-0b54352ccd6b" />


<h3>d. Componente: WatchlistTv</h3>
Este componente é a página de visualização da lista de séries salvas pelo usuário, operando de forma reativa com o WatchListContext.<br>

- Fonte de Dados: Obtém a lista de séries (tvList) diretamente do WatchListContext, garantindo que a visualização seja automaticamente atualizada quando o usuário adiciona ou remove uma série.

- Renderização: Mapeia o array tvList e renderiza um componente <Tvcard /> para cada série, exibindo-a dentro do contêiner flexível ListWrapper.

- Interatividade (Modal): Gerencia o estado local selectedItem para controlar a exibição do modal de detalhes.

- handleCardClick: Define a série clicada como selectedItem.

- handleCloseModal: Zera selectedItem, fechando o modal.

- Modal de Detalhes: Se selectedItem não for nulo, renderiza o <DetailsModal />, passando a série selecionada para exibição de informações detalhadas.






<h2> 🌟Lancamentos</h2>
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

<img width="1414" height="726" alt="image" src="https://github.com/user-attachments/assets/6ef99f6e-0800-49a5-9845-6a6497b7e415" />


```
const dadosFilme = {
  titulo: "A Era do React",
  tagline: "O fim está próximo. O Estado da Arte nunca foi tão volátil.",
  sinopse: "Em um mundo onde frameworks nascem e morrem em semanas..."
};
```
Nota: Em produção, esses dados seriam buscados de uma API.
