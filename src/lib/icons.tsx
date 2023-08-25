
import {
  BarChart,
  ChevronDownSquareIcon,
  ChevronLeft,
  ChevronLeftSquareIcon,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ImageIcon,
  Info,
  Laptop,
  LineChart,
  LogOut,
  RefreshCcwIcon,
  Settings,
  Trophy,
  User2,
  FileCheck2,
  ThumbsUp,
  ThumbsDown,
  LucideIcon,
  Loader2,
  SquareDashedBottomCode,
  Car,
  Eye,
  PlusCircle,
  Trash,
  MoreVertical,
  LucideProps,
  Keyboard,
  Crown,
  Bell,
  BellDot,
  CircleDashed,
  CircleDot,
  XSquare,
} from "lucide-react";

import Image from "next/image";

export type Icon = LucideIcon;

export const Icons = {
  // TODO: replace me with an svg of the logo
  logo: ({
    width,
    height,
  }: {
    width: number | `${number}`;
    height: number | `${number}`;
  }) => (
    <Image
      unoptimized
      src="/static/logo.png"
      width={width}
      height={height}
      alt="Code Racer Logo"
    />
  ),
  // sun: SunIcon,
  // moon: MoonIcon,
  // github: GitHubLogoIcon,
  laptop: Laptop,
  logout: LogOut,
  settings: Settings,
  chart: BarChart,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronsLeft: ChevronsLeft,
  chevronsRight: ChevronsRight,
  profile: User2,
  lineChart: LineChart,
  mobileNavOpen: ChevronDownSquareIcon,
  mobileNavClosed: ChevronLeftSquareIcon,
  trophy: Trophy,
  refresh: RefreshCcwIcon,
  picture: ImageIcon,
  info: Info,
  review: FileCheck2,
  thumbsUp: ThumbsUp,
  thumbsDown: ThumbsDown,
  spinner: Loader2,
  // cross: Cross2Icon,
  // check: CheckIcon,
  snippet: SquareDashedBottomCode,
  race: Car,
  eye: Eye,
  addCircle: PlusCircle,
  trash: Trash,
  ellipsis: MoreVertical,
  normalBellNotification: Bell,
  unreadBellNotification: BellDot,
  unreadNotification: CircleDashed,
  readNotification: CircleDot,
  xSquare: XSquare,

  keyboard: Keyboard,
  crown: Crown,
};