import { useLocation, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../../hooks/core/const";
import { Button } from "@chakra-ui/react";

export const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        localStorage.setItem(ACCESS_TOKEN_KEY, "test")
        navigate(location?.state?.from?.pathname ?? '/app');
    }

    return (
        <div>
            <Button onClick={onSubmit}>Login</Button>
        </div>
    )
}
