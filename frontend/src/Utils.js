export const toPascalCase = (string) => {
    return string
        .replace(/(^\w|-\w)/g, clearAndUpper)
        .replace(/-/g, '');

    function clearAndUpper(text) {
        return text.replace(/-/, '').toUpperCase();
    }
};
