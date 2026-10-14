
## 2024-10-14 - Preventing Focus on Visually Hidden Off-Canvas Menus
**Learning:** Using `opacity: 0` and `pointer-events: none` successfully hides elements visually and prevents mouse interactions, but leaves the elements in the DOM's accessibility tree. This causes screen readers and keyboard tabbing (focus) to still land on the invisible links, creating a confusing experience where users interact with invisible items.
**Action:** When building custom off-canvas or fade-in menus, always use the `inert` attribute when the element is visually closed. The `inert` boolean attribute globally removes the entire subtree from the accessibility tree and prevents all focus events.
