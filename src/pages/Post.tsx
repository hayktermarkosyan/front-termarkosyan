import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import PostModal from "../components/PostModal";

interface Props {
  posts: IPost[];
}

const Post = ({ posts }: Props) => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<IPost>();

  const onPostModalToggle = (post?: IPost) => {
    if (post) setCurrentPost(post);
    else setCurrentPost(null);
    setIsPostModalOpen((prevState) => !prevState);
  };

  return (
    <Flex
      px={{ base: "1.25rem", lg: "20vw" }}
      pt={{ base: "2rem", lg: "3rem" }}
      flexWrap="wrap"
      fontFamily="Roboto"
    >
      {currentPost && (
        <PostModal
          isOpen={isPostModalOpen}
          onToggle={onPostModalToggle}
          post={currentPost}
        />
      )}
      {posts?.map((post: IPost, index) => (
        <Box
          w={{ base: "100%", md: "47%", lg: "31%" }}
          mr={{ base: "0", md: "3%", lg: "2%" }}
          mb="3rem"
          flexWrap="wrap"
          key={index}
          onClick={() => onPostModalToggle(post)}
        >
          <Image
            w="100%"
            src={post.img}
            srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
          />
          <Text mt="1rem" color="#EB0028" fontSize="0.875rem" fontWeight="700">
            {post.tags}
          </Text>
          <Text mt="1rem" fontSize="1.5rem" fontWeight="700">
            {post.title}
          </Text>
          <Flex mt="1rem" align="center">
            <Text fontSize="0.75rem" fontWeight="500">
              {post.autor}
            </Text>
            <Text
              ml="0.875rem"
              color="#9B9B9B"
              fontSize="0.75rem"
              fontWeight="400"
            >
              {post.date}
            </Text>
            <Text
              ml="0.875rem"
              color="#9B9B9B"
              fontSize="0.75rem"
              fontWeight="400"
            >
              {post.views}
            </Text>
          </Flex>
          <Text mt="1rem" color="#929292" fontSize="0.875rem" fontWeight="400">
            {post.text}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default Post;
