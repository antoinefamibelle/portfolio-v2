import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, User, BugIcon, GraduationCapIcon, BriefcaseBusinessIcon, FolderGit2 } from "lucide-react";
import { useTheme } from "@/context/theme";
import { isDark } from "@/lib/utils";
import { NavbarIcon } from "./style";
import { FloatingNav } from "@/components/ui/navbar";

export const Layout = () => {
  const isDesktop = window.innerWidth > 1024;
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
        {isDesktop && (
          <FloatingNav
          navItems={[
            {
              name: "About",
              link: "/",
              icon: <User size={24} />,
            },
            {
              name: "Diplomas",
              link: "/profile",
              icon: <GraduationCapIcon size={24} />,
            },
            {
              name: "Skills",
              link: "/skills",
              icon: <BugIcon size={24} />,
            },
            {
              name: "Career",
              link: "/workouts",
              icon: <BriefcaseBusinessIcon size={24} />,
            },
            {
              name: "Projects",
              link: "/recipes",
              icon: <FolderGit2 size={24} />,
            },
          ]}
          className={isDark(theme) ? "dark" : ""}
        />
        )}
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div>
        <Outlet />
      </div>
      {!isDesktop && (
        <FloatingNav
        navItems={[
          {
            name: "About",
            link: "/",
            icon: <User size={24} />,
          },
          {
            name: "Diplomas",
            link: "/profile",
            icon: <GraduationCapIcon size={24} />,
          },
          {
            name: "Skills",
            link: "/skills",
            icon: <BugIcon size={24} />,
          },
          {
            name: "Career",
            link: "/workouts",
            icon: <BriefcaseBusinessIcon size={24} />,
          },
          {
            name: "Projects",
            link: "/recipes",
            icon: <FolderGit2 size={24} />,
          },
        ]}
          className={isDark(theme) ? "dark" : ""}
        />
      )}
    </div>
  );
}