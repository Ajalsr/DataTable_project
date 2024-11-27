const cleanName = (name) => {
    return name.replace(/Mrs.\s/gi, '');
}

export default cleanName

