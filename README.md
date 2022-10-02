React TreeView is a **ReactJS** & **TypeScript** implementation of a tree-view like component, for displaying interactive **nested data**. The component is **fully customisable**, **easy-to-use** & as **extensible** as desired from the ground up, depending on the use cases required.

![Build status](https://github.com/jamiehighfield/react-tree-view/actions/workflows/node.js.yml/badge.svg)

View the [Live Demo](https://highfield.dev) of the library.

## Packages

Package information

### License

React TreeView is licensed under the MIT license. If you require different licensing that the MIT license does not provide for, please contact [jamie@dev.contact](mailto:jamie@dev.contact).

### Feature Development

Future development and roadmap

## Getting Started

### Props

The following properties are available to be applied to the `<TreeView>` component:

| Prop                      | Description                                                                                                  | Type                      | Required | Accepted Values                                                                                                                  |
|---------------------------|--------------------------------------------------------------------------------------------------------------|---------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------|
| `elementOuter Padding`    | The outer padding (margin) of each `<TreeNode>` component.                                                   | `Padding`                 | false    | e.g. `{   top: 0,   left: 0,   bottom: 0,   right: 0 }`                                                                          |
| `elementInner Padding`    | The inner padding (padding) of each `<TreeNode>` component.                                                  | `Padding`                 | false    | e.g. `{   top: 0,   left: 0,   bottom: 0,   right: 0 }`                                                                          |
| `imagePadding`            | The padding of the image in each `<TreeNode>` component.                                                     | `Padding`                 | false    | e.g. `{   top: 0,   left: 0,   bottom: 0,   right: 0 }`                                                                          |
| `textPadding`             | The padding of the text in each `<TreeNode>` component.                                                      | `Padding`                 | false    | e.g. `{   top: 0,   left: 0,   bottom: 0,   right: 0 }`                                                                          |
| `borderRadius`            | The radius of the border of each `<TreeNode>` component.                                                     | `Radius`                  | false    | e.g. `{   topLeft: 0,   topRight: 0,   bottomLeft: 0,   bottomRight: 0 }`                                                        |
| `fullRow Selection Mode`  | Whether or not the full row of each `<TreeNode>` component is highlighted.                                   | `FullRow Selection Modes` | false    | `FullRowSelectionModes.Content` or `FullRowSelectionModes.Level` or `FullRowSelectionModes.Full`                                 |
| `showCheckBoxes`          | Whether or not check boxes are shown in each `<TreeNode>` component.                                         | `boolean`                 | false    | `true` or `false`                                                                                                                |
| `showImages`              | Whether or not images are shown in each `<TreeNode>` component.                                              | `boolean`                 | false    | `true` or `false`                                                                                                                |
| `showChevrons`            | Whether or not chevrons are shown in each `<TreeNode>` component.                                            | `boolean`                 | false    | `true` or `false`                                                                                                                |
| `showActions`             | Whether or not actions are shown in each `<TreeNode>` component.                                             | `boolean`                 | false    | `true` or `false`                                                                                                                |
| `indent`                  | The indent of `<TreeNode>` components at each level of the tree.                                             | `integer`                 | false    | an `integer` value between `25` & `50` (inclusive)                                                                               |
| `gridLines`               | Whether or not grid lines are shown.                                                                         | `boolean`                 | false    | `true` or `false`                                                                                                                |
| `useWaitCursor`           | Whether or not a wait cursor is shown when `<TreeNode>` components are expanding.                            | `boolean`                 | false    | `true` or `false`                                                                                                                |
| `nonSelectable`           | Whether or not `<TreeNode>` components can be selected.                                                      | `boolean`                 | false    | `true` or `false`                                                                                                                |
| `clickBehavior`           | The behaviour when clicking a `<TreeNode>` component.                                                        | `Click Behavior`          | false    | `ClickBehavior.None` or `ClickBehavior.Select` or `ClickBehavior.Check` or `ClickBehavior.Expand` or `ClickBehavior.SelectCheck` |
| `uniqueSelection`         | Whether or not only one `<TreeNode>` component can be selected at once.                                      | `boolean`                 | false    | `true` or `false`                                                                                                                |
| `autoHideActions`         | Whether or not actions are auto-hidden until hovered by the pointer.                                         | `boolean`                 | false    | `true` or `false`                                                                                                                |
| `showActions OnNodeHover` | Whether or not actions can be shown by hovering the `<TreeNode>` component instead of just the actions area. | `boolean`                 | false    | `true` or `false`                                                                                                                |
| `autoCheck`               | Whether or not child `<TreeNode>` components are checked when their parent is checked.                       | `boolean`                 | false    | `true` or `false`                                                                                                                |

## Author, Contributors & Contributing

React TreeView was created by:

<a href="https://github.com/jamiehighfield/jamiehighfield/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jamiehighfield/jamiehighfield" />
</a>


If you wish to contribute to this project, please see [contributing.md](contributing.md). For more information, please contact [jamie@dev.contact](mailto:jamie@dev.contact).
