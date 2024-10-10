import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
  
  import {ModeToggle} from '../components/mode-toggle';
  









function Finnavbar(){
    return(
  <div>
  <NavigationMenu className="sticky top-0 inset-x-0 z-50 bg-white shadow-md">
     <NavigationMenuList className="flex space-x-4  bg-white">
      
      <NavigationMenuItem>
      <NavigationMenuTrigger >Home</NavigationMenuTrigger>
      <NavigationMenuContent>
      <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
      <NavigationMenuTrigger >Market</NavigationMenuTrigger>
      <NavigationMenuContent>
      <NavigationMenuLink>link</NavigationMenuLink>
      </NavigationMenuContent>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
      <NavigationMenuTrigger>Coins</NavigationMenuTrigger>
      <NavigationMenuContent>
      <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
      <NavigationMenuTrigger>User</NavigationMenuTrigger>
      <NavigationMenuContent>
      <NavigationMenuLink>Link</NavigationMenuLink>
      
      </NavigationMenuContent>
      </NavigationMenuItem>
      </NavigationMenuList>
      <ModeToggle></ModeToggle>
      </NavigationMenu>

      </div>
    )}

    export default Finnavbar;