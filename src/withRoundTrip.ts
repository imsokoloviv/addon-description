import type {
  Renderer,
  PartialStoryFn as StoryFunction,
} from "@storybook/types";

export const withRoundTrip = (storyFn: StoryFunction<Renderer>) => {
  return storyFn();
};
