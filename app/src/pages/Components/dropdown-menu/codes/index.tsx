export const dropdownMenuExample = `<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem variant={"primary-ghost"}>Billing</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>
      Keyboard shortcuts
      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

export const dropdownMenuItemsExample = `<DropdownMenu>
  <DropdownMenuTrigger>Open menu</DropdownMenuTrigger>
  <DropdownMenuContent>
    <Text>My Account</Text>
    <Separator className='mt-2' />
    <DropdownMenuGroup>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
    </DropdownMenuGroup>
    <Separator className='mb-2' />
    <DropdownMenuItem variant={"danger"}>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

export const dropdownMenuCheckboxExample = `<DropdownMenu>
  <DropdownMenuTrigger>Checkbox items</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuCheckboxItem checked={true}>
      Show status bar
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem disabled>
      Show disabled bar
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem>Show panel</DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`;

export const dropdownMenuRadioExample = `<DropdownMenu>
  <DropdownMenuTrigger>Radio items</DropdownMenuTrigger>
  <DropdownMenuContent>
    <Text>Panel position</Text>
    <Separator className='mt-1' />
    <DropdownMenuRadioGroup value='bottom'>
      <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value='bottom'>Bottom</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value='right'>Right</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`;

export const dropdownMenuSubExample = `<DropdownMenu>
  <DropdownMenuTrigger>Submenu</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>New tab</DropdownMenuItem>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Email</DropdownMenuItem>
          <DropdownMenuItem>Message</DropdownMenuItem>
          <DropdownMenuItem>More...</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`;

export const dropdownMenuPropertiesExample = `<DropdownMenu>
  <DropdownMenuTrigger>Menu properties</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem inset variant='default' size='sm'>
      Small item
    </DropdownMenuItem>
    <DropdownMenuItem inset variant='default' size='md'>
      Medium item
    </DropdownMenuItem>
    <DropdownMenuItem inset variant='default' size='lg'>
      Large item
    </DropdownMenuItem>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger inset size='md'>
        More options
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Option one</DropdownMenuItem>
          <DropdownMenuItem>Option two</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`;
