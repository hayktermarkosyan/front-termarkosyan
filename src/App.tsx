import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Demos from "./pages/Demos";
import Post from "./pages/Post";
import Features from "./pages/Features";
import Categories from "./pages/Categories";
import Shop from "./pages/Shop";
import BuyNow from "./pages/BuyNow";
import { useState } from "react";

const breakpoints = {
  xs: "400px",
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

export const App = () => {
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>();

  return (
    <ChakraProvider theme={theme}>
      <Layout setFilteredPosts={setFilteredPosts}>
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/post" element={<Post posts={filteredPosts} />} />
            <Route path="/features" element={<Features />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/buy-now" element={<BuyNow />} />
          </Routes>
        </Box>
      </Layout>
    </ChakraProvider>
  );
};
