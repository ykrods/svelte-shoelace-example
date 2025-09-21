# memo

* shoelace のコンポーネントは slot が特定の要素(ボタンとか) であることを期待するので `<span slot="">` や `<div slot=""> でラップしても正常に動かない場合がある
* snippet の中で slot を使うと `slot_attribute_invalid_placement` のチェックが行われないのでこれを使う方法ももしかしたらあるかもしれない

  ```js
  <!-- workaround for `slot_attribute_invalid_placement` -->
  {#snippet tab(panel: string, label: string)}
    <SLTab slot="nav" {panel}>{label}</SLTab>
  {/snippet}
  <SLTabGroup>
    {@render tab("tab1", "Tab 1")}
    {@render tab("tab2", "Tab 2")}
  </SLTabGroup>
  ```
