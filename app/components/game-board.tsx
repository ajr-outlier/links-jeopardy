import { Box, Button, Center, Grid, Image, Overlay, Stack, Text, Transition } from "@mantine/core";
import { type ReactNode, useEffect, useState } from "react";
import type { Board, Square } from "../game";

function squaresForGridLayout(board: Board): Square[] {
  const orderedSquares: Square[] = [];
  for (const squareValue of board.squareValues) {
    for (const categoryIndex of Array(board.categories.length).keys()) {
      const square = board.categories[categoryIndex].squares[squareValue];
      orderedSquares.push(square);
    }
  }
  return orderedSquares;
}

interface GameBoardProps {
  board: Board;
  setGameEnd: () => void;
}

export function GameBoard({ board, setGameEnd }: GameBoardProps) {
  const [answeredSquares, setAnsweredSquares] = useState<string[]>([]);

  const [openedQuestion, setOpenedQuestion] = useState<Square | null>(null);
  const [openedAnswer, setOpenedAnswer] = useState<Square | null>(null);

  const squareHasBeenOpened = (square: Square) => {
    return answeredSquares.some((answeredSquare) => answeredSquare === square.uuid);
  };
  const handleSquareClick = (square: Square) => {
    setOpenedQuestion(square);
  };
  const isSquareOpen = (square: Square) => {
    return openedQuestion?.uuid === square.uuid;
  };

  const isGameFinished = answeredSquares.length === board.categories.length * board.squareValues.length;

  useEffect(() => {
    if (isGameFinished) {
      setGameEnd();
      setAnsweredSquares([]);
      setOpenedQuestion(null);
      setOpenedAnswer(null);
    }
  }, [isGameFinished, setGameEnd]);

  return (
    <Grid bg="black" mx="auto" gutter="sm" p="xs" h="100vh">
      {board.categories.map((category) => {
        return (
          <GridSquare
            key={category.uuid}
            bg={"#010a78"}
            isCategory={true}
            height={`${100 / (board.squareValues.length + 1) - 1}vh`}
          >
            <Text c="white" fz={{ base: 18, md: 24, xl: 28 }} style={{ lineHeight: 1.2 }} fw={1000} ta="center">
              {category.title.toUpperCase()}
            </Text>
          </GridSquare>
        );
      })}

      {squaresForGridLayout(board).map((square) => {
        return (
          <GridSquare
            key={`${square.uuid}`}
            onClick={() => handleSquareClick(square)}
            disabled={squareHasBeenOpened(square)}
            bg={isSquareOpen(square) ? "#d7a04b" : "#010a78"}
            height={`${100 / (board.squareValues.length + 1)}vh`}
          >
            {!squareHasBeenOpened(square) && (
              <Text
                c={isSquareOpen(square) ? "#010a78" : "#d7a04b"}
                fz={{ base: 60, md: 80, xl: 90 }}
                ta="center"
                ff="Headoh"
                style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)" }}
              >
                ${square.value}
              </Text>
            )}
          </GridSquare>
        );
      })}
      <Transition mounted={!!openedQuestion} transition="scale" duration={750}>
        {(styles) => (
          <Overlay style={styles} color="#01a78" backgroundOpacity={1} zIndex={100}>
            {openedQuestion && (
              <OpenedQuestion
                square={openedQuestion}
                button={{
                  text: "CLICK TO REVEAL ANSWER",
                  onClick: () => {
                    setOpenedAnswer(openedQuestion);
                  },
                }}
              />
            )}
          </Overlay>
        )}
      </Transition>
      {openedAnswer && (
        <Overlay color="#01a78" backgroundOpacity={1} zIndex={200}>
          <OpenedAnswer
            square={openedAnswer}
            button={{
              text: "RETURN TO GAME BOARD",
              onClick: () => {
                setOpenedQuestion(null);
                setOpenedAnswer(null);
                setAnsweredSquares((prev) => [...prev, openedAnswer.uuid]);
              },
            }}
          />
        </Overlay>
      )}
    </Grid>
  );
}

function GridSquare({
  children,
  onClick,
  disabled,
  bg,
  isCategory,
  height,
}: {
  children: ReactNode;
  height: string;
  onClick?: () => void;
  disabled?: boolean;
  bg: string;
  isCategory?: boolean;
}) {
  return (
    <Grid.Col span={2} h={height} mb={isCategory ? 4 : undefined}>
      <Button
        onClick={onClick}
        disabled={disabled ?? true}
        p={5}
        bg={bg}
        w="100%"
        h="100%"
        radius={0}
        styles={{
          label: {
            height: "auto",
            whiteSpace: "normal",
            overflow: "visible",
          },
        }}
      >
        {children}
      </Button>
    </Grid.Col>
  );
}

function OpenedSquare({ children, button }: { children: ReactNode; button: { text: string; onClick: () => void } }) {
  return (
    <Center h="100vh" pos="relative">
      <Stack justify="space-between" h="100%" w="100%" p={{ base: 30, md: 50, xl: 100 }}>
        <Box>{children}</Box>
        <Button
          onClick={button.onClick}
          c="black"
          size="xl"
          fz={{ base: 20, md: 28, xl: 32 }}
          fw={800}
          variant="white"
          mx="auto"
          style={{ boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)" }}
        >
          {button.text}
        </Button>
      </Stack>
      <Image src="/img/links-logo-white.png" pos="absolute" style={{ bottom: 30, right: 30 }} w="20vh" fit="contain" />
    </Center>
  );
}

function OpenedQuestion({ square, button }: { square: Square; button: { text: string; onClick: () => void } }) {
  return (
    <OpenedSquare button={button}>
      <Text
        c="white"
        fz={{ base: 42, md: 56 }}
        fw={1000}
        ta="center"
        ff="ITC Korinna Std"
        style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)" }}
      >
        {square.question}
      </Text>
    </OpenedSquare>
  );
}

function OpenedAnswer({ square, button }: { square: Square; button: { text: string; onClick: () => void } }) {
  return (
    <OpenedSquare button={button}>
      <Stack gap="xl">
        <Text
          c="white"
          fz={{ base: 42, md: 56 }}
          fw={1000}
          ta="center"
          ff="ITC Korinna Std"
          style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)" }}
        >
          Solution:
        </Text>
        <Text
          c="white"
          fz={{ base: 42, md: 56 }}
          fw={1000}
          ta="center"
          ff="ITC Korinna Std"
          style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)" }}
        >
          {square.answer}
        </Text>
        <Text
          c="#d7a04b"
          fz={{ base: 60, md: 80, xl: 90 }}
          ta="center"
          ff="Headoh"
          style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)" }}
        >
          ${square.value}
        </Text>
      </Stack>
    </OpenedSquare>
  );
}
