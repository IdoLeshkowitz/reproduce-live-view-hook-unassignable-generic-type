import { Hook, HooksOptions } from "phoenix_live_view";

interface LinksInTab {
  x: string
}

const LinksInTab: Hook<LinksInTab> = {
  x: "x"
};

export const Hooks: HooksOptions = {
  LinksInTab
};
export default LinksInTab ;
