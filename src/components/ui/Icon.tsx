import React from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  AtSign,
  Bot,
  BookOpen,
  Braces,
  Brain,
  Calculator,
  Calendar,
  CalendarCheck,
  CalendarDays,
  Camera,
  ChevronDown,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  CirclePlay,
  Clock,
  Cloud,
  CloudCheck,
  CloudCog,
  Code,
  Coins,
  ExternalLink,
  FileText,
  Flame,
  FolderCode,
  Gamepad2,
  Globe,
  Handshake,
  Heart,
  Info,
  Link as LinkIcon,
  Lock,
  Mail,
  MapPin,
  MapPinned,
  Medal,
  Megaphone,
  Menu,
  MessagesSquare,
  Mic,
  MonitorPlay,
  MoveHorizontal,
  Network,
  Palette,
  Quote,
  Rocket,
  Search,
  SearchX,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Speech,
  Star,
  Terminal,
  Trophy,
  User,
  UserPlus,
  Users,
  UsersRound,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Central icon registry. Data files and components refer to icons by a short
 * string name (e.g. icon="terminal"); this maps each name to a lucide icon.
 * To use a new icon: import it from "lucide-react" and add it to the map below.
 */
const ICONS: Record<string, LucideIcon> = {
  alternate_email: AtSign,
  arrow_downward: ArrowDown,
  arrow_forward: ArrowRight,
  arrow_outward: ArrowUpRight,
  bolt: Zap,
  calculate: Calculator,
  calendar_month: CalendarDays,
  calendar_today: Calendar,
  camera: Camera,
  campaign: Megaphone,
  check_circle: CircleCheck,
  chevron_right: ChevronRight,
  close: X,
  cloud: Cloud,
  cloud_done: CloudCheck,
  cloud_sync: CloudCog,
  code: Code,
  code_blocks: Braces,
  description: FileText,
  emoji_events: Trophy,
  error: CircleAlert,
  event: CalendarDays,
  event_note: CalendarCheck,
  expand_more: ChevronDown,
  favorite: Heart,
  folder_code: FolderCode,
  forum: MessagesSquare,
  format_quote: Quote,
  group: Users,
  group_add: UserPlus,
  group_work: UsersRound,
  groups: Users,
  handshake: Handshake,
  hub: Network,
  info: Info,
  language: Globe,
  link: LinkIcon,
  local_fire_department: Flame,
  location_on: MapPin,
  lock: Lock,
  mail: Mail,
  menu: Menu,
  menu_book: BookOpen,
  mic: Mic,
  military_tech: Medal,
  north: ArrowUp,
  open_in_new: ExternalLink,
  palette: Palette,
  person: User,
  photo_camera: Camera,
  pin_drop: MapPinned,
  play_circle: CirclePlay,
  psychology: Brain,
  record_voice_over: Speech,
  rocket_launch: Rocket,
  schedule: Clock,
  search: Search,
  search_off: SearchX,
  security: ShieldCheck,
  smart_display: MonitorPlay,
  smart_toy: Bot,
  smartphone: Smartphone,
  sports_esports: Gamepad2,
  star: Star,
  stars: Sparkles,
  swipe: MoveHorizontal,
  terminal: Terminal,
  token: Coins,
  trophy: Trophy,
};

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "name" | "ref"> {
  /** Icon name from the registry above */
  name: string;
}

/**
 * Renders a lucide icon sized to the surrounding font size (1em), so existing
 * `text-[18px]`-style classes control size and `text-*` classes control color.
 */
export function Icon({ name, className = "", ...rest }: IconProps) {
  const Cmp = ICONS[name];
  if (!Cmp) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[Icon] unknown icon name: "${name}"`);
    }
    return null;
  }
  return (
    <Cmp
      width="1em"
      height="1em"
      aria-hidden="true"
      className={`inline-block align-middle shrink-0 ${className}`.trim()}
      {...rest}
    />
  );
}
