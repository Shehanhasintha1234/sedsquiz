

import {
    Box,
    chakra,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
    Button,
    Image,
    Link
} from "@chakra-ui/react";
import { TestmonialCard } from "../../components";

import sedsImage from "./docs/seds.jpg";

const testimonials = [
    {
        name: "Brandon P.",
        question: "https://drive.google.com/drive/folders/1UEdUuBTUWcalepCe7-FfCKfsFzqbZA82?usp=sharing",
        content:
            "It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!",
        avatar:
            "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
        name: "Krysta B.",
        question: "Entrepreneur",
        content:
            "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
        avatar:
            "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
        name: "Darcy L.",
        question: "Movie star",
        content:
            "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
    },
    {
        name: "Daniel T.",
        question: "Musician",
        content:
            "I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!",
        avatar:
            "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
        name: "Krysta B.",
        question: "Entrepreneur",
        content:
            "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
        avatar:
            "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
];

const questions = [
    "https://drive.google.com/file/d/1yKX2sysFQfEUXjhDiFw7IN9oXaJb-DIH/view?usp=sharing",
    "https://drive.google.com/file/d/1Kv8GJvTGDLBEWEnp7KK8ZyTQPfUvi7DZ/view?usp=sharing",
    "https://drive.google.com/file/d/1HocSvy_nIlDrLYqhSwbhJoTZSHQ9CvE9/view?usp=sharing",
    "https://drive.google.com/file/d/1QK2Q8SMbDPuPFtGnZzdntEdSsFmwpoQ7/view?usp=sharing",
    "https://drive.google.com/file/d/1RAWwzoS_Zs3iFjJMZ2I4j-EWiQYz1bgl/view?usp=sharing",
    "https://drive.google.com/file/d/1yxi4qkrkemlIHNNNjGDjJe5jcAFi5QD-/view?usp=sharing",
    "https://drive.google.com/file/d/1hxRxeXmfbvOFQ7XOVIljZQQz1W9trf9J/view?usp=sharing",
    "https://drive.google.com/file/d/1UHp-XRlpg26ZNQcxcX6SqewnA1GQLZr1/view?usp=sharing",
    "https://drive.google.com/file/d/1-EsvluBxVSD7WDlDOBk-gVq44QkNGhsH/view?usp=sharing",
    "https://drive.google.com/file/d/1vMW1lfxtxQa3CjcSaWsgfu-wP7vkvEIt/view?usp=sharing"
]

const Questions = (props) => {

    const getTestimonials = () => {
        const testimonials = [];
        for (let i=0; i<10; i++) {
            let data = {
                name: `Question ${i+1}`
            }
            console.log(questions[i])
            testimonials.push(<TestmonialCard key={i+1} {...data} questions={questions[i]} index={i+1}  />)
        }
        return testimonials;
    }

    const logOut = () => {
        sessionStorage.removeItem("accessToken");
        localStorage.removeItem("time");
        localStorage.setItem("login", false);
        props.Signout();
        // window.location.reload();
        
    }


    return (
        <Flex
            textAlign={"center"}
            pt={10}
            justifyContent={"center"}
            direction={"column"}
            width={"full"}
        >
            <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
                <chakra.h3
                    fontFamily={"Work Sans"}
                    fontWeight={"bold"}
                    fontSize={20}
                    textTransform={"uppercase"}
                    color={"purple.400"}
                >
                    SEDS WAYAMBA
                </chakra.h3>
                <Button colorScheme="blue" onClick={() => {logOut()}}>Log Out</Button>
                {/* <Button colorScheme="blue" href="https://astronight.sedssl.lk" isExternal="true">Dashboard</Button> */}
                <Link href={"https://astronight.sedssl.lk"} isExternal="true" marginLeft="50px" color="teal.500">Dashboard</Link>
                
                {/* <chakra.h1
                    py={5}
                    fontSize={48}
                    fontFamily={"Work Sans"}
                    fontWeight={"bold"}
                    color={useColorModeValue("gray.700", "gray.50")}
                >
                    Students for the Exploration and Development of Space Srilanka
                </chakra.h1> */}
               
                <chakra.h2
                    margin={"auto"}
                    width={"70%"}
                    fontFamily={"Inter"}
                    fontWeight={"medium"}
                    color={useColorModeValue("gray.500", "gray.400")}
                >

                    <Box width={"100%"} marginTop={"20px"}>
                        <Image src={sedsImage} alt="seds" />
                    </Box>

                    {/* There are {" "}
                    <chakra.strong color={useColorModeValue("gray.700", "gray.50")}>
                        10
                    </chakra.strong>{" "}
                    questions for you to answer and you are required to
                    email your answers in PDF format to the {" "}
                    <chakra.strong color={useColorModeValue("gray.700", "gray.50")}>
                        sedswayamba@gmail.com
                    </chakra.strong>{" "} with in the given period of time. */}
                </chakra.h2>
            </Box>
            <SimpleGrid
                columns={{ base: 1, xl: 2 }}
                spacing={"20"}
                mt={16}
                mx={"auto"}
            >
                {/* {testimonials.map((cardInfo, index) => (
                    <TestmonialCard {...cardInfo} index={index} />
                ))} */}


                {getTestimonials()}

            </SimpleGrid>
            <Box margin={"50px"}>
                {/* <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={"purple.400"}>
                    <path
                        fill={"currentColor"}
                        d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
                    />
                </Icon> */}
            </Box>
        </Flex>
    );
}

export default Questions;