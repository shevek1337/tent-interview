import Container from "../../atoms/Container/Container";
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";
import { Stack } from "../../atoms/Stack";

export const NavBar = () => {
  return (
    <Stack className="bg-primary-white w-full h-20 flex items-center mb-8">
      <Container>
        <Logo />
      </Container>
    </Stack>
  );
};
