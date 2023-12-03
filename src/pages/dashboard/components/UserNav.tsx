import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/component/ui/avatar"
  import { Button } from "@/component/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/component/ui/dropdown-menu"
import { Text } from "@/src/component/Typhography/Typography"
  
  const UserNav = () => {
    return (
      <>
      <div className="flex justify-center items-center gap-3">
      <img src="https://github.com/shadcn.png" alt="rounded-img" className="h-10 w-10 rounded-full"/>
      <Text variant="medium" className="text-white">
        Hi, <span>Melvin.</span>
      </Text>
      </div>
      </>
    )
  }
  export default UserNav