import { useApp } from '@/hooks';
import { Link, useLocation } from 'react-router';
import styled, { css } from 'styled-components';

function Navigation({ children }: { children?: React.ReactNode }) {
  const { app } = useApp();
  const location = useLocation();

  return (
    <StyledNavigation>
      {children}
      <ul>
        <li>
          <StyledLink $isActive={location.pathname === '/'} to={`/?idx=${app.idx}`}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink $isActive={location.pathname === '/list'} to={`/list?idx=${app.idx}`}>
            List
          </StyledLink>
        </li>
        <li>
          <StyledLink $isActive={location.pathname === '/details'} to={`/details?idx=${app.idx}`}>
            Details
          </StyledLink>
        </li>
        <li>
          <Link target="_blank" to="https://github.com/jose-matheus-dev/AnimeList" title="GitHub: Source code">
            <svg viewBox="0 0 128 128">
              <g fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path>
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </g>
            </svg>
          </Link>
        </li>
      </ul>
    </StyledNavigation>
  );
}

export function Header() {
  const location = useLocation();
  return (
    <StyledHeader>
      <Navigation>
        <StyledLogo to="/" hidden={location.pathname === '/list'}>
          <span>ANIME</span>
          <span>LIST</span>
        </StyledLogo>
      </Navigation>
    </StyledHeader>
  );
}

const StyledLogo = styled(Link)<{ hidden: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: calc(0.125rem + 1.28vh);
  outline: 0.1vh solid #0004;
  border-radius: 0.625em 0.125em;
  background: linear-gradient(90deg, #4c187c55, ${({ theme }) => theme.accent + '88'});
  box-shadow: inset 0 0 1.28vh #0004, 0 0 1.28vh #0004;
  backdrop-filter: blur(8px);

  position: relative;
  z-index: 5;
  transform-origin: bottom;

  font-size: clamp(0.15rem, min(calc(0rem + 5.28vh), calc(0rem + 2.97vw)), 9.5rem);
  font-weight: 700;
  line-height: 0.75em;
  text-transform: uppercase;

  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};

  &::before {
    content: 'ANIMELIST';
    position: absolute;
    text-shadow: 0.128vh 0px 0px #000, -0.128vh 0px 0px #000, 0px 0.128vh 0px #000, 0px -0.128vh 0px #000;
  }

  span {
    color: transparent;
    -webkit-text-fill-color: transparent;
    z-index: 1;

    &:first-of-type {
      background: linear-gradient(90deg, #ffa500, #aa6300);
    }
    &:last-of-type {
      background: linear-gradient(90deg, #8a2be2, #4c187c);
    }
    &:first-of-type,
    &:last-of-type {
      background-clip: text;
      -webkit-background-clip: text;
    }
  }
`;

const StyledLink = styled(Link)<{ $isActive: boolean; children: string }>`
  filter: drop-shadow();
  && {
    width: 100%;
    display: block;
    font-size: calc(1.76vh + 0.5rem);
    ${({ $isActive, children }) =>
      $isActive &&
      css`
        &:before {
          content: '${children}';
          position: absolute;
          text-shadow: 0.128vh 0px 0px #000, -0.128vh 0px 0px #000, 0px 0.128vh 0px #000, 0px -0.128vh 0px #000;
          z-index: -1;
        }
        background-image: linear-gradient(to right, #ffa500, #8a2be2);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      `}
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-height: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.2vh;
    width: 100%;
    max-width: 51.2%;
    max-height: 100%;

    position: absolute;
    right: 3.65%;
    z-index: 5;
    margin-left: auto;

    font-size: calc(1.76vh + 0.3rem);
    font-weight: 700;
    color: #000000;

    li {
      width: 50%;
      list-style: none;

      svg {
        margin-left: auto;
        height: calc(0.5rem + 2.5vh);
        display: block;
      }
    }
    a {
      cursor: pointer;
      font-weight: 700;
      color: #000000;
    }
  }
`;

const StyledHeader = styled.header`
  width: 100%;
  height: max-content;
  padding: 0 3.65%;

  position: absolute;
  top: 2.6%;
  left: 0px;
`;
