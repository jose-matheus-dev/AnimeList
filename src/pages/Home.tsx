import { Header, Main, Aside, Background } from '../components/layout';

export function Home() {
  return (
    <>
      <Header />
      <Main>
        <Aside></Aside>
        <Background>
          <h1>Home</h1>
        </Background>
      </Main>
    </>
  );
}
