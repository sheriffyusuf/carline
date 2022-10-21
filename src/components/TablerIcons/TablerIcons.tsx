import { createIconSetFromIcoMoon } from "@expo/vector-icons";
// const glyphMap = { "icon-name": 1234, test: "∆" };
/* const TablerIcons = createIconSet(
  require("../../../assets/tabler_icons/tags.json"),
  "TablerIcons",
  "tabler-icons.ttf"
); */
const TablerIcons = createIconSetFromIcoMoon(
  require("../../../assets/tabler_icons/selection.json"),
  "TablerIcons",
  "tabler-icons.ttf"
);

export default TablerIcons;
