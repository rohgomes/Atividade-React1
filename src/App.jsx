import Titulo from './Titulo'
import Imagem from './Imagem'
import Texto from './Texto'
import Gifs from './Gifs'
import Footer from './Footer'
import Cabecalho from './Cabecalho'
import Resumo from './Resumo'
import './App.css'

function App() {
 
  return (
  <> 
  <header>
  <Cabecalho>Meu diário na Reprograma</Cabecalho>
  </header>

  <nav className="navbar">
    <Imagem image="https://media.giphy.com/media/EWdJFGvk5d9RHWy4II/giphy.gif" alt="imagem da desenvolvedora do site, Ayane Martins" />
    <Titulo title="Olá, eu sou Maria Roberta" />
  </nav>  

  <section>
    <Resumo>Sou aluna de front-end da Reprograma na turma On17. Sou professora de reforço escolar autônoma desde 2017. Estou no processo 
      transição de carreira desde janeiro de 2022. E a reprograma tem sido fundamental nesse meu processo de transição. Eu, definitivamente
      não poderia estar em ambiente melhor.</Resumo>
    <hr/>
  </section>

  <article>
      <Titulo title="O que aprendi na Reprograma:" />
    <div className="container">
      <Titulo title="Git/GitHub"/>
      <Gifs image="https://media.giphy.com/media/kC2XrbvZlQzfHKhKaQ/giphy.gif" alt="Gif da série Aj and the queen, Rupaul andando"/>
      <Texto><b>Git</b> Git é um sistema de controle de versão de arquivos/códigos, ou seja, eu uso o Git para criar versões do meu código. 
      É possível que várias pessoas trabalhem juntas, deforma simuntânea no mesmo código editando e criando novos arquivos e permitindo que 
      os mesmos possam existir sem o risco de suas alterações serem sobrescritas. O <b>GitHub</b> é uma plataforma de hospedagem de código, 
      então os arquivos/códigos que foram criados e versionados são "guardados" no GitHub. Ele permite que outras pessoas cadastradas na 
      plataforma contribuam em projetos privados e possam ver os códigos.</Texto>
    </div>

    <div className="container">
      <Titulo title="HTML"/>
      <Gifs image="https://media.giphy.com/media/eMfyklFdvERzJGQfZI/giphy.gif" alt="Gif da série Aj and the queen, Rupaul abrindo a porta"/>
      <Texto> <b>HTML</b> é a sigla de Hypertext Markup Language, ou, em português, linguagem de marcação para hipertexto. São blocos de código
      que formam a estrutura da minha página, é o corpo da página. Estes blocos recebem conteúdo do tipo textos, imagens, vídeos, áudios e links. 
      Quando acessamos uma página na web, o que vemos é a interpretação que o navegador está fazendo de um arquivo HTML, ou seja do que foi construído.</Texto>
    </div>

    <div className="container">
      <Titulo title="CSS"/>
      <Gifs image="https://media.giphy.com/media/lPjrMPvd6yitV7COkX/giphy.gif" alt="Gif da série Aj and the queen, AJ exibindo seus aneis e beleza" />
      <Texto> <b>CSS</b> é a sigla para o termo em inglês Cascading Style Sheets que, traduzido para o português, significa Folha de Estilo 
      em Cascatas. O CSS é focado no estilo toda a estética de um site, me permite dar minha identidade visual ao site e proporcionar ao usuário 
      uma experiência agradável, com um site funcional e bonito.</Texto>
    </div>

    <div className="container">
      <Titulo title="JavaScript"/>
      <Gifs image="https://media.giphy.com/media/mFSlUaVHSgIewSIDqe/giphy.gif" alt="Gif da série Aj and the queen, Rupaul dirigindo e chorando" />
      <Texto><b>JavaScript</b> É uma linguagem de programação de comportamento que permite a criação de conteúdos dinâmicos, controle de mídias 
      e animações para deixar seu site mais interativo e interessante. Aprendi o que é e como utilizar: variáveis, funções, arrays, objetos, loops, 
      métodos de iteração, métodos de extração, métodos de manipulação usando o EC6, callback e tantas outras coisas. É fácil? Não! Entendi todas? 
      Entendi. Mas sei como usar? Ainda não! Mas continuo estudando e me dedicando ao máximo para conseguir aplicar todo aprendizado. Determinação 
      e persistência sempre, pois desistir não é uma opção!</Texto>
    </div>
  </article>

  <footer>
  <Footer>Feito por Maria Roberta | Aluna Reprograma - Turma On17 | 2022</Footer>
  </footer>
  </>
  )
}

export default App
