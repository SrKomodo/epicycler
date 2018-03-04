interface Epicycle {
  child?: Epicycle;
  offset?: number;
  period: number;
  size: number;
}

export default Epicycle;
