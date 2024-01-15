---
outline: deep
---

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

<script setup>
import { useData } from 'vitepress'
import Sku from '../.vitepress/demo/sku.vue'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

<Sku />

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
