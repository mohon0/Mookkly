import Cart from './cart';
import HeaderClient from './header-client';
import Navigation from './navigation';
import SearchBar from './search-bar';
import UserDropDown from './user';

export default function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between pr-2 md:px-0">
        <HeaderClient />
        <Navigation />
        <div className="flex flex-1 items-baseline justify-end gap-4 md:justify-end md:gap-6">
          <div className="hidden md:block md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <SearchBar />
          </div>
          <Cart />
          <UserDropDown />
        </div>
      </div>
    </header>
  );
}
