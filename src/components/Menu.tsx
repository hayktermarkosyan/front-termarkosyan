import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ChevronDown from "../assets/chevron-down.png";
import { routes } from "../routes";

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const animateMenu = () => {
      const targetTop = scrolled ? -100 : 0;
      requestAnimationFrame(() => {
        if (menuRef.current) menuRef.current.style.top = `${targetTop}px`;
      });
    };

    animateMenu();
  }, [scrolled]);

  return (
    <Flex
      ref={menuRef}
      position="sticky"
      top="0"
      zIndex="100"
      bg="white"
      borderBottom="1px solid #E9E9E9"
      transition="top 0.5s ease-in-out"
      h="3.6rem"
      justify="center"
      display={{ base: "none", lg: "flex" }}
    >
      <Flex
        justify="center"
        align="center"
        gap="2rem"
        fontFamily="Roboto"
        fontWeight="700"
      >
        {routes.map((route, index) => (
          <NavLink key={index} to={route.path} title={route.title}>
            <Flex justify="center" align="center">
              <Text>{route.title}</Text>
              {route.hasChevron && (
                <Image ml="0.25rem" h="0.25rem" w="0.5rem" src={ChevronDown} />
              )}
            </Flex>
          </NavLink>
        ))}
      </Flex>
    </Flex>
  );
};

export default Menu;
