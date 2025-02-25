<script lang="ts">
  import type { SlSelectionChangeEvent } from "@shoelace-style/shoelace";

  import Layout from "$src/layout/Layout.svelte";

  import { SLTree, SLTreeItem } from "$src/shoelace";

  let selected = $state('');

  type Item = {
    name: string
    props?: { expanded?: boolean, disabled?: boolean }
    children?: Item[]
  }

  const items: Item[] = [
    {
      name: "Item 1",
      props: { expanded: true },
      children: [
        {
          name: "Item 1-A",
          children: [
            { name: "Item 1-A-X" },
            { name: "Item 1-A-Y" },
            { name: "Item 1-A-Z" },
          ]
        },
        { name: "Item 1-B" },
        { name: "Item 1-C", props: { disabled: true }},
      ]
    },
    {
      name: "Item 2",
      children: [
        { name: "Item 2-A" },
        { name: "Item 2-B" },
        { name: "Item 2-C" },
      ]
    },
    { name: "Item 3" },
  ]

  function onSelectionChange(e: SlSelectionChangeEvent) {
    selected = e.detail.selection[0].dataset.key ?? '';
  }
</script>
{#snippet treeItem(item: Item)}
  <SLTreeItem {...item.props} key={item.name}>
    { item.name }
    {#if item.children}
      {#each item.children as child}
        {@render treeItem(child)}
      {/each}
    {/if}
  </SLTreeItem>
{/snippet}
<Layout>
  <h1>Tree</h1>
  <SLTree onSelectionChange={onSelectionChange}>
    
    {#each items as item}
      {@render treeItem(item)}
    {/each}
  </SLTree>

  selected: { selected }
</Layout>
