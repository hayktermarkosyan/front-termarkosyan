import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Text,
  Image,
  ModalCloseButton,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
  post: IPost;
}

const PostModal = ({ isOpen, onToggle, post }: Props) => {
  return (
    <Modal
      blockScrollOnMount={true}
      size="5xl"
      isCentered
      isOpen={isOpen}
      onClose={onToggle}
    >
      <ModalOverlay />
      <ModalContent
        mt="3rem"
        w={{ base: "90%", lg: "60%" }}
        border="1px solid #666"
        borderRadius="none"
        boxShadow="0 3px 10px -1px rgba(0,0,0,.3), 0 2px 50px 2px rgba(0,0,0,.2)"
      >
        <ModalCloseButton
          position="absolute"
          top="-5px"
          right="-5px"
          w="30px"
          h="30px"
        />
        <ModalBody p="1.5rem">
          <Flex
            direction="column"
            justify="center"
            align="center"
            flexWrap="wrap"
            onClick={onToggle}
          >
            <Image
              w="100%"
              src={post.img}
              srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
            />
            <Text
              mt="1rem"
              color="#EB0028"
              fontSize={{ base: "0.75rem", md: "1.5rem" }}
              fontWeight="700"
            >
              {post.tags}
            </Text>
            <Text
              mt="1rem"
              fontSize={{ base: "1.25rem", md: "2.5rem" }}
              fontWeight="700"
            >
              {post.title}
            </Text>
            <Flex justify="center" mt="1rem" align="center">
              <Text
                fontSize={{ base: "0.875rem", md: "1.25rem" }}
                fontWeight="500"
              >
                {post.autor}
              </Text>
              <Text
                ml="0.875rem"
                color="#9B9B9B"
                fontSize={{ base: "0.875rem", md: "1.25rem" }}
                fontWeight="400"
              >
                {post.date}
              </Text>
              <Text
                ml="0.875rem"
                color="#9B9B9B"
                fontSize={{ base: "0.875rem", md: "1.25rem" }}
                fontWeight="400"
              >
                {post.views}
              </Text>
            </Flex>
            <Text
              mt="1rem"
              color="#929292"
              fontSize={{ base: "0.75rem", md: "1.5rem" }}
              fontWeight="400"
            >
              {post.text}
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PostModal;
