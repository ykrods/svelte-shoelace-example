/**
 * This is an unofficial workaround. If you simply name the property `slot`,
 * it will be treated as a Svelte 4 slot, so you need to use an alias.
 * Additionally, to avoid the compiler's `slot_attribute_invalid_placement`
 * error, you need to pass the slot property to the web component using
 * spread syntax.
 */
export function slProps(props: Record<string, any>) {
  const r = (key: string) => (key === "sl-slot") ? "slot" : key;
  return Object.fromEntries(
    Object.entries(props).map(([ key, val ]) => [ r(key), val ])
  );
}
