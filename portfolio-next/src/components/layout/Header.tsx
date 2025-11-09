"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "@/types/portfolio";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  nav: NavItem[];
  activeSection: string;
};

export function Header({ nav, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (href: string) => {
    const id = href.replace("#", "");
    const target = document.querySelector(`[data-section="${id}"]`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <Wrapper
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      $scrolled={isScrolled}
    >
      <Content>
        <Brand onClick={() => handleNavigate("#about")}>
          <BrandAccent>Conspectus</BrandAccent>
          <BrandTitle>Jegatheesh</BrandTitle>
        </Brand>

        <DesktopNav>
          {nav.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <NavItemButton
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.href)}
                $active={isActive}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                {item.label}
                {isActive && (
                  <ActiveIndicator
                    layoutId="nav-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 40,
                    }}
                  />
                )}
              </NavItemButton>
            );
          })}
        </DesktopNav>

        <MobileToggle
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </MobileToggle>
      </Content>

      <AnimatePresence>
        {isMenuOpen ? (
          <MobileMenu
            key="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {nav.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <MobileNavItem
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.href)}
                >
                  <MobileLabel>{item.label}</MobileLabel>
                  <MobileIndicator
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </MobileNavItem>
              );
            })}
          </MobileMenu>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled(motion.header)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${({ $scrolled }) => ($scrolled ? "0.75rem 0" : "1.25rem 0")};
  backdrop-filter: blur(${({ $scrolled }) => ($scrolled ? "16px" : "0px")});
  transition: ${({ theme }) => theme.transitions.default};
  background: ${({ $scrolled }) =>
    $scrolled
      ? "rgba(7, 7, 10, 0.82)"
      : "linear-gradient(180deg, rgba(7,7,10,0.95) 0%, rgba(7,7,10,0.65) 100%)"};
  border-bottom: ${({ theme, $scrolled }) =>
    $scrolled ? `1px solid ${theme.colors.border}` : "1px solid transparent"};
`;

const Content = styled.div`
  margin: 0 auto;
  width: min(1120px, 92vw);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.button`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  padding: 0.35rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }
`;

const BrandAccent = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.primarySoft};
  font-size: 0.69rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const BrandTitle = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  @media (max-width: 880px) {
    display: none;
  }
`;

const NavItemButton = styled(motion.button)<{ $active: boolean }>`
  position: relative;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  padding: 0.45rem 0.85rem;
  border-radius: ${({ theme }) => theme.radii.full};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  opacity: ${({ $active }) => ($active ? 1 : 0.72)};

  &:hover {
    opacity: 1;
  }
`;

const ActiveIndicator = styled(motion.span)`
  position: absolute;
  inset: 0;
  border-radius: ${({ theme }) => theme.radii.full};
  background: linear-gradient(
    135deg,
    rgba(93, 95, 239, 0.35),
    rgba(82, 242, 215, 0.28)
  );
  z-index: -1;
`;

const MobileToggle = styled.button`
  display: none;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  padding: 0.35rem;

  @media (max-width: 880px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.nav)`
  display: none;

  @media (max-width: 880px) {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    margin: 0 auto;
    width: min(92vw, 360px);
    padding: 0.75rem;
    background: rgba(11, 11, 18, 0.92);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: ${({ theme }) => theme.radii.medium};
    margin-top: 0.75rem;
  }
`;

const MobileNavItem = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.65rem 0.85rem;
  border-radius: ${({ theme }) => theme.radii.small};
  cursor: pointer;
  opacity: 0.82;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.04);
  }
`;

const MobileLabel = styled.span`
  position: relative;
  z-index: 1;
`;

const MobileIndicator = styled(motion.span)`
  position: absolute;
  bottom: 0.35rem;
  left: 0.85rem;
  height: 2px;
  background: linear-gradient(
    135deg,
    rgba(93, 95, 239, 0.9),
    rgba(82, 242, 215, 0.75)
  );
  border-radius: ${({ theme }) => theme.radii.full};
`;
