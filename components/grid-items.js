import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay, Title } from '@chakra-ui/react';
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => {
    return (
        <Box w="100%" align="center">
            <LinkBox cursor="pointer">
                <Image 
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                />
                <LinkOverlay 
                    href={href} 
                    target="_blank"
                >
                    <Text mt={3}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </Box>
    )
}

export const WorkGridItem = ({ children, id, href, title, thumbnail }) => {
    return (
        <Box 
            w="100%" 
            align="center"
        >
            <NextLink href={`/projects/${id}`}>
                <LinkBox cursor="pointer">
                    <Image
                        src={thumbnail}
                        alt={title}
                        className="grid-item-thumbnail"
                        layout='fill'
                    />
                        <LinkOverlay href={`/projects/${id}`}>
                            <Title mt={2} fontSize={20}>{title}</Title>
                        </LinkOverlay>
                    <Text fontSize={14}>{children}</Text>
                </LinkBox>
            </NextLink>
        </Box>
    )
}

export const GridItemStyle = () => {
    return (
        <Global 
            style={`
                .grid-item-thumbnail {
                    border-radius: 12px;
                }
            `}
        />
    )
}