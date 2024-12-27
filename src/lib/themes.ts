export type Theme = {
  name: string;
  label: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    accent: string;
    muted: string;
  };
};

export const themes: Theme[] = [
  {
    name: "default",
    label: "Default",
    colors: {
      background: "0 0% 100%",
      foreground: "0 0% 3.9%",
      primary: "0 0% 9%",
      accent: "0 0% 96.1%",
      muted: "0 0% 96.1%",
    },
  },
  {
    name: "rose",
    label: "Rose Pink",
    colors: {
      background: "0 0% 100%",
      foreground: "340 50% 30%",
      primary: "340 82% 52%",
      accent: "340 30% 96%",
      muted: "340 20% 96%",
    },
  },
  {
    name: "serika",
    label: "Serika",
    colors: {
      background: "45 40% 95%",
      foreground: "45 10% 20%",
      primary: "45 90% 50%",
      accent: "45 30% 90%",
      muted: "45 20% 90%",
    },
  },
  {
    name: "shadow",
    label: "Shadow",
    colors: {
      background: "220 20% 10%",
      foreground: "220 10% 90%",
      primary: "220 70% 60%",
      accent: "220 20% 20%",
      muted: "220 15% 15%",
    },
  },
  {
    name: "matrix",
    label: "Matrix",
    colors: {
      background: "120 10% 5%",
      foreground: "120 100% 80%",
      primary: "120 100% 45%",
      accent: "120 30% 15%",
      muted: "120 20% 10%",
    },
  },
  {
    name: "coral",
    label: "Coral",
    colors: {
      background: "0 0% 100%",
      foreground: "16 100% 30%",
      primary: "16 90% 50%",
      accent: "16 30% 95%",
      muted: "16 20% 95%",
    },
  },
  {
    name: "ocean",
    label: "Ocean",
    colors: {
      background: "200 20% 98%",
      foreground: "200 80% 20%",
      primary: "200 90% 40%",
      accent: "200 30% 95%",
      muted: "200 20% 95%",
    },
  },
  {
    name: "forest",
    label: "Forest",
    colors: {
      background: "150 20% 95%",
      foreground: "150 80% 20%",
      primary: "150 90% 30%",
      accent: "150 30% 90%",
      muted: "150 20% 90%",
    },
  },
];