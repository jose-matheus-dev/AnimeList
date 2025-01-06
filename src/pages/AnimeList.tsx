import { Header, Main, Aside, Background } from '@/components/layout';
import { useApp } from '@/hooks';

export function AnimeList() {
  const { app } = useApp();

  return (
    <>
      <Header />
      <Main>
        <Aside></Aside>
        <Background>
          <h1>List - {app.isPageLeaving ? 'Leaving...' : 'Welcome!'}</h1>
        </Background>
      </Main>
    </>
  );
}
