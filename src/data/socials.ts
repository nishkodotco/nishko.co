// Social links shown under the profile photo. Leave `href` empty to show the
// icon without a link (e.g. until the URL is decided).
export type Social = {
  id: "x" | "youtube" | "github" | "calendar";
  label: string;
  href: string;
};

export const socials: Social[] = [
  { id: "x", label: "X (Twitter)", href: "" },
  { id: "youtube", label: "YouTube", href: "" },
  { id: "github", label: "GitHub", href: "https://github.com/nishkodotco" },
  { id: "calendar", label: "Book a time", href: "" },
];
