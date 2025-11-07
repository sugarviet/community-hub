import {
  User,
  Home,
  Search,
  MessageCircle,
  Bell,
  Settings,
  Heart,
  Plus,
  LogOut,
} from "lucide-react";

export const iconsMap = {
  user: User,
  home: Home,
  search: Search,
  message: MessageCircle,
  bell: Bell,
  settings: Settings,
  heart: Heart,
  plus: Plus,
  logout: LogOut,
};

export type IconName = keyof typeof iconsMap;
