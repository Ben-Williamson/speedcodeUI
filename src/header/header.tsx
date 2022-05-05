import { Header, Title, ActionIcon, useMantineColorScheme } from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";

export default function AppHeader() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (
        <Header height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>

                <Title>SpeedCode</Title>
                <ActionIcon
                    style={{ marginLeft: "auto" }}
                    variant={colorScheme === "light" ? "outline" : "filled"}
                    size="lg"
                    radius="md"
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                >
                    {colorScheme === "light" ? <MoonStars size={20} /> : <Sun size={20} />}
                </ActionIcon>
            </div>
        </Header>
    )
}