
const colors = {
  "blueMarine": (opac?: number) => typeof opac === 'number' ? `hsla(213, 96%, 18%, ${opac})` : "hsl(213, 96%, 18%)",
  "bluePurplish": (opac?: number) => typeof opac === 'number' ? `hsl(243, 100%, 62%, ${opac})` : "hsl(243, 100%, 62%)",
  "bluePastel": (opac?: number) => typeof opac === 'number' ? `hsl(228, 100%, 84%, ${opac})` : "hsl(228, 100%, 84%)",
  "blueLight": (opac?: number) => typeof opac === 'number' ? `hsl(206, 94%, 87%, ${opac})` : "hsl(206, 94%, 87%)",
  "redStrawberry": (opac?: number) => typeof opac === 'number' ? `hsl(354, 84%, 57%, ${opac})` : "hsl(354, 84%, 57%)",
  "greyCool": (opac?: number) => typeof opac === 'number' ? `hsl(231, 11%, 63%, ${opac})` : "hsl(231, 11%, 63%)",
  "greyLight": (opac?: number) => typeof opac === 'number' ? `hsl(229, 24%, 87%, ${opac})` : "hsl(229, 24%, 87%)",
  "whiteMagnolia": (opac?: number) => typeof opac === 'number' ? `hsl(217, 100%, 97%, ${opac})` : "hsl(217, 100%, 97%)",
  "whiteAlabaster": (opac?: number) => typeof opac === 'number' ? `hsl(231, 100%, 99%, ${opac})` : "hsl(231, 100%, 99%)",
};

const mediaMinWidth = '50rem';

export {
  colors,
  mediaMinWidth
};
