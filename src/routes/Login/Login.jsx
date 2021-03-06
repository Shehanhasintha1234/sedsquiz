import { useEffect } from "react";
import { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState(null);
    const [user, setUser] = useState(null);

    const handleShowClick = () => {
        console.log("showPassword", password);
        setShowPassword(!showPassword)
    };

    // useEffect(() => {

    // }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(password, user);
        const accessTokens = sessionStorage.getItem("accessToken");
        // if (accessTokens == null) {
            console.log("called")
            props.Signin(user, password);
        // }

    }

    // if (sessionStorage.getItem("accessToken") == null) {
    //     return <>Loading</>;
    // }

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="teal.500" />
                <Heading color="teal.400">Welcome</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="email" placeholder="email address" onChange={(e) => setUser(e.target.value)}/>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={(e) => handleShowClick()}>
                                            {showPassword ? "Hide" : "Show"} 
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                {/* <FormHelperText textAlign="right">
                                    <Link>forgot password?</Link>
                                </FormHelperText> */}
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                                onClick={(e) => submit(e)}
                            >
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>

        </Flex>
    );
};

export default Login;
