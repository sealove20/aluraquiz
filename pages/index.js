import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;



export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
            <Widget.Header>
              <h1>The Legend of Zelda</h1>
            </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam, perspiciatis pariatur esse accusamus unde asperiores reprehenderit iure voluptate aspernatur nemo neque, aliquid tempore deleniti laborum odio dolores labore obcaecati.</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da galera</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam, perspiciatis pariatur esse accusamus unde asperiores reprehenderit iure voluptate aspernatur nemo neque, aliquid tempore deleniti laborum odio dolores labore obcaecati.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/sealove20" />
    </QuizBackground>
  )
}
