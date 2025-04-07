import React from "react";
import {  themes, convert } from "@storybook/theming";
import { useParameter } from '@storybook/manager-api';

import Markdown  from "react-markdown";
import remarkGfm from "remark-gfm";
interface PanelContentProps {
}

export const PanelContent: React.FC<PanelContentProps> = (props) => {
  const paramsDescription =  useParameter<string>("description");

  const docs = useParameter<{ description: { story?: string; component?: string; } }>('docs')
  const storyDescription = docs && docs.description && docs.description.story;
  const componentDescription = docs && docs.description && docs.description.component;
  
  const description = paramsDescription || storyDescription || componentDescription || null;

  if (!description) return  null;

  return (
    (
      <div
        id="overview"
        title="Overview"
        color={convert(themes.normal).color.positive}
      >
        <div style={{padding: '1rem 2rem'}}>
          <Markdown remarkPlugins={[remarkGfm]}>{description}</Markdown>
        </div>
      </div>
    )
  )
};
