import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';
import rehypePrettyCode from 'rehype-pretty-code';
import { createCssVariablesTheme } from 'shiki'

const theme = createCssVariablesTheme()

const prettyCodeOptions = {
  theme,
  onVisitHighlightedLine(node) {
    node?.properties?.className?.push("highlighted");
  },
  onVisitHighlightedChars(node) {
    console.log(node);
    node?.properties?.className
      ? node.properties.className.push("highlighted-chars")
      : (node.properties.className = ["highlighted-chars"]);
  },
  tokensMap: {},
};

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    shikiConfig: {
      theme
    }
  },
  site: 'https://dopewevmond.github.io'
});
