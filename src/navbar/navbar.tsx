import { Navbar } from "@mantine/core";
import { User } from "./_user";
import { MainLinks } from "./_mainLinks";

export default function AppNavbar() {
    return (
        <Navbar p="md" width={{ sm: 200, lg: 300 }}>
            <Navbar.Section grow mt="md">
                <MainLinks />
            </Navbar.Section>
            <Navbar.Section>
                <User />
            </Navbar.Section>
        </Navbar>
    )
}