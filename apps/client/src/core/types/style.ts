type TGlobalValues = "inherit" |
  "initial" |
  "revert" |
  "revert-layer" |
  "unset"

type TTextAlign = "start" |
  "end" |
  "left" |
  "right" |
  "center" |
  "justify" |
  "match-parent" |
  "-moz-center" |
  "-webkit-center" |
  TGlobalValues

type TFlexJC = "center" |
  "start" |
  "end" |
  "flex-start" |
  "flex-end" |
  "left" |
  "right" |
/* Normal alignment */
  "normal" |
/* Distributed alignment */
  "space-between" |
  "space-around" |
  "space-evenly" |
  "stretch" |
/* Overflow alignment */
  "safe center" |
  "unsafe center" |
  TGlobalValues


type TFlexAI = "normal" |
  "stretch" |
/* Positional alignment align-items does not take left and right values */
  "center" |
  "start" |
  "end" |
  "flex-start" |
  "flex-end" |
  "self-start" |
  "self-end" |
  "anchor-center" |
/* Baseline alignment */
  "baseline" |
  "first baseline" |
  "last baseline" | 
/* Overflow alignment (for positional alignment only) */
  "safe center" |
  "unsafe center" |
  TGlobalValues

type TFlexColumn = "row" |
  "row-reverse" |
  "column" |
  "column-reverse" |  
  TGlobalValues

type TCursor = "auto" |
  "pointer" |
  "zoom-out" |
  "zoom-in" |
  "help" |
  "wait" |
  "crosshair" |
  "not-allowed" |
  "grab" |
  "progress" | 
  TGlobalValues

type TTextDecor = "underline" |
  "overline" |
  "none" |
  TGlobalValues | string

type TFlexWrap = "nowrap" |
  "wrap" |
  "wrap-reverse" |
  TGlobalValues


export type PropsText = {
  size?: string; 
  color?: string; 
  weight?: string; 
  cursor?: TCursor; 
  align?: TTextAlign; 
  lh?: string;
  lspace?: string;
  decor?: TTextDecor;
  withwrap?: 'true'|'false'
}
export type PropsGrid = {
  gap?: string; 
  cols?: string; 
  rows?: string; 
  ai?: TFlexAI; 
  jc?: TFlexJC; 
  areas?: string;
  areasname?: string;
  areascount?: string;
}
export type TFlex = {
  gap?: string; 
  column?: TFlexColumn; 
  jc?: TFlexJC; 
  ai?: TFlexAI; 
  wrap?: TFlexWrap;
}
export type PropsOffset = {
  yy?: string; 
  xx?: string; 
  top?: string; 
  bottom?: string; 
  left?: string; 
  right?: string;
}