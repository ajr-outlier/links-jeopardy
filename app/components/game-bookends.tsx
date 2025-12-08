import { Box, Button, Image, Stack, Title } from "@mantine/core";
import type { ReactNode } from "react";

interface GameBookendProps {
  children: ReactNode;
  button: { text: string; onClick: () => void };
  type: "start" | "end";
}

function GameBookend({ children, button, type }: GameBookendProps) {
  return (
    <Box bg="black" pos="relative" h="100vh">
      <Image src="/img/jeopardy-background.jpg" opacity={type === "start" ? 0.6 : 0.3} h="80vh" />
      <Stack
        justify="space-evenly"
        h="80vh"
        w="100%"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          textAlign: "center",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box>
          {children}
          <Image src="/img/jeopardy-logo.png" w={{ base: "90%", sm: "65%", lg: "40%" }} mx="auto" alt="jeopardy logo" />
        </Box>
        <Button color="#c000ae" size="xl" fz={32} w={275} mx="auto" onClick={button.onClick} radius="md">
          {button.text}
        </Button>
      </Stack>
      <Image src="/img/logo-banner.png" h="20%" />
    </Box>
  );
}

interface GameStartProps {
  title: string;
  onButtonClick: () => void;
}

export function GameStart({ title, onButtonClick }: GameStartProps) {
  return (
    <GameBookend button={{ text: "START GAME", onClick: onButtonClick }} type="start">
      <Title c="white" order={1} size={60} fw="normal" mb="md">
        {title.toUpperCase()}
      </Title>
    </GameBookend>
  );
}

interface GameEndProps {
  title: string;
  onButtonClick: () => void;
}

export function GameEnd({ title, onButtonClick }: GameEndProps) {
  return (
    <GameBookend button={{ text: "PLAY AGAIN", onClick: onButtonClick }} type="end">
      <Title c="white" order={2} size={100} fw="normal">
        THANKS FOR PLAYING!
      </Title>
      <Title c="white" size={60} fw="normal">
        {title.toUpperCase()}
      </Title>
    </GameBookend>
  );
}
