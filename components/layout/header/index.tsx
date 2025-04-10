'use client';

import { LogOut, Menu, Settings, ShoppingBag, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import Navigation from './navigation';
import SearchBar from './search-bar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // This would typically come from your auth state management
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItemCount = 3;

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 pt-16">
                <Link
                  href="/"
                  className="hover:text-primary text-lg font-semibold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <div className="space-y-3">
                  <div className="font-semibold">Products</div>
                  <div className="ml-4 flex flex-col space-y-2">
                    <Link
                      href="/products/clothing"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Clothing
                    </Link>
                    <Link
                      href="/products/accessories"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Accessories
                    </Link>
                    <Link
                      href="/products/footwear"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Footwear
                    </Link>
                  </div>
                </div>
                <Link
                  href="/new-arrivals"
                  className="hover:text-primary text-lg font-semibold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  New Arrivals
                </Link>
                <Link
                  href="/sale"
                  className="text-lg font-semibold text-red-500 transition-colors hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Sale
                </Link>
                <Link
                  href="/about"
                  className="hover:text-primary text-lg font-semibold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              <span className="text-primary">Mook</span>kly
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation Menu */}

        <Navigation />

        {/* Search and Actions - Adjusted for better spacing */}
        <div className="flex flex-1 items-center justify-end gap-4 md:justify-end md:gap-6">
          {/* Search Bar - Made wider and positioned better */}
          <div className="hidden md:block md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <SearchBar />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Search"
            onClick={() => setIsOpen(true)}
          >
            <SearchBar.Icon />
          </Button>

          {/* Cart with Badge */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs"
                  >
                    {cartItemCount}
                  </Badge>
                )}
                <span className="sr-only">Shopping cart</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Your Cart</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="flex flex-col gap-2 p-2">
                <p className="text-muted-foreground text-center text-sm">
                  item in your cart
                </p>
                {/* Cart items would go here */}
                <DropdownMenuSeparator />
                <div className="flex justify-between py-1 text-sm">
                  <span>Subtotal</span>
                  <span className="font-medium">$299.00</span>
                </div>
              </div>
              <DropdownMenuSeparator />
              <div className="p-2">
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/cart" passHref>
                    <Button variant="outline" className="w-full">
                      View Cart
                    </Button>
                  </Link>
                  <Link href="/checkout" passHref>
                    <Button className="w-full">Checkout</Button>
                  </Link>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={isLoggedIn ? '/placeholder.svg' : undefined}
                    alt="User"
                  />
                  <AvatarFallback>
                    <UserIcon className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {isLoggedIn ? (
                <>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm leading-none font-medium">
                        John Doe
                      </p>
                      <p className="text-muted-foreground text-xs leading-none">
                        john.doe@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/account" className="cursor-pointer">
                        <UserIcon className="mr-2 h-4 w-4" />
                        <span>My Account</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/orders" className="cursor-pointer">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        <span>My Orders</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/settings" className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => setIsLoggedIn(false)}
                    className="cursor-pointer text-red-500 focus:text-red-500"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-2 p-2">
                    <Link href="/login" passHref>
                      <Button className="w-full">Sign In</Button>
                    </Link>
                    <Link href="/register" passHref>
                      <Button variant="outline" className="w-full">
                        Create Account
                      </Button>
                    </Link>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/help" className="cursor-pointer">
                      <span>Help Center</span>
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Search - Only visible when needed */}
      <div className="border-t md:hidden">
        <div className="container py-2">
          <SearchBar isMobile />
        </div>
      </div>
    </header>
  );
}
