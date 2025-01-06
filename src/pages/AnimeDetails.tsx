import { Header, Main, Aside, Background } from '@/components/layout';
import { useApp } from '@/hooks';

export function AnimeDetails() {
  const { app } = useApp();

  return (
    <>
      <Header />
      <Main>
        <Aside></Aside>
        <Background>
          <h1>Details - {app.isPageLeaving ? 'Leaving...' : 'Welcome!'}</h1>
        </Background>
      </Main>
    </>
  );
}
