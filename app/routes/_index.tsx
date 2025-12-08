import { ActionIcon, Affix, Container, Dialog, Select, Stack } from "@mantine/core";
import { useDisclosure, useFullscreen } from "@mantine/hooks";
import { ArrowsIn } from "@phosphor-icons/react/dist/ssr/ArrowsIn";
import { ArrowsOut } from "@phosphor-icons/react/dist/ssr/ArrowsOut";
import { GearSix } from "@phosphor-icons/react/dist/ssr/GearSix";
import { useSearchParams } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";
import { useState } from "react";
import { GameBoard } from "../components/game-board";
import { GameEnd, GameStart } from "../components/game-bookends";
import { GameCategories } from "../components/game-categories";
import { CRITICAL_MINERALS_BOARD } from "../critical-minerals-game";

export const meta: MetaFunction = () => {
  return [{ title: "LiNKS Jeopardy!" }];
};

const GAME_STATES = ["PREGAME", "CATEGORIES", "INGAME", "POSTGAME"] as const;

type GameState = (typeof GAME_STATES)[number];

export default function Index() {
  const [searchParams] = useSearchParams();
  const isDevMode = !!searchParams.get("dev");
  const [devModeDialogOpen, { toggle: toggleDevModeDialog, close: closeDevModeDialog }] = useDisclosure(false);

  const board = CRITICAL_MINERALS_BOARD;
  const { ref: fullscreenRef, toggle: toggleFullscreen, fullscreen: isFullscreen } = useFullscreen();

  const [gameState, setGameState] = useState<GameState>("PREGAME");

  const gameTitle = "POWERING THE FUTURE: CRITICAL MINERALS";

  return (
    <>
      <Container fluid p={0} ref={fullscreenRef} mx="auto" pos="relative">
        {gameState === "PREGAME" && <GameStart title={gameTitle} onButtonClick={() => setGameState("CATEGORIES")} />}
        {gameState === "CATEGORIES" && <GameCategories board={board} setCategoriesEnd={() => setGameState("INGAME")} />}
        {gameState === "INGAME" && <GameBoard board={board} setGameEnd={() => setGameState("POSTGAME")} />}
        {gameState === "POSTGAME" && <GameEnd title={gameTitle} onButtonClick={() => setGameState("PREGAME")} />}
        <Affix position={{ top: 20, right: 20 }}>
          <ActionIcon size="xl" onClick={toggleFullscreen} variant="subtle" color="grey" aria-label="toggle fullscreen">
            {isFullscreen ? <ArrowsIn size={32} /> : <ArrowsOut size={32} />}
          </ActionIcon>
        </Affix>
        {isDevMode && (
          <>
            <Affix position={{ top: 20, left: 20 }}>
              <ActionIcon onClick={toggleDevModeDialog} variant="white" c="black">
                <GearSix />
              </ActionIcon>
            </Affix>
            <Dialog
              opened={devModeDialogOpen}
              withCloseButton={true}
              onClose={closeDevModeDialog}
              position={{ top: 20, left: 20 }}
            >
              <Stack>
                <Select
                  label="Game State"
                  data={GAME_STATES}
                  value={gameState}
                  onChange={(val) => setGameState(val as GameState)}
                  maw={300}
                />
              </Stack>
            </Dialog>
          </>
        )}
      </Container>
    </>
  );
}
