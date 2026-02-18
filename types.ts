
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  gridSpan: string;
  liveUrl?: string;
  videoUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}