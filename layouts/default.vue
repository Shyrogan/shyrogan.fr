<template>
  <main class="w-screen flex flex-col">
    <Navbar>
      <NavbarLogo />
      <NavbarContainer>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/">Blog</NavbarItem>
      </NavbarContainer>
    </Navbar>
    <slot />
  </main>
</template>
