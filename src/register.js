export const actionBySlug = {};
export const groupBySlug = {};

const unslugify = s =>
  s
    .replace(/[A-Z]/g, l => ` ${l.toLowerCase()}`)
    .replace(/-_/g, " ")
    .replace(/^./, l => l.toUpperCase());

const isMac = () => {
  const regexp = /Mac|iPod|iPhone|iPad/;
  return typeof window != "undefined" && regexp.test(window.navigator.platform);
};

const normalizeDisplay = s => {
  s = s.split(",")[0]; // only show first hotkey
  s = s.replace("mod", isMac() ? "cmd" : "ctrl");
  return s;
};

const shortDisplay = display =>
  display
    .replace(/shift ?\+ ?/gi, "⇧")
    .replace(/meta ?\+ ?/gi, "⌘")
    .replace(/control ?\+ ?/gi, "^");

const register = (...args) => {
  if (args.length === 1) {
    // register({...actions}) will assign actions to empty group
    register("", args[0]);
    return;
  }

  const [group_slug, action_map] = args;

  if (!groupBySlug[group_slug]) {
    groupBySlug[group_slug] = {
      slug: group_slug,
      name: unslugify(group_slug),
      actions: []
    };
  }
  const group = groupBySlug[group_slug];

  Object.entries(action_map).forEach(([slug, action]) => {
    if (typeof action === "string") {
      // shortcut: save: 'ctrl+s' => save: { keys: 'ctrl+s' }
      action = { keys: action };
    }

    // add sensible defaults for missing action props
    action.name = action.name || unslugify(slug);
    action.display = action.display || normalizeDisplay(action.keys);
    action.short_display = action.short_display || shortDisplay(action.display);

    // action is accessible both on registry && registry.groupBySlug
    actionBySlug[slug] = action;
    group.actions.push(action);
  });
};

Object.assign(register, { actionBySlug, groupBySlug });

export default register;
