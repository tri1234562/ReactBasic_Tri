const UpdateObject = (oldObject,updatedObject) => {
    return {
        ...oldObject,
        ...updatedObject,
    }
}

export default UpdateObject;