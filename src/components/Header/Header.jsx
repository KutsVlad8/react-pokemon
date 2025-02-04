import { Head, Navigation, NavigationItem } from './Header.styled';

const Header = () => {
  return (
    <Head>
      <Navigation>
        <div>
          <NavigationItem to="/">Home</NavigationItem>
          <NavigationItem to="/Search">Search</NavigationItem>
        </div>
      </Navigation>
    </Head>
  );
};

export default Header;
