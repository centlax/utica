import type { Link } from "./link.js";

export interface Menu extends Link {
    menus?: Menu[];
}