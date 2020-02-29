import React from "react"
import { Flex, Box, Text, Button, Link } from "rebass"
import { useColorMode } from 'theme-ui'
const ColorButton = ({ mode, ...props }) => (
    <Box
      as="button"
      {...props}
      title="Cycle Color Mode"
      sx={{
        display: 'inline-block',
        appearance: 'none',
        bg: 'transparent',
        color: 'inherit',
        p: 1,
        m: 2,
        border: 0,
        borderRadius: 9999,
        lineHeight: 0,
        ':hover, :focus': {
          color: 'primary',
          boxShadow: '0 0 0 3px',
          outline: 'none'
        }
      }}
    >
      <svg viewBox="0 0 32 32" width="24" height="24" fill="currentcolor">
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="currentcolor"
          strokeWidth="4"
        />
        <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
      </svg>
    </Box>
  )
export default props => {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <Flex
            px={2}
            color='white'
            bg='black'
            alignItems='center'>
            <Link p={2} variant='nav' href='/'>
                Home
            </Link>
            <Box mx='auto' />
            <Link mx="10px" variant='nav' href='/help'>
                Help!
            </Link>
            <ColorButton
                onClick={e => {
                    setColorMode(colorMode === 'default' ? 'dark' : 'default')
                }}>
                {colorMode === 'default' ? 'Dark' : 'Light'}
            </ColorButton>
        </Flex>
    )
}
