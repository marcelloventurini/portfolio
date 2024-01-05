import styles from './AboutMe.module.scss'

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <h1>olá, mundo!</h1>
      <div className={styles.container__text}>
        <p>
          meu nome é Marcello Venturini, eu tenho 30 anos e atualmente estou no
          último semestre da faculdade de Análise e Desenvolvimento de Sistemas.
        </p>
        <p>
          eu sou um desenvolvedor web com foco em frontend, mas com conhecimento
          nas principais tecnologias backend.
        </p>
        <p>
          atualmente trabalho com as principais tecnologias do ecossistema
          JavaScript: React, Node e TypeScript. Além, é claro, dos nossos
          queridos HTML e CSS.
        </p>
        <p>
          além da minha paixão por programação, também procuro dedicar uma
          parcela do meu tempo à outra área que sempre me despertou muito
          interesse: o design.
        </p>
        <p>
          curiosidades (in)úteis: nem só de trabalho vive o homem! Se você,
          assim como eu, é mega curioso sobre coisas aleatórias de pessoas
          aleatórias, lá vai: tenho alguns hobbies fora do eixo
          programação/design, é claro. Entre eles: gosto muito de assistir
          filmes e séries, principalmente sci-fi e terror de qualidade duvidosa.
          Também gosto de escrever, apesar de não dedicar um tempo para isso já
          há algum tempo. Além disso, sou um modesto apreciador de arquitetura e
          artes em geral (e se tiver passado pela sua cabeça qual o meu estilo
          arquitetônico preferido: brutalismo). Por fim, o hobbie que talvez
          (com certeza) me acompanha a mais tempo: jogos online! Sempre joguei
          de tudo um pouco, mas tenho um cantinho separado no meu coração para
          os mmorpg’s. A bola da vez é tibia, rs.
        </p>
        <p>
          se você tiver alguma dúvida, sugestão, interesse pelo meu trabalho, ou
          quiser apenas dar um “oi” ou trocar uma ideia, sinta-se livre para
          entrar em contato comigo!
        </p>
      </div>
    </section>
  )
}

export default AboutMe
