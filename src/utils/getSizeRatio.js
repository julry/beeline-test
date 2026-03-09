export function getSizeRatio(width, height, targetWidth, targetHeight) {
    const widthRatio = Math.min(width, targetWidth) / targetWidth
    const heightRatio = Math.min(height, targetHeight) / targetHeight

    return Math.max(0.5, Math.min(widthRatio, heightRatio) || 1);
}