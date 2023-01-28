import { Spinner, VStack } from "native-base";

const Loading = () => (
  <VStack
    flex={1}
    bgColor="gray.900"
    alignItems="center"
    justifyContent="center"
  >
    <Spinner color="yellow.500" />
  </VStack>
);

export default Loading;
