import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: profile.social.github, label: "GitHub", Icon: Github },
  { href: profile.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: profile.social.email, label: "Email", Icon: Mail }
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3 invert-[0.62]">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          className="inline-flex items-center"
        >
          <Icon size={20} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  );
}
