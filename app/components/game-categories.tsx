import { Box, Center, Overlay, Text, Transition } from "@mantine/core";
import { useInterval, useListState } from "@mantine/hooks";
import { useEffect } from "react";
import type { Board, Category } from "../game";

interface GameCategoriesProps {
  board: Board;
  setCategoriesEnd: () => void;
}

export function GameCategories({ board, setCategoriesEnd }: GameCategoriesProps) {
  const [mountedCategories, mountedCategoriesHandlers] = useListState<Category>();
  const interval = useInterval(() => {
    if (mountedCategories.length === board.categories.length) {
      setCategoriesEnd();
      return;
    }
    mountedCategoriesHandlers.append(board.categories[mountedCategories.length]);
  }, 3500);

  useEffect(() => {
    if (mountedCategories.length === 0) {
      mountedCategoriesHandlers.append(board.categories[0]);
    }
    interval.start();
    return interval.stop;
  }, [mountedCategories, board.categories, mountedCategoriesHandlers, interval]);

  const isCategoryMounted = (category: Category) => mountedCategories.some((c) => c.title === category.title);

  board.categories.map((category) => {
    category.title;
  });

  return (
    <Box pos="relative" h="100vh">
      {board.categories.map((category, idx) => {
        return (
          <Transition key={category.title} mounted={isCategoryMounted(category)} transition="scale" duration={1000}>
            {(styles) => (
              <Overlay style={styles} color="#01a78" backgroundOpacity={1} zIndex={100 + idx}>
                <Center h="100%">
                  <Text
                    c="white"
                    fz={100}
                    fw={1000}
                    ta="center"
                    ff="ITC Korinna Std"
                    style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)" }}
                  >
                    {category.title.toUpperCase()}
                  </Text>
                </Center>
              </Overlay>
            )}
          </Transition>
        );
      })}
    </Box>
  );
}
