import React from 'react';
import { Code, ClipboardText, Settings, ChartLine } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  to: string;
}

function MainLink({ icon, color, label, to }: MainLinkProps) {
  return (
    <UnstyledButton
      component={Link}
      to={to}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <ChartLine size={16} />, color: 'blue', label: 'Overview', to: "overview" },
  { icon: <Code size={16} />, color: 'teal', label: 'Code Editor', to: "editor" },
  { icon: <ClipboardText size={16} />, color: 'violet', label: 'Leaderboards', to: "leaderboard" },
  { icon: <Settings size={16} />, color: 'grape', label: 'Account Details', to: "account" },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}