import Link from 'next/link';
// import Image from 'next/image';
import { Text, useColorModeValue, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotated(20deg);
    }
`

const Logo = () => {
    const footPrintImg = ``;

    return (
        <Link href="/">
            <a>
                <LogoBox>
                <Image
                    mt={5}
                    boxSize='50px'
                    borderRadius='full'
                    src='/images/planetpurple.jpg'
                    alt='Logo'
                />
                    <Text 
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontWeight="bold"
                        fontFamily="M PLUS Rounded 1c"
                        mt={5}
                        ml={3}
                        >
                            Shreya Dhir
                    </Text>

                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;