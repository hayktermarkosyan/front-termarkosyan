import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Hamburger from "../assets/Hamburger.png";
import Search from "../assets/Search.png";
import Close from "../assets/Close.png";
import ChevronDown from "../assets/chevron-down.png";
import { useEffect, useRef, useState } from "react";
import { routes } from "../routes";

interface Props {
  setFilteredPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
}

const Header = ({ setFilteredPosts }: Props) => {
  const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [search, setSearch] = useState("");

  const [posts, setPosts] = useState<IPost[]>();

  useEffect(() => {
    fetch("https://cloud.codesupply.co/endpoint/react/data.json")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    const filtered = posts?.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.text.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [search, posts, setFilteredPosts]);

  return (
    <>
      <Flex
        h="5rem"
        borderBottom="1px solid #E9E9E9"
        justify="space-between"
        align="center"
        px={{ base: "1.25rem", lg: "20vw" }}
      >
        <Image
          opacity={{ base: "initial", lg: "0" }}
          w="1.56rem"
          h="auto"
          src={Hamburger}
          ref={btnRef}
          onClick={onOpen}
          _hover={{ cursor: "pointer" }}
        />

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={{ base: "xs", md: "lg" }}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody p="0" mt="0">
              <Flex
                h="5rem"
                borderBottom="1px solid #E9E9E9"
                justify="space-between"
                align="center"
                px="1.25rem"
              >
                <Image w="11rem" h="auto" src={Logo} />
                <Image
                  w="1rem"
                  h="auto"
                  src={Close}
                  ref={btnRef}
                  onClick={onClose}
                  _hover={{ cursor: "pointer" }}
                />
              </Flex>
              <Flex
                direction="column"
                justify="start"
                align="start"
                fontFamily="Roboto"
                fontWeight="700"
                fontSize="1.5rem"
                px="1.25rem"
              >
                {routes.map((route, index) => (
                  <NavLink
                    key={index}
                    to={route.path}
                    title={route.title}
                    style={{ width: "100%" }}
                    onClick={onClose}
                  >
                    {route.hasChevron ? (
                      <Flex
                        justify="start"
                        align="center"
                        borderBottom="1px solid #E9E9E9"
                        py="1rem"
                        w="100%"
                      >
                        <Text>{route.title}</Text>
                        <Image
                          ml="0.25rem"
                          h="0.25rem"
                          w="0.5rem"
                          src={ChevronDown}
                        />
                      </Flex>
                    ) : (
                      <Flex justify="start" align="center" py="1rem">
                        <Text>{route.title}</Text>
                      </Flex>
                    )}
                  </NavLink>
                ))}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Image w="11rem" h="auto" src={Logo} />
        <Image
          w="1rem"
          h="auto"
          src={Search}
          onClick={() => setIsSearchInputVisible((prevState) => !prevState)}
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
      {isSearchInputVisible && (
        <Flex mt="1rem" justify="center">
          <Input
            w={{ base: "50%", lg: "25%" }}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Flex>
      )}
    </>
  );
};

export default Header;
