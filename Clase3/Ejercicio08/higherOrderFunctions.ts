const createMultiplier = (factor: number) : (num: number) => number => {
    return (num: number) => num * factor;
};
export default createMultiplier;
