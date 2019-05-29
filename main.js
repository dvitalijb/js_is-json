function isJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        return false;
    }
}
