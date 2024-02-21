import { Box, Button } from '@chakra-ui/react';
import { ACCESS_TOKEN_KEY } from '../../hooks/core/const'
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem(ACCESS_TOKEN_KEY)
        navigate('/login', { state: { from: location } })
    }
    return (
        <Box>
            <Button colorScheme='blue'  onClick={()=>logout()}>Logout</Button>
        </Box>
    )
}
