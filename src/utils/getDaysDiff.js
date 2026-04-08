export const getDaysDiffFromNow = (date) => {
    const diffInMs = Math.abs(+(new Date()) - date);
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}