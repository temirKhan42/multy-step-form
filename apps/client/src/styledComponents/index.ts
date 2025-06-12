import styled, {css} from "styled-components";
import { TFlex, PropsGrid, PropsOffset, PropsText } from "../core/types/style";

const textWrap = css`
  word-wrap: break-word;
  word-break: break-all;
`;
const text = css<PropsText>`
  margin: 0;
  padding: 0;
  font-size: ${({size}) => size ? size : 16}px;
  font-weight: ${({weight}) => weight ? weight : 400};
  color: ${({color}) => color ? color : '#000'};
  line-height: ${({lh}) => lh ? lh : '1.2'};
  cursor: ${({cursor}) => cursor ? cursor : 'default'};
  text-align: ${({align}) => align ? align : 'start'};
  letter-spacing: ${({lspace}) => lspace ? lspace : 'normal'}; //in pixels
  text-decoration: ${({decor}) => decor ? decor : 'none'};

  ${({withwrap = 'false'}) => withwrap === 'true' ? textWrap : ''};
`;

const grid = css<PropsGrid>`
  display: grid;
  grid-template-columns: ${({cols, areas}) => cols ? cols : areas ? 'none' : '1fr'};
  grid-template-rows: ${({rows}) => rows ? rows : 'auto'};
  gap: ${({gap}) => gap ? gap : '1rem'};
  align-items: ${({ai}) => ai ? ai : 'normal'};
  justify-content: ${({jc}) => jc ? jc : 'normal'};
  grid-template-areas: ${({areas}) => areas ? areas : 'none'};

  ${({areasname, areascount}) => areascount ? [...Array(Number.parseInt(areascount))].map(
    (_, i) => `
      &>*:nth-child(${i + 1}) {
        grid-area: ${areasname}${i + 1};
      }
    `
  ).join("") : ''};

  ${({areas}) => {
    return areas ? areas?.split(" ")
      ?.filter((name) => name !== '' && name !== '\n' && !name.includes('.'))
      ?.map((name) => {
        const findIndex = name.lastIndexOf("'");
        return name.startsWith("'") ? name.slice(1) : 
          findIndex > -1 ? name.slice(0, findIndex) : name;
        })
        .map((name, i) => `
          &>*:nth-child(${i + 1}) {
            grid-area: ${name};
          }
        `).join("") : '';
  }}
`;

const flex = css<TFlex>`
  display: flex;
  align-items: ${({ai}) => ai ? ai : 'normal'};
  gap: ${({gap}) => gap ? gap : '1rem'};
  flex-direction: ${({column}) => column ? 'column' : 'row'};
  justify-content: ${({jc}) => jc ? jc : 'normal'};
  flex-wrap: ${({wrap}) => wrap ? wrap : 'nowrap'};
`;

const offset = css<PropsOffset>`
  padding-top: ${({yy, top}) => yy ? yy : top ? top : '0rem'};
  padding-bottom: ${({yy, bottom}) => yy ? yy : bottom ? bottom : '0rem'};
  padding-left: ${({xx, left}) => xx ? xx : left ? left : '0rem'};
  padding-right: ${({xx, right}) => xx ? xx : right ? right : '0rem'};
`;

const Text = styled.p<PropsText>`
  ${text};
`;
const Grid = styled.div<PropsGrid>`
  ${grid};
  width: 100%;
`;
const Flex = styled.div<TFlex>`
  ${flex};
  width: 100%;
`;
const Offset = styled.div<PropsOffset>`
  ${offset};
  width: 100%;
`;
const TextOffset = styled(Text)<PropsOffset>`
  ${offset};
`;

export {
  Text,
  Grid,
  Flex,
  Offset,
  TextOffset,
  text,
  grid,
  flex,
  offset
};