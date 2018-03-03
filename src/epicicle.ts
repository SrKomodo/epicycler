interface Epicicle {
  child?: Epicicle;
  offset?: number;
  period: number;
  size: number;
}

export default Epicicle;
